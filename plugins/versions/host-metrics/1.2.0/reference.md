---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/host-metrics/v/1.2.0/reference"
custom_edit_url: null
plugin_id: "host-metrics"
plugin_version: "1.2.0"
plugin_latest: false
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| History sampling interval (seconds) | number | `30` | How often samples are stored for the history charts, unless the host sets its own interval. Live views are controlled by the live settings below. |
| History retention (days) | number | `7` | How long metrics samples are kept for the history charts. |
| Live updates | boolean | `true` | Lets users open the lightweight live view of CPU, memory, network and processes. Separate from the history sampling interval. |
| Live update minimum (seconds) | number | `2` | The fastest a host is sampled for live updates, however many users or tabs are watching. Users can pick slower rates; a faster choice is raised to this minimum. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Temperature unit | select | `"celsius"` | How temperatures are shown in Host Metrics. |
| Live update rate | select | `"2"` | How often CPU, memory, network and processes refresh in the Host Metrics tab, the terminal toolbar, and dashboard and homepage widgets (those never go faster than every 5 seconds). Each update reads /proc on the host. Never faster than the server's live update minimum. Off keeps the slower regular sampling. |
| Open the metrics panel with new terminals | boolean | `false` | Show live metrics beside every SSH terminal. You can still open and close it from the button on the right edge. |
| Metrics panel side | select | `"right"` | Where the metrics panel sits next to a terminal. |
| Metrics panel size | number | `300` | Width in pixels, or height when it is at the bottom. You can also drag its edge. |
| Show the panel button | boolean | `true` | Show a small button on the right edge of a terminal that opens the metrics panel. |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file. See [environment variables](/configure/environment-variables) for the ones core and other plugins read.

| Variable | Default | What it does |
| --- | --- | --- |
| `METRICS_POLL_CONCURRENCY` |  | How many hosts to poll at the same time, up to 50. Unset scales with the number of hosts, from 5 to 50. |

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
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `host-metrics.viewers` | 1.0.0 | `host-metrics.use` |

## Platforms

Linux, Windows, macOS

