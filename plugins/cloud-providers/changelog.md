---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/cloud-providers/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "cloud-providers"
plugin_version: "1.2.0"
plugin_latest: true
---
## 1.2.0

### Added

- Sync a cloud account through Termix actions, so a rule, rollout or the CLI can run it, and see failing syncs as a status tile
- A homepage widget with your cloud accounts and any that fail

### Changed

- Needs Termix 26.11.1 or newer
- The accounts page and its forms use the Termix page header and tile look
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- Password fields with the show button are the same height as the other fields next to them

## 1.1.0

### Added

- Cloud accounts dashboard card: each account with when it last synced or why it failed, and Sync now

## 1.0.0

### Added

- Cloud accounts for AWS (EC2 and Lightsail), Azure, Google Cloud, DigitalOcean, Hetzner, Linode, Vultr, Oracle Cloud, Scaleway and UpCloud
- Import chosen servers as hosts, or sync a whole account by hand or on a timer
- Hosts follow name and IP changes, with an option to keep, tag or delete hosts whose server is gone
