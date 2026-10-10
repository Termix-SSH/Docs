---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/webauthn/reference"
custom_edit_url: null
plugin_id: "webauthn"
plugin_version: "1.0.0"
plugin_latest: true
---
## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `auth:provide` | High | Handle sign in. It can add a login method, a second factor or an SSH sign-in type. |
| `db:core-refs` | High | Read core account tables. Can query users, roles and hosts directly from the database. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `settings:read-core` | Low | Read Termix settings. Server settings, not your hosts or credentials. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/webauthn/passkeys-api).

## Platforms

Linux, Windows, macOS

