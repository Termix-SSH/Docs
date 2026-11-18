---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/opkssh/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "opkssh"
plugin_version: "1.0.4"
plugin_latest: true
---
## 1.0.4

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Your Termix login cookies are no longer passed to the OPKSSH sign in page
- Its screens run in a sandboxed frame on Termix 26.11.2 and later
- Terminals load its sign in part only for hosts that use it or go through a jump host, so they open faster and use less memory

### Fixed

- Pins opkssh 0.19.2 instead of 0.16.0, which brings security fixes in the libraries it is built with

## 1.0.3

### Changed

- The page you land on after signing in now matches the Termix look and follows your theme and language

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
