---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/host-metrics/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "host-metrics"
plugin_version: "1.3.0"
plugin_latest: true
---
## 1.3.0

### Added

- A 12 column card grid: drag cards anywhere, resize them by any edge, and only the cards in the way move down. Change how each card shows, undo and redo layout changes, and save layouts as templates to apply to other hosts
- Task Manager style details for CPU, memory, disks and network: hardware info, per core graphs, history, disk activity and rates per network card, on Linux, Windows and macOS. Pick which details each card shows
- A setting to keep live metrics running for a few seconds while the tab is in the background, so a quick switch away does not drop them
- Smoother charts, which stay still when your system asks for reduced motion
- Script health checks: run your own command and show its status, a number with warn and fail limits, or its output
- Health checks can show on the dashboard: the latest result appears in the host's row, and a check that warns or fails turns the host's status badge yellow or red (the badge needs Classic Layout 1.1.0)
- MikroTik RouterOS v7 support: CPU, memory, storage, uptime, temperature and interface traffic

### Changed

- Needs Termix 26.10.6 or newer
- Everyone watching a host's live metrics shares one reading of it, so more viewers add no load on the host
- Live update rate gains a 0.5 second option, and the admin live minimum can go down to 0.25 seconds

### Fixed

- The log viewer reads a unit when you press Enter or leave the field, instead of failing with Invalid unit while you type, and a bare name like webapp means webapp.service

## 1.2.0

### Added

- Busiest hosts dashboard card: the hosts with the highest CPU or memory, from samples already collected
- Live CPU, memory, network and process updates every few seconds on Linux hosts, with per-core CPU bars, a memory split and a sortable, searchable process table with a tree view
- Edit, delete and default policy management in the Firewall card for UFW, iptables and nftables

### Changed

- The metrics interval setting is now called History sampling interval
- Low CPU and memory load shows in the accent colour instead of green

### Fixed

- Firewall detection picks the firewall that really owns the rules, and nftables commands use names nft accepts

## 1.1.0

### Added

- A metrics panel beside any SSH terminal with live CPU, memory, disk, temperature, uptime and the busiest processes, so you can watch a host while you work on it
- Settings for the panel: open it with new terminals, which side it sits on, its size and the edge button
- Show metrics panel in terminals, per host, in the host's Host Metrics section

## 1.0.3

### Changed

- The plugin name and description show in your language
- The METRICS_POLL_CONCURRENCY environment variable is now listed in the docs

### Fixed

- Saving metrics history failed on Postgres and MySQL once a host had moved more than 2 GB of network traffic
- Long translated labels like Festplatte made the dashboard's usage bars overlap the host status badge

## 1.0.2

### Fixed

- macOS disk gauge uses the data volume instead of the sealed system volume
- macOS disk percent now matches df instead of using the whole APFS container size

## 1.0.1

### Added

- AMD GPUs in the GPU card, read from the amdgpu driver

### Fixed

- Metrics now work on OPKSSH hosts
- Firewall card no longer runs sudo without a saved sudo password, which sent "a password is required" emails
- Firewall tools are run by full path so sudoers rules match

## 1.0.0

### Added

- First release
- CPU, memory, disk, network, temperature, NVIDIA GPU, processes, ports and logins
- History charts for each host
- Manage services, packages, cron jobs, firewall rules, users, SSL certificates, logs and WireGuard, with changes needing edit access on a shared host
- Health checks for your hosts and services
- A layout you can rearrange per host, and live stats in the terminal toolbar
