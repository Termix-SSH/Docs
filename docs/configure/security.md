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

Never change a key on an install that has data. Termix can't open data made with the old one.

## Sessions

A sign in makes a session. Admins see every session in Settings, Sessions and can sign any of them out. They set how long sessions last in Settings, General. The database keeps only a hash of each session token, so a copy of it holds no working sign ins. Ending a session also closes its open terminals and other live connections within a few seconds.

API keys act as the user who owns them. See [API keys](/guide/api-keys).

## Plugins

Plugins ask for [capabilities](/develop/reference/capabilities). Termix shows those before you install a plugin, and asks again if an update wants more.

From Termix 26.11.2 each plugin's server code runs in its own process, not inside the Termix server:

- It can read its own files and nothing else. It can't open the database, the keys or another plugin's data.
- It opens no network connections and starts no programs unless it was given the capability for that.
- It reaches Termix only through calls Termix checks against its capabilities and the user it acts for. Saved passwords and keys stay in the server unless the plugin may read credentials.
- In the Docker image each plugin also runs as its own Linux user. With the `NET_ADMIN` capability added to the container, a plugin that may not open connections is also blocked by a firewall rule.
- A plugin process that crashes, hangs or uses too much memory or CPU is restarted. If it keeps crashing it is turned off.

The desktop app runs each plugin in its own process too, with none of the app's settings or keys in its environment, and every call to the app is checked the same way. It can't limit what files a plugin reads or which programs it starts, because Electron doesn't apply Node's permission limits to these processes. On the desktop, only install plugins you trust.

A plugin made for an older Termix can't run in its own process. Official ones keep working only when an admin turns on Run without isolation on the plugin's page, which lets it run inside the server with the same reach as Termix. Plugins that were on before the upgrade start with it on, and the plugins page lists them. Community plugins made for an older Termix don't run.

| Variable                     | Default | What it does                                                                                      |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `TERMIX_PLUGIN_IDLE_MINUTES` | `10`    | A plugin that only serves pages stops after this long unused and starts again on the next request |
| `TERMIX_PLUGIN_ALWAYS_ON`    |         | Plugin ids that never stop when idle                                                              |
| `TERMIX_PLUGIN_MEMORY_MB`    | `256`   | Memory limit for each plugin process                                                              |
| `TERMIX_PLUGIN_CPU_LIMIT`    | `80`    | Percent of one CPU core a plugin may use for a minute straight                                    |

Official plugins are signed. Set `TERMIX_REQUIRE_SIGNED_PLUGINS=true` to only allow signed plugins.

## What's in a release

Each Termix release lists the server's dependencies in a CycloneDX SBOM. The Docker image has it at `/app/sbom.cdx.json`, and the GitHub release has it as `termix_sbom.cdx.json`. Feed it to a scanner like Grype or Trivy to check an install for known issues.

## Audit log

Sign ins, changes to hosts and users, plugin installs and more are written to the [audit log](/guide/audit-log). It can also be sent to a SIEM.
