---
title: "Audit Tools"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/audit-tools"
description: "Send the audit log to your SIEM and export it as CSV or NDJSON."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Audit-Tools/edit/main/docs/index.md"
plugin_id: "audit-tools"
plugin_version: "1.0.0"
plugin_latest: true
---
Audit Tools sends your audit log to other systems. It does two things: it forwards each audit entry to a collector as it happens, and it exports the log as a file.

Termix still writes, shows and prunes the audit log itself. This plugin only copies it out.

## Turn it on

1. Install Audit Tools from the Plugins tab.
2. Open its settings and fill in the collector URL. Add a bearer token if your collector wants one.

An empty URL turns forwarding off.

## Forwarding

Each entry is posted to the collector as one line of JSON, with the content type `application/x-ndjson`. The token is sent as `Authorization: Bearer <token>`. The request times out after 5 seconds and the collector must answer with a 2xx status.

Forwarding never slows down or blocks what was audited. If the collector is down, the plugin keeps the time of the last entry it delivered and sends the missed ones from the stored log, oldest first, when the collector is back. It checks every 30 seconds. One catch up run sends at most 5000 entries, then carries on at the next check. Entries older than your audit log retention cannot be sent.

The first time you set a URL, only new entries are sent. The existing log is not replayed. Use the export for that.

Only public addresses are allowed. A collector on a private network is refused.

Instead of the settings you can set `AUDIT_LOG_FORWARD_URL` and `AUDIT_LOG_FORWARD_TOKEN` on the server. The URL in the settings wins over the variable, and the token follows the URL that is used.

## Export

Admins see Export CSV and Export NDJSON buttons in the audit log section of Settings. The export uses the filters you have set in the viewer and streams the whole result, oldest first. The export itself is written to the audit log.

In CSV, a value that starts with `=`, `+`, `-` or `@` gets a leading quote so spreadsheet software does not run it as a formula.

Exporting needs the Export the audit log permission. Only admins have it by default.

## Environment variables

This plugin reads some environment variables on the Termix server. See the [reference](/plugins/audit-tools/reference#environment-variables) for the list.
