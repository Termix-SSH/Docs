---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/storage-health/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "storage-health"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- A Storage tab for each host that reads drive, pool and array health over SSH
- SMART and NVMe health, temperature, wear, power on time and bad sector counts
- ZFS pools, mdadm arrays, btrfs filesystems and LVM thin pools
- Charts for the last 24 hours, 7 days and 30 days
- A log of problems, self tests and scrubs for every host
- Alerts when a drive fails or has SMART warnings, runs hot or wears out, a pool or array degrades, or a thin pool fills up
- Start and stop SMART self tests and scrubs, with a check before a scrub starts
- Drives, pools and arrays show in the All hosts table, and health and temperature show as status tiles
- Events for Automations and Operations when storage degrades, recovers, a drive fails or an array degrades
- A storage card in Host Metrics and a dashboard card with every watched host, worst first

### Changed

- Needs Termix 26.11.1 or newer
