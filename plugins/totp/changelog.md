---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/totp/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "totp"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- On Termix 26.11.2 and later the sign in code step is drawn by Termix itself, and the settings screen runs in a sandboxed frame

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Two-factor sign in with a code from any authenticator app
- Each code works once, and wrong codes are rate limited
- Backup codes in case you lose your phone
- More than one device
