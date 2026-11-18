---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/serial/reference"
custom_edit_url: null
plugin_id: "serial"
plugin_version: "1.1.0"
plugin_latest: true
---
## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file. See [environment variables](/configure/environment-variables) for the ones core and other plugins read.

| Variable | Default | What it does |
| --- | --- | --- |
| `LIBC` |  | glibc or musl. Picks the serial port binary on Linux. Found on its own when not set. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `device:serial` | High | Access serial and USB devices. It can open a physical serial port on the machine running Termix. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Platforms

Linux, Windows, macOS

