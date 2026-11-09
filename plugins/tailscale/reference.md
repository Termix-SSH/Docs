---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/tailscale/reference"
custom_edit_url: null
plugin_id: "tailscale"
plugin_version: "1.2.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Control server | select | `"tailscale"` | Pick Headscale if you run your own Headscale server. |
| API key | secret |  | Used to list the devices on your tailnet. Works with a Tailscale or Headscale key. |
| API base URL | string |  | Leave empty for Tailscale. For Headscale, enter your Headscale address. |
| Alert when a device goes offline | boolean | `false` | Send an alert to admins when a tailnet device that was online drops off. Needs the API key. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `tailscale.devices.view` | admin |  |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `tailscale.devices`<br />Tailnet devices | The server | Read only |  |
| `tailscale.status`<br />Tailscale | A host | Read only |  |
| `tailscale.up`<br />Connect Tailscale | A host | Changes |  |
| `tailscale.down`<br />Disconnect Tailscale | A host | Destructive |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `auth:provide` | High | Handle sign in. It can add a login method, a second factor or an SSH sign-in type. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Works better with: [host-metrics](/plugins/host-metrics) ^1.0.0.

## API

The plugin's HTTP routes are in the [API reference](/api/tailscale/tailscale-api).

## Platforms

Linux, Windows, macOS

