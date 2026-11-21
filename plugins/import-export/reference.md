---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/import-export/reference"
custom_edit_url: null
plugin_id: "import-export"
plugin_version: "1.3.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `import-export.use` | user | Import hosts from files and export them. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `import-export.export`<br />Export hosts without secrets | The server | Read only |  |
| `import-export.ssh-config-import`<br />Import hosts from SSH config | The server | Changes | `content`, `overwrite` |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `hosts:export` | High | Export hosts with their secrets. Can read your hosts in full, including saved passwords and keys, and hand them out. Every export is written to the audit log. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `credentials:write` | Medium | Save new credentials. It can add passwords and keys to your saved credentials. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Uses | Version | Optional |
| --- | --- | --- |
| `object-storage.files` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/import-export/import-and-export-api).

## Platforms

Linux, Windows, macOS

