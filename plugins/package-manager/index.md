---
title: "Packages"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/package-manager"
description: "See and install updates on your hosts, search, install and remove packages, and read the package history."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Package-Manager/edit/main/docs/index.md"
plugin_id: "package-manager"
plugin_version: "1.2.0"
plugin_latest: true
---
Packages manages the software on a Linux host over SSH. Each host gets its own tab for updates, installed packages, search, history and repositories.

## Set up a host

1. Make sure Termix logs in to the host as root, or as a user with passwordless sudo, or save the host's Sudo Password.
2. Open the host in Manage and turn on the Packages setting.
3. Open the host menu and choose Packages.

It works with apt, dnf, yum, zypper, pacman and apk, and with Flatpak, Snap and Homebrew next to them. Without root or sudo you can still see everything, but nothing can be changed.

## What you can do

- Updates: see what can be updated, with security updates first. Update one, pick some or upgrade everything.
- Refresh index: download the newest package lists. Updates are read from the list the host already has.
- Installed: browse and filter installed packages, remove them or hold them at their version.
- Search: find a package in the host's repositories and install it.
- History: read recent package changes.
- Repositories: see where the host installs from. Change these on the host.

A notice shows when the host needs a reboot to finish an update.

## Flatpak, Snap and Homebrew

When a host has Flatpak, Snap or Homebrew, a Package manager picker shows above the views. Pick one to see its updates, installed apps, search, history and remotes or taps, and to install, update, remove or hold. A host with only these and no system package manager opens on the first one.

- Flatpak: system wide apps and runtimes. Hold uses `flatpak mask`.
- Snap: Hold uses `snap refresh --hold`. Snaps that need classic confinement can't be installed here.
- Homebrew: always runs as the user that owns the Homebrew folder, never as root. Hold uses `brew pin`. Search shows formula names only.

Pending updates from all of them count toward the dashboard card and the update alerts.

## Long actions

Installs and upgrades can take several minutes. The tab shows that one is running and then shows the end of its output. On Debian and Ubuntu, config files you changed are kept.

## Dashboard card

The Package updates card lists pending updates on every host with Packages on, with security updates and reboots marked. Each host is checked once an hour unless you press Check again.

## In Host Metrics

With [Host Metrics](/plugins/host-metrics) installed, Packages fills its Packages card.

## Limits

- Arch only supports full upgrades, so single updates are turned off there.
- Security updates are marked on apt, dnf and yum only.
- Holds work on apt, dnf, yum and zypper. dnf and yum need the versionlock plugin.
- History is not available on apk or Homebrew, and Snap has no repository list.
- Reboot detection works on Debian, Ubuntu and zypper hosts, and on RHEL hosts with `needs-restarting`.
