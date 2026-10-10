---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/homepage/reference"
custom_edit_url: null
plugin_id: "homepage"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Allowed private hosts | textarea |  | Exact private or loopback hostnames/IPs for Ping Status and Custom API widgets. Separate entries with commas or newlines; omit schemes, ports and paths. Empty blocks private destinations. |
| Private certificate authority (PEM) | textarea |  | Optional trusted CA bundle for allowlisted hosts. Certificate verification remains enabled. Leave empty to use the system trust store. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `homepage.use` | admin, user | View and edit the homepage canvas and dashboard service links. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `homepage.items` | 1.0.0 | `homepage.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/homepage/homepage-api).

## Platforms

Linux, Windows, macOS

