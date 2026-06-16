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

Two more variables apply no matter which provider type or setup method you use:

| Variable                  | Default                | Description                                                                                                                                               |
|---------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `OIDC_FORCE_HTTPS`        | `false`                | Force HTTPS for OIDC callback URLs (required if behind reverse proxy)                                                                                     |
| `OIDC_ALLOW_REGISTRATION` | `false`                | Allows user creation via OIDC, GitHub, or LDAP sign in even when general registration is disabled, while still enforcing each provider's allowed-users list |

## Database Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_FILE_ENCRYPTION` | `true` | Enable SQLite database file encryption |

## Guacamole Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `ENABLE_GUACAMOLE` | `true` | Enable/disable Guacamole remote desktop support (`false` to disable) |
| `GUACD_HOST` | `localhost` | Guacamole daemon (guacd) hostname |
| `GUACD_PORT` | `4822` | Guacamole daemon (guacd) port |

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

## Frontend Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_BASE_PATH` | `/` | Base path for the web application. See [Reverse Proxy](/setup/reverse-proxy#changing-base-path) for details. |

## Notes

- **Auto-Generated Secrets**: Security keys (`JWT_SECRET`, `DATABASE_KEY`, `INTERNAL_AUTH_TOKEN`) are automatically generated on first startup and stored in `{DATA_DIR}/.env`. Do not manually set these unless restoring from backup.
- **Environment File Locations**:
  - Primary: `.env` in application root
  - Persistent: `{DATA_DIR}/.env` (auto-generated secrets stored here)
