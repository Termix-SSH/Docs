---
title: "Remote Desktop"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/remote-desktop"
description: "RDP, VNC and Telnet sessions in your browser, with clipboard, file transfer, sharing and recording."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Remote-Desktop/edit/main/docs/index.md"
plugin_id: "remote-desktop"
plugin_version: "1.0.0"
plugin_latest: true
---
Remote Desktop opens RDP, VNC and Telnet sessions in your browser, in tabs and split screen like any other session. It has clipboard sync, file transfer through an RDP drive, jump hosts, sharing and recording.

It uses [guacd](https://guacamole.apache.org/), the Apache Guacamole proxy, to turn those protocols into something a browser can show. guacd runs next to Termix.

## Set up guacd

The easiest way is the [Docker Compose file](/install/server/docker) with guacd in it. It runs guacd as its own container and points Termix at it:

```yaml
termix:
  environment:
    GUACD_HOST: "guacd"
    GUACD_TUNNEL_HOST: "termix"
    GUACD_RECORDING_PATH: "/termix-data/session_recordings/guacamole"

guacd:
  image: guacamole/guacd:1.6.0
  volumes:
    - termix-data:/termix-data
```

guacd only needs to be reachable from Termix. Don't publish its port.

Without Docker, install guacd from your distro or [build it](https://guacamole.apache.org/doc/gug/installing-guacamole.html), then set `GUACD_HOST` and `GUACD_PORT`, or the **guacd URL** in **Settings**, **Remote Desktop**.

## Add a host

1. Open a host in **Manage**, or make a new one.
2. In **General**, turn on **RDP**, **VNC** or **Telnet**. A host can have SSH and these at once.
3. Open the protocol's section. Fill in the port, username and password, and for RDP the domain and security mode.
4. Save, then pick **RDP**, **VNC** or **Telnet** from the host's menu.

The login is stored encrypted, like SSH logins, and can be [shared](/guide/sharing) with the host.

## Display settings

RDP has settings for color depth, how the screen follows the window size, lossless images, wallpaper, font smoothing, desktop composition, audio and printing. Each can follow your [host defaults](/guide/host-defaults) or be set per host.

## Clipboard and files

- Copy and paste works both ways through the toolbar.
- Turn on **Enable Drive Redirection** to get a drive in the RDP session for moving files. Each user gets their own folder under `GUACD_DRIVE_PATH`.

## Jump hosts

A remote desktop host can sit behind SSH jump hosts. Termix opens a tunnel through them for guacd. When guacd runs in its own container, set `GUACD_TUNNEL_HOST` to the address guacd uses to reach Termix (the Termix container's name in Compose).

## Recording

With [Session Recording](/plugins/session-recording) on, turn on recording for a host and every session is saved as a video you can play back in Termix.

guacd writes the file and Termix reads it, so both need the same folder:

- `GUACD_RECORDING_PATH` is where guacd writes, inside the guacd container.
- `GUACD_RECORDING_BACKEND_PATH` is where Termix reads the same files, if it isn't the default `/app/data/session_recordings/guacamole`.

The Compose file above mounts the data volume into guacd at `/termix-data`, so both paths line up.

## Wake on LAN

With [Wake-on-LAN](/plugins/wake-on-lan) on, a sleeping host can be woken from its connect screen.

## Native client

In the desktop app on Windows, an RDP host can open in the Windows Remote Desktop client instead of the browser. The password is never written to the `.rdp` file.

## Sharing

With [Session Sharing](/plugins/session-sharing) on, you can share a live session by link or present it in a meeting room. The `remote-desktop.sessions` permission decides whose sessions can be shown to others.

## Troubleshooting

- **"Could not connect to guacd".** Check `GUACD_HOST` points at guacd and both are on the same Docker network.
- **RDP fails right away.** Try a different **RDP security mode**, or turn on **Ignore certificate errors** for a self-signed certificate.
- **Recordings are empty or missing.** The two recording paths don't point at the same folder.
