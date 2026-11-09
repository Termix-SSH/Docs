---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/snippets/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "snippets"
plugin_version: "1.3.0"
plugin_latest: true
---
## 1.3.0

### Added

- Run a snippet as a Termix action, so it can roll out across hosts from Operations Center with a result per host. Saved secrets stay out of run history
- A homepage widget with your snippets and a copy button
- Run snippets in local terminals in the desktop app, from the side panel or by picking them as targets

### Fixed

- Password fields with the show button are the same height as the other fields next to them
- Fill sudo password works with sudo-rs and with German and French sudo prompts
- A snippet sent to a terminal that has closed fails instead of going to another open terminal

### Changed

- Needs Termix 26.11.1 or newer
- The editor and settings use the Termix tile look
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

## 1.2.0

### Added

- Secrets: save encrypted values in the snippet settings and use them in a command as `{{NAME}}`
- Runs on hosts hide secret values in the output, and every secret use is audited

### Fixed

- Snippets with target hosts now run in the terminals picked in Run in, instead of always running on their target hosts

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
