---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/remote-desktop/v/1.0.2/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "remote-desktop"
plugin_version: "1.0.2"
plugin_latest: false
---
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
