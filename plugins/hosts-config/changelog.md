---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/hosts-config/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "hosts-config"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- Load hosts, folders and sharing from the YAML or JSON file named by TERMIX_HOSTS_CONFIG
- Hosts from the file are read only in Termix and keep their id across reloads
- Secrets from env vars, files or saved credentials by name
- Per host plugin switches and settings
- Reload when the file changes or from the admin settings, with every problem listed
- Strict mode that blocks adding hosts by hand
