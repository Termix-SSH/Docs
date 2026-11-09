---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/backups/reference"
custom_edit_url: null
plugin_id: "backups"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the backups panel with new terminals | boolean | `false` | Show the backups panel beside every SSH terminal that has it turned on. You can still open and close it from the button on the right edge. |
| Backups panel side | select | `"right"` | Where the backups panel sits next to a terminal. |
| Backups panel size | number | `380` | Width in pixels, or height when it is at the bottom. You can also drag its edge. |
| Show the panel button | boolean | `true` | Show a small button on the right edge of a terminal that opens the backups panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Show backups panel in terminals | boolean | `false` | Let the backups panel open beside this host's SSH terminal. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `backups.use` | admin, user | Set up backup jobs and repositories, run backups, and browse, download and restore snapshots on hosts they can edit. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `backups.list-jobs`<br />List backup jobs | A host | Read only |  |
| `backups.failed`<br />Failed backups | A host | Read only |  |
| `backups.run-job`<br />Run backup | One item on a host | Changes |  |
| `backups.cancel-run`<br />Stop backup | One item on a host | Changes |  |
| `backups.list-snapshots`<br />List snapshots | One item on a host | Read only |  |

## Events

Automations can start when one of these happens.

| Event | What it means |
| --- | --- |
| `backups.run-finished` | Backup finished |
| `backups.run-failed` | Backup failed |

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
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Works better with: [databases](/plugins/databases) ^1.2.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Uses | Version | Optional |
| --- | --- | --- |
| `databases.logins` | ^1.0.0 | yes |
| `storage-health.access` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/backups/backups-api).

## Platforms

Linux, Windows, macOS

