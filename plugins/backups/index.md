---
title: "Backups"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/backups"
description: "Back up folders, databases and Docker data on your hosts with restic, then browse, download and restore."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Backups/edit/main/docs/index.md"
plugin_id: "backups"
plugin_version: "1.2.0"
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
- Databases: MySQL, MariaDB, PostgreSQL, SQLite, MongoDB, Redis and SQL Server. Pick a saved login from the [Databases](/plugins/databases) plugin or type one in. Leave the list of databases empty to dump all of them. Dumps land in the snapshot under `/var/lib/termix-backups/staging/<job>/databases`.

| Engine     | Needs on the host                           | What is saved                                                                     |
| ---------- | ------------------------------------------- | --------------------------------------------------------------------------------- |
| MySQL      | `mysqldump` or `mariadb-dump`               | One `.sql` file                                                                   |
| PostgreSQL | `pg_dump`                                   | A `.dump` per database, or one `.sql` of all                                      |
| SQLite     | `sqlite3`                                   | A `.sqlite` copy of each file                                                     |
| MongoDB    | `mongodump` (MongoDB Database Tools)        | A gzipped `.archive.gz` per database, or one of all                               |
| Redis      | `redis-cli`                                 | One `.rdb` snapshot of the whole instance                                         |
| SQL Server | `sqlcmd` (in `PATH` or `/opt/mssql-tools*`) | A `.bak` per database, made with `COPY_ONLY` so it leaves your backup chain alone |

Passwords never show up on a command line: MongoDB reads it from a private temp file, Redis from `REDISCLI_AUTH` and SQL Server from `SQLCMDPASSWORD`. MongoDB logins use the `admin` database to sign in.

SQL Server writes its backups itself, so set SQL Server backup folder to a folder it can write that the host sees at the same path. The default is `/var/opt/mssql/backup`. When SQL Server runs in Docker, mount a host folder into the container at the same path, like `/srv/mssql-backup:/srv/mssql-backup`, and make it writable for the container's `mssql` user.

- Docker: volumes and compose stacks. A stack backs up its folder and its named volumes. Turn on Stop stacks during the backup to stop them first. Only the services that were running are started again.

### Schedule and keep

Pick By hand, Daily, Weekly or a custom cron, and a time zone. Termix starts scheduled jobs, so a job can't run while Termix is down. A time missed that way runs once when Termix is back. If a job is still running at its next time, that time is skipped.

Keep says which snapshots to hold on to, such as 7 daily and 4 weekly. After each backup, older snapshots of that job are removed and their space is freed. All zeros keeps everything.

### Mirrors

Turn on other repositories under Mirrors to keep the same backup in more than one place. After each backup, the host copies the job's snapshots from the main repository to each mirror with `restic copy`, so every place holds the very same snapshots, and removes old ones there with the same keep rules. A mirror that doesn't exist yet is set up on the first copy. If a copy fails, the backup is still saved and the run ends with warnings, and the next run copies what was missed.

Some pairs can't mirror each other, because restic opens both at once: two S3 repositories need the same access key and region, two rclone repositories need different remote names, and a folder mirror must be on the job's host.

### Run restic on another host

By default restic runs on the job's own host. Pick another host under Run restic on when a host is too small to run restic, should not have it installed, or can't reach the repository.

Termix then reads the job's files over SSH and passes them to the picked host, which keeps a copy of them and backs that copy up with restic. The two hosts never connect to each other, and only the picked host needs restic, the repository and any rclone setup. The job's host only needs tar and a root login or passwordless sudo. Database dumps, Docker stacks and the commands before and after still run on the job's host.

- With GNU tar on both hosts, only files that changed since the last backup are sent. Otherwise every file is sent each time.
- The picked host needs room for a full copy of the job's files, in `/var/lib/termix-backups/pull`.
- Snapshots keep the job host's paths and name, so browsing, downloads and restores look the same as for any other job.
- A restore to a host without restic goes through Termix the same way, from the host that runs restic.
- The copy runs inside Termix, so a backup that is still copying fails if Termix restarts. Retries start it again.
- You need edit access to both hosts.

### Retries

Set Retries after a failed backup to try a failed backup again, up to 10 times, with Minutes between retries in between. The job list shows when the next try starts. The failure alert is only sent once the last try fails. A stopped backup is not retried.

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

A restore can go to a folder, where files keep their full path inside it, or back to where they were. It can also go to another host you can edit, as long as that host has restic and can reach the repository. For a job that runs restic on another host, a restore to any host but that one goes through Termix, so the target needs only tar. A folder repository can only be restored on its own host.

To reach snapshots that no job made, such as an existing restic repository you added by its address and password, press Browse all snapshots on the repository in the Repositories list. Pick a host to read it from: restic runs there, so it needs restic and must reach the repository. A folder repository is always read on its own host. Snapshots made outside Termix are marked Not from Termix, and any snapshot can be browsed, downloaded or restored to any host you can edit.

Database dumps are restored as files. Load them yourself with `mysql`, `pg_restore` or `psql`, `mongorestore --archive --gzip`, `RESTORE DATABASE` in `sqlcmd`, or use the `.sqlite` copy. For Redis, stop it, put the `.rdb` file in its data folder as `dump.rdb` and start it again.

## Alerts

With [Alerts](/plugins/alerts) on, a job's owner hears about a failed backup, a backup with warnings, and when a failed job works again. Set Days without a backup to also get an alert when a job has had no good backup for that long.

Each job picks what it alerts on: failures, warnings, and every good backup. Under Send to, pick which of your alert channels get the job's alerts, such as one email address or a webhook. With none picked they go to all your channels. Channels like email, webhooks (which can reach Gotify or Apprise), ntfy, Telegram and Discord are set up in Alerts.

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
