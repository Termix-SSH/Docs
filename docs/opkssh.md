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

**Step 3:**
Edit the generated `config.yml` file. The config location depends on your deployment:
- **Development/Manual Compile**: `db/data/.opk/config.yml`
- **Docker**: `/app/data/.opk/config.yml` (mounted volume)

**For localhost:**
```yaml
providers:
  - alias: google
    issuer: https://accounts.google.com
    client_id: YOUR_CLIENT_ID
    client_secret: YOUR_CLIENT_SECRET
    redirect_uris:
      - http://localhost:9285/login-callback
      - http://127.0.0.1:9285/login-callback
```

**For production:**
```yaml
providers:
  - alias: google
    issuer: https://accounts.google.com
    client_id: YOUR_CLIENT_ID
    client_secret: YOUR_CLIENT_SECRET
    redirect_uris:
      - https://termix.yourdomain.com/opkssh-callback
```

See [OPKSSH config docs](https://github.com/openpubkey/opkssh/blob/main/docs/config.md) for provider issuer URLs and additional configuration.

**Step 4:**
Configure OAuth credentials with your identity provider (Google, GitHub, Microsoft, etc.).

**Authorized JavaScript Origins:**
- Development/Manual Compilation: `http://localhost:5173` (frontend) and `http://localhost:4090` (backend)
- Docker: `http://localhost:8080` (or your mapped port)
- Reverse Proxy: `https://termix.yourdomain.com`

**Authorized Redirect URIs:**

Add the same URIs you put in your `config.yml` redirect_uris:
- Localhost: `http://localhost:9285/login-callback` and `http://127.0.0.1:9285/login-callback`
- Production: `https://termix.yourdomain.com/opkssh-callback`

Copy the Client ID and Client Secret from your OAuth provider into your `config.yml`.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
