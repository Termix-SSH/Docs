---
title: "Original Layout"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/original-layout"
description: "The Termix layout from before 2.3.0, with a floating sidebar of host folders and a floating tab bar."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Original-Layout/edit/main/docs/index.md"
plugin_id: "original-layout"
plugin_version: "1.0.0"
plugin_latest: true
---
Original Layout brings back the look Termix had up to version 2.2.1, before the 2.3.0 redesign. Pick it in Settings, Appearance.

## The sidebar

Your hosts sit in a floating sidebar on the left, with one card per folder. Hosts that are not in a folder get their own card at the top. Sub-folders show inside their parent's card and sub-hosts sit under their parent host. Click the arrow on a card to fold it. Termix remembers which cards you folded.

Each host row has a status dot, the host name and a few buttons for the tools you use most, such as the terminal or the file manager. The menu button holds the rest: other tools, copy the address or password, share and edit. Click the host name to open it the same way the first button would.

The Host Manager button opens the Host Manager tab, where you add, edit, move and delete hosts and credentials.

### Search

Type in the search box to filter the hosts. Plain words match the name, address, user, folder and tags. You can also search one field at a time:

| Search       | Finds hosts where           |
| ------------ | --------------------------- |
| `tag:prod`   | a tag contains prod         |
| `name:web`   | the name contains web       |
| `user:root`  | the user name contains root |
| `ip:10.0`    | the address contains 10.0   |
| `port:2222`  | the port contains 2222      |
| `folder:lab` | the folder contains lab     |
| `auth:key`   | the login type contains key |

Mix them, like `tag:prod user:root web`. While you search every folder opens, so no match hides in a folded card.

### Apps and other panels

The grid button at the top of the sidebar lists everything the old icon rail had: credentials, quick connect, open connections, plugin panels and plugin tabs. A panel opens in the sidebar with a back button to return to your hosts.

### Your account

The button at the bottom of the sidebar opens your account menu: Profile, Admin Settings (admins), Plugins (admins), Settings, the theme, the command palette and Log out.

Drag the right edge of the sidebar to resize it, or use the reset button. The menu button folds the sidebar to a thin strip on the left. Click the strip to bring it back.

## The tab bar

Open tabs sit in a floating bar at the top, with the Dashboard first. Drag a tab to move it, or drag it down into the tab area to split the view. Middle click closes a tab and right click shows more, like rename and split.

The buttons on the right are, in order: a list of every open tab, buttons that plugins add, split view, Tools, Quick Connect, a menu with full screen, and a button that hides the bar. When the bar is hidden a thin strip stays at the top. Click it to bring the bar back.

## Host Manager

The Host Manager has tabs across the top, like before 2.3.0:

- Host Viewer: your hosts as cards, one section per folder. Each card shows the address, user, the tools the host has and its status check. Buttons on the card export it as JSON (without passwords or keys), clone it, edit it or delete it. Fold a section with its header.
- Add Host: the host editor. While you edit a host it reads Edit Host.
- Credentials Viewer and Add Credential: the same for credentials.
- Defaults: the host defaults for you, a folder or everyone.

Search the hosts the same way as in the sidebar, with plain words or fields like tag: and user:.

## Tools

The Tools button opens a sidebar on the right for panels like snippets and command history. When more than one panel can go there, pick one with the buttons across the top.

## Themes

Original Layout comes with two themes, Original Dark and Original Light, made from the colors Termix used before 2.3.0. Original Dark is picked the first time you use the layout. Change it in the account menu or in Settings, Appearance. Other themes work too.

While you use Original Layout, Termix shows the old system font, white highlights and rounded corners, in place of your own font and accent color. Switch back to Classic Layout and your own picks return. The Original themes bring the same look to plugin screens.

## Same as Classic Layout

The Dashboard data, host and credential editors, Settings, admin pages, command palette and the mobile bottom bar work the same as in [Classic Layout](https://docs.termix.site/plugins/classic-layout).

Branding (app name, tagline and logo) is set in Classic Layout's admin settings. Original Layout shows it but has no page to change it.

## Switch layouts

Open Settings, Appearance and pick a layout. Admins can set the default for everyone. You can switch back at any time.

If a layout cannot be shown, Termix opens a repair screen. Add `?safe-layout=1` to the address to open it on purpose.
