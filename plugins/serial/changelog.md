---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/serial/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "serial"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Its screens run in a sandboxed frame. In the browser, Termix asks for the serial port and the plugin only gets the port you pick
- In the browser, the serial tab waits for you to click Reconnect before the port picker opens

### Fixed

- Copy and paste in the serial terminal with Ctrl+Shift+C and Ctrl+Shift+V, or Cmd on macOS

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Serial console to a router, switch or other device plugged into your computer
- Set the baud rate, data bits, stop bits and parity
- The desktop app talks to the device directly
- Browsers use the Web Serial API (Chrome, Edge or Firefox 151 and newer)
