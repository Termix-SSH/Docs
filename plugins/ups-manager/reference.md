---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/ups-manager/reference"
custom_edit_url: null
plugin_id: "ups-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| UPS Manager | boolean | `false` | Read UPS devices from this host and show a UPS tab. |
| UPS read only | boolean | `false` | Block changes and commands on this host's UPS devices. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `ups-manager.use` | admin, user | See UPS status and, with edit access to a host, change devices and send commands. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `ups-manager.list`<br />List UPS devices | A host | Read only |  |
| `ups-manager.status`<br />Power status | A host | Read only |  |
| `ups-manager.charge`<br />Battery charge | A host | Read only |  |
| `ups-manager.runtime`<br />Runtime left | A host | Read only |  |
| `ups-manager.self-test`<br />Start battery self test | A host | Changes | `kind`, `source` |
| `ups-manager.beeper`<br />Set the UPS beeper | A host | Changes | `mode`, `source` |
| `ups-manager.calibrate`<br />Calibrate runtime | A host | Destructive | `source` |

## Events

Automations can start when one of these happens.

| Event | What it means |
| --- | --- |
| `ups-manager.on-battery` | UPS on battery |
| `ups-manager.power-restored` | UPS power restored |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `files:own` | Low | Store its own files. In its own folder on disk, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `ups-manager.access` | 1.0.0 | `ups-manager.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/ups-manager/ups-manager-api).

## Platforms

Linux, Windows, macOS

