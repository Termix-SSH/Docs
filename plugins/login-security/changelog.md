---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/login-security/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "login-security"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Added

- Ask for a second factor before connecting to a host, on every host or only marked ones. Once entered it lasts for a set time per person, and background work is never asked (#2)

### Changed

- Needs Termix 26.11.1 or newer

## 1.0.0

### Added

- Sign out after a set time without activity, in the browser and on the server
- Limit how long a session can last
- Turn off remember me and remembered devices
- Require a second factor at every login or on a new device, using any installed second factor
- People without a second factor are asked to set one up after they sign in
- A warning in the settings when no second factor plugin is installed
