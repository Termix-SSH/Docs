---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/service-manager/v/1.0.0/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "service-manager"
plugin_version: "1.0.0"
plugin_latest: false
---
## 1.0.0

### Added

- A Services tab for each host to manage systemd services over SSH
- Start, stop, restart, reload, enable, disable, mask and revert units
- Unit details with memory, CPU, tasks, restarts, files and recent logs
- Unit file and override editor, checked with systemd-analyze before saving
- A form to create a new service or a scheduled job with a timer
- Timers with the last and next run, run now and turn on or off
- A journal viewer with filters, live follow and download
- Log files from /var/log with search, live follow and download
- Alerts when a watched service fails or stops, and when it runs again
- A services panel beside the SSH terminal
- Basic OpenRC support
