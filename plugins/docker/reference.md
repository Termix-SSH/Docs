---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/docker/reference"
custom_edit_url: null
plugin_id: "docker"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable Docker | boolean | `false` | Manage containers on this host. |
| Container Runtime | select | `"docker"` | Choose the CLI used for container management on this host |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `docker.use` | admin, user | Open the Docker manager and container consoles on hosts with Docker enabled. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `docker.containers` | 1.0.0 | `docker.use` |
| `docker.events` | 1.0.0 | `docker.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/docker/docker-api).

## Platforms

Linux, Windows, macOS

