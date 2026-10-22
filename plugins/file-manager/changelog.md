---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/file-manager/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "file-manager"
plugin_version: "1.1.1"
plugin_latest: true
---
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
