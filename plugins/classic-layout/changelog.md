---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/classic-layout/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "classic-layout"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Added

- Rail items can show a small status dot, used by Sync to show if the desktop is connected to its server
- Plugins can replace the status badge in the dashboard's host list, used by Host Metrics to show failing health checks
- Customize sidebar can turn off alternating row colors in the host list (needs Termix 26.10.6)
- Removing someone from a shared folder offers to remove their access from the folder's hosts too (needs Termix 26.10.6)
- A folder with hosts shared with you has a Set personal login button, so you pick your own login once for all of them (needs Termix 26.10.6)

### Fixed

- On the desktop, a host shared with you opens read only with a note to change it on the server, instead of failing with Error saving host
- A failed host save shows the reason the server gave
- Compact host rows give the name its own full line, so long names are not cut short or covered by the row actions

## 1.0.2

### Fixed

- Cloning a host now keeps which settings are custom and which follow the defaults

## 1.0.1

### Fixed

- The bottom of the app was cut off under the title bar in the desktop app

## 1.0.0

### Added

- A place in the profile row of the app rail where a plugin can put an account switcher
- The Termix layout as a plugin: icon rail, sidebar, tab bar, right dock, mobile bottom bar, Dashboard, Manage, Settings and the command palette
- The host list and the Dashboard as components other plugins can place
- Admins set the app name, tagline and logo here. An existing setup keeps its branding
- Hosts a plugin manages show a lock and open read only, and Add host is hidden when hosts can only come from that plugin
- Admins can redirect HTTP to HTTPS from the general admin settings
- The first run steps for the preset and for theme, accent, font and language
