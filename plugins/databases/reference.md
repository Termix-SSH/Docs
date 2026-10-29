---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/databases/reference"
custom_edit_url: null
plugin_id: "databases"
plugin_version: "1.1.1"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the databases panel with a terminal | boolean | `false` | Show the databases panel when a terminal opens on a host that has it. |
| Databases panel side | select | `"right"` | Where the panel sits next to the terminal. |
| Databases panel size | number | `480` | Width, or height at the bottom, in pixels. |
| Databases panel edge button | boolean | `true` | Show a small button on the terminal edge to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Databases | boolean | `false` | Show the Databases tab for this host in its menu. |
| Panel beside the terminal | boolean | `true` | Offer a databases panel next to this host's SSH terminal. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `databases.use` | admin, user | Open the Databases tab and work with databases on hosts you can access. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |

## API

The plugin's HTTP routes are in the [API reference](/api/databases/databases-api).

## Platforms

Linux, Windows, macOS

