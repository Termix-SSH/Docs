---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/sync/reference"
custom_edit_url: null
plugin_id: "sync"
plugin_version: "1.2.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Alert when a site can not be reached | boolean | `true` | Send an alert when a remote site stops answering and when it comes back. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `sync.sites` | admin | Add, edit and remove remote Termix sites and open sessions on their hosts. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `sync.list-sites`<br />List remote sites | The server | Read only |  |
| `sync.refresh-site`<br />Refresh remote site | The server | Changes | `site` |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `sync:provide` | High | Run sync. It can answer all sync requests, so it sees the data that devices and servers sync. |
| `ssh:transport` | High | Choose how hosts are reached. It can carry the SSH connection to a host over its own route, so it sees everything sent to and from those hosts, passwords included. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `hosts:lock` | Medium | Manage hosts as read only. Hosts it manages can't be edited, deleted or reshared by anyone else. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/sync/sync-api).

## Platforms

Linux, Windows, macOS

