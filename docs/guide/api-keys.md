---
title: API keys
description: Use the Termix API and CLI from scripts.
---

# API keys

An API key lets a script or the [CLI](/cli) use Termix as you.

## Make one

In **Settings**, **API keys**, press **New Key**. Give it a name and, if you want, an expiry date. Copy the key right away. It is only shown once.

Admins can also make keys for other users in **Settings**, **API keys** under **This server**, and revoke any key.

## Use it

Send it as a bearer token:

```bash
curl -H "Authorization: Bearer tmx_your_key" https://termix.example.com/host/db/host
```

A key has the same permissions as the user who owns it. It can't act as anyone else.

See the [API reference](/api) for every route. Each plugin's routes are listed under that plugin.

## Revoke

Press **Revoke** next to a key. It stops working at once.
