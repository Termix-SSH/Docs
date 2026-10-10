---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/remote-desktop/reference"
custom_edit_url: null
plugin_id: "remote-desktop"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable Remote Desktop | boolean | `true` | Allow RDP, VNC and Telnet connections through guacd. |
| guacd URL | string |  | Where guacd listens, as host:port. The GUACD_URL, GUACD_HOST and GUACD_PORT environment variables override this. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Color Depth | select | `"inherit"` | Used for RDP hosts that leave it on their default. |
| Resize Method | select | `"inherit"` | How the remote screen follows the window size. |
| Force Lossless | select | `"inherit"` | Force lossless image encoding (higher quality, more bandwidth) |
| Wallpaper | select | `"inherit"` | Show desktop wallpaper (disabling improves performance) |
| Font Smoothing | select | `"inherit"` | Enable ClearType font rendering |
| Desktop Composition | select | `"inherit"` | Enable Aero glass effects |
| Disable Audio | select | `"inherit"` | Mute all audio from the remote session |
| Enable Printing | select | `"inherit"` | Redirect local printers to the remote session |
| Enable Drive Redirection | select | `"inherit"` | Map a local folder as a drive in the remote session |
| Disable Copy | select | `"inherit"` | Prevent copying text from the remote session |
| Disable Paste | select | `"inherit"` | Prevent pasting text into the remote session |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file.

| Variable | Default | What it does |
| --- | --- | --- |
| `GUACD_HOST` | `localhost` | Host guacd listens on. Overrides the guacd URL setting. |
| `GUACD_PORT` | `4822` | Port guacd listens on. |
| `GUACD_URL` |  | guacd as host:port, in place of GUACD_HOST and GUACD_PORT. |
| `GUACD_TUNNEL_HOST` | `termix` | Address guacd uses to reach Termix for hosts behind jump hosts. In Compose, the Termix container name. |
| `GUACD_RECORDING_PATH` |  | Folder guacd writes recordings to, as guacd sees it. |
| `GUACD_RECORDING_BACKEND_PATH` | `/app/data/session_recordings/guacamole` | The same folder as Termix sees it. |
| `GUACD_DRIVE_PATH` | `/drive` | Folder guacd keeps RDP drive files in. Each user gets a folder under it. |
| `GUACAMOLE_ENCRYPTION_KEY` |  | Key that encrypts connection tokens, 64 hex characters. Made for you on each start if not set. Set it when you run more than one Termix server. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `remote-desktop.sessions` | admin, user | Let session sharing and collab rooms show this user's RDP, VNC and Telnet sessions to others. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `desktop:window` | Medium | Open desktop windows. Only in the Termix desktop app. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Works better with: [session-recording](/plugins/session-recording) ^1.0.0, [tunnels](/plugins/tunnels) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `sessions.live` (rdp, vnc, telnet) | 1.0.0 | `remote-desktop.sessions` |

| Uses | Version | Optional |
| --- | --- | --- |
| `recordings.writer` | ^1.1.0 | yes |
| `tunnels.access` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/remote-desktop/remote-desktop-api).

## Platforms

Linux, Windows, macOS

