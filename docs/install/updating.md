---
title: Updating
description: How to update Termix and its plugins.
---

# Updating

Termix and its plugins update on their own schedules. Core updates come with a new image or app. Plugin updates come from the plugin registry, inside Termix.

## Core

Back up your data first. See [backup and restore](/install/backup).

### Docker

```bash
docker compose pull
docker compose up -d
```

If you pinned a version tag, change the tag first.

### Desktop and mobile apps

The apps tell you when a new version is out. Update through wherever you installed them: the app store, your package manager, or a new download.

The apps and the server should be on the same version. When they are not, the app shows an update screen.

## Plugins

Admins update plugins in the **Plugins** tab, under **Updates**. You can:

- Update one plugin, or all of them.
- Turn on auto update for a plugin.
- Pin a plugin to a version so it stays there.

An update that asks for new [capabilities](/develop/reference/capabilities) never installs on its own. It waits for you to review it. See [managing plugins](/guide/plugins).

## Turn off update checks

In **Settings**, **Appearance**, turn on **Disable Update Checks** to stop the update notices.

## Coming from 2.8 or older

26.10 can only open a database that 2.9 has opened at least once. If you are on 2.8 or older, update to 2.9 first, start it once and sign in, then update to 26.10.

2.9 moved most features into plugins. When it started for the first time, it copied each feature's data into its plugin. Some of that data, like TOTP secrets and RDP passwords, is encrypted with a key that only opens when that user signs in. Ask your users to sign in to 2.9 once so nothing is left behind.

Before 2.9 changes the database, it saves a copy of your data folder in `backups/` inside it.
