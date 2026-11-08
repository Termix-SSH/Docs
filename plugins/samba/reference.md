---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/samba/reference"
custom_edit_url: null
plugin_id: "samba"
plugin_version: "1.0.1"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the shares panel with new terminals | boolean | `false` | Show the shares panel beside every SSH terminal that has Samba on. You can still open and close it from the button on the right edge. |
| Shares panel side | select | `"right"` | Where the shares panel sits next to a terminal. |
| Shares panel size | number | `380` | Width in pixels, or height when it is at the bottom. You can also drag its edge. |
| Show the panel button | boolean | `true` | Show a small button on the right edge of a terminal that opens the shares panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Samba shares | boolean | `false` | Show the Samba Shares tab for this host in its menu. |
| Show shares panel in terminals | boolean | `true` | Let the shares panel open beside this host's SSH terminal. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `samba.use` | admin, user | Manage Samba shares, users and permissions on hosts you can edit. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `operations:provide` |  |  |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/samba/samba-shares-api).

## Platforms

Linux, Windows, macOS

