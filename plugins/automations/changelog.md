---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/automations/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "automations"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- Triggers for metrics, hosts going up or down, health checks, schedules, container events and webhooks
- Steps that run commands and snippets, control containers and tunnels, wake hosts, call URLs and send alerts
- Conditions, waits and variables for more complex flows
- Run on one host, a fleet or every host
- Test runs and a history of every run
- Maintenance windows that pause automations while you work on a host

### Fixed

- A nested automation step can only run automations you own
- Values from triggers, steps and variables can no longer change the shell command they are put in
