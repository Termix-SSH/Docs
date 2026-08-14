# Environment Variables

## Server Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4090` | HTTP server port. Must not fall within restricted range `30001–30005`. |
| `NODE_ENV` | `production` | Application environment (`production`, `development`, etc.) |
| `DATA_DIR` | `./db/data` | Directory for persistent data (database, SSL certs, encryption keys, OPKSSH binary) |
| `LOG_LEVEL` | `info` | Logging verbosity (`debug`, `info`, `warn`, `error`) |
| `LOG_TIMESTAMP_FORMAT` | locale format | Timestamp format for log output: `24h` (e.g. `14:58:45`), `iso` (e.g. `2026-04-25T14:58:45.000Z`), or omit for locale format (e.g. `2:58:45 PM`) |
| `SSH_AUTH_SOCK` | - | Default SSH agent socket used when a host enables SSH agent authentication without specifying its own socket path. Examples: `/run/user/1000/gnupg/S.gpg-agent.ssh` on Linux or `//./pipe/pageant.user.<id>` on Windows. The socket must be accessible inside the Termix process or container. |

## SSL/TLS Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `ENABLE_SSL` | `false` | Enable automatic SSL certificate generation. See [SSL](/features/networking/ssl) for details. |
| `SSL_PORT` | `8443` | HTTPS server port (only used when ENABLE_SSL=true) |
| `SSL_CERT_PATH` | `{DATA_DIR}/ssl/termix.crt` | Path to SSL certificate file |
| `SSL_KEY_PATH` | `{DATA_DIR}/ssl/termix.key` | Path to SSL private key file |
| `SSL_DOMAIN` | `localhost` | Domain name for SSL certificate generation |

## OIDC/OAuth Authentication

The normal way to add login providers is through Admin Settings, which supports OIDC, LDAP, GitHub, and Google providers side by side. See [SSO Providers](/features/authentication/sso-providers) for that. The variables below are a fallback for setting up a single generic OIDC provider through environment variables instead, and they only take effect when no OIDC provider has been added in Admin Settings yet.

| Variable                  | Default                | Description                                                                                                                                               |
|---------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `OIDC_CLIENT_ID`          | -                      | OAuth provider client ID (required if using OIDC)                                                                                                         |
| `OIDC_CLIENT_SECRET`      | -                      | OAuth provider client secret (required if using OIDC)                                                                                                     |
| `OIDC_ISSUER_URL`         | -                      | OAuth provider issuer URL (e.g., `https://accounts.google.com`)                                                                                           |
| `OIDC_AUTHORIZATION_URL`  | -                      | OAuth authorization endpoint URL                                                                                                                          |
| `OIDC_TOKEN_URL`          | -                      | OAuth token endpoint URL                                                                                                                                  |
| `OIDC_USERINFO_URL`       | `""`                   | OAuth userinfo endpoint URL (optional)                                                                                                                    |
| `OIDC_IDENTIFIER_PATH`    | `sub`                  | JSON path in userinfo response for user identifier                                                                                                        |
| `OIDC_NAME_PATH`          | `name`                 | JSON path in userinfo response for display name                                                                                                           |
| `OIDC_SCOPES`             | `openid email profile` | Space-separated OAuth scopes to request                                                                                                                   |
| `OIDC_ALLOWED_USERS`      | `""`                   | Comma-separated list of allowed user identifiers/email patterns. Use `*` for all users, `@example.com` for domain wildcards, or leave empty to allow all. |
| `OIDC_ADMIN_GROUP`        | `""`                   | OIDC group name whose members are synced as Termix admins on each login. Requires group claims in the token (e.g. request the `groups` scope).            |
| `OIDC_GROUP_CLAIM`        | `""`                   | Path in the token where group membership lives, used to check `OIDC_ADMIN_GROUP`                                                                          |
| `OIDC_ROLE_MAP`           | `""`                   | Comma/newline-separated `group:role` pairs (e.g. `devops-interns:devops-intern,devops-seniors:devops-senior`) mapping OIDC groups to Termix RBAC roles, synced on each login. See [OIDC](/features/authentication/oidc#mapping-groups-to-roles). |

Two more variables apply no matter which provider type or setup method you use:

| Variable                  | Default                | Description                                                                                                                                               |
|---------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `OIDC_FORCE_HTTPS`        | `false`                | Force HTTPS for OIDC callback URLs (required if behind reverse proxy)                                                                                     |
| `OIDC_ALLOW_REGISTRATION` | `false`                | Allows user creation via OIDC, GitHub, or LDAP sign in even when general registration is disabled, while still enforcing each provider's allowed-users list |

## Authentication Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `ALLOW_REGISTRATION` | (from Admin Settings) | Override the Admin Settings toggle for user registration. Set to `true` or `false` to lock the value regardless of what is configured in the UI. |
| `ALLOW_PASSWORD_LOGIN` | (from Admin Settings) | Override the Admin Settings toggle for password-based login. Set to `true` or `false` to lock the value. |
| `ALLOW_PASSWORD_RESET` | (from Admin Settings) | Override the Admin Settings toggle for password reset. Set to `true` or `false` to lock the value. |

## Trusted Proxy Authentication

Lets a reverse proxy in front of Termix handle the login. See [Trusted Proxy Authentication](/features/authentication/trusted-proxy) before turning this on.

| Variable | Default | Description |
|----------|---------|-------------|
| `TRUSTED_PROXY_AUTH_ENABLED` | `false` | Turn on proxy based login. |
| `TRUSTED_PROXY_AUTH_TRUSTED_PROXIES` | - | Comma separated addresses or CIDR ranges allowed to send auth headers. Required when enabled. |
| `TRUSTED_PROXY_AUTH_ROLE_MAP` | - | JSON mapping proxy roles to Termix roles, for example `{"admins":"admin"}`. Required when enabled. |
| `TRUSTED_PROXY_AUTH_USERNAME_HEADER` | `x-forwarded-username` | Header carrying the username. |
| `TRUSTED_PROXY_AUTH_ROLE_HEADER` | `x-forwarded-role` | Header carrying the role. |

## Audit Log Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `AUDIT_LOG_RETENTION_DAYS` | - | Days to keep audit log entries before they are cleaned up. |
| `AUDIT_LOG_MAX_ENTRIES` | - | Maximum number of audit log entries to keep. Oldest are removed first. |

## HashiCorp Vault Configuration

Used for SSH certificate signing through Vault. See [HashiCorp Vault SSH Signer](/features/authentication/vault).

| Variable | Default | Description |
|----------|---------|-------------|
| `VAULT_ADDR` | - | Address of your Vault server. |
| `VAULT_TOKEN` | - | Token Termix uses to authenticate with Vault. |
| `VAULT_SSH_MOUNT` | - | Mount path of the SSH secrets engine. |
| `VAULT_SSH_ROLE` | - | Vault role used to sign certificates. |

## Telemetry Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `ENABLE_TELEMETRY` | `true` | Enable the anonymous daily usage heartbeat. Set to `false` to disable telemetry entirely, including before the first launch. When set, this overrides and locks the Admin Settings toggle. |

## Database Configuration

Termix runs on SQLite by default and needs no setup. PostgreSQL and MySQL are also supported for self-hosted setups that need more than one process to reach the same data.

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_DIALECT` | `sqlite` | Database engine to use. One of `sqlite`, `postgres`, or `mysql`. |
| `DATABASE_URL` | - | Connection string, required when `DATABASE_DIALECT` is `postgres` or `mysql`. Not used by SQLite. The scheme has to match the dialect you set. |
| `DB_FILE_ENCRYPTION` | `true` | Enable SQLite database file encryption. SQLite only. |

The desktop app always uses SQLite, because it runs its own backend and cannot ship a database server with it.

## Guacamole Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `ENABLE_GUACAMOLE` | `true` | Enable/disable Guacamole remote desktop support (`false` to disable) |
| `GUACD_URL` | - | Guacamole daemon URL (e.g. `localhost:4822` or `tcp://guacd:4822`). Takes precedence over `GUACD_HOST`/`GUACD_PORT` when set. |
| `GUACD_HOST` | `localhost` | Guacamole daemon (guacd) hostname. Ignored when `GUACD_URL` is set. |
| `GUACD_PORT` | `4822` | Guacamole daemon (guacd) port. Ignored when `GUACD_URL` is set. |
| `GUACAMOLE_ENCRYPTION_KEY` | (derived from `JWT_SECRET`) | Custom 32-byte or 64-char hex encryption key for Guacamole tokens. Only needed if you need to share tokens across multiple instances. |
| `GUACD_TUNNEL_HOST` | - | Hostname guacd uses to reach back to Termix for jump/tunnel connections. Needed when guacd runs in its own container (e.g. `termix` in Docker Compose setups). |
| `GUACD_RECORDING_PATH` | `{DATA_DIR}/session_recordings/guacamole` | Path where guacd writes session recordings. Only needed when guacd runs in a separate container; must point at guacd's mount point for the shared recordings volume. |
| `GUACD_RECORDING_BACKEND_PATH` | `{DATA_DIR}/session_recordings/guacamole` | Path where the Termix backend reads session recordings from. Must be the backend's mount point for the same shared volume as `GUACD_RECORDING_PATH`. |

## Docker Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PUID` | `1000` | User ID to run the container process as |
| `PGID` | `1000` | Group ID to run the container process as |

## Proxy Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `http_proxy` / `HTTP_PROXY` | - | HTTP proxy URL for outbound HTTP connections |
| `https_proxy` / `HTTPS_PROXY` | - | HTTPS proxy URL for outbound HTTPS connections |
| `no_proxy` / `NO_PROXY` | `""` | Comma-separated hosts that should bypass proxy (e.g., `localhost,127.0.0.1,.example.com`) |

## CORS Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `CORS_ALLOWED_ORIGINS` | - | Comma-separated list of additional allowed CORS origins (e.g., `https://app.example.com,https://other.example.com`). Use `*` to allow all origins. Local and same-origin requests are always allowed. |

## Frontend Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_PATH` | `""` | Server-side base path prefix used when building OIDC callback URLs (e.g., `/termix`). Must match `VITE_BASE_PATH`. See [Reverse Proxy](/setup/reverse-proxy#changing-base-path) for details. |
| `VITE_BASE_PATH` | `/` | Base path for the web application (build-time variable). See [Reverse Proxy](/setup/reverse-proxy#changing-base-path) for details. |

## Other Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `SESSION_RECORDING_RETENTION_DAYS` | `30` | Days to keep terminal/Guacamole session recordings before cleanup (1-3650). Overridden by the Admin Settings retention value when that's set. |
| `SNIPPET_EXECUTION_TIMEOUT_SECONDS` | (no timeout) | Timeout for snippet execution jobs, in seconds. |
| `ALLOW_EMPTY_DATA_DIR` | `false` | Bypasses the startup safety check that blocks launching with an unexpectedly empty `DATA_DIR` when an existing database is found elsewhere. Only set this if you intend to start fresh. |

## Advanced Security Configuration

These variables control internal key derivation for OIDC token and WebAuthn credential encryption. They are optional and only needed in multi-instance deployments where you need keys to be consistent across nodes.

| Variable | Default | Description |
|----------|---------|-------------|
| `OIDC_SYSTEM_SECRET` | (internal default) | Secret used to derive per-user encryption keys for stored OIDC tokens. Set a strong random value if deploying multiple instances sharing the same database. |
| `WEBAUTHN_SYSTEM_SECRET` | (falls back to `OIDC_SYSTEM_SECRET`) | Secret used to derive per-user encryption keys for stored WebAuthn credentials. Defaults to `OIDC_SYSTEM_SECRET` if not set separately. |

## Notes

- **Auto-Generated Secrets**: Security keys (`JWT_SECRET`, `DATABASE_KEY`, `INTERNAL_AUTH_TOKEN`, `ENCRYPTION_KEY`) are automatically generated on first startup and stored in `{DATA_DIR}/.env`. Do not manually set these unless restoring from backup.
- **Environment File Locations**:
  - Primary: `.env` in application root
  - Persistent: `{DATA_DIR}/.env` (auto-generated secrets stored here)
