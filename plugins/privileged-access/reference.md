---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/privileged-access/reference"
custom_edit_url: null
plugin_id: "privileged-access"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Request lifetime (hours) | number | `24` | A request nobody decides in this time expires. |
| Alert on break glass access | boolean | `true` | Alert approvers when someone connects with break glass access. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Privileged host | boolean | `false` | SSH and remote desktop sessions to this host need approved access. |
| Approver roles | string |  | Role names, separated by commas, whose members may approve. Empty lets anyone with the approve permission decide. |
| Longest access (hours) | number | `4` | The most hours one request can ask for. |
| Ask for a reason | boolean | `true` | A request must say why access is needed. |
| Ask for a ticket | boolean | `false` | A request must name a ticket number. |
| Let background work through | boolean | `false` | Polling and other non interactive plugin connections skip the approval. Leave off to block every session without access. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `privileged-access.request` | admin, user | Ask for time limited access to privileged hosts. |
| `privileged-access.approve` | admin | Decide other people's access requests, end access early and read the report. |
| `privileged-access.bypass` | admin | Connect to privileged hosts without a request. Every use is audited and alerted. |
| `privileged-access.configure` | admin | Mark hosts as privileged and change who approves access to them |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `privileged-access.request`<br />Ask for privileged access | A host | Changes | `hours`, `reason`, `ticket` |
| `privileged-access.pending`<br />Access requests to decide | The server | Read only |  |
| `privileged-access.status`<br />Privileged access | A host | Read only |  |

## Events

Automations can start when one of these happens.

| Event | What it means |
| --- | --- |
| `privileged-access.requested` | Someone asked for access |
| `privileged-access.approved` | Access was approved |
| `privileged-access.bypassed` | Break glass access was used |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `hosts:connect-policy` | High | Decide who can connect. Can block or allow every SSH and remote desktop connection to any host. |
| `db:core-refs` | High | Read core account tables. Can query users, roles and hosts directly from the database. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `privileged-access.hosts` | 1.0.0 | `privileged-access.request` |

| Uses | Version | Optional |
| --- | --- | --- |
| `sessions.live` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/privileged-access/privileged-access-api).

## Platforms

Linux, Windows, macOS

