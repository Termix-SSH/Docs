---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/ssh-terminal/v/1.1.1/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "ssh-terminal"
plugin_version: "1.1.1"
plugin_latest: false
---
## 1.1.1

### Fixed

- Pasting or uploading an image to a Windows OpenSSH host works when the host has no C:\tmp folder

## 1.1.0

### Added

- A Panels card in the host Terminal tab turns the panel bar on or off, picks the side and sets which panels show and in what order, with defaults like the toolbar
- Panels from other plugins can read the terminal's current folder, which the files panel uses to stay in sync
- The terminal finds its current folder from /proc, so it works on hosts with a minimal ps such as busybox
- A Clear console keybinding action wipes the screen and scrollback without sending anything to the shell
- With Auto-Tmux, a host with exactly one tmux session attaches to it directly instead of asking which one

### Fixed

- The sudo password prompt is found on hosts whose prompt ends in a color reset or a window title
- A tab that reconnects to its live session no longer leaves an extra connection open on the jump host

### Changed

- The local terminal now runs in the plugin instead of the desktop app, so fixes to it no longer need a new desktop build
- Needs Termix 26.10.3 or newer

## 1.0.3

### Added

- A keyboard shortcut to open a new local terminal, set in Settings, Keyboard Shortcuts
- Pasting a copied image with Ctrl+V or Cmd+V uploads it to the host, the same as the paste image button
- Connect to hosts behind a Cloudflare Tunnel, with an optional Access service token, from the host's Terminal tab
- Other plugins can open a terminal tab attached to a tmux session
- Keep tab open on exit, in a host's Terminal tab, keeps the output on screen when the shell exits or the connection closes; press Enter to reconnect
- Copy selected text automatically and right-click paste now work in the local terminal too

### Changed

- The terminal toolbar uses the same background as the tab bar, so its border matches the rest of the app
- The local terminal uses your terminal look from host defaults (theme, font, cursor and spacing)
- On macOS, Option+drag selects text even while an app like Midnight Commander uses the mouse
- The plugin name and description show in your language

### Fixed

- The Files button and Ctrl+right-click opened the file manager in the home folder instead of the shell's current folder
- The mouse wheel over a tmux session walked shell history instead of scrolling; it now scrolls tmux's own history
- Option+Left and Option+Right on macOS move the cursor by word again. Alt+Arrow only leaves the terminal when there is a split pane to move to
- Tab inside tmux, vim or less showed a short list of history entries instead of going to the app, and keys typed there were saved to command history

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
