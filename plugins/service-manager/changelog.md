---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/service-manager/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "service-manager"
plugin_version: "1.1.2"
plugin_latest: true
---
## 1.1.2

### Added

- Services, Timers and Logs cards in Host Metrics, which replace the cards it used to ship
- Start, stop, restart and the other service actions work from Automations, Fleets, the CLI, the phone app and the command palette through Termix actions
- Failed services show as a status tile on the dashboard and host page

### Changed

- Pages use the Termix tile look, with lines between sections instead of separate boxes
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- Notes at the top of the tab no longer squeeze their text to one word per line
- The services list scrolls with the whole tab, so a note above it no longer shrinks the list on short windows
- The back buttons in the new service form, unit details and unit editor are full size like everywhere else

## 1.1.1

### Changed

- Needs Termix 26.10.6 or newer

## 1.1.0

### Added

- Watched services dashboard card: every service you watch, on every host, with whether it is up

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
