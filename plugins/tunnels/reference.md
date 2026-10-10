---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/tunnels/reference"
custom_edit_url: null
plugin_id: "tunnels"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable tunnels | boolean | `false` | Set up SSH tunnels through this host. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `tunnels.use` | admin, user | Start, stop and watch SSH tunnels, and save client tunnel presets. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `db:core-refs` | High | Read core account tables. Can query users, roles and hosts directly from the database. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `tunnels.access` | 1.0.0 | `tunnels.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/tunnels/tunnels-api).

## Platforms

Linux, Windows, macOS

