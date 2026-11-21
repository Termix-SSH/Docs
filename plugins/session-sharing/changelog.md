---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/session-sharing/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "session-sharing"
plugin_version: "1.2.2"
plugin_latest: true
---
## 1.2.2

### Changed

- Sharing opens as a panel beside the terminal or remote desktop instead of a window over the whole screen (needs SSH Terminal 1.4.2 or Remote Desktop 1.4.3)

### Fixed

- Sharing a terminal works again: the Create link button no longer stays greyed out
- Share links open again, and people without an account see the shared terminal (needs Termix 26.11.3 and SSH Terminal 1.4.2)

## 1.2.1

### Changed

- The participants list over a terminal only loads while someone else is watching, which saves memory with many terminals open
- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- The shared terminal and remote desktop draw in their own frames (needs Termix 26.11.2)

### Fixed

- Share and guest links are stored as hashes, never as the link itself. Existing links keep working

## 1.2.0

### Added

- List and revoke active session shares through Termix actions, and see how many are open as a status tile
- Show a host's active shares on the host page

### Changed

- Needs Termix 26.11.1 or newer
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- The sharing dashboard card scrolls as one list instead of squeezing shares and rooms into two small boxes

## 1.1.0

### Added

- Sharing dashboard card: your live shares on every host with revoke, and your meeting rooms

## 1.0.2

### Added

- Public URL for guest links, an admin setting for servers that guests reach at a different address, like a public proxy in front of a VPN-only server

### Changed

- The plugin name and description show in your language

### Fixed

- Revoking a remote desktop share now disconnects the viewers who joined through it, and ending a shared remote desktop session ends it for everyone
- Presenting an RDP, VNC or Telnet host in a meeting room never started when Remote Desktop used guacd

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Share terminal, RDP, VNC and Telnet sessions by link or with a Termix user
- Read-only or read and write, with links that expire or can be revoked
- Meeting rooms where a presenter shows a session and can hand over control
- Guest links for people without an account
