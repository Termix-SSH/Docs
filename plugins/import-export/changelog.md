---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/import-export/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "import-export"
plugin_version: "1.3.0"
plugin_latest: true
---
## 1.3.0

### Added

- Import from another app: hosts from Termius or another CSV, MobaXterm, PuTTY, SecureCRT and mRemoteNG, with their folders, RDP and VNC hosts and saved mRemoteNG passwords. You see what was found before anything is added
- Back up to object storage: your hosts with their passwords and keys, locked with a passphrase, go to an S3 or other bucket every day, every week or when you press Back up now. Old backups are removed past the number to keep, and any backup can be restored from the same screen. Needs the Object Storage plugin 1.2.0

### Fixed

- The Import / Export menu and its views work again on Termix 26.11.2 and later instead of showing an error (needs Classic Layout 1.2.0). Importing a JSON or SSH config file now opens a view with a Pick file button, and Download Sample sits there too

## 1.2.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it

## 1.1.0

### Added

- Export hosts without secrets and import an SSH config as operations

## 1.0.1

### Added

- Exports keep each host's color and icon with the tags

## 1.0.0

### Added

- Import hosts from a Termix JSON file or an SSH config file, skipping or overwriting hosts that already exist
- Export all or some hosts, choose the fields to include, and share an export without secrets
- Export selected hosts from the Hosts panel
- Download a sample import file
