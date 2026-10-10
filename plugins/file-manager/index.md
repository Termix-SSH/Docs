---
title: "File Manager"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/file-manager"
description: "Browse, edit and move files over SFTP, including straight from one server to another."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-File-Manager/edit/main/docs/index.md"
plugin_id: "file-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
File Manager lets you browse and change files on your hosts over SFTP. Upload, download, rename, move, delete, edit files in a code editor, preview images and video, and copy files straight from one server to another.

## Set up a host

File Manager uses the host's SSH login, so a host you can open a terminal on is ready. Open the host in **Manage** and check **Enable File Manager** is on in its File Manager section. Set **Default Path** to the folder it should open in.

Then pick **Files** from the host's menu, or the file button in the tab bar.

## Browse and edit

- Click to open folders, and double-click a file to edit or preview it.
- Drag files from your computer to upload them. Select and download files or whole folders.
- Right-click for rename, move, copy, permissions and more.
- The editor highlights code. Save writes straight back to the server.
- Images, PDFs, audio and video open in a preview.
- In the desktop app, **Open externally** edits a file in your own editor. Saving there uploads it back.

### Sudo

If you don't have permission for a file, Termix asks for the sudo password and does it with sudo. If the host has a **Sudo Password** saved, it is used for you.

## Trash

Deleting a file moves it to a trash folder, `.termix-trash` in your home folder on that server, instead of destroying it. Open **Trash** from the sidebar to see what you deleted and **Restore** it to where it was.

- Each host and user has its own trash.
- Restore fails rather than overwriting something that is now at that path.
- Items older than the retention period, 7 days by default, are cleaned up when you open the trash. Change it in the trash view, from 1 to 3650 days.
- Files on a different filesystem than your home folder can't go to the trash. Termix tells you instead of quietly deleting them.
- Deleting from the trash, or emptying it, is permanent.

Turn off **Confirm before moving files to trash** in **Settings**, **File Manager** to skip the question.

## Copy between hosts

Open **SFTP** from a host's menu to see two hosts side by side, and copy between them. Termix tries a direct route between the hosts and a relay through Termix, picks the faster one, and checks every file with SHA-256 when it is done.

Both hosts need to be reachable from the Termix server.

## Local files in the desktop app

In the desktop app, **Show local files** adds your own computer as a pane next to the server, for drag and drop in both directions. **Simultaneous File Transfers** in settings sets how many files go at once. Lower it if your server limits SFTP channels.

## Old servers

Some devices have no SFTP. Turn on **SCP Legacy Mode** for those hosts and Termix uses SCP and shell commands instead.

Who can use it is set by the `file-manager.use` permission. Admins and users have it at first.
