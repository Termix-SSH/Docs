---
title: "Notes"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/notes"
description: "Write markdown notes for each host, folder or yourself, with commands you can copy or send to the terminal."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Notes/edit/main/docs/index.md"
plugin_id: "notes"
plugin_version: "1.0.0"
plugin_latest: true
---
Notes lets you write down what you know about your servers, right next to them. Each host can have as many notes as you like, written in markdown: commands, ports, quirks, who to call.

Open Notes from a host's menu, from the command palette, or in a panel beside the host's SSH terminal.

## Where notes live

The scope bar above the list picks which notes you see.

- This host: notes for the open host. Anyone who can open the host can read them. You need edit access to the host to add, change or delete them.
- Folder: notes for every host in the host's folder. Anyone who can open a host in that folder can read them. You need edit access to a host in the folder to change them.
- Mine: private notes that belong to you and no host. Nobody else can see them.
- All: search across every note you can open.

Notes are stored as plain text on the Termix server, not encrypted. Keep passwords and keys out of them. Use a credential for those.

## Writing

Press New note, then write in the editor. Changes save on their own a moment after you stop typing.

- Write shows the text, Preview shows it formatted, Split shows both side by side in the full tab.
- The toolbar adds headings, bold, italic, code, code blocks, lists, task lists, quotes and links.
- Task lists in the preview can be ticked with a click.
- Add tags separated by commas. Tags are searchable.
- Pin a note to keep it at the top of its list.

Raw HTML and images are not shown, so a note cannot load anything from outside.

## Commands

Code blocks in a note have two buttons when you hover them.

- Copy puts the command on your clipboard.
- Send to terminal pastes it into the terminal you used last. It does not press Enter, so you can read it first.

In the panel beside a terminal, Send goes to that terminal.

## Panel beside the terminal

On a terminal tab, open the tab menu and pick Notes panel. In Settings, Plugins, Notes you can choose the side, the size, and whether it opens by itself.

To turn Notes or its panel off for one host, open the host in Manage and change its Notes settings.

## Permissions

The Use Notes permission lets a role read and write notes. Host and folder notes still follow host access.
