---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/workspaces/reference"
custom_edit_url: null
plugin_id: "workspaces"
plugin_version: "1.0.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `workspaces.use` | admin, user | Save, apply and manage saved tab layouts. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `workspaces.saved` | 1.0.0 | `workspaces.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/workspaces/workspaces-api).

## Platforms

Linux, Windows, macOS

