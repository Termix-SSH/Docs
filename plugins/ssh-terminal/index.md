---
title: "SSH Terminal"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/ssh-terminal"
description: "SSH terminal sessions with tabs, split screen, history, macros and a local terminal in the desktop app."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-SSH-Terminal/edit/main/docs/index.md"
plugin_id: "ssh-terminal"
plugin_version: "1.3.0"
plugin_latest: true
---
SSH Terminal is the terminal in Termix. Click a host and you are in a shell on it, in a tab you can split, rename and keep open across devices. It handles jump hosts, host key checks, tmux and Mosh, and keeps your session alive when your connection drops.

In the desktop app it can also open a terminal on your own computer.

## Connect

Click a host in the sidebar, or pick Terminal from its menu. Termix connects with the host's settings: its login, [jump hosts, proxies and port knocking](/guide/hosts). If the host asks for a password, a code or a browser sign in, Termix asks you in the tab.

The first time you connect, Termix shows the host's key fingerprint and asks you to trust it. If the key changes later, it warns you before connecting.

Turn Enable Terminal off for a host that should never get a terminal.

The mobile app can open SSH from the phone itself or through this server. Connect from (mobile app) picks which for a host: Automatic uses the phone when it can reach the host and the server otherwise. Each user picks their own.

## Sessions that survive

- Disconnects: If your browser drops, the session stays alive on the server for 30 minutes. Reopen the tab and you pick up where you left off. Admins change the time or turn it off in Settings, SSH Terminal.
- Reconnect automatically: Turn it on for a host and Termix reconnects on its own after a network blip or sleep, keeping the scrollback.
- Auto tmux: Turn it on for a host and every connection attaches to a tmux session, or makes one. Use it for sessions that must outlive the 30 minutes.
- Mosh: Turn on Auto mosh to prefer Mosh over SSH when the host has it.

## The toolbar

A bar along the bottom of each terminal holds the host's other tools, like files, Docker and tunnels, plus image upload and paste, with live CPU, memory and disk stats on the right. In the host editor's Terminal tab, the Toolbar card moves it to the top, switches between labels and icons only, and turns each button on or off or changes its order. When a terminal is too narrow, buttons drop to icons and the rest go into a More menu.

## Command history

Commands you run are saved per host, so you can search them in the History panel and press Tab for autocomplete when Command Autocomplete is on in your settings. Turn Command History off for a host whose commands are sensitive. Admins can turn history off for everyone.

## Tools

The Tools button in the tab bar, next to split view, holds everything below. It works on the terminal you used last, named at the top of its menu. A number on it shows how many watch rules are on, and it turns yellow while a broadcast runs. The same tools are in the command palette and the terminal's right click menu, and on a phone they are the first key in the key row.

### Broadcast

Broadcast sends what you type to several terminals at once. Open Tools and choose Broadcast input. You can also give it a shortcut in Settings, Keyboard Shortcuts. Then pick the terminals: all open, this split, the same folder, or one by one.

Each terminal in the group shows a bar and a colored border. Type in any of them and the others get it, including keys in programs like vim or top. Arrow keys and backspace are adjusted to suit each terminal. Compose opens a box where you can write a command, even several lines, and send it to the whole group with Ctrl+Enter.

Typing pauses while a terminal asks for a password, so a password never reaches another host. Fill password answers only the terminals that are asking, each with its own host's saved password. Ctrl+C and the other signal keys still get through. Terminals that are offline are skipped and rejoin when they reconnect. Local terminals can't join a group.

### Watch output

Watch rules alert you when output matches some text or a regex, when output goes quiet for some seconds (a job finished), or when a background tab has new output. Quiet and new output rules fire only when you are looking elsewhere. Save a rule once, then switch it on for each terminal you want. A bell in the toolbar shows how many are on.

You get a toast, and an alert through your Alerts channels if the Alerts plugin is on. Alerts name the rule and the host. The matching line appears only in the toast, since output can hold secrets. Rules run in your open Termix page, so nothing fires once it is closed.

### Find in all terminals

Press Ctrl+F and turn on the all terminals button to search the scrollback of every open terminal. Click a result to jump to that tab and line. Results stop at 500.

### Save output

Save output downloads the terminal's scrollback as a plain text file, and Copy output puts it on the clipboard. Save selection saves only the text you selected.

### Fix a terminal and send keys

Reset display fixes garbled text without touching the shell. Clear scrollback empties the history. Reset shell types `stty sane; reset` at the prompt, after asking you. Send key sends Ctrl+C, Ctrl+Z, Ctrl+\, Ctrl+D, Esc or any Ctrl + letter, which helps when a key is taken by your browser or system.

## Clipboard

These are in your terminal settings and follow your account:

- Right click in the terminal: copy or paste, the terminal menu, or the browser menu. Hold Shift for the terminal menu, or for copy and paste if the menu is your choice. A program using the mouse, like tmux, gets the click unless you hold Shift.
- Ctrl+V pastes: turn it off to send Ctrl+V to the shell. Ctrl+Shift+V still pastes.
- Copy selected text automatically: with this on, finishing a selection copies it and right click pastes.

If you changed these before version 1.3.0, your browser's choices move to your account once.

## Macros

A macro types into a terminal for you and waits for it to answer, for logins and prompts. See [macros](macros.md).

## Images

Paste or drop an image into a terminal and Termix uploads it to the host and types its path. This is handy for coding agents like Claude Code running in the terminal. Admins pick where images are stored and for how long in Settings, SSH Terminal.

## rz and sz

With `lrzsz` installed on the host, you can move files right in the terminal:

- `sz file.tar.gz` downloads the file to your computer. Several names download several files.
- `rz` shows a bar at the bottom of the terminal. Press Choose files and pick what to upload.

The bar shows progress and has a button to cancel. Transfers are not kept in session recordings or in the output a
reattached tab replays. Turn it off with rz and sz file transfers in your SSH Terminal settings.

## Local terminal

In the desktop app, open Local Terminal from the rail or the command palette for a shell on your own computer. You can also give Open new Local Terminal a shortcut in Settings, Keyboard Shortcuts. It works from anywhere in the app, including an SSH terminal, and each use opens and focuses a new session. It uses PowerShell on Windows, zsh on macOS and your `SHELL` on Linux. Set `TERMIX_LOCAL_SHELL` to use another.

The [clipboard settings](#clipboard) also apply to Local Terminal.

## Look and feel

Theme, font, cursor, scrollback, background image, syntax highlighting, local echo and more are set per host, or once for all hosts with [host defaults](/guide/host-defaults). See [appearance](appearance.md).

## With other plugins

- [Session Sharing](/plugins/session-sharing) shares a live terminal by link or in a meeting room.
- [Session Recording](/plugins/session-recording) records terminal sessions.
- [Tmux Monitor](/plugins/tmux-monitor) watches tmux sessions across hosts.
- [Snippets](/plugins/snippets) runs saved commands in the terminal.
- [AI Assistant](/plugins/ai) can sit next to the terminal and read your history.

## Environment variables

This plugin reads some environment variables on the Termix server. See the [reference](/plugins/ssh-terminal/reference#environment-variables) for the list.
