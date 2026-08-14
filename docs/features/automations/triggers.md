# Automation Triggers

The trigger decides when an automation runs. Every automation has exactly one.

## Choosing which hosts to watch

Most triggers watch hosts, and you pick which ones:

- One host
- Several hosts you choose
- A fleet, so the automation follows the fleet as hosts join and leave it
- All hosts

Picking a [fleet](/features/fleets/overview) is usually the best option. Tag a new server and it is covered without you editing the automation.

## Metric threshold

Runs when a number crosses a line. This is the most common trigger.

You pick a metric, an operator, and a value. For example, memory used is greater than 90.

Metrics you can watch:

| Metric                                   | What it measures                         |
| ---------------------------------------- | ---------------------------------------- |
| `cpu.percent`                            | CPU use as a percentage                  |
| `cpu.load1`, `cpu.load5`, `cpu.load15`   | Load average over 1, 5, or 15 minutes    |
| `memory.percent`                         | Memory used as a percentage              |
| `memory.usedGiB`                         | Memory used in GiB                       |
| `disk.percent`                           | Disk used as a percentage, for one mount |
| `disk.availableBytes`                    | Free space in bytes, for one mount       |
| `temperature.highestCelsius`             | Hottest sensor on the machine            |
| `uptime.seconds`                         | How long the host has been up            |
| `processes.total`                        | Number of running processes              |
| `network.rxBytes`, `network.txBytes`     | Bytes in and out, for one interface      |
| `network.rxRateBps`, `network.txRateBps` | Current transfer rate, for one interface |

For disk and network you can name a single mount or interface, so a rule can watch just `/data` instead of every disk at once.

Hold time stops false alarms. Set it and the value has to stay over the line for that long before anything runs. CPU spiking to 100 percent for two seconds is normal, staying there for five minutes is not. Leave it at 0 to fire straight away.

Cooldown is how long to wait before this can fire again for the same host. It defaults to 15 minutes, which stops a wobbling value from messaging you over and over.

## Host status

Runs when a host goes offline or comes back online.

When Termix first sees a host it just records the current state instead of firing. Otherwise every host would look like it "just came online" each time the server restarted.

## Health check

Runs when a health check starts failing or has recovered. You can watch one specific check or any of them.

## Schedule

Runs on a clock. Two ways to set it:

- Cron, using a normal five field expression like `0 3 * * *` for 3am daily
- Interval, like every 300 seconds

Set a timezone so daily schedules land at the right local time, including through daylight saving changes.

Schedules are checked every 15 seconds, so a run may start a few seconds after the exact time.

## Docker event

Runs when a container changes state. You can watch one container by name, or all of them.

Events: `exited`, `started`, `unhealthy`, `restarting`.

## Internal event

Runs when something happens inside Termix:

| Event                 | When it happens          |
| --------------------- | ------------------------ |
| `user_login`          | Someone signs in         |
| `host_added`          | A host is created        |
| `host_deleted`        | A host is deleted        |
| `tunnel_disconnected` | A tunnel drops           |
| `automation_failed`   | Another automation fails |

`automation_failed` is worth setting up early. One automation that notifies you whenever any other automation breaks means you find out from Termix instead of from a broken server.

## Webhook

Runs when something outside Termix calls a URL. Use this to trigger an automation from CI, a monitoring tool, or a script.

When you create the trigger, Termix shows you a token once. Send a POST to the webhook URL with that token to start a run.

```bash
curl -X POST https://termix.example.com/automations/webhook/YOUR_TOKEN
```

:::warning
The token is shown one time and only a hash of it is stored, so Termix cannot show it to you again. Copy it somewhere safe when you create the trigger. If you lose it, make a new webhook trigger.
:::

Anyone holding the token can start the automation, so treat it like a password.

## Cooldowns survive restarts

Hold timers and cooldowns are saved, so restarting Termix does not reset them. An automation part way through a hold window picks up where it left off instead of starting over or firing twice.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
