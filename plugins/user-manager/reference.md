---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/user-manager/reference"
custom_edit_url: null
plugin_id: "user-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Users | boolean | `false` | Manage user accounts and groups on this host from the Users tab. |
| Use sudo | boolean | `true` | Use sudo to read and change accounts. Turn off if the login is root. |
| Read only | boolean | `false` | Show accounts but never change them on this host. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `user-manager.use` | admin, user | See accounts on hosts you can reach, and change them on hosts you can edit. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `user-manager.list-users`<br />List users | A host | Read only |  |
| `user-manager.empty-passwords`<br />Accounts without a password | A host | Read only |  |
| `user-manager.lock`<br />Lock user | One item on a host | Changes |  |
| `user-manager.unlock`<br />Unlock user | One item on a host | Changes |  |
| `user-manager.delete-user`<br />Delete user | One item on a host | Destructive |  |

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

The plugin's HTTP routes are in the [API reference](/api/user-manager/users-api).

## Platforms

Linux, Windows, macOS

