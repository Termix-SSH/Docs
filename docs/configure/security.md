---
title: Security
description: How Termix protects your data, and what you should do.
---

# Security

Report security problems privately through [GitHub security advisories](https://github.com/Termix-SSH/Termix/security/advisories/new), not in public issues.

## What you should do

- Serve Termix over HTTPS. See [reverse proxy](/configure/reverse-proxy) or [HTTPS](/configure/https).
- Turn off Allow User Registration unless you want strangers to make accounts.
- Turn on a second factor with the [TOTP](/plugins/totp) or [Passkeys](/plugins/webauthn) plugin.
- Back up the data folder and keep the backup private. It holds the keys.
- Only install plugins you trust. Read what a plugin can do before you install it.

## How data is stored

### Secrets

Passwords, SSH keys and other secrets are encrypted with AES-256-GCM before they are written to the database. Each user has their own data key. Each field gets its own key made from the user's data key, the record and the field name.

The data keys are wrapped with `ENCRYPTION_KEY`, a server key. That means an admin can reset a user's password without losing their data, and hosts can be shared. It also means anyone with the server's data folder can decrypt it. Guard the data folder.

### Turn off saved logins

Admins can turn off Allow saving passwords and keys in Settings, General. Nobody can then save a password or private key on a host or credential, and Termix asks for them when connecting. Hosts can still be shared. Logins already saved stay until they are removed. Passwords and keys a linked desktop pushes are dropped on the server. Hosts kept on the device only are not touched.

### The database file

With SQLite, the whole database file is also encrypted on disk with `DATABASE_KEY`. Termix decrypts it into memory when it starts and writes it back encrypted. Turn this off with `DB_FILE_ENCRYPTION=false` only if the disk is already encrypted.

### Passwords

Account passwords are hashed with bcrypt.

## Keys {#keys}

Termix makes four keys on first boot and saves them in `DATA_DIR/.env`:

| Key                   | What it protects                  |
| --------------------- | --------------------------------- |
| `JWT_SECRET`          | Sign in sessions.                 |
| `DATABASE_KEY`        | The SQLite file.                  |
| `ENCRYPTION_KEY`      | Every user's data key.            |
| `INTERNAL_AUTH_TOKEN` | Calls the server makes to itself. |

To keep them out of the data folder, give them as environment variables or files (`JWT_SECRET_FILE` and so on, for Docker or Kubernetes secrets). Set `TERMIX_REQUIRE_EXTERNAL_SECRETS=true` to make Termix refuse to start unless all four come from outside.

Never just replace a key on an install that has data. Termix can't open data made with the old one. Rotate it instead, see [rotate keys](#rotate-keys).

### How the keys are used

- `ENCRYPTION_KEY` wraps each user's data key with AES-256-GCM, using a key made from it with HKDF and the user id. Secrets that belong to the server (SSO client secrets, plugin secrets, linked server tokens) are sealed with it directly, also AES-256-GCM.
- Each secret field is encrypted with AES-256-GCM under a key made with HKDF from the user's data key, a random salt and the field.
- `DATABASE_KEY` encrypts the whole SQLite file with AES-256-GCM and a new IV on every save.
- `JWT_SECRET` signs session tokens with HS256.

## Rotate keys {#rotate-keys}

These need Termix 26.11.2 or later. Back up the data folder first.

### JWT secret

An admin can call `POST /encryption/regenerate-jwt`. Termix makes a new secret in `DATA_DIR/.env` and signs everyone out. If `JWT_SECRET` comes from an environment variable or a file, change it there and restart; everyone signs in again.

### Encryption key

If the key is in `DATA_DIR/.env`, an admin can call `POST /encryption/rotate-key`. Termix makes a new key, keeps the old one as `ENCRYPTION_KEY_PREVIOUS`, re-wraps every user's data key and re-seals every stored secret. Sessions stay signed in.

If `ENCRYPTION_KEY` comes from an environment variable or a file:

1. Set `ENCRYPTION_KEY_PREVIOUS` (or `ENCRYPTION_KEY_PREVIOUS_FILE`) to the old key and `ENCRYPTION_KEY` to a new one, 64 hex characters (`openssl rand -hex 32`).
2. Restart Termix. At start it moves everything to the new key and logs when nothing uses the old one any more.
3. Remove `ENCRYPTION_KEY_PREVIOUS` and restart.

Several old keys can be listed, comma separated. With PostgreSQL or MySQL, values plugins keep in JSON columns are not re-sealed at start; they still open with the old key, so keep `ENCRYPTION_KEY_PREVIOUS` set until you have checked your plugins work without it.

### Database key

Set `DATABASE_KEY_PREVIOUS` to the old key and `DATABASE_KEY` to a new one, then restart. Termix opens the file with the old key and saves it with the new one at start. Then remove `DATABASE_KEY_PREVIOUS`.

Old backups stay encrypted with the old keys. Keep the old keys with them, or make a new backup after rotating.

## Web protections

These need Termix 26.11.2 or later.

- Headers: the server sends a strict Content-Security-Policy (no inline scripts, no plugins like Flash, no framing by other sites), `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` and `X-Content-Type-Options`, with or without the bundled nginx. Over HTTPS it also sends HSTS for one year. A reverse proxy in front should pass these headers through and not add its own CSP.
- Cookies: the login cookie is HttpOnly and SameSite=Lax. Over HTTPS it is Secure and named `__Host-jwt`, so a site on another subdomain can't set or replace it.
- Rate limits: sign ins, second factor checks, password resets, sign ups, API key creation, exports and imports are limited per address and per account. Too many tries answer `429` with a `Retry-After` header. Too many bad API keys from one address are refused for 10 minutes. With several servers behind one load balancer each counts on its own. Behind a reverse proxy, set `TRUSTED_PROXIES` so Termix sees the real client address.
- Errors and logs: error answers never include internal error text, stack traces or file paths. Logs mask API keys, tokens, passwords and private keys.

## Sessions

A sign in makes a session. Admins see every session in Settings, Sessions and can sign any of them out. They set how long sessions last in Settings, General. The database keeps only a hash of each session token, so a copy of it holds no working sign ins.

API keys act as the user who owns them. See [API keys](/guide/api-keys).

## Plugins

Plugins run inside the Termix server with the [capabilities](/develop/reference/capabilities) they ask for. Termix shows those before you install a plugin, and asks again if an update wants more.

A capability check stops a plugin from using SDK features it didn't ask for. It is not a sandbox. A plugin's code runs in the same process as Termix, so a plugin you install is code you trust.

Official plugins are signed. Set `TERMIX_REQUIRE_SIGNED_PLUGINS=true` to only allow signed plugins.

## Audit log

Sign ins, changes to hosts and users, plugin installs and more are written to the [audit log](/guide/audit-log). It can also be sent to a SIEM.
