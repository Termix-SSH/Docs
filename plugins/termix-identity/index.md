---
title: "Termix Identity"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/termix-identity"
description: "Publish your SSH public keys under a public handle and run your own SSH certificate authority."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Termix-Identity/edit/main/docs/index.md"
plugin_id: "termix-identity"
plugin_version: "1.0.0"
plugin_latest: true
---
Termix Identity gives you a public handle with a URL that serves your current SSH public keys, like GitHub's `github.com/<you>.keys`. Add your keys to any server with one command. It can also run your own SSH certificate authority.

## Claim a handle

Open **ID** from the sidebar. Pick a handle (lowercase letters, numbers, `-` and `_`) and create your Termix ID.

Your keys are now served at a URL like:

```
https://termix.example.com/plugin-api/termix-identity/u/yourhandle
```

Anyone can read it, like any public key. It never serves private keys.

## Publish keys

Add keys three ways:

- **Generate** a new Ed25519 key pair. The public key is published, the private key is downloaded to you, and you can save it as a [credential](/guide/credentials) at the same time.
- **Paste** a public key you already have.
- **Import** the public key of a credential saved in Termix.

Turn a published key off without removing it.

## Add your keys to a server

The panel shows a one-line command to run on a server:

```bash
curl -fsSL https://termix.example.com/plugin-api/termix-identity/u/yourhandle >> ~/.ssh/authorized_keys
```

It adds the keys you publish now. It doesn't update later. To keep a server in step, run it from cron, or use the certificate authority below.

## Certificate authority

Instead of copying keys to every server, trust your CA once and sign keys with it.

1. Turn on the CA in the **ID** panel.
2. Run the trust command it shows on each server, as root. It tells `sshd` to accept certificates from your CA.
3. Enter the user names the certificate is for (its principals), like `root`, and press **Certificate** next to a key to sign it. Only Ed25519 keys can be signed.

Certificates expire on their own. To cut off every certificate at once, rotate the CA and run the trust command again on each server. Until a server has the new CA key, it still accepts the old certificates.

The CA's public key is also served, at `/u/yourhandle/ca`.

Who can use it is set by the `termix-identity.use` permission. Admins and users have it at first.
