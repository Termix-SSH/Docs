---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/host-status/reference"
custom_edit_url: null
plugin_id: "host-status"
plugin_version: "1.1.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Check interval (seconds) | number | `30` | How often each host is checked. A host can set its own interval in its status settings. From 5 to 3600. |
| Alert when a host goes offline | boolean | `true` | Send the host's owner an alert when a checked host stops answering and when it is back. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `host-status.view` | admin, user | Check whether hosts you can see are online. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `host-status.check`<br />Check host status | A host | Read only |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `hosts:status-provide` | Medium | Provide host status. Becomes the source of the online and offline dots for every host. |
| `network:probe` | Medium | Check if ports answer. Can open a plain connection to any address from the server, to see if it is reachable. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |

## API

The plugin's HTTP routes are in the [API reference](/api/host-status/host-status-api).

## Platforms

Linux, Windows, macOS

