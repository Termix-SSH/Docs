---
title: "Workspaces"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/workspaces"
description: "Save your open tabs and split layouts and reopen them in one click."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Workspaces/edit/main/docs/index.md"
plugin_id: "workspaces"
plugin_version: "1.0.0"
plugin_latest: true
---
Workspaces saves your open tabs and split layout under a name, so you can bring it all back in one click. Keep one for production debugging, one for the homelab, one for a project.

## Save one

Open the tabs and splits you want, then open **Workspaces** from the sidebar and press **Save Current**. Give it a name and a color.

## Open one

Press **Apply** on a workspace. Your current tabs close and the workspace's tabs open in the same layout, connecting to each host again.

## Change one

- **Update with Current** overwrites a workspace with what you have open now.
- **Rename**, **Duplicate** and delete from its menu.
- **Set as Default** opens that workspace when you sign in.

## Last session

Termix keeps your **Last Session** as a workspace on each device, so you can get back what you had open after closing the browser. It stays on that device and doesn't sync.

## Sync

Your saved workspaces are kept on your account and sync with the desktop app.

Who can use workspaces is set by the `workspaces.use` permission. Admins and users have it at first.
