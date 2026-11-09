---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/classic-layout/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "classic-layout"
plugin_version: "1.1.2"
plugin_latest: true
---
## 1.1.2

### Added

- Pick what a click on a host opens, such as the terminal, Docker or the host page. Set a default in Customize sidebar and change it for one host from its menu
- Host tools can open inside the host page instead of their own tab, set in Customize sidebar. Their own tab stays the default
- Only the host page, in the same setting, takes the connect buttons off host rows so a click on a host opens its page
- Pick which buttons show on one host's row from its menu. Customize sidebar keeps the default for every host
- The host menu lists the host's actions, when Operations Center is on
- API keys can be limited to reading or running actions
- The dashboard is a grid of tiles you can move and resize freely, with as many columns as you like. Your old layout moves over on its own
- Until you arrange it, the dashboard fills the screen down to the bottom
- The dashboard's add list has a search, filters and groups, and can add a plugin's status or action as its own tile, like Operations Center's
- A setup step to pick how host rows work, connect buttons, buttons plus a host page button, or only the host page, when a plugin offers a host page
- The dashboard layout is saved with your account, so it follows you to every browser. A layout saved in this browser moves over on its own
- A dashboard you never arranged puts Needs attention first, when Operations Center is on
- Admin setting to stop anyone saving passwords and keys, with a note in the host and credential editors (Termix #1753)
- Desktop app: keep a credential on this device only and use it as your login for a shared host or folder (Termix #1749)

### Changed

- Settings, the host and login editors and the dashboard use the shared tile look, with lines between sections instead of separate boxes
- Keybindings settings use one list with a line between rows instead of separate boxes
- The SSL certificate status is a plain row instead of a box
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- Closing the command palette puts focus back on the terminal, so you can keep typing
- Folder host counts now include sub-hosts, so a folder no longer shows more online hosts than it has
- A host's status tooltip no longer covers its right click menu
- The session timeout box in admin settings is as tall as its Save button
- Recent activity in quick search opens the host you used, not another host with the same or its old name
- A compact host row with the address and tags turned off fits on one line, with its buttons next to the name
- The Manage tab shows the list or the editor, not both squeezed together, when the tab is narrow, like beside the sidebar on a tablet
- The clear buttons in the folder and parent host pickers have a name and work from the keyboard
- Protocol switches in the host editor have names for screen readers
- Folders in the Manage tab start open even when the list loads after the tab opens
- Picking another credential or defaults level while one is loading in the Manage tab no longer opens the first one
- Dashboard host status and recent activity rows open with Enter or Space
- Leaving the keybinding field without pressing a key stops recording
- Clearing recent activity on the dashboard says so when it fails
- Tab bar, keybinding and accent color buttons have names for screen readers

## 1.1.1

### Added

- Plugins can add buttons to the right of the tab bar, next to split view. SSH Terminal puts its terminal tools there

### Fixed

- The side rail no longer opens behind Customize sidebar and other panels when you hover over it

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
