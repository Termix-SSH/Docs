---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/backups/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "backups"
plugin_version: "1.2.0"
plugin_latest: true
---
## 1.2.0

### Added

- MongoDB, Redis and SQL Server backups, next to MySQL, PostgreSQL and SQLite. Pick a saved login from the Databases plugin or type one in
- Browse all snapshots of a repository, also ones Termix did not make, and restore or download from them on any host you can edit
- Mirrors: a job can copy each backup to up to 5 more repositories right after it is saved, with the same keep rules
- Per job alert choices: alert on warnings, alert on every good backup, and which of your alert channels get the job's alerts
- Retries: a failed backup can be tried again up to 10 times with a wait between tries, and the failure alert waits for the last try
- Run restic on another host: Termix copies the job's files to it over SSH, so the job's host needs no restic and no access to the repository. Restores onto hosts without restic go the same way

### Fixed

- The plugin no longer lists the homepage widget twice in its features

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
