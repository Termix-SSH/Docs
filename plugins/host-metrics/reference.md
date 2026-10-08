---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/host-metrics/reference"
custom_edit_url: null
plugin_id: "host-metrics"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Metrics interval (seconds) | number | `30` | How often a host being viewed is sampled, unless the host sets its own interval. |
| History retention (days) | number | `7` | How long metrics samples are kept for the history charts. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Temperature unit | select | `"celsius"` | How temperatures are shown in Host Metrics. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `host-metrics.use` | admin, user | View host metrics and use the host managers (services, packages, firewall and more) on hosts you can reach. |

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

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `host-metrics.viewers` | 1.0.0 | `host-metrics.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/host-metrics/host-metrics-api).

## Platforms

Linux, Windows, macOS

