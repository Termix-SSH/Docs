---
title: "Uptime"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/uptime"
description: "Watch websites, ports, hosts and services, get alerts when they go down, and publish status pages."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Uptime/edit/main/docs/index.md"
plugin_id: "uptime"
plugin_version: "1.0.0"
plugin_latest: true
---
Uptime watches websites, ports, hosts and services and tells you when something goes down. It keeps a history of every outage, stays quiet during planned work and can publish a public status page.

## Add a monitor

Open Uptime from the rail and press Add monitor. Pick a type, fill in what to check, and press Test to try it before you save.

| Type             | What it checks                                                                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| Website (HTTP)   | Calls a URL and checks the status code, and a keyword if you set one. An https URL also tracks the certificate |
| TCP port         | That a port accepts connections                                                                                |
| Ping             | That an address answers ping                                                                                   |
| DNS record       | That a record exists, and can check its value                                                                  |
| TLS certificate  | That a certificate is trusted and how long it has left                                                         |
| Push             | That a job called its URL in time                                                                              |
| Termix host      | A host's port, the same way as the host status dot. It never logs in                                           |
| Docker container | That a container is running and not unhealthy, over SSH                                                        |
| systemd unit     | That a unit is active, over SSH                                                                                |
| Command          | That a command exits with 0, over SSH                                                                          |

To watch many hosts at once, press Add from hosts and tick them. A host that already has a host monitor is skipped.

## How a monitor goes down

A failed check doesn't alert right away. The monitor shows Retrying and checks again at the retry interval. Once the number of retries is used up it goes down, an incident opens and the alert goes out. The next good check closes the incident and sends a back up alert.

Set Remind me every to get another alert while something stays down. 0 sends one.

## Check from a host

The Termix server can only test what it can reach. Website, TCP, ping, DNS and TLS monitors can run from one of your hosts instead. Pick it under Check from, and the check runs there over SSH. This reaches services on a private network with no port open to Termix, and shows what a network sees from the inside.

The host needs the tool for the check: `curl` for websites, `bash` and `timeout` for TCP, `ping`, `dig` or `getent` for DNS, and `openssl` for TLS. If one is missing the monitor tells you which.

## Push monitors

A push monitor gives you a URL. Call it at the end of a cron job or backup script. If no call arrives within the interval plus the extra wait, the monitor goes down.

```bash
0 3 * * * /usr/local/bin/backup.sh && curl -fsS https://termix.example.com/plugin-api/uptime/push/YOUR_TOKEN
```

The URL takes optional values:

- `status=down` reports a failure, so a job can say what went wrong
- `msg=` sets the message
- `ping=` sets a response time in milliseconds

```bash
curl -fsS "https://termix.example.com/plugin-api/uptime/push/YOUR_TOKEN?status=down&msg=disk%20full"
```

Copy the URL when you add the monitor, since it is only shown once. Termix keeps a hash of it. New push URL on the monitor makes a new one and stops the old one.

## Alerts

Alerts go through the Alerts plugin, so they reach every channel you set up there. Route them by category: `uptime.down`, `uptime.up` and `uptime.cert_expiring`.

You get alerts for monitors you add. If someone shared a monitor with you, turn alerts on with the bell on the monitor. Without the Alerts plugin, monitors still run and keep their history.

Certificates warn at the number of days you set, and again at 30, 14 and 7 days where those are lower.

## Maintenance

A maintenance window stops false alarms during planned work. Failed checks in a window show as Maintenance, open no incident and send no alert. They don't count against uptime.

A window runs one time or every week. It covers all your monitors, the ones you pick, or the ones with a tag.

## Status pages

A status page shows people how your services are doing, with no login. You need the Publish status pages permission.

1. Open Status pages and press Add page.
2. Give it a title and an address, which is the end of the link.
3. Add groups and pick the monitors for each.
4. Turn on Published and save.

A page shows each monitor's name, state, 30 day uptime and a bar of the last 90 days. It never shows addresses, error text or anything else about how a monitor works. Choose names you are happy to show. Response times only show if you turn them on.

Post a note on a page to tell people about an outage or planned work. Notes stay on the page until a week after you resolve them.

The page lives at `/plugin-api/uptime/status/<address>` on your Termix address. Its data is also at the same address plus `/data` as JSON. To put a page on its own domain, add a route to that path in the Reverse Proxy plugin.

An admin can turn off every status page at once with Allow public status pages.

## Sharing

Monitors belong to the person who added them. Open a monitor and press Share to give a user or role view or edit access. People you share with see the live state, the history and the settings, but never saved logins or headers. People with view access can't see a stored command.

Only the owner can share or delete a monitor.

Checks run as the person who last changed what the monitor looks at. If they lose access to a host, the monitor goes down and says so.

## Private addresses

Only people with the Check private addresses permission can point a monitor at a LAN, Tailscale, loopback or other private address from the Termix server. It is on for admins by default. This is so a normal user can't use Termix to look around the network it sits on.

The check happens on save and again on each run, so a name that later starts pointing at a private address gets refused too.

Check from a host doesn't need this permission, since you are using a host you already have access to.

## Permissions

| Permission              | Default     | What it allows                                  |
| ----------------------- | ----------- | ----------------------------------------------- |
| View monitors           | admin, user | See monitors, history and incidents             |
| Manage monitors         | admin, user | Add and change monitors and maintenance windows |
| Check private addresses | admin       | Point monitors at private addresses             |
| Run commands            | admin       | Add monitors that run a command on a host       |
| Publish status pages    | admin       | Make status pages anyone with the link can see  |

## History

The last 1440 checks of each monitor are kept for the bars and the 24 hour chart. Older checks are added up per hour for a week and per day for as long as Keep history for says. Keep history for also limits how long incidents stay.

Single checks don't go in the database. They live in memory and in a small file in the plugin's data folder that holds only numbers, so frequent checks don't slow down Termix.

## Ping in Docker

Ping needs the `ping` program on the Termix server. The image has it from Termix 26.11.1. On anything older, and on servers that aren't Linux, use a TCP monitor or Check from a host.

## Automations, Fleets and the assistant

Uptime adds actions and events to Termix's Operations layer:

- Automations can start when a monitor goes down, comes back up or a certificate is about to end
- Automations, Fleets, the CLI and the phone app can check, pause and resume monitors
- The assistant can read the summary and the monitors on a host
- The host page shows a tile with the monitors for that host
