---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/credential-tools/reference"
custom_edit_url: null
plugin_id: "credential-tools"
plugin_version: "1.0.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `credential-tools.use` | user | Generate and check SSH keys and copy a public key to a host. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/credential-tools/credential-tools-api).

## Platforms

Linux, Windows, macOS

