---
title: "Secret Sources"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/secret-sources"
description: "Pull host passwords and keys from 1Password when you connect instead of storing them in Termix."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Secret-Sources/edit/main/docs/index.md"
plugin_id: "secret-sources"
plugin_version: "1.0.0"
plugin_latest: true
---
Secret Sources lets a host's password or key live in 1Password instead of Termix. You write a reference like `op://Servers/web-1/password` in the host's password field, and Termix fetches the real secret each time you connect. It is never stored in Termix.

It works with a self-hosted [1Password Connect](https://developer.1password.com/docs/connect/) server.

## Before you start

Run a 1Password Connect server and make an access token for it with read access to the vaults you need. See the [1Password Connect guide](https://developer.1password.com/docs/connect/get-started/).

If Connect runs on your own network, an admin adds its address to **Private endpoint allowlist** in **Settings**, **Secret Sources**, one host per line. `localhost` and `host.docker.internal` are allowed already.

## Add a source

1. Install the plugin from the **Plugins** tab.
2. Open a host or credential in **Manage**. Next to the password and key fields is a **Secret sources** section.
3. Press **New source** and fill in a name, the **Connect server URL** and the **Connect access token**.
4. Press **Test**. It shows how many vaults it can see.
5. Save.

The token is stored encrypted on the server and is never shown again. Admins can turn on **Share with all users** to let everyone use a source.

## Use it

In a host's or credential's password or key field, type a reference instead of the secret:

```
op://<vault>/<item>/<field>
```

Like `op://Servers/web-1/password` or `op://Servers/deploy-key/private key`.

When you connect, Termix asks 1Password for the value and uses it. Results are cached for a minute.

Your own source is used first. If you don't have one, a shared one is.

## Troubleshooting

- **No secret source is configured.** Add one, or ask an admin to share one.
- **No token is stored for this secret source.** The owner opens the source, enters the token again and saves.
- **Blocked address.** Add the Connect server to the private endpoint allowlist.
