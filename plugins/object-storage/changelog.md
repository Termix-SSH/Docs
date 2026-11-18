---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/object-storage/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "object-storage"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Added

- More buckets on a login: add buckets by name that the service does not list, for keys that can reach a bucket but not list them

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Its process stops when it has nothing to watch or run, and Termix starts it again when there is work, which saves memory on Termix 26.11.2 and later

## 1.0.0

### Added

- A Buckets tab to browse and manage S3-compatible object storage
- Works with Amazon S3, MinIO, Cloudflare R2, Backblaze B2, Wasabi, DigitalOcean Spaces, Hetzner and other S3-compatible services
- Folders, upload (large files go in parts), download with resume, preview for images and text
- Copy, move, rename and delete for objects and whole folders
- Temporary links to share an object
- Create and delete buckets, and edit versioning, lifecycle rules, CORS, policy, tags, encryption and public access
- A daily size history for every bucket and alerts when a bucket passes its limit or a login stops working
- Actions for the assistant, rules and the CLI, and a dashboard card
