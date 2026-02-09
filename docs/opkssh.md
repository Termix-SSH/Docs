# OPKSSH (OpenPubkey SSH)

Checkout [OPKSSH on GitHub](https://github.com/openpubkey/opkssh) for OPKSSH setup and documentation.

Currently, Termix only supports OPKSSH with the Terminal, File Manager, and Docker Manager.

## Setup

If you didn't already, use the link above to install OPKSSH on all your SSH servers. Termix will automatically install OPKSSH within your instance.

**Step 1:**
Create an SSH host in the host manager with OPKSSH set as the authentication type.

**Step 2:**
Start an SSH terminal connection on that host. This will generate the OPKSSH config at the path it tells you in the dialog that opens upon connecting.

**Step 3:**
Edit the generated `config.yml` file. The config location depends on your deployment:
- **Development/Manual Compile**: `db/data/.opk/config.yml`
- **Docker**: `/app/data/.opk/config.yml` (mounted volume)

```yaml
providers:
  - alias: google
    issuer: https://accounts.google.com
    client_id: YOUR_CLIENT_ID
    client_secret: YOUR_CLIENT_SECRET
    scopes: openid email profile
    access_type: offline
    prompt: consent
    redirect_uris:
      - http://localhost:9999/login-callback
```

The `redirect_uris` field specifies where OPKSSH's internal listener binds. Use a free port like 9999. Termix automatically proxies OAuth callbacks from your browser to OPKSSH's internal listener.

See [OPKSSH config docs](https://github.com/openpubkey/opkssh/blob/main/docs/config.md) for provider issuer URLs and additional configuration.

**Step 4:**
Configure OAuth credentials with your identity provider (Google, GitHub, Microsoft, etc.).

**Authorized JavaScript Origins:**
- Development: `http://localhost:5173`
- Docker: `http://localhost:8080` (or your mapped port)
- Reverse Proxy: `https://termix.yourdomain.com`

**Authorized Redirect URIs:**

You need to add the Termix callback URL to your OAuth provider. The actual redirect happens at `/ssh/opkssh-callback`, but for OAuth configuration purposes, you only need to add the base callback path.

**Localhost (Development):**
- `http://localhost:5173/ssh/opkssh-callback`

**Docker:**
- `http://localhost:8080/ssh/opkssh-callback` (or your mapped port)

**Reverse Proxy:**
- `https://termix.yourdomain.com/ssh/opkssh-callback`

Copy the Client ID and Client Secret from your OAuth provider into your `config.yml`.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.