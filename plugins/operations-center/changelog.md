---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/operations-center/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "operations-center"
plugin_version: "1.0.0"
plugin_latest: true
---
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
