---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/web-servers/reference"
custom_edit_url: null
plugin_id: "web-servers"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the panel with the terminal | boolean | `false` | Show the Web Servers panel when a terminal opens on a host that has it. |
| Panel side | select | `"right"` | Where the panel sits next to the terminal. |
| Panel size | number | `360` | Width of the panel, or its height at the bottom, in pixels. |
| Edge button | boolean | `true` | Show a small button on the terminal edge to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Web Servers | boolean | `false` | Manage nginx, Apache and Caddy on this host from the Web Servers tab. |
| Use sudo | boolean | `true` | Use sudo to read and change the web server. Turn off if the login is root. |
| Read only | boolean | `false` | Show sites, config and logs but never change them on this host. |
| Panel beside the terminal | boolean | `true` | Offer the Web Servers panel on this host's terminal tabs. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `web-servers.use` | admin, user | See web servers and sites on hosts you can reach, and change them on hosts you can edit. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `web-servers.status`<br />Web server status | A host | Read only |  |
| `web-servers.list-sites`<br />List sites | A host | Read only |  |
| `web-servers.test-config`<br />Test web server config | A host | Read only | `server` |
| `web-servers.reload`<br />Reload web server | A host | Changes | `server` |
| `web-servers.restart`<br />Restart web server | A host | Changes | `server` |
| `web-servers.enable-site`<br />Turn site on | One item on a host | Changes |  |
| `web-servers.disable-site`<br />Turn site off | One item on a host | Changes |  |
| `web-servers.delete-site`<br />Delete site | One item on a host | Destructive |  |

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
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## API

The plugin's HTTP routes are in the [API reference](/api/web-servers/web-servers-api).

## Platforms

Linux, Windows, macOS

