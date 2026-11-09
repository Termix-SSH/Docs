---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/certificates/reference"
custom_edit_url: null
plugin_id: "certificates"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the certificates panel with new terminals | boolean | `false` | Show the certificates panel beside every SSH terminal that has Certificates on. You can still open and close it from the button on the right edge. |
| Certificates panel side | select | `"right"` | Where the certificates panel sits next to a terminal. |
| Certificates panel size | number | `380` | Width in pixels, or height when it is at the bottom. You can also drag its edge. |
| Show the panel button | boolean | `true` | Show a small button on the right edge of a terminal that opens the certificates panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Certificates | boolean | `false` | Manage TLS certificates on this host from the Certificates tab. |
| Use sudo | boolean | `true` | Use sudo to read and change certificates. Turn off if the login is root. |
| Read only | boolean | `false` | Show certificates but never change them on this host. |
| Warn before expiry | number | `14` | Certificates with this many days or fewer left show as expiring and send an alert. |
| Show certificates panel in terminals | boolean | `true` | Let the certificates panel open beside this host's SSH terminal. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `certificates.use` | admin, user | See certificates on hosts you can reach, and change them on hosts you can edit. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `certificates.list`<br />List certificates | A host | Read only |  |
| `certificates.expiring`<br />Certificates expiring | A host | Read only |  |
| `certificates.renew`<br />Renew certificate | One item on a host | Changes |  |
| `certificates.renew-all`<br />Renew all certificates | A host | Changes |  |
| `certificates.revoke`<br />Revoke certificate | One item on a host | Destructive |  |

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

The plugin's HTTP routes are in the [API reference](/api/certificates/certificates-api).

## Platforms

Linux, Windows, macOS

