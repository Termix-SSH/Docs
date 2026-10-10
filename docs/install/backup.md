---
title: Backup and restore
description: Back up your data and get it back.
---

# Backup and restore

All of Termix's data lives in one folder: `/app/data` in Docker, `db/data` when you run from source.

## What is in it

| Path                  | What it is                                                                     |
| --------------------- | ------------------------------------------------------------------------------ |
| `db.sqlite.encrypted` | The database, encrypted. Only with SQLite.                                     |
| `.env`                | The keys Termix made on first boot. Without them the database can't be opened. |
| `plugins/`            | Installed plugins and their files.                                             |
| `ssl/`                | The HTTPS certificate, if you use one.                                         |
| `session_recordings/` | Recordings, if you use [Session Recording](/plugins/session-recording).        |
| `backups/`            | Copies Termix made before a big upgrade.                                       |

## Back up

The safe way is to stop Termix and copy the whole folder.

```bash
docker compose stop termix
docker run --rm -v termix-data:/data -v "$PWD":/backup alpine \
  tar czf /backup/termix-$(date +%F).tgz -C /data .
docker compose start termix
```

Keep the backup somewhere safe. It holds the keys that decrypt your passwords and SSH keys.

With PostgreSQL or MySQL, back up the database with your usual tools too, for example `pg_dump`. The data folder still holds the keys, so back it up as well.

## Restore

Stop Termix, put the folder back, and start it.

```bash
docker compose stop termix
docker run --rm -v termix-data:/data -v "$PWD":/backup alpine \
  sh -c "rm -rf /data/* /data/.[!.]* && tar xzf /backup/termix-2026-10-07.tgz -C /data"
docker compose start termix
```

## Export from the app

There are also exports inside Termix. They are handy, but they are not a full backup.

- **Settings**, **Database**: admins download a portable `.sqlite` copy of all hosts, credentials and settings. It can be imported on any database type.
- **Settings**, **Data and sync**: each user can export and import their own hosts, credentials and settings.
- **Manage**: export hosts to JSON. See [import and export](/guide/import-export).

These exports have your secrets in them, decrypted. Treat them like passwords.
