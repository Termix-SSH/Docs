---
title: Secure your server
description: What to turn on in your own Termix, and how sessions, alerts and the audit log help you.
---

# Secure your server

## Do these first

- Serve Termix over HTTPS. See [reverse proxy](/configure/reverse-proxy) or [HTTPS](/configure/https).
- Turn off Allow User Registration unless you want strangers to make accounts.
- Turn on a second factor with the [TOTP](/plugins/totp) or [Passkeys](/plugins/webauthn) plugin.
- Back up the data folder and keep the backup private. It holds the keys.
- Only install plugins you trust. Read what a plugin can do before you install it.
- Keep the server keys out of the data folder if you can. See [Data and keys](/security/data-and-keys#keys).

## Sessions

Every sign in makes a session. Admins see all of them in Settings, Sessions and can sign any of them out. How long a session lasts is set in Settings, General.

The database only keeps a hash of each session token, so a stolen copy of it holds no working sign ins. Ending a session also closes its open terminals and other live connections within a few seconds.

With the [Login Security](/plugins/login-security) plugin, every user sees their own sessions and API keys in Sessions and keys, with when each was last used, and can end them. Admins can sign everyone out at once there and revoke every API key. It can also alert people when their account signs in from a device it has not seen before.

API keys act as the user who owns them. A new key is read only and lasts 90 days unless you pick more. See [API keys](/guide/api-keys).

## Admin alerts

Every admin gets an alert for changes that matter when an admin account is taken over:

- a new admin, or a role change
- a plugin installed, updated, turned on or given access
- a new plugin registry
- a change to how people sign in
- a new API key
- a plugin revocation list that could not be checked

Alerts go through the [Alerts](/plugins/alerts) plugin. Set up a channel like email or ntfy, so they reach you outside Termix.

## Admin wait {#admin-wait}

On a server with two or more admins, dangerous changes can wait before they apply. The other admins get an alert and can cancel. This covers:

- making someone an admin
- turning off password login or a sign in plugin
- turning on, or giving access to, a plugin that can read saved logins or server secrets, run programs, act as other users or change sign in

It is off by default and does nothing with one admin. Turn it on in Admin wait from the [Login Security](/plugins/login-security) plugin, or set `TERMIX_ADMIN_HOLD_MINUTES` on the server. With the variable set, nobody can change it from inside Termix. Turning it off or making it shorter waits too.

## Audit log

Sign ins, changes to hosts, users and roles, plugin installs and more are written to the [audit log](/guide/audit-log). Each entry carries a hash of the one before it, so a changed or removed entry shows up. Termix checks the chain every hour and alerts every admin when it breaks. The log can also be sent to a SIEM.

## Web protections

These need Termix 26.11.2 or later.

- Headers. The server sends a strict Content-Security-Policy, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` and `X-Content-Type-Options`, with or without the bundled nginx. Over HTTPS it also sends HSTS for one year. A reverse proxy in front should pass these through and not add its own CSP.
- Cookies. The login cookie is HttpOnly and SameSite=Lax. Over HTTPS it is Secure and named `__Host-jwt`, so a site on another subdomain can't set or replace it.
- Rate limits. Sign ins, second factor checks, password resets, sign ups, API key creation, exports and imports are limited per address and per account. Too many tries answer `429` with a `Retry-After` header. The counts live in memory, so they start over when Termix restarts, and each Termix instance counts on its own. Behind a reverse proxy, set `TRUSTED_PROXIES` so Termix sees the real client address.
- Errors and logs. Error answers never include internal error text, stack traces or file paths. Logs mask API keys, tokens, passwords and private keys.

## Saved logins

Admins can turn off Allow saving passwords and keys in Settings, General. Nobody can then save a password or private key on a host or credential, and Termix asks for them when connecting. Hosts can still be shared. Logins already saved stay until someone removes them.

## Host keys

Termix saves each host's SSH key the first time you connect in a terminal and confirm it. Later connections must match. When a plugin, a schedule or the API connects to a host with no saved key and nobody is there to confirm, the connection is refused. Open a terminal to the host once to trust it.

An admin can turn on Trust new host keys without a prompt in [admin settings](/guide/admin-settings) to save the first key in that case instead. Each key trusted that way is written to the audit log. See [hosts](/guide/hosts).

## If something goes wrong

See [Recovery](/security/recovery) for a locked out admin or a taken over account. To report a problem in Termix itself, see [Advisories](/security/advisories#report-a-problem).
