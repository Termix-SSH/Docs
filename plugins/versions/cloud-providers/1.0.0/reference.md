---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/cloud-providers/v/1.0.0/reference"
custom_edit_url: null
plugin_id: "cloud-providers"
plugin_version: "1.0.0"
plugin_latest: false
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `cloud-providers.view` | admin, user | Open the Cloud tab and see your cloud accounts. |
| `cloud-providers.manage` | admin, user | Add cloud accounts, import instances as hosts and run syncs. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |

## Platforms

Linux, Windows, macOS

