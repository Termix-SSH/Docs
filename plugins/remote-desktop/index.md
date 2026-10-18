---
title: "Remote Desktop"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/remote-desktop"
description: "RDP, VNC, Apple Remote Desktop and Telnet sessions in your browser, with clipboard, file transfer, sharing and recording."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Remote-Desktop/edit/main/docs/index.md"
plugin_id: "remote-desktop"
plugin_version: "1.1.0"
plugin_latest: true
---
Remote Desktop opens RDP, VNC, Apple Remote Desktop and Telnet sessions in your browser, in tabs and split screen like any other session. It has clipboard sync, file transfer through an RDP drive, audio, printing, jump hosts, sharing and recording.

It works out of the box. Termix speaks RDP, VNC and Telnet itself, so there is nothing else to install or run, on Docker, bare metal or the desktop app.

## Add a host

1. Open a host in Manage, or make a new one.
2. In General, turn on RDP, VNC, Apple Remote Desktop or Telnet. A host can have SSH and these at once.
3. Open the protocol's section. Fill in the port, username and password, and for RDP the domain and security mode.
4. Save, then pick RDP, VNC, Apple Remote Desktop or Telnet from the host's menu.

The login is stored encrypted, like SSH logins, and can be [shared](/guide/sharing) with the host.

## RDP

- Security modes: Any (the server picks), NLA, TLS, NLA extended and Hyper-V console (VMConnect, with the VM id as the preconnection blob). Legacy RDP security is not supported and uses TLS instead.
- RD Gateway needs an [external guacd](#external-guacd-optional). Hosts with gateway settings use it automatically once one is set up.
- Ignore certificate errors accepts a self-signed certificate. With it off, the certificate must be trusted by the Termix server.
- Resize method: Display update resizes the remote screen as the window changes. Reconnect opens a fresh connection at the new size, for servers without display updates.
- Keyboard layout should match the layout set on the remote machine. Characters it can't type are sent as Unicode.

## Toolbar

The toolbar sits along the top of the session, or the bottom if you pick that. It has the drive's files, zoom, Ctrl+Alt+Del, lock screen, the system key, sticky Ctrl, Alt, Shift and system keys, function keys, Esc, Tab, Home, End, Page Up, Page Down and the arrows, plus Share when Session Sharing is on.

In the host editor, under Toolbar, you can turn it off, move it, show icons only, and choose which buttons show and in what order. Buttons that don't fit go in the More menu. Like other host settings, these can come from your [host defaults](/guide/host-defaults).

## Display settings

RDP has settings for color depth, how the screen follows the window size, lossless images, wallpaper, font smoothing, desktop composition, audio and printing. Each can follow your [host defaults](/guide/host-defaults) or be set per host.

## Clipboard and files

- Copy and paste works both ways through the toolbar.
- Turn on Enable Drive Redirection to get a drive in the RDP session for moving files. Each user gets their own folder under `RDP_DRIVE_PATH` (default `/app/data/rdp-drive`).
- Files saved to the drive's Download folder are sent to your browser, then removed from the drive.
- With printing on, the session gets a printer. Print to it and you get the document as a PDF.

## VNC

VNC supports password logins, VeNCrypt (TLS and X509, with or without a username), UltraVNC MS-Logon II and Apple Remote Desktop logins for macOS Screen Sharing (fill in your macOS username and password). The cursor setting picks whether the server draws the mouse pointer or your browser does, and color depth 8 or 16 uses less bandwidth on slow links.

## Telnet

Telnet logs in for you when the host has a username and password, by watching for the login and password prompts. The prompts, a success pattern and a failure pattern can be changed per host. Select text to copy it, and paste with Ctrl+Shift+V, Shift+Insert or a middle click.

## Jump hosts

A remote desktop host can sit behind SSH jump hosts. Termix opens a tunnel through them for the session.

## Recording

With [Session Recording](/plugins/session-recording) on, turn on recording for a host and every RDP, VNC and Telnet session is saved as a video you can play back in Termix. Recordings are kept in `/app/data/session_recordings/guacamole` unless `GUACD_RECORDING_BACKEND_PATH` says otherwise.

## Wake on LAN

With [Wake-on-LAN](/plugins/wake-on-lan) on, a sleeping host can be woken from its connect screen.

## Native client

In the desktop app on Windows, an RDP host can open in the Windows Remote Desktop client instead of the browser. The password is never written to the `.rdp` file.

## Desktop app

In the desktop app, a host left on Default connects from your own computer, like SSH. Set a host to the linked server under Connection when only the server can reach it.

## Sharing

With [Session Sharing](/plugins/session-sharing) on, you can share a live session by link or present it in a meeting room. Read only viewers can watch but not type, click, paste or move files, and revoking a share disconnects the viewers who joined through it. The `remote-desktop.sessions` permission decides whose sessions can be shown to others.

## External guacd (optional)

Termix can still send sessions to an [Apache guacd](https://guacamole.apache.org/) you run yourself. Turn on Use an external guacd in Settings, Remote Desktop, or set `REMOTE_DESKTOP_ENGINE=guacd`. A host can also use its own guacd under guacd Proxy in the host editor; only admins can set it.

```yaml
termix:
  environment:
    REMOTE_DESKTOP_ENGINE: "guacd"
    GUACD_HOST: "guacd"
    GUACD_TUNNEL_HOST: "termix"
    GUACD_RECORDING_PATH: "/termix-data/session_recordings/guacamole"

guacd:
  image: guacamole/guacd:1.6.0
  volumes:
    - termix-data:/termix-data
```

These only apply to an external guacd:

- `GUACD_HOST`, `GUACD_PORT` or `GUACD_URL`: where guacd listens. Don't publish its port.
- `GUACD_TUNNEL_HOST`: the address guacd uses to reach Termix for jump hosts (the Termix container's name in Compose). In Kubernetes it defaults to the pod IP.
- `GUACD_RECORDING_PATH`: where guacd writes recordings, inside the guacd container. It must be the same folder Termix reads.
- `GUACD_DRIVE_PATH`: where guacd keeps RDP drive files.

## Troubleshooting

- RDP fails right away: Try a different security mode, or turn on Ignore certificate errors for a self-signed certificate.
- Wrong characters when typing: Set the keyboard layout to the one the remote machine uses.
- "Could not connect to guacd": Only with an external guacd. Check `GUACD_HOST` points at guacd and both are on the same Docker network.
- Recordings are empty with an external guacd: The two recording paths don't point at the same folder.

## Apple Remote Desktop

Apple Remote Desktop (ARD) is a Mac's Screen Sharing. It is its own host type, but it connects as VNC. Turn on Apple Remote Desktop in General and open its tab.

- Enter the macOS account name and password. With a username, Termix signs in with Apple's own login, which is the one Screen Sharing uses.
- Leave the username blank only for a Mac that has a VNC-only password. With an external guacd, Termix then connects through a small compatibility proxy.
- The port is 5900 unless you changed it.
- Recording works as it does for VNC.

## Environment variables

This plugin reads some environment variables on the Termix server. See the [reference](/plugins/remote-desktop/reference#environment-variables) for the list.
