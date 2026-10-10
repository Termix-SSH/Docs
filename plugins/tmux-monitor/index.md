---
title: "Tmux Monitor"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/tmux-monitor"
description: "Browse and control tmux sessions, windows and panes across your hosts."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Tmux-Monitor/edit/main/docs/index.md"
plugin_id: "tmux-monitor"
plugin_version: "1.0.0"
plugin_latest: true
---
Tmux Monitor shows every tmux session on your hosts in one place, with a live preview of each pane. Create, rename, split and kill sessions, windows and panes without attaching, and attach a terminal in one click when you do want in.

## Turn it on for a host

The host needs tmux installed. Open the host in **Manage** and turn on **Enable Tmux Monitor** in its Tmux Monitor section. Then pick **Tmux Monitor** from the host's menu.

**Enable tmux mouse support** turns on mouse mode for sessions you attach to or create from here. Your other sessions and your tmux config aren't touched.

## What you can do

- See every session, window and pane as a tree, with a live preview of the selected pane.
- See how much CPU and memory each session uses.
- Search the output of every pane at once, to find the one doing something.
- Tag sessions to remember what they are for.
- Create, rename and kill sessions and windows. Split panes right or down.
- **Attach** opens a terminal tab attached to the session.

It refreshes every few seconds while it is open.

## Auto tmux

To have every terminal on a host start inside tmux, turn on **Auto tmux** in the host's Terminal settings. That is part of the [SSH Terminal](/plugins/ssh-terminal) plugin. Tmux Monitor is how you watch those sessions from outside.

Who can use it is set by the `tmux-monitor.use` permission. Admins and users have it at first.
