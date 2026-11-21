---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/homepage/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "homepage"
plugin_version: "1.2.2"
plugin_latest: true
---
## 1.2.2

### Fixed

- The Weather widget loads again on Termix 26.11.2 and later, thanks to ZacharyZcR

## 1.2.1

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- The host status widget draws numbers from other plugins as plain values, with no extra frame per widget (needs Termix 26.11.2)
- Widgets from other plugins and the terminal widget draw in their own frames over the page, so they can't reach Homepage or each other, and still move and resize while you customize (needs Termix 26.11.2)
- Pictures and icons from other sites load through Termix, so the page never contacts those sites itself (needs Termix 26.11.2)
- The embed widget shows its page in a view Termix draws, and asks to open desktop windows for it (needs Termix 26.11.2)

### Fixed

- The API docs list the path parameters and answers of every route

## 1.2.0

### Changed

- The homepage is now a tile grid like the dashboard, with no zoom or pan. Open Customize to move, resize, add and remove widgets
- Layouts from the old canvas move over on their own the first time you open the homepage
- Folders are now headings for a group of widgets
- Needs Termix 26.11.1 or newer
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- A ping widget site that does not answer shows as down without an error in the browser console
- RSS feeds on a host in the admin private address list load, like ping and link widgets already did

## 1.1.0

### Changed

- The dashboard's recent activity list is stored by this plugin instead of Termix itself. Existing entries are kept
- Needs Termix 26.10.3 or newer

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Drag, resize and arrange widgets on a canvas
- Widgets for host status, pings, service links, bookmarks, search, clocks, calendars, weather, RSS, notes, images, iframes, custom APIs and a live terminal
- Other features add their own widgets, like Docker, Tunnels and Host Metrics
- Service links and a homepage preview on the dashboard
- Syncs between the desktop app and a Termix server
