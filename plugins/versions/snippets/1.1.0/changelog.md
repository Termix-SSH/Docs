---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/snippets/v/1.1.0/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "snippets"
plugin_version: "1.1.0"
plugin_latest: false
---
## 1.1.0

### Added

- Snippets panel beside an SSH terminal: search and click a snippet to run it in that terminal
- Snippets dashboard card: run snippets that have target hosts, or copy any snippet

## 1.0.2

### Added

- Other plugins can read each snippet's command, so Fleets can run a snippet on a whole fleet
- Fill sudo password setting: snippets run on hosts without a terminal answer sudo's prompt with the host's sudo password

### Changed

- The plugin name and description show in your language
- Snippets now asks for permission to read host credentials, for the sudo password

### Fixed

- Running a snippet on a host now says why the connection failed instead of a generic error: failed authentication, an unreachable host, a timeout or a rejected host key each get their own status and message
- A snippet that runs past the execution timeout answers with a timeout status and the output it printed so far, instead of a generic error

## 1.0.1

### Fixed

- Folders that only exist on snippets now show in the folder picker when creating or editing a snippet

## 1.0.0

### Added

- First release
- Save commands and notes in folders
- Run them in one or more terminals, or straight on a set of hosts
- Variables for the host and your own inputs
- Run a snippet each time you connect to a host
- Share snippets with users or roles
- Import and export as JSON
