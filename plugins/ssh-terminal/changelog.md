---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/ssh-terminal/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "ssh-terminal"
plugin_version: "1.4.0"
plugin_latest: true
---
## 1.4.0

### Added

- Check that SSH login works and see recent commands through Termix actions, with SSH login as a status tile on the host page
- A dashboard card with your open terminal sessions, and the open sessions of a host on the host page
- A Recording badge in the terminal while the session is recorded
- When a host needs approved access, the terminal says so and offers a Request access button
- Admins can let Session Recording list, watch and end everyone's live sessions with the new Watch everyone's sessions permission
- Snippets and other plugins can send text to local terminals
- A Verify button when a host needs a second factor before connecting

### Changed

- Needs Termix 26.11.1 or newer
- Settings use the Termix tile look
- The terminal toolbar uses the darker page color
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- Other features could watch or type into a live session they did not own if they knew its id
- A new SSH session no longer gets mouse codes typed into the shell after a tmux session that used the mouse
- The Edit host button on a failed connection shows for saved hosts again
- The mouse wheel scrolls in tmux with mouse support on, even right after tmux starts
- The last row of a local terminal is no longer cut off
- The terminal offers to fill a saved sudo or SSH password at a password prompt again
- Clear All in command history asks first and says when it fails, and switching terminals no longer shows the last host's history
- Running a second macro no longer leaves the first one running with no way to stop it
- A macro that times out says so in your language, and stopping a macro no longer logs an error
- Watch rules say when they could not be saved
- A broadcast that only had one terminal ends when that terminal closes
- Links opened straight from the terminal can no longer reach back into Termix
- Some terminal errors and notices were always in English
- Auto-Tmux from a desktop app linked to a sync server uses the host's Tmux Monitor settings, such as mouse support, instead of the defaults

## 1.3.0

### Added

- Broadcast: type in one terminal and every terminal in the group gets it, with a bar and colored border on each, a box to write and send commands, and a pause at password prompts so a password never reaches another host
- Fill password answers only terminals that are asking, each with its own host's password
- Watch output: alerts when output matches some text or a regex, a job goes quiet, or a background tab has new output
- Find in all terminals: search every open terminal's scrollback and jump to a result
- Save or copy a terminal's output as plain text
- Reset display, clear scrollback, reset shell and send keys such as Ctrl+C or Ctrl+Z from a new Tools button in the tab bar next to split view (needs Classic Layout 1.1.1), the terminal's right click menu, the command palette and the phone key row
- A Right click setting with copy or paste, a terminal menu, or the browser menu
- Terminal overlay plugins can read the text at the prompt and paste into it, and they now work in the desktop app's local terminal too
- A per-host Disable Nagle's Algorithm (TCP_NODELAY) option to reduce terminal input latency

### Changed

- Right click, Ctrl+V and copy on select are now terminal settings that follow your account, moved over from your browser once

### Fixed

- With Auto-Tmux, a new tab on a host whose only tmux session is already open asks what to do instead of mirroring that tab
- Commands run right after answering a password prompt were left out of command history
- Tools that send to a terminal no longer report success when its connection is closed

### Removed

- The SSH Tools panel. Its tools are now in the terminal's Tools menu and its switches are in settings

## 1.2.0

### Added

- Connect from host setting for the mobile app: the phone, this server, or automatic
- Auto-Tmux host option Ask when one session exists, so a new tab can start its own tmux session instead of joining the only one
- Ctrl+click (Cmd+click on Mac) opens a link right away, and a new link setting opens links only that way so a plain click can select text
- An Edit host button on the connection failure screen opens the host's editor (needs Termix 26.10.6)
- Su Password Auto-fill: at a su prompt the terminal offers the password saved on another host with the same address and that user, and never offers the login password there
- rz and sz (lrzsz) file transfers in the terminal, with progress and cancel

### Fixed

- Right click goes to programs that use the mouse, like tmux with mouse mode, instead of pasting into their menus. Hold Shift for the old behavior
- Reconnecting a tab no longer types stray text like 1;2c at the prompt
- A tab that reconnects to its live session no longer logs in to the host again first, so auth logs and fail2ban stay quiet
- Hosts with Cloudflare Tunnel on now work in File Manager, Snippets and every other feature, not only the terminal

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
