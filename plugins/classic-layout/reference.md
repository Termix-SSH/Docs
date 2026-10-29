---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/classic-layout/reference"
custom_edit_url: null
plugin_id: "classic-layout"
plugin_version: "1.1.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `classic-layout.branding` | admin | Set the app name, tagline and logo shown to everyone. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ui:layout` | High | Replace the whole app layout. When chosen, its code draws every screen, including your terminals and settings. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `files:own` | Low | Store its own files. In its own folder on disk, separate from other plugins. |
| `settings:read-core` | Low | Read Termix settings. Server settings, not your hosts or credentials. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/classic-layout/classic-layout-api).

## Platforms

Linux, Windows, macOS

