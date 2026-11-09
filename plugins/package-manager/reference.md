---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/package-manager/reference"
custom_edit_url: null
plugin_id: "package-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the updates panel with new terminals | boolean | `false` | Show the updates panel beside every SSH terminal that has Packages on. You can still open and close it from the button on the right edge. |
| Updates panel side | select | `"right"` | Where the updates panel sits next to a terminal. |
| Updates panel size | number | `380` | Width in pixels, or height when it is at the bottom. You can also drag its edge. |
| Show the panel button | boolean | `true` | Show a small button on the right edge of a terminal that opens the updates panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Packages | boolean | `false` | Manage packages and updates on this host from the Packages tab. |
| Use sudo | boolean | `true` | Use sudo to install, update and remove packages. Turn off if the login is root. |
| Read only | boolean | `false` | Show packages and updates but never change them on this host. |
| Show updates panel in terminals | boolean | `true` | Let the updates panel open beside this host's SSH terminal. |
| Alert on security updates | boolean | `false` | Send an alert when this host has security updates or needs a reboot. Checked when updates are read, about once an hour. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `package-manager.use` | admin, user | See packages and updates on hosts you can reach, and change them on hosts you can edit. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `package-manager.list-updates`<br />List package updates | A host | Read only |  |
| `package-manager.updates`<br />Pending updates | A host | Read only |  |
| `package-manager.upgrade-all`<br />Upgrade all packages | A host | Changes |  |
| `package-manager.install`<br />Install packages | A host | Changes | `package` |
| `package-manager.remove`<br />Remove packages | A host | Destructive | `package` |

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

The plugin's HTTP routes are in the [API reference](/api/package-manager/packages-api).

## Platforms

Linux, Windows, macOS

