---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/web-endpoint/reference"
custom_edit_url: null
plugin_id: "web-endpoint"
plugin_version: "1.1.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Allow tunnels on other addresses | boolean | `false` | Lets an endpoint's bind address publish its tunnel on this server's network, with no Termix login in front of it. Leave off: browsers reach tunnels through Termix itself. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the web UI panel with a terminal | boolean | `false` | Show the web UI panel when a terminal opens on a host that has it. |
| Web UI panel side | select | `"right"` | Where the panel sits next to the terminal. |
| Web UI panel size | number | `520` | Width, or height at the bottom, in pixels. |
| Web UI panel edge button | boolean | `true` | Show a small button on the terminal edge to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable web endpoints | boolean | `false` | Open this host's web interfaces from the sidebar. |
| Endpoints | json |  |  |
| Panel beside the terminal | boolean | `true` | Offer a web UI panel next to this host's SSH terminal. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `desktop:window` | Medium | Open desktop windows. Only in the Termix desktop app. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Needs: [tunnels](/plugins/tunnels) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Uses | Version | Optional |
| --- | --- | --- |
| `tunnels.access` | ^1.0.0 | no |

## API

The plugin's HTTP routes are in the [API reference](/api/web-endpoint/web-endpoint-api).

## Platforms

Linux, Windows, macOS

