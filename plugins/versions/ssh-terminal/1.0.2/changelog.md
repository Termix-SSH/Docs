---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/ssh-terminal/v/1.0.2/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "ssh-terminal"
plugin_version: "1.0.2"
plugin_latest: false
---
## 1.0.2

### Fixed

- The mouse wheel walked shell history instead of doing nothing when there was nothing to scroll back
- Fast scroll with a modifier key no longer scrolls the page behind the terminal
- Password autofill now knows a macOS or BSD sudo `Password:` prompt is from sudo, so it follows the sudo autofill setting and fills the sudo password
- Passwords typed at a password prompt are no longer saved to command history

## 1.0.1

### Fixed

- Terminal links opened straight from a URL no longer crash with a command history error

## 1.0.0

### Added

- First release
- SSH terminals with tabs, split screen, jump hosts and host key checks
- Sessions stay alive after a disconnect and reconnect on their own, with tmux and Mosh support
- Themes, fonts, syntax highlighting and a toolbar with live stats
- Command history with autocomplete, macros and keystrokes sent to several terminals at once
- Shared sessions keep read-only viewers read-only, even after they leave
- A local terminal in the desktop app
