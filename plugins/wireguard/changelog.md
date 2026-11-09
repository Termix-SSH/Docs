---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/wireguard/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "wireguard"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- Start, stop and restart interfaces through Termix actions, list them across hosts and see interfaces that should be up but are down as a status tile
- A WireGuard tab for each host to install and manage WireGuard over SSH
- Create server interfaces with optional NAT, IP forwarding and a firewall port
- Add clients with generated keys, a free IP, a config file and a QR code
- Turn clients on or off, rotate their keys and remove them
- Live handshake and traffic for every client
- A config editor with a check before saving, a log viewer and service controls
- A WireGuard card in Host Metrics

### Changed

- Needs Termix 26.11.1 or newer
