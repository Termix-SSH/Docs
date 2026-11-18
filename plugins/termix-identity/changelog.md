---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/termix-identity/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "termix-identity"
plugin_version: "1.1.1"
plugin_latest: true
---
## 1.1.1

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- The ID badge on published credentials is a plain value the credential list draws, with no frame per row (needs Termix 26.11.2)

### Fixed

- The public CA key link works without signing in

## 1.1.0

### Added

- A certificate issued for a key that came from a saved login is stored on that login, so the next connection uses it

### Changed

- Needs Termix 26.11.1 or newer

### Fixed

- Generated SSH keys always work. About 1 in 256 ed25519 keys used to come out unreadable

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Publish your public keys under a handle
- Add your keys to any server with one command
- Generate new keys or import saved ones
- Your own SSH certificate authority
