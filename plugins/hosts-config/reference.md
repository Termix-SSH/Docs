---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/hosts-config/reference"
custom_edit_url: null
plugin_id: "hosts-config"
plugin_version: "1.0.0"
plugin_latest: true
---
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

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `hosts:lock` | Medium | Manage hosts as read only. Hosts it manages can't be edited, deleted or reshared by anyone else. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/hosts-config/hosts-config-api).

## Platforms

Linux, Windows, macOS

