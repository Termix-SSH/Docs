---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/alerts/reference"
custom_edit_url: null
plugin_id: "alerts"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Termix announcements | boolean | `true` | Show news from the Termix team, like security notices and releases, in everyone's inbox. |
| Keep alerts for (days) | number | `90` | Older alerts are removed from every inbox. |
| SMTP server | string |  | Needed for email channels. Leave empty to turn email off. |
| SMTP port | number | `587` | Usually 587 with STARTTLS or 465 with TLS. |
| Use TLS from the start | boolean | `false` | Turn on for port 465. Leave off for 587, which upgrades to TLS on its own. |
| SMTP username | string |  | Leave empty if the server does not need a login. |
| SMTP password | secret |  | Stored encrypted. |
| From address | string |  | The sender alerts come from. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Alert popups | select | `"warning"` | Which new alerts pop up while you use Termix. They always land in the inbox. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `alerts.use` | admin, user | Get alerts in the inbox and send them to your own channels. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `notify:hub` | High | Receive every alert. Stores and delivers the alerts all plugins send, including their contents. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `settings:read-core` | Low | Read Termix settings. Server settings, not your hosts or credentials. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/alerts/alerts-api).

## Platforms

Linux, Windows, macOS

