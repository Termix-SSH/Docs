---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/backups/v/1.1.0/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "backups"
plugin_version: "1.1.0"
plugin_latest: false
---
## 1.1.0

### Added

- Extra restic options for a job, added to restic backup, like `--exclude-caches` or `--limit-upload 2048`
- Remove stale locks from a repository with a button next to Check, when a run that died left one behind

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Its process stops when it has nothing to watch or run, and Termix starts it again when there is work, which saves memory on Termix 26.11.2 and later

### Fixed

- Very long repository paths and addresses no longer keep the server busy for a long time

## 1.0.0

### Added

- Back up folders, MySQL, MariaDB, PostgreSQL and SQLite databases, and Docker volumes and stacks with restic
- Store backups in S3 compatible storage, a restic REST server, any rclone remote or a folder on the host
- Install restic on a host from the Backups tab
- Run jobs daily, weekly or on a custom cron, with commands before and after
- Remove old snapshots after each backup with a keep policy per job
- Watch a run live, stop it and read its log
- Browse snapshots, download a file or a folder, and restore to the same host or another one
- Alerts for failed backups and for jobs with no good backup for too long
- A warning when a backup goes to a folder on a host whose storage Storage Health reports as failing
- A dashboard card with every backup job, or one job per tile
- Termix actions to list jobs and snapshots, and to start or stop a backup
