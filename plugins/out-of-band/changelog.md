---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/out-of-band/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "out-of-band"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Its process stops when it has nothing to watch or run, and Termix starts it again when there is work, which saves memory on Termix 26.11.2 and later
- Its page part no longer keeps running in the background just to refresh the device list, which saves memory in the browser

## 1.0.0

### Added

- Manage server BMCs over Redfish, IPMI over LAN and Intel AMT
- Power on, shut down, reset, power cycle and power off
- Sensors for temperatures, fans, voltages and power supplies with alerts
- Hardware event log, read and clear
- Boot once from PXE, disk, CD, USB or BIOS setup
- Virtual media for Redfish BMCs
- Serial over LAN console for IPMI through a relay host
- Link a BMC to a host, or reach IPMI through a relay host
- Dashboard card, host menu button, operations and the `out-of-band.power` service
