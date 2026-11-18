---
title: Data and keys
description: How Termix stores secrets, the four server keys, and how to rotate them.
---

# Data and keys

## How data is stored {#how-data-is-stored}

- Secrets. Passwords, SSH keys and other secrets are encrypted with AES-256-GCM before they reach the database. Each user has their own data key, and each field gets its own key made from that data key, the record and the field name. A stored secret only opens for the record it belongs to.
- The database file. With SQLite, the whole file is also encrypted on disk with `DATABASE_KEY`. Termix decrypts it into memory at start and writes it back encrypted. Turn this off with `DB_FILE_ENCRYPTION=false` only if the disk is already encrypted.
- Account passwords are hashed with bcrypt.
- Session tokens and API keys are stored as hashes.

Every user's data key is wrapped with `ENCRYPTION_KEY`, a key the server holds. That is why an admin can reset a user's password without losing their data, and why hosts can be shared. It also means anyone with the server's data folder and its keys can decrypt everything. Guard both.

## Keys {#keys}

Termix makes four keys on first start and saves them in `DATA_DIR/.env`:

| Key                   | What it protects                  |
| --------------------- | --------------------------------- |
| `JWT_SECRET`          | Sign in sessions.                 |
| `DATABASE_KEY`        | The SQLite file.                  |
| `ENCRYPTION_KEY`      | Every user's data key.            |
| `INTERNAL_AUTH_TOKEN` | Calls the server makes to itself. |

To keep them out of the data folder, give them as environment variables or files (`JWT_SECRET_FILE` and so on, for Docker or Kubernetes secrets). Set `TERMIX_REQUIRE_EXTERNAL_SECRETS=true` and Termix refuses to start unless all four come from outside.

Never just replace a key on an install that has data. Termix can't open data made with the old one. Rotate it instead.

### How each key is used

- `ENCRYPTION_KEY` wraps each user's data key with AES-256-GCM, using a key made from it with HKDF and the user id. Secrets that belong to the server, like SSO client secrets and linked server tokens, are sealed with it directly.
- Each secret field is encrypted with AES-256-GCM under a key made with HKDF from the user's data key, a random salt and the field.
- `DATABASE_KEY` encrypts the whole SQLite file with AES-256-GCM and a new IV on every save.
- `JWT_SECRET` signs session tokens with HS256.
- Each plugin seals its own secrets with a key of its own, so one plugin can't open another's.

## Rotate keys {#rotate-keys}

These need Termix 26.11.2 or later. Back up the data folder first.

### JWT secret

An admin can call `POST /encryption/regenerate-jwt`. Termix makes a new secret in `DATA_DIR/.env` and signs everyone out.

If `JWT_SECRET` comes from an environment variable or a file, change it there and restart. Everyone signs in again.

### Encryption key

If the key is in `DATA_DIR/.env`, an admin can call `POST /encryption/rotate-key`. Termix makes a new key, keeps the old one as `ENCRYPTION_KEY_PREVIOUS`, re-wraps every user's data key and re-seals every stored secret. Nobody is signed out.

If `ENCRYPTION_KEY` comes from an environment variable or a file:

1. Set `ENCRYPTION_KEY_PREVIOUS` (or `ENCRYPTION_KEY_PREVIOUS_FILE`) to the old key and `ENCRYPTION_KEY` to a new one, 64 hex characters (`openssl rand -hex 32`).
2. Restart Termix. At start it moves everything to the new key and logs when nothing uses the old one any more.
3. Remove `ENCRYPTION_KEY_PREVIOUS` and restart.

You can list several old keys, comma separated.

With PostgreSQL or MySQL, values that plugins keep in JSON columns are not re-sealed at start. They still open with the old key, so keep `ENCRYPTION_KEY_PREVIOUS` set until you have checked your plugins work without it.

### Database key

Set `DATABASE_KEY_PREVIOUS` to the old key and `DATABASE_KEY` to a new one, then restart. Termix opens the file with the old key and saves it with the new one. Then remove `DATABASE_KEY_PREVIOUS`.

### Old backups

Old backups stay encrypted with the old keys. Keep the old keys with them, or make a new backup after rotating.

## What's in a release

Each Termix release lists the server's dependencies in a CycloneDX SBOM. The Docker image has it at `/app/sbom.cdx.json`, and the GitHub release has it as `termix_sbom.cdx.json`. Feed it to a scanner like Grype or Trivy to check an install for known issues.
