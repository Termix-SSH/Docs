---
title: Updating
description: How to update Termix and its plugins.
---

# Updating

Termix and its plugins update on their own schedules. Core updates come with a new image or app. Plugin updates come from the plugin registry, inside Termix.

## Core

Back up your data first. See [backup and restore](/install/backup).

Then open the Plugins tab. When a newer Termix is out, it names every installed plugin that won't run on it, so you can update those first.

### Moving to 26.11.2

From 26.11.2 every plugin runs in its own process. Plugins made for plugin API 1 stay off until they are updated, and the new plugin versions only install on 26.11.2 or newer. So for this update, the order is the other way round:

1. Update Termix first.
2. Plugins that ship with your image come up on their new versions by themselves.
3. Open the Plugins tab. It names every plugin that is still off. Press Update all under Updates to bring back the official ones you installed yourself. Plugins with auto update on do this on their own within a few minutes.
4. A community plugin stays off until its author ships a version for plugin API 2.

Each running plugin now uses its own memory, about 40 to 60 MB. Plugins that only serve pages stop when idle. The Plugins tab shows the total, and [benchmarks](/install/benchmarks) has numbers for each image.

The example compose file also changed: it drops capabilities the server doesn't need and can run read only. Your old compose file keeps working. See [Docker](/install/server/docker) if you want the tighter setup.

### Docker

```bash
docker compose pull
docker compose up -d
```

If you pinned a version tag, change the tag first.

### Desktop app

From 26.10.1 the desktop app can update itself. Pick how in Settings, Updates, under Desktop app. The app also asks once, the first time you open it on 26.10.1.

- Automatic downloads new versions in the background and installs them the next time Termix restarts.
- Ask first tells you when a new version is out. You choose when to download it and when to restart. This is the default.
- Never does not check. You can still press Check now in Settings.

Stable installs only get stable releases. A beta install moves to the next beta, then to the stable release.

Not every install can replace itself:

| Installed with                                                                    | Updates                                                       |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Windows installer (`.exe`), 64-bit                                                | Itself                                                        |
| macOS disk image (`.dmg`) or Homebrew                                             | Itself                                                        |
| Linux AppImage or `.deb`                                                          | Itself. The `.deb` asks for your password to install          |
| Windows `.msi`, Chocolatey, portable `.zip`, 32-bit Windows, Linux `.tar.gz`, AUR | Tells you a new version is out and links to the download      |
| Linux Flatpak                                                                     | `flatpak update`. The app also tells you a new version is out |
| Mac App Store                                                                     | The App Store                                                 |

Homebrew still works, but since the app updates itself, `brew upgrade` skips Termix unless you add `--greedy`.

### Mobile apps

Update through the app store you installed from.

The apps and the server should be on the same version. When they are not, the app shows an update screen.

## Plugins

Admins update plugins in the Plugins tab, under Updates. You can:

- Update one plugin, or all of them.
- Turn on auto update for a plugin.
- Pin a plugin to a version so it stays there.

An update that asks for new [capabilities](/develop/reference/capabilities) never installs on its own. It waits for you to review it. See [managing plugins](/guide/plugins).

## Turn off update checks

In Settings, Appearance, turn on Disable Update Checks to stop the update notices.

## Coming from 2.8 or older

26.10 can only open a database that 2.9 has opened at least once. If you are on 2.8 or older, update to 2.9 first, start it once and sign in, then update to 26.10.

2.9 moved most features into plugins. When it started for the first time, it copied each feature's data into its plugin. Some of that data, like TOTP secrets and RDP passwords, is encrypted with a key that only opens when that user signs in. Ask your users to sign in to 2.9 once so nothing is left behind.

Before 2.9 changes the database, it saves a copy of your data folder in `backups/` inside it.
