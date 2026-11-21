---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/log-search/v/1.2.0/reference"
custom_edit_url: null
plugin_id: "log-search"
plugin_version: "1.2.0"
plugin_latest: false
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the log panel with terminals | boolean | `false` | Open the panel by itself on hosts that have it. |
| Panel side | select | `"right"` | Where the log panel opens beside a terminal. |
| Panel size | number | `420` | Width or height of the panel in pixels. |
| Show the edge button | boolean | `true` | Show a small button on the edge of the terminal to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Log Search | boolean | `true` | Include this host when searching logs. |
| Use sudo | boolean | `true` | Use root or sudo when the login user is not root. Needed to read the whole journal and protected log files. |
| Log folders | string |  | Folders to search for log files, separated by commas. Leave empty for /var/log. |
| Show the side panel | boolean | `true` | Offer the log search panel beside terminals on this host. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `log-search.use` | admin, user | Search logs on hosts you can connect to. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `log-search.search`<br />Search logs | The server | Read only | `query`, `range`, `source`, `level`, `limit` |
| `log-search.saved-run`<br />Run a saved log search | The server | Read only | `name` |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |

## Platforms

Linux, Windows, macOS

