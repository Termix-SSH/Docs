---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/process-manager/reference"
custom_edit_url: null
plugin_id: "process-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the Processes panel with terminals | boolean | `false` | Open the panel by itself on hosts that have it. |
| Panel side | select | `"right"` | Where the Processes panel opens beside a terminal. |
| Panel size | number | `360` | Width or height of the panel in pixels. |
| Show the edge button | boolean | `true` | Show a small button on the edge of the terminal to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Process Manager | boolean | `false` | Show this host's processes, pm2 and supervisor apps and logs. |
| Use sudo | boolean | `true` | Use root or sudo when the login user is not root. Needed to see and stop other users' processes. |
| Read only | boolean | `false` | Look but don't change anything. |
| Run pm2 as | string |  | The user that owns the pm2 apps. Leave empty for the login user. Needs root or sudo. |
| Show the side panel | boolean | `true` | Offer the Processes panel beside terminals on this host. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `process-manager.use` | admin, user | See processes and logs on hosts you can reach. Changing things also needs edit access to the host. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `process-manager.list-processes`<br />List processes | A host | Read only |  |
| `process-manager.list-apps`<br />List pm2 and supervisor apps | A host | Read only |  |
| `process-manager.signal-process`<br />Send a signal | One item on a host | Changes | `signal`, `expectedCommand` |
| `process-manager.kill-process`<br />Kill process | One item on a host | Destructive | `expectedCommand` |
| `process-manager.renice`<br />Change priority | One item on a host | Changes | `nice`, `expectedCommand` |
| `process-manager.app-start`<br />Start app | One item on a host | Changes |  |
| `process-manager.app-stop`<br />Stop app | One item on a host | Changes |  |
| `process-manager.app-restart`<br />Restart app | One item on a host | Changes |  |
| `process-manager.app-reload`<br />Reload app | One item on a host | Changes |  |
| `process-manager.app-delete`<br />Delete app | One item on a host | Destructive |  |
| `process-manager.app-flush-logs`<br />Clear app logs | One item on a host | Changes |  |
| `process-manager.tail-logs`<br />Read logs | A host | Read only | `source`, `target`, `fd`, `stream`, `lines`, `grep` |
| `process-manager.add-watch`<br />Add a watch | A host | Changes | `kind`, `target`, `rule`, `threshold`, `autoRestart` |
| `process-manager.remove-watch`<br />Remove a watch | A host | Changes | `id` |
| `process-manager.read-zombies`<br />Zombie processes | A host | Read only |  |
| `process-manager.read-busy`<br />Busy processes | A host | Read only |  |
| `process-manager.read-top-cpu`<br />Busiest process | A host | Read only |  |
| `process-manager.read-top-processes`<br />Top processes | A host | Read only |  |
| `process-manager.read-apps-down`<br />Apps down | A host | Read only |  |
| `process-manager.read-managers`<br />Process managers | A host | Read only |  |

## Events

Automations can start when one of these happens.

| Event | What it means |
| --- | --- |
| `process-manager.process-down` | A watched process is down |
| `process-manager.app-crashed` | A watched app is down |
| `process-manager.restart-loop` | An app keeps restarting |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/process-manager/process-manager-api).

## Platforms

Linux, Windows, macOS

