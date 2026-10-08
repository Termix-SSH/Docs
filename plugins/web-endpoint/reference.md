---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/web-endpoint/reference"
custom_edit_url: null
plugin_id: "web-endpoint"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable web endpoints | boolean | `false` | Open this host's web interfaces from the sidebar. |
| Endpoints | json |  |  |

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

