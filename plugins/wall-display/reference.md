---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/wall-display/reference"
custom_edit_url: null
plugin_id: "wall-display"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Seconds per view | number | `30` | How long each view stays on screen before the next one. |
| Show Homepage | boolean | `true` | Needs the Homepage plugin. |
| Show Uptime | boolean | `true` | Needs the Uptime plugin. |
| Show Host Status | boolean | `true` | A board of every host and whether it is online. Needs the Host Status plugin for live status. |
| Show Network Topology | boolean | `true` | Needs the Network Topology plugin. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ui:layout` | High | Replace the whole app layout. When chosen, its code draws every screen, including your terminals and settings. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Platforms

Linux, Windows, macOS

