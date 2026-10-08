---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/ssh-terminal/reference"
custom_edit_url: null
plugin_id: "ssh-terminal"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Terminal Session Persistence | number | `30` | How long a disconnected terminal is kept alive on the server before it is closed. Min 1, max 1440 minutes. For sessions that must outlive this, enable Auto-Tmux on the host. |
| Keep sessions after disconnect | boolean | `true` | Keep a disconnected terminal alive on the server for the time above, so reopening its tab picks up where it left off. |
| Command History | boolean | `true` | Allow command history recording. When disabled, history is not saved regardless of per-host settings. |
| Storage Mode | select |  | Where pasted and uploaded terminal images are written. Auto picks by connection, Local and Remote (SFTP) are fixed. |
| Local directory | secret |  | Absolute path on the Termix backend where local mode writes images. Never shown after saving. Empty uses TERMIX_IMAGE_DIR. |
| Host path | string |  | The host-side view of the local directory that terminal agents receive. |
| TTL (ms) | number |  | How long an uploaded image is kept, in milliseconds. Empty uses TERMIX_IMAGE_TTL_MS or one hour. |
| Max image count | number |  | Most images kept at once. Empty uses TERMIX_MAX_IMAGE_COUNT or 100. |
| Max storage bytes | number |  | Most bytes of images kept at once. Empty uses TERMIX_MAX_IMAGE_STORAGE_BYTES or 5 GiB. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Command Autocomplete | boolean | `false` | Show autocomplete while typing if you press tab |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable Terminal | boolean | `true` | Offer an SSH terminal for this host. |
| Enable Terminal Toolbar | boolean | `true` | Show a quick-access toolbar docked to the active terminal for this host's tools and live stats |
| Toolbar Position | select | `"bottom"` | Where the toolbar sits in the terminal. You can still drag it from there. |
| Toolbar Start State | select | `"expanded"` | Whether the toolbar opens expanded or minimized when the terminal connects |
| Toolbar Display Mode | select | `"remember"` | How toolbar buttons are shown. Last used keeps whatever you picked in the toolbar. |
| Show Live Stats | boolean | `true` | Show live host stats above the toolbar buttons in expanded mode |
| Fade When Idle | boolean | `true` | Fade the toolbar out until you hover over it |
| Command History | boolean | `true` | Record commands run in this terminal for history and autocomplete |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file.

| Variable | Default | What it does |
| --- | --- | --- |
| `TERMIX_IMAGE_STORAGE_MODE` |  | Where pasted terminal images go: auto, local or remote. Only used until an admin saves the setting. |
| `TERMIX_IMAGE_DIR` | `DATA_DIR/termix-image-v0` | Folder on the Termix server for local image storage. |
| `TERMIX_IMAGE_HOST_PATH` | `/tmp/termix-image-v0` | The same folder as the host sees it, for agents that read images. |
| `TERMIX_IMAGE_TTL_MS` | `3600000` | How long an image is kept, in milliseconds. |
| `TERMIX_MAX_IMAGE_COUNT` | `100` | Most images kept at once. |
| `TERMIX_MAX_IMAGE_STORAGE_BYTES` | `5368709120` | Most bytes of images kept at once. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `ssh-terminal.sessions` | admin, user | Lets other features, such as session sharing and recording, reach your live terminal sessions. |
| `ssh-terminal.history` | admin, user | Lets other features, such as the AI assistant, read your command history. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `sessions.live` (ssh) | 1.0.0 | `ssh-terminal.sessions` |
| `terminal.history` | 1.0.0 | `ssh-terminal.history` |

| Uses | Version | Optional |
| --- | --- | --- |
| `tmux.sessions` | ^1.0.0 | yes |
| `sessions.sharing` | ^1.0.0 | yes |
| `recordings.writer` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/ssh-terminal/ssh-terminal-api).

## Platforms

Linux, Windows, macOS

