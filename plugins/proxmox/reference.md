---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/proxmox/reference"
custom_edit_url: null
plugin_id: "proxmox"
plugin_version: "1.3.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Alert on guest and node changes | boolean | `false` | Send an alert when a guest that was running stops, or a node goes offline. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `proxmox.guests` | admin, user | Start, stop and reboot VMs and containers on Proxmox nodes you can edit. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `proxmox.list-guests`<br />List Proxmox guests | A host | Read only |  |
| `proxmox.start-guest`<br />Start guest | One item on a host | Changes |  |
| `proxmox.shutdown-guest`<br />Shut down guest | One item on a host | Destructive |  |
| `proxmox.reboot-guest`<br />Reboot guest | One item on a host | Destructive |  |
| `proxmox.stop-guest`<br />Force stop guest | One item on a host | Destructive |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## API

The plugin's HTTP routes are in the [API reference](/api/proxmox/proxmox-api).

## Platforms

Linux, Windows, macOS

