---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/file-manager/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "file-manager"
plugin_version: "1.2.0"
plugin_latest: true
---
## 1.2.0

### Added

- FTP and FTPS hosts: turn on FTP in a host's editor to browse, edit, upload and download files on devices that have no SSH, like old game consoles
- List files, read file info, make folders and delete files through Termix actions, so they work from rules, rollouts and the CLI
- Open a host's files from the command palette
- Drag files out of the file manager straight into Explorer or Finder in the desktop app, with no Save As window (files up to 50 MB)
- The empty file list names your search when nothing matches, instead of saying the folder is empty
- Uploads, copies and moves ask what to do when a file with the same name is there: overwrite, skip or keep both (#28)

### Changed

- Needs Termix 26.11.1 or newer
- The file viewer, diff view and transfer panes use the darker Termix page background
- The SFTP transfer tab uses the same header as other tabs, with the two servers side by side and a line between them
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- Ctrl+S saves a Markdown file while you edit it
- Password fields with the show button are the same height as the other fields next to them
- The History, sync and change folder buttons at the top of the terminal files panel are one height
- The selected files box with delete and copy is the same height as the path bar and search next to it
- Deleting files works again when Termix is opened over plain HTTP on a local network
- The mouse back and forward buttons only move the file pane under the pointer, not every open file tab
- The Drop files overlay goes away when you cancel a drag with Escape or drop somewhere else
- Back, forward, up and refresh in the toolbar have names for screen readers
- Opening a folder or a folder link adds it to the history, so Back returns to where you were
- Ctrl+Shift+T only opens a terminal from the file tab you are looking at, not every open file tab
- Undo after a paste or drag move puts back the right files when one of them failed
- The sudo password prompt can be tried again after a wrong password instead of staying stuck on Loading
- Keyboard shortcuts in the file list no longer act on an old folder after you move around
- The column headers in list view can be sorted with the keyboard
- The local files pane no longer shows an older folder when you click through folders quickly
- The SFTP transfer tab shows what is left after a delete fails part way
- The SFTP transfer refresh button has a name for screen readers

## 1.1.3

### Fixed

- The file transfer rail item keeps its place now that the SSH Tools panel is gone
- Uploads and deletes no longer hang when the SSH connection dies without notice. The connection is checked first, every SFTP step has a time limit, and you get an error or a reconnect instead of a stuck progress box
- One stuck request no longer freezes the rest of the file panel
- A host whose SSH key changed no longer retries over and over. It tells you to accept the new key in a terminal, then you can retry

## 1.1.2

### Added

- Downloads can pick up where they stopped instead of starting over

### Changed

- Folders open faster the first time, with listings fetched ahead when you hover a folder and shared between requests

### Fixed

- The grid lays out right again after switching back to a file manager tab
- List rows keep a fixed height, so the gaps no longer jump after opening a folder
- A sudo password for a directory listing goes over stdin, so it no longer shows in the host's process list
- An empty folder shows a loading state instead of No files found while it loads
- Uploaded files with non-English names keep their names instead of turning into garbled text
- Sorting by name puts zero padded and hex file names (like WAL files) in the right order
- You can select text in a file name while renaming it, instead of dragging the file
- Selected text in the editor stands out from the current line highlight
- Deleting, renaming or creating a folder updates the folder tree in the sidebar right away
- Downloading a file only root can read asks for the sudo password and downloads it, instead of failing with an error or an empty file
- Uploads work on hosts without an SFTP server and in SCP legacy mode, by writing the file over a plain SSH command
- Folders open on routers with Dropbear and no SFTP server (SCP legacy mode) instead of reconnecting over and over

## 1.1.1

### Fixed

- Deleting many files at once is faster, shows progress, can be cancelled and no longer lets a paste or upload race it

## 1.1.0

### Added

- A files panel beside any SSH terminal, so you can manage files without leaving the terminal. It connects on its own, opens in the terminal's folder and can follow it as you cd
- Go to the terminal's folder, or change the terminal to the panel's folder, with one click
- A history of the folders you visit on each host, with the ones you use most at the top
- Settings for the panel: open it with new terminals, which side it sits on, its size, the edge button, following the terminal, how often to check, and how much history to keep
- Open a text file in your external editor from the right click menu in the desktop app

### Fixed

- The gap between rows in the grid view changed on its own after a refresh or when going back into a folder. Rows now keep one fixed size
- Pressing Enter or Escape while renaming or creating an item no longer also triggers the grid shortcuts

### Changed

- Grid items have a light border
- Uploads are faster, up to four files upload at once and one progress box shows file count, speed and a cancel button
- Downloading many small files is faster because they share one channel
- The side by side local view, local transfers and the external editor now run in the plugin instead of the desktop app, so fixes to them no longer need a new desktop build
- Needs Termix 26.10.3 or newer

## 1.0.3

### Changed

- Sorting moved out of the New menu into its own Sort By button
- The plugin name and description show in your language

## 1.0.2

### Fixed

- On the desktop app, the file manager now connects from the server when the host or the desktop is set to start connections there, like the terminal does

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Browse, upload, download, rename, move and delete files, with sudo support
- Edit files in a built-in code editor and preview images, PDFs, audio and video
- A trash you can restore deleted files from
- Copy files between two hosts, with the fastest route picked for you and an integrity check
- A side by side local and remote view in the desktop app
- Each file session belongs to the user who opened it, so another user cannot end or take it over
