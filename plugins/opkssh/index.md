---
title: "OPKSSH"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/opkssh"
description: "Connect to hosts with short-lived OpenPubkey SSH certificates after signing in with your identity provider."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-OPKSSH/edit/main/docs/index.md"
plugin_id: "opkssh"
plugin_version: "1.0.0"
plugin_latest: true
---
OPKSSH lets you connect to hosts with short-lived SSH certificates from [OpenPubkey](https://github.com/openpubkey/opkssh). You sign in with your identity provider, like Google, Microsoft or your own Keycloak, and Termix gets a certificate that lasts 24 hours. No passwords or long-lived keys on your hosts.

Termix ships a pinned, checksum verified copy of `opkssh`, so there is nothing to install on the Termix server.

## Before you start

- **Each host** needs OPKSSH installed and set up to trust your identity provider and your user. Follow the [OPKSSH install guide](https://github.com/openpubkey/opkssh#getting-started).
- **An OAuth client** at your identity provider, with a client ID and secret.

## Set it up

1. Install the plugin from the **Plugins** tab.
2. Open **Settings**, **OPKSSH** and copy the **Redirect URI**. It looks like `https://termix.example.com/plugin-api/opkssh/callback`. Register it as an allowed redirect URI with every identity provider you use.
3. Connect to an OPKSSH host once (see below). Termix writes a starter config file the first time.
4. Edit the config file. In Docker it is `/app/data/plugin-data/opkssh/config.yml`. Add your provider:

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

   See the [OPKSSH config docs](https://github.com/openpubkey/opkssh/blob/main/docs/config.md) for other providers.

Leave `redirect_uris` out. In OPKSSH it only lists localhost ports for its own listener. Termix gives your identity provider the public Redirect URI itself.

## Use it on a host

1. Open the host in **Manage**.
2. Set **Authentication Method** to **OPKSSH** and save.
3. Connect. Termix asks you to sign in. Press **Sign in with** your provider (or **Open Browser to Authenticate**), sign in, and the connection carries on. Finish within five minutes, or the sign in times out and you can try again.

The certificate is kept for 24 hours, so you sign in about once a day. It works for the terminal, file manager, Docker and every other plugin that connects over SSH.

## Troubleshooting

- **The config file can't be written.** In Docker, make sure `/app/data` is a volume the container's user can write.
- **The provider says the redirect URI is wrong.** Register the exact **Redirect URI** from settings, including the scheme. Behind a reverse proxy, make sure it sends `X-Forwarded-Proto`.
- **The host refuses the certificate.** Check the host's OPKSSH policy lists your email and provider.
