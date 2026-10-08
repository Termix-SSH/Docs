---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/telemetry/reference"
custom_edit_url: null
plugin_id: "telemetry"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Share anonymous usage statistics | boolean | `true` | Sends a small anonymous summary once a day to help improve Termix. It never includes usernames, hostnames, IP addresses or credentials. |
| Include platform info | boolean | `true` | The operating system, CPU architecture, Node.js version, database type and how Termix is installed (Docker, desktop app or server). |
| Include feature usage | boolean | `true` | How many times each kind of tab was opened and how many SSH logins happened since the last report. Users can turn off their own part in their profile. |
| Include installed features | boolean | `true` | Which plugins are turned on and their versions. Used to count how many instances use each plugin. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Include my feature usage | boolean | `true` | Counts which kinds of tabs you open in the anonymous usage statistics. Nothing about you or your hosts is sent. |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file.

| Variable | Default | What it does |
| --- | --- | --- |
| `ENABLE_TELEMETRY` |  | true or false. Turns usage statistics on or off and locks the setting. |
| `POSTHOG_API_KEY` |  | Send reports to your own PostHog project instead of the Termix one. |
| `POSTHOG_HOST` | `https://us.i.posthog.com` | PostHog server to send to. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `telemetry.manage` | admin | See what usage statistics are sent, send them now and reset the instance ID. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `db:core-refs` | High | Read core account tables. Can query users, roles and hosts directly from the database. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `plugins:read` | Low | See installed features. It can see which features are installed and running. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/telemetry/usage-statistics-api).

## Platforms

Linux, Windows, macOS

