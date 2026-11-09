---
title: "Cron"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/cron"
description: "See, add and run cron jobs on your hosts, with a schedule preview and the system cron files."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Cron/edit/main/docs/index.md"
plugin_id: "cron"
plugin_version: "1.0.0"
plugin_latest: true
---
Cron shows and edits the cron jobs on a Linux host over SSH. Each host gets its own tab with its jobs, the system cron files and the cron log.

## Set up a host

1. Open the host in Manage and turn on the Cron setting.
2. Open the host menu and choose Cron.

Your own crontab needs no extra rights. Other users' crontabs and `/etc/cron.d` need a root login, passwordless sudo or the host's saved Sudo Password.

## What you can do

- Jobs: add, change, turn off, delete and run jobs in a crontab.
- Other users: pick another user's crontab. This needs edit access to the host.
- Edit as text: change the whole crontab at once. The host checks it and keeps the old one if it has errors.
- System: see `/etc/crontab`, `/etc/cron.d` and the hourly, daily, weekly and monthly scripts, and add or change files in `/etc/cron.d`.
- Logs: read the cron log from the journal, `/var/log/cron` or syslog.

## Schedules

Type a schedule or press a preset. The form shows the schedule in plain words and its next run times in the host's time zone. Words like `@daily` and `@reboot` work too.

## Turning a job off

An off job stays in the crontab as a comment, so you can turn it back on later. A single comment right above a job is shown as its label.

## Run now

Run now runs the job's command once as the crontab's user and shows its output. It stops after 2 minutes. Cron's own environment can differ from this run, so a job can work here and still fail under cron.

## Files in /etc/cron.d

Every line is checked before saving, and each job must name a user. The old file is copied to `/var/lib/termix-cron/backup`. File names can only use letters, numbers, `-` and `_`, because cron skips anything else.

## In Host Metrics

With [Host Metrics](/plugins/host-metrics) installed, Cron fills its Cron card.

## Limits

- Next run times use the host's current UTC offset, so they can be an hour off across a daylight saving change.
- Actions from other plugins and the assistant only reach the login user's crontab.
- Systemd timers are not shown here. The [Services](/plugins/service-manager) plugin manages them.
