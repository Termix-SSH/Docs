---
title: "Host Metrics"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/host-metrics"
description: "Live CPU, memory, disk, network and GPU stats, plus tools to manage your hosts."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Host-Metrics/edit/main/docs/index.md"
plugin_id: "host-metrics"
plugin_version: "1.2.0"
plugin_latest: true
---
Host Metrics shows live stats for your Linux hosts: CPU, memory, disk, network, temperature, NVIDIA and AMD GPUs, processes, open ports and logins. It keeps history for charts, runs health checks, and has managers for services, packages, cron jobs, the firewall, users, certificates, logs and WireGuard.

Everything is read over SSH. There is no agent to install.

## Open it

Pick Host Metrics from a host's menu. Metrics are on for every host at first. Turn them off for a host in its Host Metrics settings.

Host Metrics is built for Linux. It reads `/proc` and standard tools, so Debian, Ubuntu, Fedora, Arch, Alpine and most others work. macOS and Windows hosts get CPU, memory, disk, network, uptime and system info, but not the other cards or the managers. BSD isn't supported.

## Layout

The page is made of cards on a 12 column grid. Drag them to move them, resize them, and turn cards on or off. The layout is saved per host.

Choose **Customise** to move cards and resize them by their left, right or bottom edge or the bottom right corner. A dashed outline shows where a card will land, and only the cards in its way move down. Widths are whole columns and heights snap to nearby cards. You can also move and resize with the arrow keys, change each card's presentation settings, and undo or redo changes with Ctrl+Z and Ctrl+Y.

In the dashboard's edit mode, **Dashboard Templates** saves your current layout as one of up to 50 private templates and copies it once to up to 100 hosts you can access. It replaces only your own layouts on those hosts; later template changes or deletion do not affect them. On hosts you own, applying a template also updates the enabled widgets used by the mobile view; shared-host settings and sampling intervals stay unchanged.

The cards: CPU, memory, disk, network, temperature, GPU, uptime, system info, top processes, listening ports, recent logins and firewall status.

The terminal toolbar shows small CPU, memory and disk bars for the host you are in.

## Metrics panel beside a terminal

Open the Host Metrics button on the right edge of an SSH terminal, or Metrics panel in the tab's menu, to watch the host while you type. It shows CPU, memory, disk, temperature, uptime and the busiest processes, and updates on the host's metrics interval. Drag its edge to resize it and use the arrow in its header to move it.

In Settings, Host Metrics you can open the panel with every new terminal, pick its side and size, and hide the edge button. Turn off Show metrics panel in terminals in the host's Host Metrics section to keep it from opening there.

## Busiest hosts card

Add the Busiest hosts card in the dashboard's edit mode. It ranks hosts by CPU or memory, whichever is higher, using samples Termix already collected, so it never opens new SSH connections. A host shows once something has collected its metrics, like its metrics tab or the host status card.

## History

The clock button on a card opens its history chart: the last 1 hour, 6 hours, 24 hours, 7 days, 30 days, or a range you pick.

Samples are taken while someone is looking at a host, every 30 seconds by default. Admins set Metrics interval and History retention, 7 days by default, in Settings, Host Metrics. A host can set its own interval.

## Live updates

While a Host Metrics tab is open and visible, CPU, memory, network and the process list refresh every 2 seconds, and the CPU card shows a bar for each core. Pick Off, 1, 2 or 5 seconds under Live update rate in your Host Metrics settings. Admins control this with Live updates (on or off) and Live update minimum (default 2 seconds). Each host is sampled at most once per minimum, however many users or tabs are watching, and a faster user choice is slowed to it. This is separate from the Metrics interval, which only applies to regular sampling and history. Live updates also stop for hosts with Collect metrics turned off. Live updates read /proc on the host over SSH, so they only work on Linux. Each update runs one short awk command on the host, and updates pause while the tab is hidden. The CPU and memory bars in the terminal toolbar follow the same updates, and dashboard rows and homepage widgets use them too, but never faster than every 5 seconds and only while a host is online and shows a live field. Process search, sort and tree cover the busiest 60 processes. Other cards, such as disk, ports and the firewall, keep the regular sampling.

## CPU, memory, physical disks and adapters

These cards describe the **remote host**, not the computer running your browser. They add Task Manager-like data without copying its layout:

- **CPU:** utilization and logical-processor histories, model, reported current/base/maximum frequency, sockets and core counts, virtualization information, caches, process/thread/handle counts and uptime.
- **Memory:** used and available composition, compressed memory, committed memory and its limit, cache and kernel pools where supported, plus installed capacity and available module information. Cached memory overlaps other categories, so it is listed separately rather than stacked into the composition bar.
- **Disk:** physical-device active time, read/write rates and histories, average transfer latency, capacity and available device metadata. Filesystem space usage remains separate: a filesystem that is 90% full does **not** mean its physical disk is 90% active.
- **Network:** separate send/receive histories for each interface, adapter identity, IPv4/IPv6 addresses, interface-specific DNS and reported link information.

Use each card's existing presentation settings under **Customise** to show or hide the new groups and adjust chart size. These are personal display choices: hiding details does not change collection for other viewers. Existing host/admin metric and widget controls gate the additional CPU, memory, disk and network queries.

The new histories hold at most 60 points in the open card and reset on a host change. Linux CPU and network histories can follow live updates; hardware, physical-disk counters and the other platforms follow regular polling. These detailed series are not added to the historical database: the time-range tabs still show the existing aggregate history. First samples, counter resets and unavailable sources produce gaps, not made-up zero activity.

### Platform sources and limits

Unsupported or unreadable fields show **Unavailable**. No elevation, firmware dump, extra agent or package installation is attempted. Additional collection is read-only, with a 15-second command timeout, and failure leaves baseline metrics available.

| Platform | Sources and limits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linux    | CPU topology/cache comes from `lscpu`, frequency and utilization from `/proc` and sysfs. Virtualization describes hardware support, not a Windows firmware-enabled flag. Handles means system-wide allocated open file handles, not Windows process handles. Memory uses `/proc/meminfo`: committed virtual memory, page cache plus buffers, and reclaimable/unreclaimable slab are explicitly labelled Linux equivalents. Compressed RAM, Windows pools, DIMM inventory and hardware-reserved RAM are unavailable. Disk rates, active time and latency use physical-device `lsblk` identity and `/proc/diskstats` deltas, excluding partitions and logical volumes. Formatted capacity, system/pagefile attribution are unavailable rather than inferred from mount paths. Network model is the sysfs driver identity when available; DNS requires interface-specific `resolvectl` output. |
| Windows  | Read-only CIM and Storage/NetAdapter commands provide processor, RAM, physical-disk and adapter data. Current clock and reported maximum clock are separate; an actual base frequency and compressed RAM counter are unavailable from these sources. Cached memory sums standby lists and the modified list, not the system-cache working set. Hardware-reserved RAM is estimated as installed module capacity minus OS-visible RAM. Module speed is the configured MHz value reported by CIM. Disk active time uses idle counters; submillisecond latency uses raw counter deltas and requires two samples with completed operations. SSD/HDD media requires matching physical-device identity. Formatted capacity and system/pagefile flags are provided only when their disk/partition sources can be read.                                                                              |
| macOS    | `sysctl`, `vm_stat`, `diskutil` and `ifconfig` provide available topology, RAM, physical-device and interface details. Compressor and wired bytes use the actual VM page size; cache means file-backed pages. Per-logical-processor utilization, physical-disk activity/rates/latency, base frequency, process handles, committed memory/pools, DIMM inventory and interface-specific DNS remain unavailable with these commands. CPU frequency fields can also be unavailable, especially on Apple Silicon. Disk/partition roles and formatted capacity are not guessed.                                                                                                                                                                                                                                                                                                                   |

MikroTik RouterOS v7 has its own shell, so Termix reads it with RouterOS commands instead: CPU load, memory, flash
storage, uptime, board temperature, and traffic per interface. Processes, logins, ports, firewall, GPU and the
managers are not available on RouterOS.

Permission restrictions, missing commands and unsupported counters can reduce this coverage on any platform. A zero rate is shown only for a valid sampled counter, not as a substitute for an unavailable value.

Windows hardware inventory is cached per host for up to five minutes; utilization, clocks, memory use, disk counters and adapter state are still sampled each time. Charts ease their newest point over about 800 ms using a shared animation clock, and update immediately when reduced motion is enabled. This does not change the host's sampling interval.

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

Changes run with sudo. Save the host's Sudo Password so Termix can answer the prompt. Without it, changes that need root fail with a message saying so.

The firewall card and manager detect the owner before selecting a backend. Active UFW takes precedence over its underlying iptables/nftables rules; absent or inactive UFW still allows native backends. Reads use the saved Sudo Password when needed, without attempting sudo on every poll when no password is saved. An unreadable or unrecognised state is shown as unknown in periodic stats, and the manager reports an error rather than guessing a backend. Running or indeterminate firewalld, stale UFW/firewalld-owned raw rules, and conflicting native policies block changes. Firewalld management is not supported.

Native iptables-nft tables stay on iptables when each nonempty iptables-save/ip6tables-save export identifies nf_tables and every nft table is an IPv4 or IPv6 table listed by its matching export. This does not depend on nft printing an ownership warning. Both iptables families are checked independently, including legacy IPv6 policies invisible to nft. Mixed or unrecognised policies remain ambiguous, not permission to bypass a manager. Native nftables changes require an existing `inet filter input` filter base chain hooked to input; the plugin does not create tables or chains.

UFW rules are already persistent, so Save does not dump or reload them. Native iptables Save requires either netfilter-persistent with its IPv4 plugin, or the iptables init script (IPv4-only). When IPv6 chains are present, both netfilter-persistent family plugins are required. It reports save failures without trying another backend. Native nftables persistence must be configured on the host: the plugin will not guess or overwrite `/etc/nftables.conf`. Rule changes can affect SSH access; keep a recovery connection available.

### Editing firewall rules and defaults

Click a supported rule, or choose Edit/Delete beside it. The editor keeps its address family, direction, comment and application-profile identity. Review the exact old/new rule and host before confirming. Default INPUT and OUTPUT policies have their own controls and confirmation; there is no FORWARD-policy editor. Allowing traffic can expose services, and denying traffic can interrupt SSH on any port. Keep independent console/recovery access available.

Rule management uses a fresh host-bound snapshot rather than reconstructing commands from periodic metrics. Every plugin firewall write (including legacy additions and Save) is serialized per host in this backend process. Changes outside the plugin are not locked: if another administrator is changing the firewall, stop and coordinate on the host. The manager re-reads and checks identity/order after changes, and refreshes after failed requests as well as successful ones. A timeout is an unknown outcome, not a reason to retry automatically.

- **UFW:** advanced management requires the verified UFW 0.36.2 Python layout and canonical generated user-rule files. Unsupported versions/custom files remain read-only. Simple single-port rules (including a port with no explicit protocol) and single-expansion destination profiles such as OpenSSH are supported. Profiles stay named profiles; their protocol/ports are locked. Multi-expansion/source profiles, duplicate flows, rules after expanded groups, logging, LIMIT, interface/routed rules and port ranges stay explicitly read-only. Family-specific numbered deletion never deletes by a guessed port specification. A unique action-only change uses UFW's existing-slot update behavior; other edits insert, verify exact family/order/constraints, then delete the freshly identified original. **These operations are not atomic:** failure may leave both rules or another partial result. Inspect the refreshed rules before retrying. The plugin never enables an inactive firewall.
- **Native iptables:** only lossless simple INPUT/OUTPUT rules are editable; additional matches, comments, targets and user chains stay read-only. Replacements use `iptables -R`/`ip6tables -R` at the original position with the xtables lock. External writers such as fail2ban or Docker can still shift rule numbers between the snapshot and the write, causing the wrong rule to be changed; coordinate or pause those writers before editing. Default policies accept only ACCEPT/DROP on verified built-in INPUT/OUTPUT chains, with the family shown explicitly.
- **Native nftables:** rules come from JSON identities and handles, not the lossy status display. Only simple TCP/UDP single-port + accept/drop expressions on verified input/output filter base chains can be edited. Counters, comments, sets and other expressions stay read-only. Replacements use the existing handle. Default policy editing requires a supported unambiguous base hook and accepts only accept/drop; chain/table scope is shown. Native rule additions retain the existing fixed `inet filter input` requirement.

UFW persists changes immediately. Native changes are runtime-only until saved by the host's persistence setup. The Save control is shown only for iptables; nftables configuration files are never overwritten by this editor. Connect-only users can view rules but cannot mutate them; the server independently requires edit permission.

On a shared host, seeing the managers only needs connect access. Changing the host (starting or stopping a service, killing a process, installing packages, editing cron, firewall rules, users, certificates or WireGuard) needs edit access. Without it the buttons are hidden.

## Health checks

Health checks test a URL or a TCP port from the host, and show when one fails. [Automations](/plugins/automations) can act on a check changing.

Checks run in the background on their own schedule, every 5 minutes by default. Set Check every (minutes) when you edit the checks, down to 1 minute. They also run when you open the card or press Run. Scheduled checks run as the user who saved them, and are skipped while metrics are off for the host, while that user can no longer reach it, or when the host's login needs a code typed in.

When a check starts failing or comes back, the user who saved it gets an alert in [Alerts](/plugins/alerts).

### Script checks

A Script check runs your own command on the host and shows what it returns. Pick how to read it:

- Pass on exit code 0: passes when the command succeeds, for example `systemctl is-active auditd`.
- Number: reads the last number the command prints. Set Warn at and Fail at to color it, and Low is bad when a low
  value is the problem, like free space. For example `df --output=pcent /var/log/audit | tail -1` with unit `%`.
- Show output: shows the first line the command prints, and fails on a non zero exit code.

Turn on Show on dashboard for a check to see its latest result in the host's row of the dashboard's host list, next to CPU, RAM and disk. If any of those checks warns or fails, the host's status badge shows Warning or Failing instead of Online. The dashboard only reads results that were already stored, so checks run on their own schedule or when you press Run. Each user picks their own dashboard checks.

The command runs as the SSH user, with a 15 second limit. A number check fails only past Fail at, so an alert is
sent when it crosses that line.

## What the SSH user needs

Most stats come from files anyone can read. A few need more:

| Stat                   | Needs                                                     |
| ---------------------- | --------------------------------------------------------- |
| Failed logins          | Read access to `/var/log/auth.log` or `/var/log/secure`.  |
| Process names on ports | sudo, for `ss -tulpn`.                                    |
| Firewall rules         | sudo, for `ufw`, `iptables-save` or `nft`, when required. |
| GPU                    | `nvidia-smi` for NVIDIA, the `amdgpu` driver for AMD.     |

Without them, those parts are empty. The rest still works.

## With other plugins

- [Automations](/plugins/automations) can run when a metric crosses a line or a health check changes.
- [Homepage](/plugins/homepage) gets a Metrics Chart widget.
- The dashboard's host status card shows each host's numbers.

Who can use it is set by the `host-metrics.use` permission. Admins and users have it at first.

## Environment variables

This plugin reads some environment variables on the Termix server. See the [reference](/plugins/host-metrics/reference#environment-variables) for the list.
