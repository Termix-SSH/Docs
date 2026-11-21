---
title: "Wall Display"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/wall-display"
description: "A full screen Termix layout for a TV or spare monitor that cycles through your status views."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Wall-Display/edit/main/docs/index.md"
plugin_id: "wall-display"
plugin_version: "1.0.0"
plugin_latest: true
---
Wall Display turns Termix into a status board for a TV or spare monitor. There is no sidebar, no tab bar and nothing to edit. Each view fills the screen for a while, then the next one comes up.

## Set it up

1. Make a user for the screen. A user with read only access to the hosts you want to show is best.
2. Sign in as that user on the screen and pick Wall Display in Settings, Appearance.
3. Press F or use the toolbar to go full screen.

Termix remembers the layout for that user, so the screen comes back to the board after a restart.

## Views

The board shows these views in order:

- Homepage, from the Homepage plugin
- Uptime, from the Uptime plugin
- Host Status, a board of every host and whether it is online
- Network Topology, from the Network Topology plugin

A view whose plugin is not installed is skipped. Host Status is built in, but it needs the Host Status plugin to know if hosts are online. Hosts with status checks turned off show as No status.

## Settings

Each user picks how long a view stays on screen (30 seconds by default) and which views to show. Change them in Settings under Wall Display before you switch layouts, or from another device signed in as the same user.

## Controls

Move the mouse or press a key to show the toolbar. It hides again after a few seconds, and so does the cursor.

- Left and Right arrows go to the previous or next view
- Space pauses and resumes
- F goes full screen

The views can't be clicked, so nobody changes anything by accident.

## Leave the board

Open the toolbar and use the Leave button. Change layout opens the layout picker, and Sign out signs the screen out. You can also add `?safe-layout=1` to the address.

The screen stays awake while the board shows, in browsers that allow it.
