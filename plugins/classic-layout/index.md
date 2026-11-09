---
title: "Classic Layout"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/classic-layout"
description: "The classic Termix layout with an icon rail, sidebar, tab bar and dock."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Classic-Layout/edit/main/docs/index.md"
plugin_id: "classic-layout"
plugin_version: "1.1.2"
plugin_latest: true
---
Classic Layout is the default Termix layout. It draws the whole app, so it is always installed.

## What it gives you

The icon rail on the left opens the host list, credentials, Quick Connect and the panels other plugins add. The sidebar next to it can be resized, and any panel that allows it can also open in a right dock. Tabs sit in the tab bar, and a tab can be split into panes.

The Dashboard, Manage and Settings screens open as tabs. The command palette opens with its shortcut and finds hosts, tabs, settings and actions. On a phone the rail becomes a bottom bar.

## Dashboard

The Dashboard is a grid of tiles. Press the pencil to arrange it: drag a tile to move it, drag its edges to resize it, and add tiles from the list on the right. Search the list or filter it by kind. Plugins add their own tiles, and Operations Center adds any plugin's status or action as a tile of its own. The layout is saved with your account. Reset puts the default back.

## Host rows

With many plugins on, a host row can carry a lot of buttons. When a plugin offers a host page, such as Operations Center, the first run asks how host rows should work:

- Connect buttons: a button per tool on each row, like before.
- Buttons and a host page button: the same, plus one button for the host page, and tools open inside the host page.
- Host page only: no buttons on rows, and a click on a host opens its page.

Change it later in Customize sidebar, under Open host tools in, and the Connect bar list.

## Branding

Admins can set the app name, tagline and logo in Settings, Admin. They show on the sign in screen and in the browser tab. The logo can be a PNG, JPEG or WebP and is saved as a PNG up to 750 KB. The right to change branding is the Change branding permission, which admins have by default. Branding is saved by this plugin, so it also comes from here if another layout is in use.

## First run

The first run asks how much you want on screen (the preset), how host rows should work when a host page is available, and for a theme, accent color, font and language. These steps come from this plugin.

## Switch to another layout

Open Settings, Appearance and pick a layout. Admins can set the default layout for everyone. You can switch back at any time, and Classic Layout cannot be uninstalled.

If a layout cannot be shown, Termix opens a repair screen. From there you can switch to another layout, reset to the default look or, as an admin, update, turn off or restore the copy that shipped with Termix. Add `?safe-layout=1` to the address to open the repair screen on purpose.

## For plugin authors

Classic Layout offers two components other plugins can place with `PluginComponent` while it is the layout in use:

| Component id               | Shows                                                     |
| -------------------------- | --------------------------------------------------------- |
| `classic-layout.hostTree`  | The host list with search, folders and actions. No props. |
| `classic-layout.dashboard` | The Dashboard. No props.                                  |

It also registers the `dashboard`, `host-manager` and `settings` tab types. Termix only runs the code of the layout in use, so these are not there when another layout is chosen.
