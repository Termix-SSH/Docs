---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/virtual-machines/v/1.1.0/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "virtual-machines"
plugin_version: "1.1.0"
plugin_latest: false
---
## 1.1.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- The VM console draws in Remote Desktop's own frame (needs Termix 26.11.2)
- Its process stops when it has nothing to watch or run, and Termix starts it again when there is work, which saves memory on Termix 26.11.2 and later

## 1.0.0

### Added

- See and control KVM virtual machines on your Linux hosts over SSH with libvirt
- New VMs from a cloud image, an ISO or an empty disk, with cloud-init for the login
- Change CPUs, memory, disks, network cards and the raw XML
- Snapshots, clones and autostart
- Storage pools, volumes, downloads and virtual networks
- A graphical console through Remote Desktop and a serial console
- Install libvirt from Termix
- Jobs that run on the host and survive a Termix restart
- Alerts when a VM crashes or stops, or a storage pool fills up
- All VMs tab, dashboard card, homepage widget, terminal panel and host page tile
- Termix actions for Operations Center, Automations, Fleets, the CLI, the assistant and MCP
