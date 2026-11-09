---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/ip-kvm/reference"
custom_edit_url: null
plugin_id: "ip-kvm"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Longest screen session (minutes) | number | `240` | A screen session ends after this long. Use 0 for no limit. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `ip-kvm.view` | admin, user | Open the KVM tab and see which KVMs are online and what power state they report. |
| `ip-kvm.power` | admin | Turn machines on and off and reset them through their KVM, or wake them with Wake-on-LAN. |
| `ip-kvm.console` | admin | See the screen of a machine and use its keyboard and mouse. |
| `ip-kvm.media` | admin | Mount and eject ISO images on a machine. |
| `ip-kvm.manage` | admin | Add, change and remove KVMs. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `ip-kvm.list-devices`<br />List KVMs | The server | Read only |  |
| `ip-kvm.poll`<br />Read a KVM now | The server | Read only | `device` |
| `ip-kvm.power-state`<br />Get power state | The server | Read only | `device` |
| `ip-kvm.power-on`<br />Power on | The server | Changes | `device` |
| `ip-kvm.graceful-shutdown`<br />Shut down | The server | Destructive | `device` |
| `ip-kvm.power-off`<br />Power off | The server | Destructive | `device` |
| `ip-kvm.reset`<br />Reset | The server | Destructive | `device` |
| `ip-kvm.wake`<br />Wake on LAN | The server | Changes | `device` |
| `ip-kvm.eject-media`<br />Eject image | The server | Changes | `device` |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `network:broadcast` | Medium | Send network broadcasts. It can send packets to devices on the local network, such as a Wake-on-LAN signal. |
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
| `ip-kvm.power` | 1.0.0 | `ip-kvm.power` |

## API

The plugin's HTTP routes are in the [API reference](/api/ip-kvm/ip-kvm-api).

## Platforms

Linux, Windows, macOS

