---
title: Security
description: How Termix protects your data, and what you should do.
---

# Security

Report security problems privately through [GitHub security advisories](https://github.com/Termix-SSH/Termix/security/advisories/new), not in public issues.

## What you should do

- Serve Termix over HTTPS. See [reverse proxy](/configure/reverse-proxy) or [HTTPS](/configure/https).
- Turn off **Allow User Registration** unless you want strangers to make accounts.
- Turn on a second factor with the [TOTP](/plugins/totp) or [Passkeys](/plugins/webauthn) plugin.
- Back up the data folder and keep the backup private. It holds the keys.
- Only install plugins you trust. Read what a plugin can do before you install it.

## How data is stored

### Secrets

Passwords, SSH keys and other secrets are encrypted with AES-256-GCM before they are written to the database. Each user has their own data key. Each field gets its own key made from the user's data key, the record and the field name.

The data keys are wrapped with `ENCRYPTION_KEY`, a server key. That means an admin can reset a user's password without losing their data, and hosts can be shared. It also means anyone with the server's data folder can decrypt it. Guard the data folder.

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

A sign in makes a session. Admins see every session in **Settings**, **Sessions** and can sign any of them out. They set how long sessions last in **Settings**, **General**.

API keys act as the user who owns them. See [API keys](/guide/api-keys).

## Plugins

Plugins run inside the Termix server with the [capabilities](/develop/reference/capabilities) they ask for. Termix shows those before you install a plugin, and asks again if an update wants more.

A capability check stops a plugin from using SDK features it didn't ask for. It is not a sandbox. A plugin's code runs in the same process as Termix, so a plugin you install is code you trust.

Official plugins are signed. Set `TERMIX_REQUIRE_SIGNED_PLUGINS=true` to only allow signed plugins.

## Audit log

Sign ins, changes to hosts and users, plugin installs and more are written to the [audit log](/guide/audit-log). It can also be sent to a SIEM.
