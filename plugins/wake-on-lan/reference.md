---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/wake-on-lan/reference"
custom_edit_url: null
plugin_id: "wake-on-lan"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| MAC address | string |  | The host's network MAC address, used to send Wake-on-LAN packets. |
| Broadcast address | string |  | The subnet broadcast address to send the packet to. Leave blank for 255.255.255.255. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `wake-on-lan.send` | admin, user | Wake a host by sending a magic packet to its MAC address. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `network:broadcast` | Medium | Send network broadcasts. It can send packets to devices on the local network, such as a Wake-on-LAN signal. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `wake-on-lan.send` | 1.0.0 | `wake-on-lan.send` |

## API

The plugin's HTTP routes are in the [API reference](/api/wake-on-lan/wake-on-lan-api).

## Platforms

Linux, Windows, macOS

