---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/alerts/v/1.4.0-beta.2/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "alerts"
plugin_version: "1.4.0-beta.2"
plugin_latest: false
---
## 1.4.0

### Added

- Push notifications on your phone. Turn them on in the Termix app and the phone shows up as a Mobile app channel with its own rule
- Phones that stop taking notifications are turned off on their own

## 1.3.1

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- The settings button in Alerts opens the Alerts page in Settings

### Fixed

- Updated nodemailer to a release with security fixes
- Saved channel tokens, webhook URLs and header values stay on the server. Editing a channel shows them as saved, and leaving them empty keeps them

## 1.3.0

### Added

- Send yourself an alert through Termix actions, so rules, rollouts and the CLI can notify you, and see unread alerts as a status tile
- Open Alerts from the command palette

### Changed

- Needs Termix 26.11.1 or newer
- The Alerts tab has the Termix page header and fills the width of the tab
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- Password fields with the show button are the same height as the other fields next to them

## 1.2.0

### Added

- Telegram channels: alerts go to a chat, group or channel through your own bot
- Webhook channels can send your own JSON body with placeholders like {{title}} and {{message}}, for services like Mattermost

## 1.1.0

### Added

- Alerts dashboard card: your inbox on the dashboard, with mark as read

## 1.0.2

### Changed

- The plugin name and description show in your language

### Fixed

- ntfy alerts with non-ASCII titles or links arrived garbled or were not sent

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- One inbox for alerts from every part of Termix
- Popups for new alerts
- Send alerts to Discord, ntfy, email or a webhook
- Rules that pick which alerts go where
- Optional news from the Termix team, like security notices and releases, with buttons and a popup for important ones
- New accounts only get news from after they joined
