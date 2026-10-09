---
title: "Host Metrics"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/host-metrics"
description: "Live CPU, memory, disk, network and GPU stats, plus tools to manage your hosts."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Host-Metrics/edit/main/docs/index.md"
plugin_id: "host-metrics"
plugin_version: "1.0.0"
plugin_latest: true
---
Host Metrics shows live stats for your Linux hosts: CPU, memory, disk, network, temperature, NVIDIA GPUs, processes, open ports and logins. It keeps history for charts, runs health checks, and has managers for services, packages, cron jobs, the firewall, users, certificates, logs and WireGuard.

Everything is read over SSH. There is no agent to install.

## Open it

Pick **Host Metrics** from a host's menu. Metrics are on for every host at first. Turn them off for a host in its Host Metrics settings.

Host Metrics is built for Linux. It reads `/proc` and standard tools, so Debian, Ubuntu, Fedora, Arch, Alpine and most others work. macOS and Windows hosts get CPU, memory, disk, network, uptime and system info, but not the other cards or the managers. BSD isn't supported.

## Layout

The page is made of cards. Drag them to rearrange, resize them, and turn cards on or off. The layout is saved per host.

The cards: CPU, memory, disk, network, temperature, GPU, uptime, system info, top processes, listening ports, recent logins and firewall status.

The terminal toolbar shows small CPU, memory and disk bars for the host you are in.

## History

The clock button on a card opens its history chart: the last 1 hour, 6 hours, 24 hours, 7 days, 30 days, or a range you pick.

Samples are taken while someone is looking at a host, every 30 seconds by default. Admins set **Metrics interval** and **History retention**, 7 days by default, in **Settings**, **Host Metrics**. A host can set its own interval.

## Managers

Manager cards let you change a host, not just watch it:

| Manager   | What you can do                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| Services  | Start, stop, restart, enable and disable systemd services.                                                    |
| Packages  | See available upgrades, install a package, and upgrade one or all, with apt, dnf, yum, pacman, zypper or apk. |
| Cron      | See and edit cron jobs.                                                                                       |
| Firewall  | See and change firewall rules.                                                                                |
| Users     | See and manage local users.                                                                                   |
| SSL       | See certbot and acme.sh certificates and when they expire, and issue, renew or revoke them.                   |
| Logs      | Read the journal and log files.                                                                               |
| WireGuard | See WireGuard interfaces and peers, and bring an interface up or down.                                        |

Changes run with sudo. Save the host's **Sudo Password** so Termix can answer the prompt. Without it, changes that need root fail with a message saying so.

On a shared host, seeing the managers only needs connect access. Changing the host (starting or stopping a service, killing a process, installing packages, editing cron, firewall rules, users, certificates or WireGuard) needs edit access. Without it the buttons are hidden.

## Health checks

Health checks test a URL or a TCP port from the host, and show when one fails. [Automations](/plugins/automations) can act on a check changing.

Checks run in the background on their own schedule, every 5 minutes by default. Set **Check every (minutes)** when you edit the checks, down to 1 minute. They also run when you open the card or press **Run**. Scheduled checks run as the user who saved them, and are skipped while metrics are off for the host, while that user can no longer reach it, or when the host's login needs a code typed in.

When a check starts failing or comes back, the user who saved it gets an alert in [Alerts](/plugins/alerts).

## What the SSH user needs

Most stats come from files anyone can read. A few need more:

| Stat                   | Needs                                                    |
| ---------------------- | -------------------------------------------------------- |
| Failed logins          | Read access to `/var/log/auth.log` or `/var/log/secure`. |
| Process names on ports | sudo, for `ss -tulpn`.                                   |
| Firewall rules         | sudo, for `iptables` or `nft`.                           |
| GPU                    | `nvidia-smi` installed.                                  |

Without them, those parts are empty. The rest still works.

## With other plugins

- [Automations](/plugins/automations) can run when a metric crosses a line or a health check changes.
- [Homepage](/plugins/homepage) gets a **Metrics Chart** widget.
- The dashboard's host status card shows each host's numbers.

Who can use it is set by the `host-metrics.use` permission. Admins and users have it at first.
