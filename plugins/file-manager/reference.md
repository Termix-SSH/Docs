---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/file-manager/reference"
custom_edit_url: null
plugin_id: "file-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Simultaneous File Transfers | number | `4` | How many files the side by side local/remote manager uploads or downloads at the same time. Lower this if your server limits SFTP channels. |
| Confirm before moving files to trash | boolean | `true` | Ask before moving remote files to trash. Permanent deletion still requires confirmation. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable File Manager | boolean | `true` | Browse and edit files on this host over SFTP. |
| Default Path | string |  |  |
| SCP Legacy Mode | boolean |  |  |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `file-manager.use` | admin, user | Browse, edit and transfer files over SFTP. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `files.sftp` | 1.0.0 | `file-manager.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/file-manager/file-manager-api).

## Platforms

Linux, Windows, macOS

