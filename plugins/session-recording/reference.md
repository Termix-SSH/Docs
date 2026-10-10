---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/session-recording/reference"
custom_edit_url: null
plugin_id: "session-recording"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Retention (days) | number | `30` | How long a session recording is kept before it is deleted automatically. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable session recording | boolean | `false` | Record terminal output for this host so you can play it back or download it later. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `session-recording.view` | admin, user | See and play back your own session recordings. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `db:core-refs` | High | Read core account tables. Can query users, roles and hosts directly from the database. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `files:own` | Low | Store its own files. In its own folder on disk, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `recordings.writer` | 1.1.0 | `session-recording.view` |

## API

The plugin's HTTP routes are in the [API reference](/api/session-recording/session-recording-api).

## Platforms

Linux, Windows, macOS

