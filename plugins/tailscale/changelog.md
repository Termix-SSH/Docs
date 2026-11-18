---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/tailscale/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "tailscale"
plugin_version: "1.3.0"
plugin_latest: true
---
## 1.3.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Terminals load its approval prompt only for hosts that use it or go through a jump host, so they open faster and use less memory
- Form fields use the same background as the rest of Termix

## 1.2.0

### Added

- Connect and disconnect Tailscale on a host through Termix actions, and whether it is connected as a status tile
- Headscale servers list their devices too: pick Headscale as the control server in settings

### Changed

- Needs Termix 26.11.1 or newer
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

## 1.1.0

### Added

- Tailnet dashboard card: how many devices are online and the list, online first

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Add tailnet devices as hosts in a couple of clicks
- Connect with Tailscale SSH, with no credentials stored
- Works with Headscale
- A Tailscale card in Host Metrics
