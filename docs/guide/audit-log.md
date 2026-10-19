---
title: Audit log
description: See who did what, and send it to a SIEM.
---

# Audit log

The audit log records sign ins, changes to hosts, credentials, users and roles, plugin installs, and what plugins do with sensitive access. Admins read it in Settings, Audit log.

## Search it

Filter by User, Action, Resource Type, Status and a date range. Each entry shows the time, user, action, IP and the resource it touched. To pull entries into another tool, install the [Audit Tools](/plugins/audit-tools) plugin, which adds CSV and NDJSON export.

Behind a reverse proxy, set `TRUSTED_PROXIES` so the IPs are real. See [reverse proxy](/configure/reverse-proxy#real-client-ips).

## How long it is kept

By default Termix keeps the newest 10,000 entries. Change it with:

| Variable                   | What it does                         |
| -------------------------- | ------------------------------------ |
| `AUDIT_LOG_MAX_ENTRIES`    | Most entries kept.                   |
| `AUDIT_LOG_RETENTION_DAYS` | Also delete entries older than this. |

## Send to a SIEM

Install the [Audit Tools](/plugins/audit-tools) plugin. In its settings, enter a collector URL and an optional bearer token. It posts every new entry there as NDJSON, and sends the ones it missed while the collector was down. The local log stays the source of truth.

`AUDIT_LOG_FORWARD_URL` and `AUDIT_LOG_FORWARD_TOKEN` set the same thing. When both are set, the URL saved in the settings wins. Forwarding set up before the plugin existed is moved into its settings when you upgrade.
