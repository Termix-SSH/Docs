---
title: "Host Layout"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/host-layout"
description: "A host first Termix layout with a tree of hosts and every tool as a tab on the selected host."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Host-Layout/edit/main/docs/index.md"
plugin_id: "host-layout"
plugin_version: "1.0.0"
plugin_latest: true
---
Host Layout puts your hosts first. Pick it in Settings, Appearance.

## The host tree

Your hosts sit in a tree on the left. Folders come first, then hosts, with sub hosts under their parent. Click a folder or the arrow next to a host to open it. Termix remembers what you opened.

Each host row shows its status dot, the badges plugins add and how many tabs you have open on it. The menu button on a row edits the host or runs actions plugins add.

Type in the search box to filter by name, address, user or tag. Every folder on the way to a match opens while you search. Use the arrow keys to move through the tree and Enter to pick a host.

Drag the edge of the tree to make it wider, or double click the edge to reset it.

### Containers and VMs

Plugins can list what runs on a host under it in the tree. Docker lists containers, Proxmox lists its VMs and containers, and Virtual Machines lists its VMs. They load when you open the host. Click one to open it in that plugin's tab on the host.

## The host tabs

Pick a host and the right side shows it, with a tab for every tool and session it has, like Terminal, Files, Docker or Host Metrics. Overview comes first, with the host's details, a button for each tool and the cards plugins add to a host page.

A tool that is not open yet is drawn dimmer. Click it to open it. Open tabs have a close button, and sessions like the terminal have a plus button to open another one. The More menu holds actions that are not tabs, like Wake on LAN.

Sessions keep running when you pick another host. Go back to a host and it opens on the tab you left.

## Pages and tools

Pages that are not about one host, like Settings or a plugin page, are listed under Open pages below the tree.

The buttons at the bottom are Home (the Dashboard), Manage (hosts and credentials), Tools, Search (the command palette) and your account menu with Settings, Profile and Sign out. Tools lists everything that doesn't need a host. Panels like Snippets, Quick Connect and Connections open on the right.

## Phones

On a phone the tree fills the screen. Pick a host to see its tabs, and use the back button to return to the tree.

## Same as Classic Layout

The Dashboard, host and credential editors, Settings, admin pages and command palette work the same as in [Classic Layout](https://docs.termix.site/plugins/classic-layout).

## Switch layouts

Open Settings, Appearance and pick a layout. Admins can set the default for everyone. You can switch back at any time.

If a layout cannot be shown, Termix opens a repair screen. Add `?safe-layout=1` to the address to open it on purpose.
