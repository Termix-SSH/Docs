---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/reverse-proxy/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "reverse-proxy"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Added

- Reverse proxy dashboard card: how many routes are running, the ones that are not, and certificates by expiry

## 1.0.0

### Added

- TCP, UDP, HTTP and HTTPS routes for your hosts, managed from each host
- Host settings to turn routes off, set a target address and pick the default login
- Let's Encrypt, self-signed and uploaded certificates, renewed automatically, plus a setting for another ACME certificate authority
- Termix login in front of web routes
- WebSocket support, HTTP to HTTPS redirect, custom headers and IP allow and block lists
- A Reverse Proxy tab with every route, its status, traffic and certificates
