---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/cron/reference"
custom_edit_url: null
plugin_id: "cron"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Cron | boolean | `false` | Manage cron jobs on this host from the Cron tab. |
| Use sudo | boolean | `true` | Use sudo for other users' crontabs and /etc/cron.d. Turn off if the login is root. |
| Read only | boolean | `false` | Show cron jobs but never change them on this host. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `cron.use` | admin, user | See cron jobs on hosts you can reach, and change them on hosts you can edit. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `cron.list-jobs`<br />List cron jobs | A host | Read only |  |
| `cron.status`<br />Cron status | A host | Read only |  |
| `cron.enable`<br />Turn on cron job | One item on a host | Changes |  |
| `cron.disable`<br />Turn off cron job | One item on a host | Changes |  |
| `cron.run-now`<br />Run cron job now | One item on a host | Changes |  |
| `cron.delete`<br />Delete cron job | One item on a host | Destructive |  |

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
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/cron/cron-api).

## Platforms

Linux, Windows, macOS

