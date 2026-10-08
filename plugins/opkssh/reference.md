---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/opkssh/reference"
custom_edit_url: null
plugin_id: "opkssh"
plugin_version: "1.0.0"
plugin_latest: true
---
## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file.

| Variable | Default | What it does |
| --- | --- | --- |
| `OPKSSH_VERSION` | `v0.16.0` | Use another opkssh release than the one Termix pins. Needs OPKSSH_SHA256 too. |
| `OPKSSH_SHA256` |  | SHA-256 of the opkssh binary for OPKSSH_VERSION. OPKSSH_SHA256_AMD64 and OPKSSH_SHA256_ARM64 set it per CPU. |
| `OPKSSH_SHA256_AMD64` |  | SHA-256 of the x64 binary for OPKSSH_VERSION. |
| `OPKSSH_SHA256_ARM64` |  | SHA-256 of the ARM64 binary for OPKSSH_VERSION. |
| `OPKSSH_BUNDLED_DIR` | `opkssh-bundled` | Folder with a copy of opkssh baked into the image, used before downloading. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `process:spawn` | High | Run programs on this machine. Programs run on the Termix server itself, not on your hosts. |
| `auth:provide` | High | Handle sign in. It can add a login method, a second factor or an SSH sign-in type. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `files:own` | Low | Store its own files. In its own folder on disk, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/opkssh/opkssh-api).

## Platforms

Linux, Windows, macOS

