---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/uptime/reference"
custom_edit_url: null
plugin_id: "uptime"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Shortest check interval | number | `20` | In seconds. Monitors that log in over SSH never go below 60. |
| Default check interval | number | `60` | In seconds, for new monitors. |
| Keep history for | number | `90` | Days of daily uptime numbers and incidents. |
| Allow public status pages | boolean | `true` | Turn off to hide every status page. Push URLs keep working. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the panel with each terminal | boolean | `false` | Show the uptime panel when a terminal opens. |
| Panel side | select | `"right"` | Where the uptime panel opens. |
| Panel size | number | `360` | Width or height of the panel in pixels. |
| Show the edge button | boolean | `true` | A button on the terminal edge that opens the panel. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `uptime.view` | admin, user | See monitors, history and incidents. |
| `uptime.manage` | admin, user | Add and change monitors and maintenance windows. |
| `uptime.private-targets` | admin | Point monitors at LAN, Tailscale and other private addresses the Termix server can reach. |
| `uptime.run-commands` | admin | Add monitors that run a command on a host over SSH. |
| `uptime.publish` | admin | Make status pages anyone with the link can see. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `uptime.summary`<br />Uptime summary | The server | Read only |  |
| `uptime.monitors`<br />List monitors | The server | Read only |  |
| `uptime.host-monitors`<br />Monitors on this host | A host | Read only |  |
| `uptime.host-health`<br />Uptime | A host | Read only |  |
| `uptime.run`<br />Check a monitor now | The server | Read only | `monitor` |
| `uptime.pause`<br />Pause a monitor | The server | Changes | `monitor` |
| `uptime.resume`<br />Resume a monitor | The server | Changes | `monitor` |
| `uptime.add-host`<br />Add an uptime monitor | A host | Changes |  |

## Events

Automations can start when one of these happens.

| Event | What it means |
| --- | --- |
| `uptime.monitor-down` | A monitor went down |
| `uptime.monitor-up` | A monitor came back up |
| `uptime.cert-expiring` | A certificate is about to end |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `process:spawn` | High | Run programs on this machine. Programs run on the Termix server itself, not on your hosts. |
| `db:core-refs` | High | Read core account tables. Can query users, roles and hosts directly from the database. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:probe` | Medium | Check if ports answer. Can open a plain connection to any address from the server, to see if it is reachable. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `files:own` | Low | Store its own files. In its own folder on disk, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `uptime.access` | 1.0.0 | `uptime.view` |

## API

The plugin's HTTP routes are in the [API reference](/api/uptime/uptime-api).

## Platforms

Linux, Windows, macOS

