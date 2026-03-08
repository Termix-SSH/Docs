# Environment Variables

## Server Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4090` | HTTP server port. Must not fall within restricted range `30001–30005`. |
| `NODE_ENV` | `production` | Application environment (`production`, `development`, etc.) |
| `DATA_DIR` | `./db/data` | Directory for persistent data (database, SSL certs, encryption keys, OPKSSH binary) |

## SSL/TLS Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `SSL_ENABLED` | `false` | Enable automatic SSL certificate generation. See [SSL](/ssl) for details. |
| `SSL_PORT` | `8443` | HTTPS server port (only used when SSL_ENABLED=true) |
| `SSL_CERT_PATH` | `{DATA_DIR}/ssl/termix.crt` | Path to SSL certificate file |
| `SSL_KEY_PATH` | `{DATA_DIR}/ssl/termix.key` | Path to SSL private key file |
| `SSL_DOMAIN` | `localhost` | Domain name for SSL certificate generation |

## OIDC/OAuth Authentication

| Variable | Default | Description |
|----------|---------|-------------|
| `OIDC_CLIENT_ID` | - | OAuth provider client ID (required if using OIDC) |
| `OIDC_CLIENT_SECRET` | - | OAuth provider client secret (required if using OIDC) |
| `OIDC_ISSUER_URL` | - | OAuth provider issuer URL (e.g., `https://accounts.google.com`) |
| `OIDC_AUTHORIZATION_URL` | - | OAuth authorization endpoint URL |
| `OIDC_TOKEN_URL` | - | OAuth token endpoint URL |
| `OIDC_USERINFO_URL` | `""` | OAuth userinfo endpoint URL (optional) |
| `OIDC_IDENTIFIER_PATH` | `sub` | JSON path in userinfo response for user identifier |
| `OIDC_NAME_PATH` | `name` | JSON path in userinfo response for display name |
| `OIDC_SCOPES` | `openid email profile` | Space-separated OAuth scopes to request |
| `OIDC_ALLOWED_USERS` | `""` | Comma-separated list of allowed user identifiers/email patterns. Use `*` for all users, `@example.com` for domain wildcards, or leave empty to allow all. |
| `OIDC_FORCE_HTTPS` | `false` | Force HTTPS for OIDC callback URLs (required if behind reverse proxy) |

See [OIDC](/oidc#environment-variables) for complete setup instructions.

## Database Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_FILE_ENCRYPTION` | `true` | Enable SQLite database file encryption |

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
| `VITE_BASE_PATH` | `/` | Base path for the web application. See [Reverse Proxy](/reverse-proxy#changing-base-path) for details. |

## Notes

- **Auto-Generated Secrets**: Security keys (`JWT_SECRET`, `DATABASE_KEY`, `INTERNAL_AUTH_TOKEN`) are automatically generated on first startup and stored in `{DATA_DIR}/.env`. Do not manually set these unless restoring from backup.
- **Environment File Locations**:
    - Primary: `.env` in application root
    - Persistent: `{DATA_DIR}/.env` (auto-generated secrets stored here)