---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/snippets/reference"
custom_edit_url: null
plugin_id: "snippets"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Collapse folders by default | boolean | `true` | Start each snippet folder collapsed when you open the Snippets panel. |
| Show commands | boolean | `true` | Show the first line of each snippet's command under its name. |
| Confirm before running | boolean | `false` | Ask before a command snippet runs in a terminal. |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file.

| Variable | Default | What it does |
| --- | --- | --- |
| `SNIPPET_EXECUTION_TIMEOUT_SECONDS` |  | Stop a snippet run on hosts after this many seconds. Unset means no limit. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `snippets.view` | user | See your own snippets, notes and shared snippets. |
| `snippets.create` | user | Create new snippets, notes and folders. |
| `snippets.edit` | user | Rename or change existing snippets and folders. |
| `snippets.delete` | user | Delete snippets and folders. |
| `snippets.share` | user | Share snippets and folders with other users or roles. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `db:core-refs` | High | Read core account tables. Can query users, roles and hosts directly from the database. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `snippets.access` | 1.0.0 | `snippets.view` |

## API

The plugin's HTTP routes are in the [API reference](/api/snippets/snippets-api).

## Platforms

Linux, Windows, macOS

