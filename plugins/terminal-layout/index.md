---
title: "Terminal Layout"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/terminal-layout"
description: "A terminal first Termix layout with a command palette for everything and tiled panes like tmux."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Terminal-Layout/edit/main/docs/index.md"
plugin_id: "terminal-layout"
plugin_version: "1.0.0"
plugin_latest: true
---
Terminal Layout puts your sessions first. It has almost no chrome: your terminals fill the screen, split into panes like tmux or Zellij, with one status line at the bottom. Everything else is in the command palette. Pick it in Settings, Appearance.

## Start

With nothing open you see a few of your hosts. Use the arrow keys or j and k to pick one and press Enter, or press Ctrl+K to search every host, tab, action and setting.

## The command palette

Ctrl+K opens the palette while focus is outside a terminal. Inside a terminal Ctrl+K goes to the shell, so press Ctrl+Space and then c (or Space) instead.

The palette lists your hosts first, then the tabs you have open, then pane and tab commands, plugin actions, pages and settings. Press Enter on a host to connect. Press Ctrl+Enter to open it in a new pane next to the one you are in.

## Prefix keys

Press Ctrl+Space, let go, then press one key. The status line shows PREFIX while it waits, for two seconds.

| Key               | What it does                                    |
| ----------------- | ----------------------------------------------- |
| % or \|           | Split right                                     |
| " or -            | Split down                                      |
| Arrows or h j k l | Move to the next pane                           |
| z                 | Zoom the pane, again to unzoom                  |
| x                 | Close the pane, or the tab when it has no panes |
| =                 | Make the panes even                             |
| c, : or Space     | Open the command palette                        |
| n and p           | Next or previous tab                            |
| Tab               | Last tab                                        |
| 1 to 9            | Go to a tab by number                           |
| ,                 | Rename the tab                                  |
| s                 | Show or hide the status line                    |
| ?                 | Show these keys                                 |

Escape or any other key cancels.

The first time you use the layout, Ctrl+Space is saved in Settings, Keybindings as "Terminal layout prefix key". That is what lets it work while a terminal has focus. Change it there to use another key, like Ctrl+B if you don't run tmux on your servers.

The split screen keys from every layout still work too: Ctrl+Shift+\ splits right, Ctrl+Shift+- splits down and Ctrl+Shift+Enter zooms.

## The status line

The line at the bottom lists your tabs as `1:web-01 2:db-02`, with a star on the one you are in. Click a tab to go to it, middle click to close it, or double click to rename it. On the right are the user and address of the focused pane, the buttons plugins add for the terminal and a button for the palette. Hide it with Ctrl+Space then s.

## Panels and pages

Hosts, Quick Connect, Connections and plugin panels open on the right from the palette. Manage, Settings and plugin pages open as tabs.

## Phones

On a phone the status line is taller and has buttons for the palette and Settings. Pages have a back button.

## Same as Classic Layout

The Dashboard, host and credential editors, Settings and admin pages work the same as in [Classic Layout](https://docs.termix.site/plugins/classic-layout).

## Switch layouts

Open Settings, Appearance and pick a layout. Admins can set the default for everyone. You can switch back at any time.

If a layout cannot be shown, Termix opens a repair screen. Add `?safe-layout=1` to the address to open it on purpose.
