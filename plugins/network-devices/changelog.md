---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/network-devices/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "network-devices"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Changed

- Device fields are a shade darker than the page, like every other field
- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Its process stops when it has nothing to watch or run, and Termix starts it again when there is work, which saves memory on Termix 26.11.2 and later

## 1.0.0

### Added

- A Network tab with devices, ports, clients and neighbors
- Support for SNMP devices, MikroTik RouterOS, OPNsense and OpenWrt
- Alerts when a device or a watched port goes down
- Turn a port off or on, power cycle PoE and restart a device
- Find SNMP devices in an address range
- A dashboard card and actions for rules, the CLI and the assistant
