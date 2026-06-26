# Alerts

Termix can send you a notification when something happens on one of your servers. You can set up rules for things like a host going offline, CPU staying too high for too long, or someone logging in over SSH.

## How it works

There are three pieces:

- Notification channels: where alerts get sent (a webhook URL or an ntfy topic)
- Alert rules: what triggers an alert, and which channel to use
- Alert firings: a log of alerts that have fired, visible in the alerts panel

The bell icon in the sidebar shows a count of unacknowledged alerts. Click it to open the alerts panel.

## Notification channels

A channel is a destination for alert messages. You can have as many channels as you want. Open the alerts panel, go to the Channels tab, and click "Add Channel".

Two channel types are supported:

### Webhook

Termix sends a POST request to the URL you provide whenever an alert fires. The body is JSON with these fields:

```json
{
  "hostName": "my-server",
  "hostId": 42,
  "triggerType": "cpu_threshold",
  "value": 95.2,
  "threshold": 90,
  "message": "CPU usage is 95.2% (threshold: 90%)",
  "severity": "warning",
  "timestamp": "2026-06-23T12:00:00.000Z",
  "ruleId": 7,
  "ruleName": "High CPU"
}
```

You can point this at anything that accepts a POST: a self-hosted automation tool, a home assistant webhook, Slack, Ntfy, etc.

### ntfy

[ntfy](https://ntfy.sh) is a free, open source push notification service you can self-host. To use it, you need:

- Server URL: the address of your ntfy server (or `https://ntfy.sh` for the public one)
- Topic: the ntfy topic to publish to
- Access token (optional): if your ntfy server requires authentication

Termix maps alert severity to ntfy priority: info sends priority 2, warning sends 3, critical sends 5.

You can test a channel by clicking the test button next to it in the Channels tab.

## Alert rules

A rule defines what to watch for and what to do when it happens. Open the alerts panel, go to the Rules tab, and click "Add Rule".

Each rule has:

- Name: a label for this rule
- Trigger: what event causes the alert to fire (see below)
- Cooldown: how many minutes to wait before firing the same rule again (default 15)
- Channels: which notification channels to send to when this rule fires

### Trigger types

| Trigger | Description |
| ------- | ----------- |
| Host Offline | Fires when Termix loses contact with the host |
| Host Online | Fires when a host that was offline comes back |
| CPU Usage Threshold | Fires when CPU percent exceeds a value |
| Memory Usage Threshold | Fires when memory percent exceeds a value |
| Disk Usage Threshold | Fires when disk percent exceeds a value |
| Health Check Failure | Fires when a configured health check fails |
| User SSH Login | Fires when someone connects to the host over SSH through Termix |

For threshold triggers (CPU, memory, disk), you can also set a duration in seconds. If set, the metric has to stay above the threshold for that many seconds before the alert fires. This prevents alerts from firing on short spikes.

## Alert history

Every time a rule fires, it creates a firing record. You can see these in the Firings tab of the alerts panel. Each firing shows the host, rule name, severity, value at the time, and when it happened.

Severity levels:

- Info: status changes like a host coming online or a user logging in
- Warning: threshold breaches
- Critical: host going offline or health check failures

You can acknowledge individual alerts or acknowledge all at once. Acknowledged alerts still stay in the list but no longer count toward the bell badge.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
