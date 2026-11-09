---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/session-recording/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "session-recording"
plugin_version: "1.2.0"
plugin_latest: true
---
## 1.2.0

### Added

- List a host's recordings through Termix actions, so they show on the host page
- Recording storage tile and a recordings list on the host page, open to the assistant and MCP
- Admins can make recording required on every host or only on privileged ones. Users can't stop a required recording
- New recordings are encrypted on disk, and each one keeps a fingerprint you can check for changes
- Auditors, with the new Audit every session permission, see everyone's recordings and who opened each one
- Every time a recording is watched or downloaded it goes to the audit log, and auditors can get an alert
- Put a recording on hold so it is never deleted
- Live tab: auditors see every open SSH and remote desktop session, watch it read only and end it
- Rules tab: alert auditors, or end the session, when a typed or printed line matches a rule. Starter rules come turned off
- A host setting to put the time in front of each line of a text download

### Changed

- Needs Termix 26.11.1 or newer
- Settings use the Termix tile look
- Admins can delete any recording, not only their own
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

## 1.1.1

### Fixed

- RDP, VNC and Telnet recordings play instead of showing a black screen
- Remote desktop recordings fit the panel when you press play

## 1.1.0

### Added

- Recent recordings dashboard card: your latest recordings, one click to play one

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Fixed

- Recordings broke after upgrading from 2.8 because the old table had no username column

## 1.0.0

### Added

- First release
- Record SSH, RDP and VNC sessions
- Play recordings back at any speed
- Download a recording as a file or plain text
- Old recordings are removed after a number of days you choose
- Only admins can delete a recording
