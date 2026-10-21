---
title: "Services"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/service-manager"
description: "Manage services, timers and logs on your hosts over SSH."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Service-Manager/edit/main/docs/index.md"
plugin_id: "service-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
Services lets you manage the services on your hosts from Termix. Start, stop and restart them, see why one failed, edit its unit file, check timers and read the logs, all from one tab.

It talks to your hosts over SSH, the same way the terminal does. Nothing is installed on the host.

## Set up a host

1. Open the host in Manage and turn on Services.
2. Save. Open the host's menu and pick Services.
3. To make changes, the SSH user must be root or have passwordless sudo. Check by running `sudo -n true` in a terminal on the host. Without it you can still look at services and logs the login user can read.

## What you can do

- Services: See every service with its state and whether it starts at boot. Filter by running, failed, stopped or start at boot, or switch to sockets, timers, targets, paths and mounts. Start, stop and restart from the list.
- Unit details: Open a unit to see its main PID, memory, CPU time, tasks, restarts, files and what it depends on, plus `systemctl status` and its recent log with a Follow button for live lines.
- Actions: Start, stop, restart, reload, start at boot or not, mask, unmask, clear a failed state and revert local changes.
- Edit unit: Change a unit with an override (a drop-in that keeps the package's file) or edit the full file. Check runs `systemd-analyze verify` first. Save checks again, keeps a `.termix.bak` copy and reloads systemd. Units in `/etc/systemd/system` can be deleted.
- New service: Fill in a name and a command, and Termix writes the unit, checks it, and starts it. Turn on Run on a schedule to make a timer instead.
- Timers: See every timer with its schedule, the last and next run and the service it starts. Run it now, or turn it on or off.
- Journal: Read the journal by unit, priority, time, boot and text, or show only kernel messages. Follow streams new lines live. Download what you see as a text file. Free space removes journal files older than 4 weeks.
- Log files: Browse the files in `/var/log`, search a file, follow it live and download it. Compressed old copies can be read too.
- Alerts: Press the bell on a service to get an alert when it fails or stops, and another when it runs again. Alerts go to your Alerts inbox and channels, like other Termix alerts.
- Terminal panel: Open the services panel beside an SSH terminal to start, stop and restart services and see a service's log while you work.

## Host settings

- Use sudo: Runs changes and protected reads with passwordless sudo when the login is not root. On by default.
- Read only: Lets people look at services and logs, but blocks every change.
- Log folders: The folders Log files may read, separated by commas. `/var/log` by default. Files outside them, or links that point outside them, are refused.
- Panel beside the terminal: Offers the services panel next to this host's terminal.

## Who can do what

Anyone with the Use Services permission and connect access to a host can look at its services and logs and set alerts for themselves. Changing anything needs edit access to the host. Every change is written to the audit log.

## OpenRC

On hosts with OpenRC (like Alpine) you can list services, start, stop and restart them and set them to start at boot. Unit files, timers and the journal need systemd. Log files work everywhere.

## Limits

- Linux hosts only.
- System services only. User services (`systemctl --user`) are not shown.
- Downloads give the last 4 MB of a file.
- Alerts check watched services every 30 seconds while Termix is running.
