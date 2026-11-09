---
title: "Backups"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/backups"
description: "Back up folders, databases and Docker data on your hosts with restic, then browse, download and restore."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Backups/edit/main/docs/index.md"
plugin_id: "backups"
plugin_version: "1.0.0"
plugin_latest: true
---
Backups keeps encrypted copies of folders, databases and Docker data from your hosts. It runs [restic](https://restic.net) on each host, and Termix starts the jobs, watches them and keeps the history.

## Set up

1. Make sure Termix logs in to the host as root, or as a user with passwordless sudo.
2. Open Backups in the rail, go to Repositories and press Add repository.
3. Save it, pick a host under Check and press Check and set up.
4. Open the host menu and choose Connect, then Backups. If restic is missing, press Install restic.
5. Press Add job, pick what to back up and when, then press Run now to try it.

restic 0.17 or newer is needed. The install uses apt, dnf, yum, pacman, apk or zypper. If that gives no restic or an older one, it downloads restic 0.19.1 from GitHub and checks it against a checksum kept in the plugin.

## Repositories

A repository is where backups are stored. Many jobs on many hosts can share one, and restic only stores each piece of data once. A repository belongs to the user who made it, and only they can see it or pick it for a job.

- S3 compatible: AWS, Backblaze B2, Cloudflare R2, Wasabi or anything else that speaks S3. Leave Endpoint empty for AWS.
- REST server: a [rest-server](https://github.com/restic/rest-server) address, with a user and password if it has one.
- rclone: any rclone remote. Run `rclone config` on your computer, then paste the lines of that remote from `rclone.conf`. Each host that uses it needs rclone: press Install rclone on this host in the repository's Check section.
- Folder on a host: a path on one host, best on a mounted disk. Only jobs on that host can use it, and a disk that dies with the host takes its backups with it.

Termix makes a strong repository password unless you type one. Press Show password and keep a copy somewhere safe. Without it the backups can't be read by anyone. Each time it is shown, a line goes in the audit log.

## Jobs

A job belongs to one host and writes to one repository. It can back up any mix of these:

- Folders and files: full paths, one per line, and restic patterns to skip.
- Databases: MySQL, MariaDB, PostgreSQL and SQLite. Pick a saved login from the [Databases](/plugins/databases) plugin or type one in. Leave the list of databases empty to dump all of them. Dumps land in the snapshot under `/var/lib/termix-backups/staging/<job>/databases`.
- Docker: volumes and compose stacks. A stack backs up its folder and its named volumes. Turn on Stop stacks during the backup to stop them first. Only the services that were running are started again.

### Schedule and keep

Pick By hand, Daily, Weekly or a custom cron, and a time zone. Termix starts scheduled jobs, so a job can't run while Termix is down. A time missed that way runs once when Termix is back. If a job is still running at its next time, that time is skipped.

Keep says which snapshots to hold on to, such as 7 daily and 4 weekly. After each backup, older snapshots of that job are removed and their space is freed. All zeros keeps everything.

### Commands

Before runs as root ahead of the backup, and if it fails the backup stops. After always runs, and `TERMIX_BACKUP_STATUS` holds `success`, `warning`, `failed` or `canceled`.

## While it runs

A backup runs on the host by itself, so it carries on if Termix restarts or the connection drops. Termix checks on it every 10 seconds, and Stop ends it. A stopped backup saves no snapshot.

A run ends as one of these:

- Done: all went well.
- Warnings: a snapshot was saved, but some files could not be read, a path does not exist, or removing old snapshots failed.
- Failed: no snapshot was saved. The log says why.
- Stopped: someone pressed Stop.

## Browse and restore

Open Snapshots on a host, or the snapshot button on a job, then open a snapshot to walk through its files.

- Download a file, or a folder as a zip file, from the button on its row. The whole download is held in the browser before it saves, so use a restore for very large folders.
- Tick items and press Restore, or press Restore all.

A restore can go to a folder, where files keep their full path inside it, or back to where they were. It can also go to another host you can edit, as long as that host has restic and can reach the repository. A folder repository can only be restored on its own host.

Database dumps are restored as files. Load them yourself with `mysql`, `pg_restore` or `psql`, or use the `.sqlite` copy.

## Alerts

With [Alerts](/plugins/alerts) on, a job's owner hears about a failed backup, a backup with warnings, and when a failed job works again. Set Days without a backup to also get an alert when a job has had no good backup for that long.

With [Storage Health](/plugins/storage-health) on the host, a backup to a folder on that host also warns you when its drives, pools or arrays have problems. The backup still runs, because a failing drive is a reason to back up, but keep a copy somewhere else too.

## Who can do what

The Use Backups permission opens the plugin. On top of that:

- Connect access to a host shows its jobs, runs and snapshots.
- Edit access to a host is needed to change jobs, run them, browse files, download and restore.

Scheduled jobs run as the user who last saved them. Downloads, restores and deleted snapshots go in the audit log.

## Where secrets go

Repository keys and passwords are sealed in Termix. They reach the host inside the script sent over SSH and stay in the environment of the running job. They are never on a command line or written to disk. Anyone with root on a host can read them while a job runs there, so only share a repository between hosts you trust the same.

## Limits

- Linux hosts only.
- Scheduled jobs only run while Termix is up.
- `restic check` and repository wide cleanup are not in the plugin yet.
- A repository with very many snapshots takes a while to list.
