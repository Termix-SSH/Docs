---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/process-manager/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "process-manager"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Its process stops when it has nothing to watch or run, and Termix starts it again when there is work, which saves memory on Termix 26.11.2 and later

## 1.0.0

### Added

- A live process list with a tree, sorting and a detail view
- Send signals and change the priority of a process
- Manage pm2 and supervisor apps
- Read and follow logs from services, apps and open files
- Watches that alert on a process or app going down, restarting too often or using too much CPU or memory
- Restart a failed app automatically, up to three times an hour
- Actions, status tiles and events for Operations, Automations, the assistant and the CLI
- A Processes card in Host Metrics, a side panel on terminals and a dashboard card
- A tile on the Operations Center host page

### Changed

- Needs Termix 26.11.1 or newer
