---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/wireguard/reference"
custom_edit_url: null
plugin_id: "wireguard"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the WireGuard panel with new terminals | boolean | `false` | Show the WireGuard panel beside every SSH terminal that has WireGuard on. You can still open and close it from the button on the right edge. |
| WireGuard panel side | select | `"right"` | Where the WireGuard panel sits next to a terminal. |
| WireGuard panel size | number | `380` | Width in pixels, or height when it is at the bottom. You can also drag its edge. |
| Show the panel button | boolean | `true` | Show a small button on the right edge of a terminal that opens the WireGuard panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| WireGuard | boolean | `false` | Show the WireGuard tab for this host in its menu. |
| Show WireGuard panel in terminals | boolean | `true` | Let the WireGuard panel open beside this host's SSH terminal. |
| Alert when an interface is down | boolean | `true` | Send an alert when an interface that starts at boot is not active. Checked when the WireGuard status is read. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `wireguard.use` | admin, user | Manage WireGuard interfaces and clients on hosts you can edit. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `wireguard.list-interfaces`<br />List WireGuard interfaces | A host | Read only |  |
| `wireguard.down`<br />WireGuard interfaces down | A host | Read only |  |
| `wireguard.start`<br />Start WireGuard interface | One item on a host | Changes |  |
| `wireguard.stop`<br />Stop WireGuard interface | One item on a host | Destructive |  |
| `wireguard.restart`<br />Restart WireGuard interface | One item on a host | Changes |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## API

The plugin's HTTP routes are in the [API reference](/api/wireguard/wireguard-api).

## Platforms

Linux, Windows, macOS

