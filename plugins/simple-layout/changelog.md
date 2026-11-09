---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/simple-layout/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "simple-layout"
plugin_version: "1.0.2"
plugin_latest: true
---
## 1.0.2

### Added

- Host cards show the badges plugins add next to a host's name, such as the Operations Center attention dot

### Changed

- Home uses the Termix tile look, with host cards edge to edge
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- Password fields with the show button are the same height as the other fields next to them
- A host's saved password no longer shows as placeholder text in the host form, and emptying a password, key or passphrase field keeps the saved one
- Emptying the private key of a new host no longer marks it as saved
- Opening a host that no longer exists shows a message instead of a new host form
- Switching between plugin settings pages quickly no longer shows the first plugin's values

## 1.0.1

### Fixed

- The Hosts tab was named Manage in the top bar

## 1.0.0

### Added

- A simple layout for small setups: top bar, Home screen with a card for each host, short host and credential forms, and a short Settings screen
- A search window that finds hosts, tabs and plugin actions
- A bottom bar on phones
