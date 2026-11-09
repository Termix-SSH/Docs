---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/out-of-band/reference"
custom_edit_url: null
plugin_id: "out-of-band"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Run ipmitool on the Termix server | boolean | `true` | When off, IPMI BMCs must use a relay host. Redfish and AMT are not affected. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `out-of-band.view` | admin, user | Open the Out-of-band tab and see power, health, sensors and logs. |
| `out-of-band.power` | admin | Turn machines on and off, power cycle them and choose the next boot device. |
| `out-of-band.console` | admin | Open the serial over LAN console of a machine. |
| `out-of-band.media` | admin | Mount and eject ISO images on a machine. |
| `out-of-band.manage` | admin | Add, change and remove BMCs, and clear their event logs. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `out-of-band.list-devices`<br />List BMCs | The server | Read only |  |
| `out-of-band.poll`<br />Read a BMC now | The server | Read only | `device` |
| `out-of-band.power-state`<br />Get power state | The server | Read only | `device` |
| `out-of-band.power-on`<br />Power on | The server | Changes | `device` |
| `out-of-band.graceful-shutdown`<br />Shut down | The server | Changes | `device` |
| `out-of-band.power-off`<br />Power off | The server | Destructive | `device` |
| `out-of-band.power-cycle`<br />Power cycle | The server | Destructive | `device` |
| `out-of-band.reset`<br />Reset | The server | Destructive | `device` |
| `out-of-band.set-boot-once`<br />Boot once from a device | The server | Changes | `device`, `boot`, `uefi` |
| `out-of-band.clear-log`<br />Clear event log | The server | Destructive | `device` |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `process:spawn` | High | Run programs on this machine. Programs run on the Termix server itself, not on your hosts. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `out-of-band.power` | 1.0.0 | `out-of-band.power` |

## API

The plugin's HTTP routes are in the [API reference](/api/out-of-band/out-of-band-api).

## Platforms

Linux, Windows, macOS

