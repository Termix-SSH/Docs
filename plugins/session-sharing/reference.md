---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/session-sharing/reference"
custom_edit_url: null
plugin_id: "session-sharing"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Allow Session Sharing | boolean | `true` | Allow live terminal, RDP, VNC, and Telnet sessions to be shared instance-wide. Overrides every per-host sharing toggle when disabled. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Allow Session Sharing | boolean | `true` | Let live sessions on this host be shared via link or with other users |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file.

| Variable | Default | What it does |
| --- | --- | --- |
| `REDIS_URL` |  | Redis that several Termix servers share for meeting rooms, like redis://redis:6379. Not needed with one server. |
| `TERMIX_REDIS_PREFIX` | `termix:collab` | Prefix for the keys it writes in Redis. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `session-sharing.use` | admin, user | Share live sessions by link or with other users, and create and join collaboration rooms. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `db:core-refs` | High | Read core account tables. Can query users, roles and hosts directly from the database. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Needs: [ssh-terminal](/plugins/ssh-terminal) ^1.0.0.

Works better with: [remote-desktop](/plugins/remote-desktop) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `sessions.sharing` | 1.0.0 | `session-sharing.use` |

| Uses | Version | Optional |
| --- | --- | --- |
| `sessions.live` | ^1.0.0 | no |

## API

The plugin's HTTP routes are in the [API reference](/api/session-sharing/session-sharing-api).

## Platforms

Linux, Windows, macOS

