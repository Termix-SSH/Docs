---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/service-manager/reference"
custom_edit_url: null
plugin_id: "service-manager"
plugin_version: "1.1.2"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the services panel with a terminal | boolean | `false` | Show the services panel when a terminal opens on a host that has it. |
| Services panel side | select | `"right"` | Where the panel sits next to the terminal. |
| Services panel size | number | `360` | Width, or height at the bottom, in pixels. |
| Services panel edge button | boolean | `true` | Show a small button on the terminal edge to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Services | boolean | `false` | Show the Services tab for this host to manage systemd services, timers and logs. |
| Use sudo | boolean | `true` | Run changes and protected reads with passwordless sudo when the login is not root. |
| Read only | boolean | `false` | Allow reading services and logs, but block every change from Termix. |
| Log folders | string | `"/var/log"` | Folders the Log files view may read, separated by commas. |
| Panel beside the terminal | boolean | `true` | Offer a services panel next to this host's SSH terminal. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `service-manager.use` | admin, user | Open the Services tab on hosts you can reach. Changes also need edit access to the host. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `service-manager.list-services`<br />List services | A host | Read only |  |
| `service-manager.failed-units`<br />Failed services | A host | Read only |  |
| `service-manager.start`<br />Start service | One item on a host | Changes |  |
| `service-manager.stop`<br />Stop service | One item on a host | Changes |  |
| `service-manager.restart`<br />Restart service | One item on a host | Changes |  |
| `service-manager.reload`<br />Reload service | One item on a host | Changes |  |
| `service-manager.enable`<br />Start at boot | One item on a host | Changes |  |
| `service-manager.disable`<br />Do not start at boot | One item on a host | Changes |  |
| `service-manager.enable-now`<br />Start now and at boot | One item on a host | Changes |  |
| `service-manager.disable-now`<br />Stop now and at boot | One item on a host | Changes |  |
| `service-manager.mask`<br />Mask service | One item on a host | Destructive |  |
| `service-manager.unmask`<br />Unmask service | One item on a host | Changes |  |
| `service-manager.reset-failed`<br />Clear failed state | One item on a host | Changes |  |
| `service-manager.revert`<br />Revert to the packaged unit | One item on a host | Destructive |  |

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

## API

The plugin's HTTP routes are in the [API reference](/api/service-manager/services-api).

## Platforms

Linux, Windows, macOS

