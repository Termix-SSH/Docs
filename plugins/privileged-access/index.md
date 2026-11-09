---
title: "Privileged Access"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/privileged-access"
description: "Ask for approval before anyone connects to a privileged host, with access that ends on its own and a full audit trail."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Privileged-Access/edit/main/docs/index.md"
plugin_id: "privileged-access"
plugin_version: "1.0.0"
plugin_latest: true
---
Privileged Access keeps your most important hosts closed until someone approves. Mark a host as privileged and every SSH and remote desktop session to it needs approved access: a user asks with a reason and the hours they need, an approver says yes or no, and the access ends on its own.

It works with [Session Recording](/plugins/session-recording), which can make recording required on privileged hosts, and with [Audit Tools](/plugins/audit-tools), which sends every request and decision to your SIEM or ticket system.

## Mark a host as privileged

Open the host in Manage and turn on Privileged host in its Privileged Access section. From then on, a session to it needs approved access. The section also sets:

- Approver roles: role names, separated by commas, whose members may approve. Leave it empty to let anyone with the approve permission decide. Admins can always decide.
- Longest access (hours): the most one request can ask for. 4 at first.
- Ask for a reason and Ask for a ticket: what a request must include.
- Let background work through: plugin connections nobody waits on, like metrics polling, skip the approval. Off at first, so a host without access gets no background work either.

Only people with `privileged-access.configure` (admins at first) can change this section, so someone with edit on a host can not turn it off. That holds for the host editor, host imports, bulk edits, host defaults and desktop sync.

The check runs inside Termix for every SSH connection, file manager and tunnels included, and for every RDP, VNC and Telnet login, so no plugin can skip it.

## Ask for access

Connecting to a privileged host without access shows a Request access button. It opens the Access tab with the host picked. You can also open Access from the sidebar, the command palette or the host menu.

Pick the hours, say why and add a ticket number if you have one, then Ask for access. Approvers get an alert. When they decide you get one too, and once approved you can connect until the time runs out. You can end your access early under My requests.

## Approve

Approvers (`privileged-access.approve`, admins at first) see To decide in the Access tab and an alert for each new request. Nobody can approve their own request. Active access lists who can connect right now; End now takes access away and closes that person's open sessions on the host.

A request nobody decides expires after 24 hours. Change it with Request lifetime (hours) in Settings, Privileged Access.

## Break glass

Users with `privileged-access.bypass` connect without a request. Admins have it at first, so a single admin is never locked out. Every use is written to the audit log and approvers get a critical alert, at most once an hour per person and host. Take the permission away from the admin role for strict setups, and keep one break glass account for emergencies.

## History and reports

History lists every request with who decided, when, and why. Export CSV downloads all of it for a report. Every request, approval, denial, revoke, expiry and break glass use is also in the Termix audit log.

## Termix actions

Ask for privileged access works from a host page, the assistant and MCP. Access requests to decide counts what waits on you, and a status tile shows on the host page whether you have access to that host.
