---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/fleets/reference"
custom_edit_url: null
plugin_id: "fleets"
plugin_version: "1.0.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `fleets.view` | user | See fleets, their members and inventory. |
| `fleets.manage` | user | Create, edit and delete fleets, change membership, and share fleets with other users or roles. |
| `fleets.execute` | user | Run commands and package actions across a fleet, and transfer files to and from its member hosts. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Works better with: [snippets](/plugins/snippets) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `fleets.access` | 1.0.0 | `fleets.view` |

## API

The plugin's HTTP routes are in the [API reference](/api/fleets/fleets-api).

## Platforms

Linux, Windows, macOS

