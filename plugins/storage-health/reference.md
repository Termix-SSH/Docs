---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/storage-health/reference"
custom_edit_url: null
plugin_id: "storage-health"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the Storage health panel with terminals | boolean | `false` | Open the panel by itself on hosts that have it. |
| Panel side | select | `"right"` | Where the Storage health panel opens beside a terminal. |
| Panel size | number | `380` | Width or height of the panel in pixels. |
| Show the edge button | boolean | `true` | Show a small button on the edge of the terminal to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Storage Health | boolean | `false` | Watch drives, pools and arrays on this host. |
| Use sudo | boolean | `true` | Run the checks with passwordless sudo. SMART needs root. |
| Read only | boolean | `false` | Block self tests and scrubs from Termix. |
| Show the side panel | boolean | `true` | Offer the Storage health panel beside terminals on this host. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `storage-health.use` | admin, user | See drive and array health on hosts you can access. |
| `storage-health.run-tests` | admin, user | Start SMART self tests and scrubs. Also needs edit access to the host. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `storage-health.devices`<br />Drives | A host | Read only |  |
| `storage-health.pools`<br />Pools and arrays | A host | Read only |  |
| `storage-health.status`<br />Storage health | A host | Read only |  |
| `storage-health.temperature`<br />Hottest drive | A host | Read only |  |
| `storage-health.selftest`<br />SMART self test | A host | Changes | `device`, `action` |
| `storage-health.scrub`<br />Scrub | A host | Changes | `target`, `stop` |

## Events

Automations can start when one of these happens.

| Event | What it means |
| --- | --- |
| `storage-health.degraded` | Storage problem found |
| `storage-health.recovered` | Storage problem cleared |
| `storage-health.smart-failing` | Drive failing its SMART check |
| `storage-health.raid-degraded` | Pool or array degraded |

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
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `files:own` | Low | Store its own files. In its own folder on disk, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `storage-health.access` | 1.0.0 | `storage-health.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/storage-health/storage-health-api).

## Platforms

Linux, Windows, macOS

