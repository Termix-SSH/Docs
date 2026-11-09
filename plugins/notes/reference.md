---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/notes/reference"
custom_edit_url: null
plugin_id: "notes"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the notes panel with a terminal | boolean | `false` | Show the notes panel when a terminal opens on a host that has it. |
| Notes panel side | select | `"right"` | Where the panel sits next to the terminal. |
| Notes panel size | number | `420` | Width, or height at the bottom, in pixels. |
| Notes panel edge button | boolean | `true` | Show a small button on the terminal edge to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Notes | boolean | `true` | Show Notes for this host in its menu. |
| Panel beside the terminal | boolean | `true` | Offer a notes panel next to this host's SSH terminal. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `notes.use` | admin, user | Read and write notes on hosts you can access and keep your own global notes. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `notes.list`<br />List notes | A host | Read only |  |
| `notes.get`<br />Read a note | A host | Read only | `note` |
| `notes.create`<br />Create a note | A host | Changes | `title`, `body` |
| `notes.append`<br />Add to a note | A host | Changes | `note`, `text` |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |

## API

The plugin's HTTP routes are in the [API reference](/api/notes/notes-api).

## Platforms

Linux, Windows, macOS

