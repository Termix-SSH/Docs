---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/warpgate/reference"
custom_edit_url: null
plugin_id: "warpgate"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Warpgate Gateway | boolean | `false` | This host connects through a Warpgate SSH proxy. Termix will handle the browser-based approval flow automatically after authenticating. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `auth:provide` | High | Handle sign in. It can add a login method, a second factor or an SSH sign-in type. |

## Platforms

Linux, Windows, macOS

