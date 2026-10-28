---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/tmux-monitor/reference"
custom_edit_url: null
plugin_id: "tmux-monitor"
plugin_version: "1.1.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the tmux panel with a terminal | boolean | `false` | Show the tmux panel when a terminal opens on a host that has it. |
| Tmux panel side | select | `"right"` | Where the panel sits next to the terminal. |
| Tmux panel size | number | `300` | Width, or height at the bottom, in pixels. |
| Tmux panel edge button | boolean | `true` | Show a small button on the terminal edge to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable Tmux Monitor | boolean | `false` | Watch and attach to tmux sessions running on this host. |
| Enable tmux mouse support | boolean | `true` | On (default): tmux handles the mouse (pane clicking, tmux copy mode), a mouse selection stays highlighted and copied until you click, and on Linux and macOS hosts the selection keys are rebound for the whole tmux server until it restarts. Off: select and copy text normally and the wheel scrolls tmux history. Applies the next time you attach. |
| Panel beside the terminal | boolean | `true` | Offer a tmux panel next to this host's SSH terminal. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `tmux-monitor.use` | admin, user | Browse and control tmux sessions, windows and panes on hosts with the monitor enabled. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `tmux.sessions` | 1.0.0 | `tmux-monitor.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/tmux-monitor/tmux-monitor-api).

## Platforms

Linux, Windows, macOS

