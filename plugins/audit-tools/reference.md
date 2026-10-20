---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/audit-tools/reference"
custom_edit_url: null
plugin_id: "audit-tools"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Collector URL | string |  | Every audit entry is posted here as one line of JSON. Leave empty to turn forwarding off. |
| Bearer token | secret |  | Sent with each entry in the Authorization header. Optional. |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file. See [environment variables](/configure/environment-variables) for the ones core and other plugins read.

| Variable | Default | What it does |
| --- | --- | --- |
| `AUDIT_LOG_FORWARD_URL` |  | Collector URL audit entries are posted to. The URL set in the plugin's settings wins over this. |
| `AUDIT_LOG_FORWARD_TOKEN` |  | Bearer token sent with the entries. Only used when the URL comes from this variable. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `audit-tools.export` | admin | Download the audit log as CSV or NDJSON. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `audit:read` | Medium | Read the audit log. It can see who did what and when. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/audit-tools/audit-tools-api).

## Platforms

Linux, Windows, macOS

