---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/automations/v/1.0.3/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "automations"
plugin_version: "1.0.3"
plugin_latest: false
---
## 1.0.3

### Fixed

- The run limit (`maxRunSeconds`) can be set when creating an automation over HTTP and changed afterwards; before, only the service could set it, once

## 1.0.2

### Added

- `automations.access` `create` takes `concurrencyPolicy` and `maxRunSeconds`, so plugins can create automations with a longer run limit
- Set a timeout per step for commands, snippets and HTTP calls (60 seconds by default)
- Ask AI step, which has the AI Assistant look into a problem on your hosts and report back or propose a fix for approval

### Changed

- The plugin name and description show in your language

### Fixed

- Metric triggers kept their hosts' metrics alive every 15 seconds and filled the audit log; they now check in once a minute
- A step that timed out with Carry on set left the run marked as successful

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Triggers for metrics, hosts going up or down, health checks, schedules, container events and webhooks
- Steps that run commands and snippets, control containers and tunnels, wake hosts, call URLs and send alerts, with values from triggers and variables always passed safely into shell commands
- Conditions, waits and variables for more complex flows, and nested steps that only run automations you own
- Run on one host, a fleet or every host
- Test runs and a history of every run
- Maintenance windows that pause automations while you work on a host
