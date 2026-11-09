---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/network-devices/reference"
custom_edit_url: null
plugin_id: "network-devices"
plugin_version: "1.0.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `network-devices.view` | admin, user | Open the Network tab and see devices, ports and clients. |
| `network-devices.manage` | admin | Add devices, turn ports on and off, power cycle PoE and restart devices. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `network-devices.list-devices`<br />List network devices | The server | Read only |  |
| `network-devices.list-ports`<br />List ports of a device | The server | Read only | `device` |
| `network-devices.poll`<br />Read a network device | The server | Read only | `device` |
| `network-devices.set-port`<br />Turn a port on or off | The server | Changes | `device`, `port`, `state` |
| `network-devices.poe-cycle`<br />Power cycle PoE on a port | The server | Changes | `device`, `port` |
| `network-devices.reboot`<br />Restart a network device | The server | Destructive | `device` |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:probe` | Medium | Check if ports answer. Can open a plain connection to any address from the server, to see if it is reachable. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/network-devices/network-devices-api).

## Platforms

Linux, Windows, macOS

