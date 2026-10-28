---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/web-endpoint/v/1.0.3/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "web-endpoint"
plugin_version: "1.0.3"
plugin_latest: false
---
## 1.0.3

### Changed

- In the desktop app, pages open in a native view instead of a sandboxed iframe, so sites that need storage, sign-in popups or their own cookies work

### Fixed

- The port field in the host editor can be cleared and retyped, so ports like 8006 can be set

## 1.0.2

### Changed

- In the browser, tunnel endpoints now open through Termix itself, behind your login, and the tunnel only listens on 127.0.0.1
- Bind Host is ignored unless an admin turns on Allow tunnels on other addresses
- The plugin name and description show in your language

### Fixed

- Setting Bind Host to an address like 0.0.0.0 published the endpoint's web UI to anyone who could reach the port, with no Termix login (GHSA-ccmp-2wpj-x458)

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Open a web UI in a Termix tab or its own desktop window
- Connect directly, or over an SSH tunnel through the host
- Embedded pages never see your Termix login
