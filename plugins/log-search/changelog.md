---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/log-search/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "log-search"
plugin_version: "1.3.0"
plugin_latest: true
---
## 1.3.0

### Added

- Stop a running search with the Stop button

## 1.2.1

### Fixed

- Search and Enter did nothing in Chrome, so no log lines showed up

## 1.2.0

### Added

- Follow: new matching lines from the journal, log files and containers show up live, on up to 10 hosts, with pause and clear
- Saved searches: keep a search with a name and pick it again later
- Alerts on saved searches: a saved search can run in the background every few minutes and send one alert when it finds enough lines and one when it goes quiet
- Run a saved log search action for the assistant, the CLI and MCP

## 1.1.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it

## 1.0.0

### Added

- Search the systemd journal, log files and Docker logs on many hosts at once
- Plain text or regular expression search with a time range and level filter
- One merged result list with a status line for every host
- Live search over SSH, nothing is stored or indexed
- A search action for Operations, the assistant and the CLI
