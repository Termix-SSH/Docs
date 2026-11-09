---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/hosts-config/reference"
custom_edit_url: null
plugin_id: "hosts-config"
plugin_version: "1.1.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Alert when the hosts file has problems | boolean | `true` | Send admins an alert when the hosts file cannot be read or some hosts are not applied. |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file. See [environment variables](/configure/environment-variables) for the ones core and other plugins read.

| Variable | Default | What it does |
| --- | --- | --- |
| `TERMIX_HOSTS_CONFIG` |  | Path to the hosts file (.yaml, .yml or .json). Unset means the plugin loads nothing and locks no hosts. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `hosts-config.manage` | admin | See the hosts file status and reload it. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `hosts-config.status`<br />Hosts file | The server | Read only |  |
| `hosts-config.reload`<br />Reload hosts file | The server | Changes |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `hosts:lock` | Medium | Manage hosts as read only. Hosts it manages can't be edited, deleted or reshared by anyone else. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/hosts-config/hosts-config-api).

## Platforms

Linux, Windows, macOS

