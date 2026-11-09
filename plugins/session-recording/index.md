---
title: "Session Recording"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/session-recording"
description: "Record terminal and remote desktop sessions, watch them live, and keep an audited, encrypted record of who did what."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Session-Recording/edit/main/docs/index.md"
plugin_id: "session-recording"
plugin_version: "1.2.0"
plugin_latest: true
---
Session Recording saves what happens in your sessions so you can watch them back later: SSH terminals as text, and RDP, VNC and Telnet sessions as video. Use it for audits, for training, or to see what you ran last week.

For teams that need an audit trail it can also make recording required, encrypt recordings, show auditors every session live or recorded, log who opened each one, and alert on risky commands. Together with [Privileged Access](/plugins/privileged-access), which asks for approval before anyone connects to a privileged host, it covers what a PAM tool does.

## Turn it on for a host

Open the host in Manage and turn on Enable session recording in its Session Recording section. Every session on that host is recorded from then on. A Recording badge shows in the terminal while it is.

For RDP, VNC and Telnet, [Remote Desktop](/plugins/remote-desktop#recording) needs its recording paths set up too.

## Make recording required

Admins set Require recording in Settings, Session Recording:

- Off: each host's own switch decides.
- On privileged hosts: every host Privileged Access marks as privileged is recorded, whatever its switch says.
- On every host: every session is recorded.

A required recording can't be stopped from the Remote Desktop toolbar, always keeps the whole screen and keys, and VNC sessions use the built-in engine so they can be recorded.

## Watch them

Open Session Logs from the sidebar. Recordings are listed with the host, start time, duration and size. Filter by host and search.

Open one to play it back. Drag the timeline, pause, and change the speed. Terminal recordings can be copied or downloaded as a file or as plain text.

You only see your own recordings, unless you are an auditor.

## Timestamps in text downloads

Turn on Timestamps in text downloads in a host's Session Recording settings to put a time in front of each line when you use Download as text on its SSH recordings. Each line gets the UTC time its first character was printed, to the millisecond. Colors and other terminal codes are left out, and a line redrawn in place, like a progress bar, shows only its last state. It also works for recordings made before you turned it on. Older plain text logs have no timing and download as plain text.

```text
[2026-11-06T12:00:00.123Z] hello
[2026-11-06T12:00:01.123Z] 100%
```

## Encryption and changes

New recordings are encrypted on disk with their own key, which is sealed with the server's encryption key. Turn this off with Encrypt recordings in Settings, Session Recording. Recordings made before stay as they are and still play.

Each recording keeps a fingerprint (SHA-256) from when it ended. Press Check for changes in the player to compare. If the file was changed, auditors get a critical alert.

## Auditors

The `session-recording.audit` permission (admins at first) makes someone an auditor. Auditors get three more tabs in Session Logs:

- All users: everyone's recordings. The player shows its access history: who watched, downloaded or checked it, when, and from which address. Auditors can put a recording on hold, which keeps it from retention and from being deleted.
- Live: every open SSH and remote desktop session. Watch one read only, or end it. Watching needs `ssh-terminal.monitor` for SSH and `remote-desktop.monitor` for remote desktop, both admin at first. A watcher can never type into the session.
- Rules: see the next section. Needs `session-recording.rules`.

Every view, download, check, hold, live watch and end goes to the Termix audit log, so [Audit Tools](/plugins/audit-tools) can send it to your SIEM or ticket system. Set Alert when a recording is opened to also alert auditors through [Alerts](/plugins/alerts), for every access or only when someone opens another person's session.

## Command alert rules

A rule looks at each line typed in an SSH session, or each line the host prints, and matches plain text or a regular expression. On a match it:

- marks the time in the recording, shown under the player and as an alert count in the list
- alerts auditors, at the level you chose
- sends the `session-recording.alert` Termix event, so an automation or the AI assistant can react
- ends the session, when the rule says so

Termix adds a few starter rules turned off, such as deleting the root folder, piping a download into a shell and clearing shell history. Turn on the ones you want. A rule can apply to every host or only to privileged ones. Remote desktop sessions have no text, so rules only cover SSH.

## On the dashboard

Add the Recent recordings card in the dashboard's edit mode. Click a recording to open it in Session Logs.

## How long they are kept

Recordings are deleted after 30 days. Admins change it with Retention (days) in Settings, Session Recording. Old ones are cleaned up at start and once a day. Recordings on hold are kept.

Recordings are files in the data folder, `plugin-data/session-recording`. Long recordings of busy sessions use disk, so pick a retention that fits.

A recording stays when its user is deleted, since it is a record of what happened on the host. For the same reason only admins can delete a recording by hand, and never one on hold.

Who can watch their own recordings is set by the `session-recording.view` permission. Admins and users have it at first.
