---
title: "Process Manager"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/process-manager"
description: "See and control running processes, pm2 and supervisor apps on your hosts, read their logs and get alerts when they fail."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Process-Manager/edit/main/docs/index.md"
plugin_id: "process-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
Process Manager shows and controls what runs on a Linux host over SSH. Each host gets its own tab with its processes, its pm2 and supervisor apps, their logs and watches that alert you.

## Set up a host

1. Open the host in Manage and turn on the Process Manager setting.
2. Open the host menu and choose Processes.

Your own processes need no extra rights. Other users' processes, supervisor and the system journal need a root login, passwordless sudo or the host's saved Sudo Password. The host needs the procps version of `ps`, which most Linux systems have.

## Processes

The list refreshes every 5 seconds. Sort it, filter it by name, user or pid, or switch to the tree view. Press a process to see its command line, working directory, service, memory, listening ports, environment variable names and the files it writes.

From the detail you can:

- Send a signal: TERM, KILL, HUP, INT, STOP, CONT, USR1 or USR2. TERM and KILL ask first.
- Change its priority (nice). Values below 0 need root.
- Read its logs.

Signals check that the pid still runs the same program before they are sent, so a reused pid is never hit by mistake. Environment variable values are never shown.

## Apps

Process Manager reads pm2 and supervisor if they are installed. For each app you can start, stop, restart, reload (pm2) or clear its logs. pm2 apps can also be deleted. Supervisor has a Reread config button that runs `supervisorctl reread` and `update`.

pm2 runs per user. By default Process Manager uses the login user's pm2. To use another user's, set Run pm2 as in the host settings. This needs root or sudo.

## Logs

Pick a source and press Open:

- Service journal: the systemd journal of a service, such as `nginx.service`.
- Pid journal: everything the journal has for one process id.
- pm2 app: the output and error logs of an app.
- Supervisor process: stdout or stderr of a process.
- Open files: from a process's detail, any regular file it has open for writing. This needs edit access to the host, because it can show any file a process writes.

Press Follow to stream new lines. Filter the lines, pause, clear or download them. The browser keeps the last 5000 lines.

## Watches

A watch alerts you when something is wrong. Add one in the Watches view, from the bell next to an app, or from the plus next to a process.

- Goes down: no matching process, or the app is not online. Process watches match the program name or part of its command line.
- Restarts too often (pm2): more restarts than your limit in 10 minutes.
- CPU above: percent. For a process watch it adds up all matching processes.
- Memory above: percent for processes, MB for apps.

Alerts go to your notification channels and also fire an event that Automations can use. An app watch set to Restart it for me restarts the app when it goes down, at most three times an hour. Watches check every 30 seconds as the user who made them. A watch does nothing about something that is already broken when Termix starts.

## Side panel

On a terminal tab, the Processes panel shows the host's busiest processes beside the terminal and the journal of the one you pick. Turn it off per host with Show the side panel.

## In Host Metrics

With [Host Metrics](/plugins/host-metrics) installed, Process Manager fills its Processes card.

## Operations, Automations and the CLI

Process Manager declares its actions, status tiles and events, so they show up everywhere Termix lists actions:

- Operations Center: a host page tile, status tiles, and the Processes and Apps tables.
- Automations: use any action as a step, or react to the process down, app down and restart loop events.
- The assistant and MCP: read processes and logs and propose a signal or restart.
- The CLI: `termix ops list` and `termix ops run process-manager.app-restart`.

Killing a process and deleting a pm2 app are destructive and need a confirm.

## Mobile

The phone app shows the Processes tab through the plugin's web view.

## Limits

- Process Manager reads `ps`, so it does not show Windows or macOS hosts.
- Containers are not covered. The [Docker](/plugins/docker) plugin manages them.
- systemd units are managed by the [Services](/plugins/service-manager) plugin. A process's detail names its service and reads its journal.
- CPU and memory limits for a watch use the numbers `ps` and pm2 report, which can differ from other tools.
