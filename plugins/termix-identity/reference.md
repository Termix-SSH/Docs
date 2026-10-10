---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/termix-identity/reference"
custom_edit_url: null
plugin_id: "termix-identity"
plugin_version: "1.0.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `termix-identity.use` | admin, user | Claim a public handle, publish SSH keys and run a certificate authority. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `credentials:write` | Medium | Save new credentials. It can add passwords and keys to your saved credentials. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/termix-identity/termix-identity-api).

## Platforms

Linux, Windows, macOS

