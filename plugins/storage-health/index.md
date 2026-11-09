---
title: "Storage Health"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/storage-health"
description: "Watch drive and array health over SSH: SMART, NVMe, ZFS, mdadm, btrfs and LVM, with history, alerts and self tests."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Storage-Health/edit/main/docs/index.md"
plugin_id: "storage-health"
plugin_version: "1.0.0"
plugin_latest: true
---
Storage Health shows the health of the drives, pools and arrays on your hosts. It reads SMART and NVMe data, ZFS pools, mdadm arrays, btrfs filesystems and LVM thin pools, keeps a history, and alerts you when something starts to fail.

Termix reads each host over SSH, the same way the terminal does. Nothing is installed by this plugin.

## Set up a host

1. Install the tools you need on the host. `smartmontools` reads SMART for SATA, SAS and NVMe drives. `nvme-cli` is only a fallback for NVMe. ZFS, mdadm, btrfs and LVM need no extra package if you already use them.
2. Open the host in Manage and turn on Storage Health.
3. Make sure the SSH user can run `sudo` without a password, or log in as root. SMART, ZFS and LVM need root to read.
4. Save. Open the host's menu and pick Storage.

Without root, Storage Health still shows what the login user can read, and tells you that some drives may be missing.

## What you see

- Drives: every disk with its health, temperature, wear and power on time. Open one for the SMART attributes, a short or long self test and charts. Drives that are asleep are not woken.
- Pools and arrays: ZFS pools, mdadm arrays, btrfs filesystems and LVM thin pools. Start or stop a scrub from here. For an mdadm array this runs a check.
- Events: every problem found and cleared, self tests and scrubs, newest first. The last 300 are kept per host.
- Settings: alerts, how often to read, and the heat, wear and thin pool limits.

Termix reads each host every 15 minutes by default. History keeps 24 hours as read and 30 days as hourly averages.

## Alerts

Alerts go to the user who first opened the host's Storage tab, through the Alerts plugin and the channels they set up. You get one alert when a problem starts, and a note when a critical one clears.

Termix alerts for a failed SMART check, SMART warnings (bad or pending sectors, media errors, low spare blocks), an NVMe critical warning, heat, wear, a pool that is not online, pool or btrfs errors, a degraded array, a thin pool that is filling up, and a host that cannot be read three times in a row. A rebuild is logged but does not alert.

## Self tests and scrubs

Self tests and scrubs need edit access to the host, the Run tests and scrubs permission, and a host that is not set to read only. A scrub reads every block and can slow the disks for hours, so Termix asks first.

## Host settings

- Storage Health: turns the plugin on for the host.
- Use sudo: run the checks with passwordless sudo. On by default.
- Read only: blocks self tests and scrubs from Termix.

## Permissions

- Use Storage Health: see health on hosts you can access.
- Run tests and scrubs: start SMART self tests and scrubs.

## Dashboard card and Host Metrics

The Storage health dashboard card lists every watched host, worst first. Host Metrics gets a Storage health manager card when both plugins are on for the host.

## For other plugins

Storage Health sends the events `storage-health.degraded`, `storage-health.recovered`, `storage-health.smart-failing` and `storage-health.raid-degraded` with the host id. Automations can start a flow from them. Other plugins can ask the `storage-health.access` service for the latest status of a host.
