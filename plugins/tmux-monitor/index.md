---
title: "Tmux Monitor"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/tmux-monitor"
description: "Browse and control tmux sessions, windows and panes across your hosts."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Tmux-Monitor/edit/main/docs/index.md"
plugin_id: "tmux-monitor"
plugin_version: "1.0.4"
plugin_latest: true
---
Tmux Monitor shows every tmux session on your hosts in one place, with a live preview of each pane. Create, rename, split and kill sessions, windows and panes without attaching, and attach a terminal in one click when you do want in.

## Turn it on for a host

The host needs tmux installed. Open the host in Manage and turn on Enable Tmux Monitor in its Tmux Monitor section. Then pick Tmux Monitor from the host's menu.

Enable tmux mouse support turns on mouse mode for sessions you attach to or create from here. It also rebinds tmux's mouse selection keys so a selection stays highlighted (see Copying text), and that part is server-wide.

## What you can do

- See every session, window and pane as a tree, with a live preview of the selected pane.
- See how much CPU and memory each session uses.
- Search the output of every pane at once, to find the one doing something.
- Tag sessions to remember what they are for.
- Create, rename and kill sessions and windows. Split panes right or down.
- Open sessions from any host side by side: right-click a session, window or pane (or use its … menu) and choose Open in split right / down, or drag a pane onto the preview. Up to four terminals at once.
- On desktop, Attach opens a new terminal tab in Termix. On web, choose between a new Termix tab and a new browser tab. A standalone web monitor offers only the browser-tab destination when there is no Termix tab bar; Attach is unavailable in standalone desktop without a Termix tab layout.

## Copying text

With tmux mouse support on (the default), a mouse selection stays highlighted and copied after you let go, and a left or right click clears it. This needs tmux 3.2 or newer (tested on 3.6). It works by rebinding tmux's mouse selection keys, which is server-wide, lasts until the tmux server restarts, and is POSIX-only. Hold Shift while selecting to use the terminal's own selection. With mouse support off, double-click and drag select text normally and Ctrl+C copies it. Settings apply the next time you attach.

It refreshes every few seconds while it is open.

## Panel beside the terminal

On a host with Tmux Monitor on, open the Tmux panel from the edge of its SSH terminal or the tab menu. It lists the host's sessions. Attach switches that terminal to the session (or attaches it when the terminal is not in tmux yet), clicking a session shows its windows, and clicking a window makes it the active one. Turn the panel off for a host with Panel beside the terminal in its Tmux Monitor settings.

## Auto tmux

To have every terminal on a host start inside tmux, turn on Auto tmux in the host's Terminal settings. That is part of the [SSH Terminal](/plugins/ssh-terminal) plugin. Tmux Monitor is how you watch those sessions from outside.

Who can use it is set by the `tmux-monitor.use` permission. Admins and users have it at first.
