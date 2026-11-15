---
title: API keys
description: Use the Termix API and CLI from scripts.
---

# API keys

An API key lets a script or the [CLI](/cli) use Termix as you.

## Make one

In Settings, API keys, press New Key. Give it a name, pick what it may do and, if you want, an expiry date. Copy the key right away. It is only shown once.

| Access             | What the key can do                                                   |
| ------------------ | --------------------------------------------------------------------- |
| Read only          | Read anything its user can read. It can't change anything.            |
| Actions, read only | List and run read only [actions](/cli/commands/actions), and use MCP. |
| Actions            | Run any action its user may run, and use MCP.                         |
| Full access        | Everything its user can do.                                           |

A key made without picking is read only and works for 90 days. Pick full access and never expires on purpose when a script needs it. Keys made before Termix 26.11.2 keep the access they had.

Admins can also make keys for other users in Settings, API keys under This server, and revoke any key.

## Use it

Send it as a bearer token:

```bash
curl -H "Authorization: Bearer tmx_your_key" https://termix.example.com/host/db/host
```

A key never has more permissions than the user who owns it. It can't act as anyone else.

See the [API reference](/api) for every route. Each plugin's routes are listed under that plugin.

## Revoke

Press Revoke next to a key. It stops working at once.

With the [Login Security](/plugins/login-security) plugin, everyone can see the keys made for them in Sessions and keys, with when each was last used, and revoke one or all of them.
