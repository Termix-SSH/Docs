---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/opkssh/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "opkssh"
plugin_version: "1.0.2"
plugin_latest: true
---
## 1.0.2

### Changed

- The plugin name and description show in your language

### Fixed

- Signing in never showed the browser dialog when the config had a default_provider or a single provider, since OPKSSH then skips its provider chooser

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Adds the OPKSSH auth type to hosts
- Sign in with your identity provider in the browser
- Certificates last 24 hours, so you sign in once a day
- Uses a pinned, checksum verified `opkssh` release
