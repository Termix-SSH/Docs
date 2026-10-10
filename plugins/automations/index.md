---
title: "Automations"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/automations"
description: "Run steps on your hosts on a schedule or when something happens."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Automations/edit/main/docs/index.md"
plugin_id: "automations"
plugin_version: "1.0.0"
plugin_latest: true
---
Automations run steps on your hosts when something happens. Restart a service when it stops answering, clean up a disk when it fills, wake machines in the morning, or send yourself an alert when a container dies.

An automation is one **trigger** and a list of **steps**. The trigger says when it runs. The steps say what it does.

## Make one

1. Open **Automations** from the sidebar and press **New Automation**.
2. Give it a name and pick a [trigger](triggers.md).
3. Add [steps](steps.md) with **Add step**.
4. Press **Test run** to try it. A test run goes through every step but doesn't touch anything outside Termix.
5. Turn on **Enabled** and save.

You can build an automation with the form, see it as a graph, or edit the JSON directly.

## Runs

The **Runs** list shows every run: what started it, how long it took, whether it worked, and each step's output. **Run now** starts one by hand.

**If it is already running** decides what happens when the trigger fires again before the last run is done: skip the new run, wait and run after, or run both at once.

## Maintenance

Doing work on a host? Open its **Maintenance** settings and press **Start now**, or schedule a window once, weekly or monthly. While a host is in maintenance, automations that watch its status, health checks, metrics, containers and tunnels don't fire for it. Scheduled automations and manual runs still work.

An estimate doesn't end maintenance on its own. Press **End maintenance** when you are done. Turn on the notice to get one alert if the host is still down after the estimate and a grace period.

## What it needs

Automations works on its own for schedules, webhooks, commands and alerts. Other triggers and steps need their plugin:

| Trigger or step                      | Needs                                 |
| ------------------------------------ | ------------------------------------- |
| Metric threshold, health check       | [Host Metrics](/plugins/host-metrics) |
| Container event, control a container | [Docker](/plugins/docker)             |
| Control a tunnel                     | [Tunnels](/plugins/tunnels)           |
| Wake a host                          | [Wake-on-LAN](/plugins/wake-on-lan)   |
| A fleet as the target                | [Fleets](/plugins/fleets)             |
| Run a snippet                        | [Snippets](/plugins/snippets)         |

The editor only offers what is available. If a plugin an automation needs is turned off later, the automation shows **Needs** and its runs are skipped until the plugin is back.

Alerts go to your [Alerts](/plugins/alerts) inbox, and on to any channels you pick.

## Permissions

| Permission                                                     | What it allows                  |
| -------------------------------------------------------------- | ------------------------------- |
| `automations.view`                                             | See automations and their runs. |
| `automations.create`, `automations.edit`, `automations.delete` | Change them.                    |
| `automations.run`                                              | Start one by hand.              |

Each automation runs as the person who owns it, with their permissions. It can only touch hosts they can.
