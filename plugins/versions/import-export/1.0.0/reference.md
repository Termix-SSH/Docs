---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/import-export/v/1.0.0/reference"
custom_edit_url: null
plugin_id: "import-export"
plugin_version: "1.0.0"
plugin_latest: false
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `import-export.use` | user | Import hosts from files and export them. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `hosts:export` | High | Export hosts with their secrets. Can read your hosts in full, including saved passwords and keys, and hand them out. Every export is written to the audit log. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `credentials:write` | Medium | Save new credentials. It can add passwords and keys to your saved credentials. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Platforms

Linux, Windows, macOS

