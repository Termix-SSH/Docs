---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/ip-kvm/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "ip-kvm"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Its process stops when it has nothing to watch or run, and Termix starts it again when there is work, which saves memory on Termix 26.11.2 and later
- Its page part no longer keeps running in the background just to refresh the device list, which saves memory in the browser

### Fixed

- JetKVM screen shows again on firmware 0.5.9 and later, which only takes the connection over a WebSocket. The Info tab shows its version again
- Refuses private addresses written in IPv4-compatible (`::10.0.0.1`) or NAT64 (`64:ff9b::10.0.0.1`) form

## 1.0.0

### Added

- Manage PiKVM, GL.iNet Comet (GLKVM), NanoKVM and JetKVM devices
- Screen, keyboard and mouse in the browser through the Termix server
- JetKVM screen over WebRTC straight from the browser
- Power on, shut down, power off and reset
- Wake-on-LAN, shortcuts, paste text and screenshots
- Virtual media for PiKVM and NanoKVM
- Link a KVM to a host, offline and power change alerts
- Dashboard card, host menu button, operations and the `ip-kvm.power` service
