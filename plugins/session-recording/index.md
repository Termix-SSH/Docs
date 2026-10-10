---
title: "Session Recording"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/session-recording"
description: "Record terminal and remote desktop sessions and play them back or download them later."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Session-Recording/edit/main/docs/index.md"
plugin_id: "session-recording"
plugin_version: "1.0.0"
plugin_latest: true
---
Session Recording saves what happens in your sessions so you can watch them back later: SSH terminals as text, and RDP, VNC and Telnet sessions as video. Use it for audits, for training, or to see what you ran last week.

## Turn it on for a host

Open the host in **Manage** and turn on **Enable session recording** in its Session Recording section. Every session on that host is recorded from then on. A **Recording** badge shows in the terminal while it is.

For RDP, VNC and Telnet, [Remote Desktop](/plugins/remote-desktop#recording) needs its recording paths set up too.

## Watch them

Open **Session Logs** from the sidebar. Recordings are listed with the host, start time, duration and size. Filter by host and search.

Open one to play it back. Drag the timeline, pause, and change the speed. Terminal recordings can be copied or downloaded as a file or as plain text.

You only see your own recordings.

## How long they are kept

Recordings are deleted after 30 days. Admins change it with **Retention (days)** in **Settings**, **Session Recording**. Old ones are cleaned up at start and once a day.

Recordings are files in the data folder, `plugin-data/session-recording`. Long recordings of busy sessions use disk, so pick a retention that fits.

A recording stays when its user is deleted, since it is a record of what happened on the host. For the same reason only admins can delete a recording by hand.

Who can watch recordings is set by the `session-recording.view` permission. Admins and users have it at first.
