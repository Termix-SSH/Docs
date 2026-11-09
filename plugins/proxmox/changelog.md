---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/proxmox/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "proxmox"
plugin_version: "1.3.0"
plugin_latest: true
---
## 1.3.0

### Added

- Start, shut down, reboot and stop VMs and containers through Termix actions, list guests across clusters and see running guests as a status tile
- Permission Manage Proxmox guests

### Changed

- Needs Termix 26.11.1 or newer
- The overview uses the Termix tile look, with tiles edge to edge and lines between them instead of separate cards
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- The Discover button is as tall as the node picker next to it

## 1.2.1

### Fixed

- Switching browser tabs no longer shows the connection screen on Proxmox stats. A quick switch keeps the session, and after a longer one the stats stay up while they reconnect, unless the reconnect fails

## 1.2.0

### Added

- Cluster aware sync: nodes of the same cluster share one host per guest, so sync can run on every node
- Imported guests go in a folder named after the cluster, with a Folder for guests setting and an optional folder per node

### Fixed

- Auto Sync no longer makes duplicate guests when a linked desktop and the server both sync the same Proxmox host. Delete the duplicates once and they stay gone
- Discovery uses an IP in your Preferred IP ranges for a container with more than one network card, also when that card gets its address from DHCP
- The Proxmox view no longer fails and retries on the first connect after a restart

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
