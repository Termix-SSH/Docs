---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/host-metrics/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "host-metrics"
plugin_version: "1.4.0"
plugin_latest: true
---
## 1.4.0

### Added

- Open a host's metrics from the command palette
- Dashboard layouts and layout templates sync to linked desktop apps (#23)
- Export and import of layouts, health checks, dashboard templates and history, with `GET /export` and `POST /import` and buttons in the dashboard edit mode
- Health checks show as a status tile on the dashboard and host page
- CPU, memory, disk, network, uptime, system, processes and ports cards can go on Operations Center's host page as tiles
- A Web Servers card, filled by the Web Servers plugin when it is installed
- GPU readings on NVIDIA and AMD hosts refresh with live updates, like CPU and network

### Changed

- Cards sit edge to edge with shared lines and no gaps, like the dashboard, and the add list sits beside the grid with a search and filters
- The default layout puts cards in rows that share one height, so there are no gaps between them
- CPU, memory and disk open on the number, with a live chart of the last couple of minutes that scales to the data so small changes show, drawn like the history charts
- Charts show a placeholder until their first readings come in, instead of an empty space
- Network interfaces are rows with a line between them instead of separate boxes
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- The memory card no longer shows an empty Hardware heading when the host does not report its memory modules
- Disk throughput charts show one decimal for small rates instead of the same label on every line
- The Tree button in the processes card and the protocol picker in the ports card are as tall as the search box next to them
- CPU percent is no longer too high on hosts that run VMs, like Proxmox

### Removed

- The Firewall manager card. Changing firewall rules moved to the Firewall plugin, which fills the same card when it is installed. The Firewall status card stays
- The Services, Timers and Log Viewer cards. The Services plugin fills them when it is installed
- The WireGuard card. The WireGuard plugin fills it when it is installed
- The Packages, Cron, Users and SSL cards. The Packages, Cron, Users and Certificates plugins fill them when they are installed
- The Process Inspector card. The Process Manager plugin fills it when it is installed. The top processes card stays

## 1.3.1

### Fixed

- Live metrics no longer get stuck on hosts shown in several places at once, which filled the host's SSH connections and made the app report a lost server connection
- A dashboard with many hosts no longer blocks the rest of the app. Live requests answer right away instead of waiting on the host, and only 6 dashboard rows update live at a time
- Saving metrics history no longer slows down the whole server. History keeps one sample a minute per host and asks for a database save far less often
- Opening metrics for a host whose SSH key has no saved passphrase now asks for the passphrase, and background collection stops retrying until then
- Coming back to a browser tab after a while no longer shows the connection screen. The cards stay up while metrics reconnect, unless the reconnect fails

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
