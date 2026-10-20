---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/host-status/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "host-status"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- The online or offline dot in the host list now comes from this plugin
- Checks use the host's port and never log in, so devices with two factor logins get no prompt
- Hosts behind jump hosts are checked through the chain
- An open session or a working login counts as online
- Check interval setting for everyone, with a different interval per host
