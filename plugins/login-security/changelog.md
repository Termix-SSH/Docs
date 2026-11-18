---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/login-security/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "login-security"
plugin_version: "1.2.0"
plugin_latest: true
---
## 1.2.0

### Added

- Sessions and keys: see your own sessions and API keys with when they were last used, sign out other sessions and revoke your keys. Admins can sign everyone out and revoke every API key at once
- Admin wait: turn on the server's wait for dangerous admin changes, pick how long, and see or cancel what is waiting
- An alert when someone signs in to your account from a device not seen before. Admins can turn it off for everyone and each person for themselves

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Needs Termix 26.11.2 or newer
- Connect verify asks for your second factor in a Termix prompt, so the code never passes through the plugin

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
