# SSL / Let's Encrypt

Termix supports three methods for HTTPS:

1. Self-signed certificate (automatic, zero-config) - generates on startup, browser will show a security warning
2. Manual certificate - supply your own cert/key files
3. Let's Encrypt via ACME - trusted certificates issued automatically through the Admin panel

---

## Quick Start (Self-Signed)

:::warning
Self-signed certificates trigger a browser security warning. Use Let's Encrypt or a custom certificate for production.
:::

Set `ENABLE_SSL=true` in your environment and Termix will generate a self-signed certificate on first startup that renews automatically every year.

### Environment Variables

| Variable        | Default                    | Description                                             |
| --------------- | -------------------------- | ------------------------------------------------------- |
| `ENABLE_SSL`    | `false`                    | Enable/disable HTTPS                                    |
| `SSL_PORT`      | `8443`                     | Port for HTTPS connections                              |
| `SSL_DOMAIN`    | `localhost`                | Domain name used in the certificate CN                  |
| `SSL_CERT_PATH` | `/app/data/ssl/termix.crt` | Path to SSL certificate file                            |
| `SSL_KEY_PATH`  | `/app/data/ssl/termix.key` | Path to SSL private key file                            |

### Docker Compose with SSL

```yaml
services:
  termix:
    image: ghcr.io/lukegus/termix:latest
    container_name: termix
    restart: unless-stopped
    ports:
      - "8080:8080"
      - "8443:8443"
    volumes:
      - termix-data:/app/data
    environment:
      PORT: "8080"
      ENABLE_SSL: "true"
      SSL_PORT: "8443"
      SSL_DOMAIN: "termix.example.com"
      GUACD_HOST: "guacd"
    depends_on:
      - guacd

  guacd:
    image: guacamole/guacd:1.6.0
    container_name: guacd
    restart: unless-stopped

volumes:
  termix-data:
```

---

## Let's Encrypt (ACME) - Recommended

Termix includes a built-in Let's Encrypt integration accessible through Admin Settings > SSL / Let's Encrypt. It uses [Certbot](https://certbot.eff.org/) to issue and renew trusted certificates automatically.

### Requirements

- A public domain name pointing to your Termix host
- Either:
  - HTTP challenge: port 80 on your host must be reachable from the internet
  - DNS challenge (Cloudflare): a Cloudflare API token with `Zone:DNS:Edit` permission

### Step-by-Step Setup

1. Open Admin Settings (gear icon, top-right) and expand SSL / Let's Encrypt
2. Enter your domain (e.g. `termix.example.com`)
3. Enter your email for Let's Encrypt notifications
4. Choose a challenge type:
   - HTTP (webroot) - Termix serves the ACME challenge token over port 80. Requires that port 80 on your server is publicly accessible.
   - DNS (Cloudflare) - Certbot adds a TXT record via the Cloudflare API. Port 80 does not need to be open.
5. For Cloudflare DNS challenge: paste your API token (create one at Cloudflare > My Profile > API Tokens, with `Zone:DNS:Edit` scope for your domain)
6. Click Save Settings, then Issue / Renew Certificate
7. Once issued, enable SSL by setting `ENABLE_SSL=true` in your environment and restarting Termix

:::info Automatic Renewal
After the first issuance, rerun "Issue / Renew Certificate" to renew. Certbot uses `certonly` mode and Termix copies the new cert into place. You can automate this with a cron job or scheduled task.
:::

### HTTP Challenge: Port 80 Requirement

For the HTTP webroot challenge, Let's Encrypt contacts `http://your-domain/.well-known/acme-challenge/...`. Termix's nginx proxy serves this path from the ACME webroot directory automatically - you don't need a separate web server.

If your Termix instance runs behind a NAT router, forward port 80 to the host running Termix during the challenge, then you can close it afterwards (the certificate is valid for 90 days).

### DNS Challenge: Cloudflare Token

Create a scoped API token at [Cloudflare > My Profile > API Tokens](https://dash.cloudflare.com/profile/api-tokens):

- Permissions: `Zone > DNS > Edit`
- Zone Resources: include the specific zone for your domain

Paste the token into the Cloudflare API Token field in Admin Settings. The token is stored encrypted in Termix's database and only used when issuing or renewing certificates.

### After Issuance

The certificate files are placed at:

- `/app/data/ssl/termix.crt` (full chain)
- `/app/data/ssl/termix.key` (private key)

These are the same paths that `ENABLE_SSL=true` reads from. To activate HTTPS:

```yaml
environment:
  ENABLE_SSL: "true"
  SSL_PORT: "8443"
  SSL_DOMAIN: "termix.example.com"
```

Then restart your container. The certificate will be served immediately.

---

## Manual Certificate Setup

### Self-Signed (Development)

```bash
mkdir -p ./db/data/ssl

openssl genrsa -out ./db/data/ssl/termix.key 2048

openssl req -new -x509 \
  -key ./db/data/ssl/termix.key \
  -out ./db/data/ssl/termix.crt \
  -days 365 \
  -subj "/C=US/ST=State/L=City/O=Termix/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"

chmod 600 ./db/data/ssl/termix.key
chmod 644 ./db/data/ssl/termix.crt
```

### Custom Certificate (e.g. from your CA)

Copy your certificate files into the Termix data directory:

```bash
cp /path/to/fullchain.pem ./db/data/ssl/termix.crt
cp /path/to/privkey.pem   ./db/data/ssl/termix.key

chmod 600 ./db/data/ssl/termix.key
chmod 644 ./db/data/ssl/termix.crt
```

Then enable SSL:

```env
ENABLE_SSL=true
SSL_PORT=8443
SSL_DOMAIN=termix.example.com
```

---

## Using a Reverse Proxy Instead

If you already have a reverse proxy (nginx, Caddy, Traefik) handling TLS termination, you don't need Termix's built-in SSL. Leave `ENABLE_SSL=false` and point your proxy at Termix's HTTP port. See [Reverse Proxy](/setup/reverse-proxy) for configuration examples.

---

## Security Variables

| Variable       | Default        | Description                                              |
| -------------- | -------------- | -------------------------------------------------------- |
| `JWT_SECRET`   | Auto-generated | Secret key for JWT token signing - do not overwrite      |
| `DATABASE_KEY` | Auto-generated | Encryption key for the SQLite database - do not overwrite |

---

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page.
You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server for community support.
