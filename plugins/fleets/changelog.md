---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/fleets/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "fleets"
plugin_version: "1.2.0"
plugin_latest: true
---
## 1.2.0

### Added

- Run a command as a Termix action, so it can roll out across hosts from Operations Center and Automations with a result per host in run history
- A Fleets dashboard card with each fleet and its host count, and a list action for the assistant and the CLI
- Fleets and their hosts sync to linked desktop apps (#5)

### Changed

- Needs Termix 26.11.1 or newer
- Settings and the inventory use the Termix tile look
- Form labels match the rest of Termix
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

## 1.1.0

### Added

- Fleet actions try a host again when its SSH connection times out, only for the hosts that failed, with admin settings for how many tries and how long to wait

## 1.0.2

### Added

- Pick a snippet in a fleet's Run command tab to run it on every host in the fleet

### Changed

- The plugin name and description show in your language

## 1.0.1

### Fixed

- Fleet commands, package actions and file transfers no longer time out after 30 seconds
- Fleet commands can run for up to an hour per host

## 1.0.0

### Added

- First release
- Group hosts by hand or with tag rules, so new hosts join on their own
- Run one command on every host and see each result
- Install, remove or upgrade packages across the fleet
- Push and pull files on every host
- Collect an inventory of OS, kernel, architecture and uptime
- Share a fleet with users or roles
