---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/proxmox/v/1.1.0/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "proxmox"
plugin_version: "1.1.0"
plugin_latest: false
---
## 1.1.0

### Added

- Proxmox nodes dashboard card: CPU, memory, disk and running guests for every node with Proxmox Stats on

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Fixed

- Stats, guests and discovery work when the SSH user is not root, using sudo with the saved sudo password or passwordless sudo

## 1.0.0

### Added

- First release
- Find and import VMs and LXC containers from a node
- Keep imported hosts in sync on a schedule
- Set up Windows guests for RDP and turn on Docker for guests by name
- Node, guest, storage and cluster stats in their own tab
