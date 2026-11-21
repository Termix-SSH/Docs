---
title: "Triggers"
sidebar_position: 11
slug: "/automations/triggers"
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Automations/edit/main/docs/triggers.md"
plugin_id: "automations"
plugin_version: "1.3.0"
plugin_latest: true
---
The trigger decides when an automation runs. Every automation has one.

## Picking hosts

Most triggers watch hosts. Pick one host, a [fleet](/plugins/fleets), or all hosts.

A fleet is usually best. Tag a new server and it is covered without editing the automation.

## Metric threshold

Runs when a number crosses a line, like memory used over 90 percent. Needs [Host Metrics](/plugins/host-metrics).

| Metric                                                                         | What it measures               |
| ------------------------------------------------------------------------------ | ------------------------------ |
| `cpu.percent`                                                                  | CPU use, percent.              |
| `cpu.load1`, `cpu.load5`, `cpu.load15`                                         | Load average.                  |
| `memory.percent`, `memory.usedGiB`                                             | Memory used.                   |
| `disk.percent`, `disk.availableBytes`                                          | Disk used, for one mount.      |
| `temperature.highestCelsius`                                                   | The hottest sensor.            |
| `uptime.seconds`                                                               | How long the host has been up. |
| `processes.total`                                                              | Running processes.             |
| `network.rxBytes`, `network.txBytes`, `network.rxRateBps`, `network.txRateBps` | Traffic, for one interface.    |

Sustained for stops false alarms. The value has to stay over the line that long before anything runs. CPU at 100 percent for two seconds is normal. For five minutes it isn't.

Cooldown is how long to wait before it can fire again for the same host. 15 minutes by default, so a value that wobbles around the line doesn't message you over and over.

## Host goes up or down

Runs when a host goes offline or comes back. When Termix first sees a host it only records its state, so a restart of Termix doesn't make every host look like it just came online.

## Health check changes

Runs when a health check from [Host Metrics](/plugins/host-metrics) starts failing or recovers. Watch one check or all of them.

## On a schedule

Runs on a clock, with a cron expression like `0 3 * * *` (3am every day) or an interval in seconds. Pick a Time zone so daily runs land at the right local time, through daylight saving changes too.

Schedules are checked every 15 seconds, so a run can start a few seconds late.

## Container event

Runs when a container is `exited`, `started`, `unhealthy` or `restarting`. Watch one container by name or all of them. Needs [Docker](/plugins/docker).

## Termix event

Runs when something happens in Termix:

| Event                        | When                                               |
| ---------------------------- | -------------------------------------------------- |
| `user_login`                 | Someone signs in.                                  |
| `host_added`, `host_deleted` | A host is made or deleted.                         |
| `tunnel_disconnected`        | A tunnel drops. Needs [Tunnels](/plugins/tunnels). |
| `automation_failed`          | Another automation fails.                          |

Set up one automation on `automation_failed` early. Then you hear when any other automation breaks.

## An alert comes in

Runs when the [Alerts](/plugins/alerts) plugin gets an alert for you. Use it to react to what other plugins notice, like restarting a service when its [Uptime](/plugins/uptime) monitor goes down.

| Field          | What it does                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------- |
| Alert category | The kind of alert, like `uptime.down`. `uptime.*` matches every Uptime alert and `*` every alert. |
| At least       | Only alerts at warning or critical and up. Any severity by default.                               |
| Title contains | Only alerts whose title has this text, ignoring case.                                             |
| Host           | Only alerts about these hosts. Alerts that are not about a host are skipped when you pick hosts.  |
| Cooldown       | Minutes to wait before it can run again for the same host and category.                           |

Steps can pick The trigger's host to work on the host the alert is about. Alerts that automations send never start an automation, so one can't set off another in a loop. Needs Alerts 1.4.0.

### Example: restart nginx when its monitor goes down

1. Trigger: An alert comes in, category `uptime.down`, title contains `nginx`, host your web server.
2. Step: Run command `systemctl restart nginx` on The trigger's host, as root.
3. Step: Send an alert saying nginx was restarted.

## Incoming webhook

Runs when something outside Termix calls a URL: CI, a monitor, a script.

When you save the trigger, Termix shows the webhook URL once. Copy it then. Only a hash is kept, so it can't be shown again. Lost it? Make a new trigger.

```bash
curl -X POST https://termix.example.com/plugin-api/automations/webhook/YOUR_TOKEN
```

Anyone with the URL can start the automation. Treat it like a password.

## After a restart

Hold timers and cooldowns are saved, so restarting Termix doesn't reset them.
