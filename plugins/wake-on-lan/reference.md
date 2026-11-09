---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/wake-on-lan/reference"
custom_edit_url: null
plugin_id: "wake-on-lan"
plugin_version: "1.2.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Status check interval | number | `60` | Seconds between status checks. Checks through a relay host use SSH each time. |
| Allow commands on the Termix server | boolean | `false` | Let saved ping, wake and shutdown commands run on the Termix server. Only users with the Use the Termix server permission can save them. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Power | boolean | `false` | Show this host on the Power tab. |
| MAC address | string |  | The MAC address of the network port that wakes this host. |
| Broadcast address | string |  | The subnet broadcast address to send the packet to. Leave blank for 255.255.255.255. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `wake-on-lan.send` | admin, user | Wake a host from the Power tab, its menu or an automation. |
| `wake-on-lan.shutdown` | admin, user | Shut down a host or put it to sleep. |
| `wake-on-lan.scan` | admin, user | Look for machines from an SSH host you can connect to. |
| `wake-on-lan.server-commands` | admin | Save commands that run on the Termix server, and scan from it. This can run anything the server can. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `wake-on-lan.wake`<br />Wake machine | A host | Changes |  |
| `wake-on-lan.shutdown`<br />Shut down machine | A host | Changes |  |
| `wake-on-lan.sleep`<br />Put machine to sleep | A host | Changes |  |
| `wake-on-lan.power-state`<br />Power state | A host | Read only |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `process:spawn` | High | Run programs on this machine. Programs run on the Termix server itself, not on your hosts. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `network:broadcast` | Medium | Send network broadcasts. It can send packets to devices on the local network, such as a Wake-on-LAN signal. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:probe` | Medium | Check if ports answer. Can open a plain connection to any address from the server, to see if it is reachable. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Works better with: [out-of-band](/plugins/out-of-band) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `wake-on-lan.send` | 1.0.0 | `wake-on-lan.send` |

| Uses | Version | Optional |
| --- | --- | --- |
| `out-of-band.power` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/wake-on-lan/wake-on-lan-api).

## Platforms

Linux, Windows, macOS

