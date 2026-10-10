---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/secret-sources/reference"
custom_edit_url: null
plugin_id: "secret-sources"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Private endpoint allowlist | textarea | `"localhost\n127.0.0.1\n::1\nhost.docker.internal"` | Private or loopback hosts a secret source may reach, one per line. A self-hosted 1Password Connect server usually needs its own address listed here. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `auth:provide` | High | Handle sign in. It can add a login method, a second factor or an SSH sign-in type. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/secret-sources/secret-sources-api).

## Platforms

Linux, Windows, macOS

