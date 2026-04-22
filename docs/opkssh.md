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
```

The `redirect_uris` field is optional and is NOT your Termix public URL. It lists the localhost ports OPKSSH binds its internal callback listener on. Omit it to use the OPKSSH defaults (`http://localhost:3000/login-callback`, `:10001`, `:11110`). If you set it, every entry must be a localhost URL — OPKSSH will reject non-localhost entries at runtime.

Termix automatically tells OPKSSH which public URL your OAuth provider should redirect back to (via `--remote-redirect-uri`), derived from the request origin. You do not configure this in `config.yml`.

See [OPKSSH config docs](https://github.com/openpubkey/opkssh/blob/main/docs/config.md) for provider issuer URLs and additional configuration.

**Step 4:**
Configure OAuth credentials with your identity provider (Google, GitHub, Microsoft, etc.).

**Authorized JavaScript Origins:**
- Development/Manual Compile: `http://localhost:5173`
- Docker: `http://localhost:8080` (or your mapped port)
- Reverse Proxy: `https://termix.yourdomain.com`

**Authorized Redirect URIs:**
Register the public Termix callback URL(s) matching your deployment(s) with your OAuth provider:

- Development/Manual Compile: `http://localhost:30001/host/opkssh-callback`
- Docker: `http://localhost:8080/host/opkssh-callback` (or your mapped port)
- Reverse Proxy: `https://termix.yourdomain.com/host/opkssh-callback`

These URLs are what the OAuth provider redirects the browser back to after sign-in. They do NOT go in `config.yml` — Termix supplies them automatically.

Copy the Client ID and Client Secret from your OAuth provider into your `config.yml`.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.