---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/remote-desktop/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "remote-desktop"
plugin_version: "1.3.0"
plugin_latest: true
---
## 1.3.0

### Added

- Sign out button for RDP that signs out of Windows after you confirm
- Record button to start and stop a recording during a session on the built-in engine, with Session Recording on

### Changed

- A TLS failure on the built-in engine says why it failed

### Fixed

- A remote desktop no longer freezes after the browser tab was hidden or the screen locked; it reconnects on its own when the connection dropped (#104)
- The built-in engine no longer ends a session because a hidden tab or a phone in the background stopped sending keepalives for a few seconds
- RDP in the built-in engine keeps its display scale after the window is resized or a phone is rotated
- Copying text in a remote session reaches your clipboard when Termix is opened over plain HTTP: it is put there on your next click or key press, with a note saying so
- The Korean Han/Eng and Hanja keys switch the input language in RDP sessions on the built-in engine, also from clients with a Korean keyboard driver
- The built-in engine connects to Windows Server 2019 hosts that send a short multitransport message during connect
- Open in Windows Remote Desktop shows the mstsc window instead of opening it hidden

## 1.2.1

### Fixed

- Apple Remote Desktop with a macOS account no longer shows a black screen in the built-in engine
- The built-in engine connects to Windows servers that offer a UDP transport while licensing, instead of failing with a license error
- Right Alt now reaches Windows as Alt on layouts without AltGr, so the Korean Han/Eng key switches the language
- Debug logs from the built-in engine, like the sound channel lines, now show when the log level is debug

## 1.2.0

### Changed

- Opening a host in Windows Remote Desktop now runs inside this plugin instead of the desktop app itself, so fixes to it no longer need a new desktop build
- Debug logs now show whether the built-in RDP engine negotiates audio and receives any sound from the server
- Needs Termix 26.10.3 or newer

## 1.1.0

### Added

- A built-in remote desktop engine: RDP, VNC and Telnet run inside Termix with no guacd container, on Docker, bare metal and the desktop app
- RDP with NLA, TLS, clipboard, drive redirection with a Download folder, audio, printing to PDF and resizing without a reconnect
- VNC with VncAuth, VeNCrypt, Tight security, UltraVNC MS-Logon II and Apple Remote Desktop logins, Tight, ZRLE, Hextile, RRE and CopyRect, and 8, 16 or 24 bit color
- Telnet with guacd's auto login patterns, color schemes, scrollback and copy on select
- Use an external guacd setting and REMOTE_DESKTOP_ENGINE to keep using guacd
- RDP_DRIVE_PATH for where the built-in engine keeps drive files
- More RDP keyboard layouts: Latin American Spanish, Portuguese, Swiss French, Danish, Norwegian, Polish, Hungarian, Romanian and Turkish
- RemoteApp, console sessions, Wake-on-LAN and clipboard line ending settings work in the built-in engine
- Apple Remote Desktop as a host type, with Force Quit, Lock screen and Spotlight in the toolbar

### Changed

- The toolbar sits along the top or bottom edge instead of floating over the desktop. Each host can pick its position, icons or names, and which buttons show in what order, and buttons that don't fit go in a More menu
- The desktop app runs remote desktop on this device for hosts left on Default, like SSH
- VNC sessions are recorded too
- Read only viewers of a shared session can no longer send clipboard or files
- Revoking a share disconnects the viewers who joined through it
- RDP hosts behind an RD Gateway use the external guacd when one is set up
- guacd Proxy is marked optional, and host settings that only work with an external guacd say so
- The plugin name and description show in your language

### Fixed

- Saved RDP hosts failed with "Failed to generate connection token" when the Session Recording plugin was turned off
- RDP sessions on some touch screens in Chrome kept resizing as a scrollbar showed and hid
- Presenting an RDP, VNC or Telnet host in a collab room never started
- The failsafe keyboard layout was sent under its translated name in other languages
- Remote desktop never connected under npm run dev, since the display socket skipped the dev server's proxy
- A tab could open two connections at once and get stuck on connecting
- Remote desktop on the desktop app follows its local server when it moves off port 30001
- With an external guacd, a VNC session to a slow server like macOS Screen Sharing could hang on connecting
- Cmd+C and Cmd+V from a browser reached a Mac as a plain c and v

## 1.0.2

### Fixed

- VNC without a username and hosts behind jump hosts hung at "Negotiating VNC handshake" on Kubernetes. Without GUACD_TUNNEL_HOST set, guacd now reaches Termix by its pod IP

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- RDP, VNC and Telnet from any browser, in tabs and split screen like any other session
- Clipboard sync and file transfer through RDP drives
- Jump host support
- Session sharing and recording
- Open a host in the native Windows Remote Desktop client from the desktop app
- Connections need the remote desktop permission, only the server decides guacd paths, drive folders and VNC listen mode, and only admins set a host's own guacd
