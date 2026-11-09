---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/firewall/reference"
custom_edit_url: null
plugin_id: "firewall"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the firewall panel with a terminal | boolean | `false` | Show the firewall panel when a terminal opens on a host that has it. |
| Firewall panel side | select | `"right"` | Where the panel sits next to the terminal. |
| Firewall panel size | number | `360` | Width, or height at the bottom, in pixels. |
| Firewall panel edge button | boolean | `true` | Show a small button on the terminal edge to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Firewall | boolean | `false` | Show the Firewall tab for this host to manage its firewall over SSH. |
| Use sudo | boolean | `true` | Run firewall commands with passwordless sudo when the login is not root. |
| Read only | boolean | `false` | Show the firewall but block every change from Termix. |
| SSH lockout check | boolean | `true` | Stop and ask before a change that looks like it would block SSH from Termix. |
| Undo timer | number | `60` | Seconds you get to press Keep after a risky change before the host undoes it. |
| Timer on every change | boolean | `false` | Use the undo timer for every change, not only the risky ones. |
| Firewall panel | boolean | `true` | Offer the firewall panel beside SSH terminals for this host. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `firewall.use` | admin, user | Open the Firewall tab on hosts you can reach. Changes also need edit access to the host. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `firewall.list-rules`<br />List firewall rules | A host | Read only |  |
| `firewall.status`<br />Firewall | A host | Read only |  |
| `firewall.port-allowed`<br />Port is allowed | A host | Read only | `port`, `protocol`, `source` |
| `firewall.allow-port`<br />Allow a port | A host | Changes | `port`, `protocol`, `source` |
| `firewall.remove-port`<br />Remove an allowed port | A host | Destructive | `port`, `protocol`, `source` |
| `firewall.delete-rule`<br />Delete firewall rule | One item on a host | Destructive |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Works better with: [fleets](/plugins/fleets) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Uses | Version | Optional |
| --- | --- | --- |
| `fleets.access` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/firewall/firewall-api).

## Platforms

Linux, Windows, macOS

