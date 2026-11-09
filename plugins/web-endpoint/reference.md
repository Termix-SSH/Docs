---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/web-endpoint/reference"
custom_edit_url: null
plugin_id: "web-endpoint"
plugin_version: "1.2.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Allow tunnels on other addresses | boolean | `false` | Lets an endpoint's bind address publish its tunnel on this server's network, with no Termix login in front of it. Leave off: browsers reach tunnels through Termix itself. |
| Let Termix reach hosts directly | boolean | `false` | Through Termix uses an SSH tunnel when a host has SSH. Turn this on for hosts without SSH, like firewalls and iLO, so this server connects to them itself. Anyone who can edit a host can then point it at addresses this server can reach. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the web UI panel with a terminal | boolean | `false` | Show the web UI panel when a terminal opens on a host that has it. |
| Web UI panel side | select | `"right"` | Where the panel sits next to the terminal. |
| Web UI panel size | number | `520` | Width, or height at the bottom, in pixels. |
| Web UI panel edge button | boolean | `true` | Show a small button on the terminal edge to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable web endpoints | boolean | `false` | Open this host's web interfaces from the sidebar. |
| Endpoints | json |  |  |
| Alert when a web UI is down | boolean | `false` | Send an alert when a web UI on this host stops answering. |
| Panel beside the terminal | boolean | `true` | Offer a web UI panel next to this host's SSH terminal. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `web-endpoint.use` | admin, user | Check that web pages on hosts you can reach answer. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `web-endpoint.check`<br />Check web endpoints | A host | Read only |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `desktop:window` | Medium | Open desktop windows. Only in the Termix desktop app. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## Works with other plugins

Needs: [tunnels](/plugins/tunnels) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Uses | Version | Optional |
| --- | --- | --- |
| `tunnels.access` | ^1.0.0 | no |
| `reverse-proxy.endpoints` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/web-endpoint/web-endpoint-api).

## Platforms

Linux, Windows, macOS

