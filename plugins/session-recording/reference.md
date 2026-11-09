---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/session-recording/reference"
custom_edit_url: null
plugin_id: "session-recording"
plugin_version: "1.2.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Retention (days) | number | `30` | How long a session recording is kept before it is deleted automatically. |
| Require recording | select | `"off"` | Record every session even when a host has recording turned off. Users can't stop a required recording. |
| Encrypt recordings | boolean | `true` | Encrypt new recordings on disk. Recordings made before stay as they are. |
| Alert when a recording is opened | select | `"off"` | Send an alert to auditors when someone watches, downloads or live watches a session. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Always show buttons | boolean | `false` | Keep the view, download and delete buttons under each log visible. Turn off to show them only on hover. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable session recording | boolean | `false` | Record terminal output for this host so you can play it back or download it later. |
| Timestamps in text downloads | boolean | `false` | Download as text puts the time each line was printed at its start, in UTC. Recordings and playback stay the same. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `session-recording.view` | admin, user | See and play back your own session recordings. |
| `session-recording.audit` | admin | See and play back everyone's recordings, see who opened each one, put recordings on hold and watch or end live sessions. |
| `session-recording.rules` | admin | Add and change the rules that alert on, or end, a session when a command matches. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `session-recording.list`<br />Session recordings | A host | Read only |  |
| `session-recording.usage`<br />Recording storage | A host | Read only |  |
| `session-recording.verify`<br />Check a recording for changes | One item on a host | Read only |  |

## Events

Automations can start when one of these happens.

| Event | What it means |
| --- | --- |
| `session-recording.alert` | A command alert rule matched |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `db:core-refs` | High | Read core account tables. Can query users, roles and hosts directly from the database. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `files:own` | Low | Store its own files. In its own folder on disk, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `recordings.writer` | 1.2.0 | `session-recording.view` |

| Uses | Version | Optional |
| --- | --- | --- |
| `sessions.live` | ^1.0.0 | yes |
| `privileged-access.hosts` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/session-recording/session-recording-api).

## Platforms

Linux, Windows, macOS

