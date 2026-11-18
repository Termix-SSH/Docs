---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/operations-center/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "operations-center"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Changed

- Session tiles on the host page overview, like a remote desktop, wait for you to click Connect instead of connecting when the page opens. The full size view still connects right away
- The host page overview scrolls with Termix, so tiles from other plugins like the terminal move with the page instead of trailing behind it (needs Termix 26.11.2)
- Status tiles on the dashboard share one request and ask only for their own signal, and check again every 2 seconds while hosts are still answering
- Needs attention shows each part as soon as it loads instead of waiting for the slowest one
- The host page shows one loading screen until its tiles, including ones from other plugins, have loaded, instead of filling in piece by piece (needs Termix 26.11.2)
- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Host page tiles from other plugins draw in their own frames over the page, and the tab bar button finds the host of the tab you are on (needs Termix 26.11.2)

### Fixed

- Status tiles say they are loading instead of "No hosts report this" while hosts are still coming in

## 1.0.0

### Added

- Operations tab with an overview you can arrange, a side menu with counts for approvals, failed runs, rollouts and drift, and a searchable list of every action any plugin offers with its form beside it
- Rollouts: one action across many hosts with a canary, batches, a pause between them and a failure limit
- History of every action with who ran it, from where and what happened, plus cancel and undo. Filter it by action, host or status
- Approvals for actions a rule holds, showing exactly what will run
- Approval rules by risk, plugin, action, where a run came from and host tag
- Drift checks that run on a schedule, show which hosts drifted and can fix them
- A page per host made of tiles you can move, resize, add and remove: status, the terminal and other sessions, lists like containers, one click actions, plugin tiles such as metrics and recent changes. Every tool opens in the same tab. Tiles can be set for all hosts or just one
- A host page panel beside terminals, a Host page button in the tab bar and an Open host page item when you right click a tab
- A dot on host rows while a status tile on the host is warning or failing. It can be turned off in settings
- The host's actions in the host menu, one list per plugin
- Host tools can open inside the host page when Classic Layout is set to do that
- Hosts view with a card per host showing what needs a look, plus tables across every host, such as every container or service, with filters and bulk actions
- MCP server for outside AI tools, using an API key
- Needs attention dashboard card, and any plugin's status or action as its own dashboard tile
- Every action in the command palette
- Status tiles, action button and found links widgets for the homepage. Found links lists web addresses plugins know about, such as proxy routes
