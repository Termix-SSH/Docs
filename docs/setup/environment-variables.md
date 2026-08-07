# Environment Variables

## Server Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4090` | HTTP server port. Must not fall within restricted range `30001–30005`. |
| `NODE_ENV` | `production` | Application environment (`production`, `development`, etc.) |
| `DATA_DIR` | `./db/data` | Directory for persistent data (database, SSL certs, encryption keys, OPKSSH binary) |
| `LOG_LEVEL` | `info` | Logging verbosity (`debug`, `info`, `warn`, `error`) |
| `LOG_TIMESTAMP_FORMAT` | locale format | Timestamp format for log output: `24h` (e.g. `14:58:45`), `iso` (e.g. `2026-04-25T14:58:45.000Z`), or omit for locale format (e.g. `2:58:45 PM`) |

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

## Telemetry Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `ENABLE_TELEMETRY` | `true` | Enable the anonymous daily usage heartbeat. Set to `false` to disable telemetry entirely, including before the first launch. When set, this overrides and locks the Admin Settings toggle. |

## Database Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_FILE_ENCRYPTION` | `true` | Enable SQLite database file encryption |

## Guacamole Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `ENABLE_GUACAMOLE` | `true` | Enable/disable Guacamole remote desktop support (`false` to disable) |
| `GUACD_URL` | - | Guacamole daemon URL (e.g. `localhost:4822` or `tcp://guacd:4822`). Takes precedence over `GUACD_HOST`/`GUACD_PORT` when set. |
| `GUACD_HOST` | `localhost` | Guacamole daemon (guacd) hostname. Ignored when `GUACD_URL` is set. |
| `GUACD_PORT` | `4822` | Guacamole daemon (guacd) port. Ignored when `GUACD_URL` is set. |
| `GUACAMOLE_ENCRYPTION_KEY` | (derived from `JWT_SECRET`) | Custom 32-byte or 64-char hex encryption key for Guacamole tokens. Only needed if you need to share tokens across multiple instances. |
| `GUACD_TUNNEL_HOST` | - | Hostname guacd uses to reach back to Termix for jump/tunnel connections. Needed when guacd runs in its own container (e.g. `termix` in Docker Compose setups). |
| `GUACD_RECORDING_PATH` | `{DATA_DIR}/session_recordings/guacamole` | Path where guacd writes session recordings. Only needed when guacd runs in a separate container — must point at guacd's mount point for the shared recordings volume. |
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
