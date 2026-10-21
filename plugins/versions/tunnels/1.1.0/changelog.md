---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/tunnels/v/1.1.0/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "tunnels"
plugin_version: "1.1.0"
plugin_latest: false
---
## 1.1.0

### Changed

- Client tunnels on your own computer now run inside this plugin instead of the desktop app itself, so fixes to them no longer need a new desktop build
- Needs Termix 26.10.3 or newer

### Fixed

- Client tunnel sign in prompts are answered through the plugin, and a prompt that has no open window to show it is refused instead of hanging

## 1.0.3

### Changed

- The plugin name and description show in your language

### Fixed

- When the endpoint host could not reach a client tunnel's target, the error did not say which address it tried. It now names it, like 127.0.0.1:8443, which is what an empty remote address means
- Starting or stopping a server tunnel from the Tunnels tab said "Client tunnel started" or "Client tunnel stopped"

## 1.0.2

### Fixed

- Client tunnels stopped with "Endpoint SSH connection closed" when a reverse proxy dropped their idle connection. The relay now pings to keep it open

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Local, remote and dynamic SOCKS5 forwarding
- Reconnects on its own when a tunnel drops
- Start tunnels on boot
- Route a tunnel through a second host
- Client tunnels on your own computer from the desktop app, with presets you can save to the server
