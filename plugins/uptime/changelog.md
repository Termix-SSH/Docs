---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/uptime/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "uptime"
plugin_version: "1.0.1"
plugin_latest: true
---
## 1.0.1

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Its process stops when it has nothing to watch or run, and Termix starts it again when there is work, which saves memory on Termix 26.11.2 and later

### Fixed

- Refuses private addresses written in IPv4-compatible (`::10.0.0.1`) or NAT64 (`64:ff9b::10.0.0.1`) form
- Monitor editor Test button now matches the Save button size

## 1.0.0

### Added

- Website, TCP port, ping, DNS record and TLS certificate checks
- Termix host, Docker container, systemd unit and command checks
- Check from a host, to reach private networks
- Push monitors for cron jobs and backup scripts
- Uptime numbers, response time charts and an incident history
- Alerts through the Alerts plugin, with reminders and certificate warnings
- Maintenance windows, one time or weekly
- Public status pages with notes
- Share monitors with users and roles
- A permission for checking private addresses
- Dashboard cards, a panel beside the terminal and tiles on the host page
- Actions and events for Automations, Fleets, the CLI, the phone app and the assistant
