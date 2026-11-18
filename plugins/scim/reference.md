---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/scim/reference"
custom_edit_url: null
plugin_id: "scim"
plugin_version: "1.0.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `scim.manage` | admin | Add, change and remove the identity providers that create and update Termix accounts. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `users:write` | High | Create and change user accounts. It can add users and change their roles. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `users:read` | Medium | See usernames and roles. Never password hashes, never two factor state. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/scim/scim-provisioning-api).

## Platforms

Linux, Windows, macOS

