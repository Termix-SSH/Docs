---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/docker/v/1.2.0/reference"
custom_edit_url: null
plugin_id: "docker"
plugin_version: "1.2.0"
plugin_latest: false
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Stack management | boolean | `false` | Let hosts use compose stack management. While this is off, it is hidden and blocked for everyone. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the containers panel with new terminals | boolean | `false` | Show the containers panel beside every SSH terminal that has Docker on. You can still open and close it from the button on the right edge. |
| Containers panel side | select | `"right"` | Where the containers panel sits next to a terminal. |
| Containers panel size | number | `380` | Width in pixels, or height when it is at the bottom. You can also drag its edge. |
| Show the panel button | boolean | `true` | Show a small button on the right edge of a terminal that opens the containers panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable Docker | boolean | `false` | Manage containers on this host. |
| Container Runtime | select | `"docker"` | Choose the CLI used for container management on this host |
| Show containers panel in terminals | boolean | `true` | Let the containers panel open beside this host's SSH terminal. |
| Stack management | boolean | `false` | Manage compose stacks on this host. An administrator also has to allow it. |
| Stacks folder | string | `"/opt/stacks"` | The folder on the host where each stack has its own folder with a compose file. |

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

## Platforms

Linux, Windows, macOS

