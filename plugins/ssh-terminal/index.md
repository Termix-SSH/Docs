---
title: "SSH Terminal"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/ssh-terminal"
description: "SSH terminal sessions with tabs, split screen, history, macros and a local terminal in the desktop app."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-SSH-Terminal/edit/main/docs/index.md"
plugin_id: "ssh-terminal"
plugin_version: "1.0.0"
plugin_latest: true
---
SSH Terminal is the terminal in Termix. Click a host and you are in a shell on it, in a tab you can split, rename and keep open across devices. It handles jump hosts, host key checks, tmux and Mosh, and keeps your session alive when your connection drops.

In the desktop app it can also open a terminal on your own computer.

## Connect

Click a host in the sidebar, or pick **Terminal** from its menu. Termix connects with the host's settings: its login, [jump hosts, proxies and port knocking](/guide/hosts). If the host asks for a password, a code or a browser sign in, Termix asks you in the tab.

The first time you connect, Termix shows the host's key fingerprint and asks you to trust it. If the key changes later, it warns you before connecting.

Turn **Enable Terminal** off for a host that should never get a terminal.

## Sessions that survive

- **Disconnects.** If your browser drops, the session stays alive on the server for 30 minutes. Reopen the tab and you pick up where you left off. Admins change the time or turn it off in **Settings**, **SSH Terminal**.
- **Reconnect automatically.** Turn it on for a host and Termix reconnects on its own after a network blip or sleep, keeping the scrollback.
- **Auto tmux.** Turn it on for a host and every connection attaches to a tmux session, or makes one. Use it for sessions that must outlive the 30 minutes.
- **Mosh.** Turn on **Auto mosh** to prefer Mosh over SSH when the host has it.

## The toolbar

A bar along the bottom of each terminal holds the host's other tools, like files, Docker and tunnels, plus image upload and paste, with live CPU, memory and disk stats on the right. In the host editor's **Terminal** tab, the **Toolbar** card moves it to the top, switches between labels and icons only, and turns each button on or off or changes its order. When a terminal is too narrow, buttons drop to icons and the rest go into a **More** menu.

## Command history

Commands you run are saved per host, so you can search them in the **History** panel and press Tab for autocomplete when **Command Autocomplete** is on in your settings. Turn **Command History** off for a host whose commands are sensitive. Admins can turn history off for everyone.

## SSH Tools

The **SSH Tools** panel sends what you type to several terminals at once. Pick the terminals, then type or record keystrokes. It can also fill the saved password into the terminals you picked.

## Macros

A macro types into a terminal for you and waits for it to answer, for logins and prompts. See [macros](macros.md).

## Images

Paste or drop an image into a terminal and Termix uploads it to the host and types its path. This is handy for coding agents like Claude Code running in the terminal. Admins pick where images are stored and for how long in **Settings**, **SSH Terminal**.

## Local terminal

In the desktop app, open **Local Terminal** from the rail or the command palette for a shell on your own computer. It uses PowerShell on Windows, zsh on macOS and your `SHELL` on Linux. Set `TERMIX_LOCAL_SHELL` to use another.

## Look and feel

Theme, font, cursor, scrollback, background image, syntax highlighting, local echo and more are set per host, or once for all hosts with [host defaults](/guide/host-defaults). See [appearance](appearance.md).

## With other plugins

- [Session Sharing](/plugins/session-sharing) shares a live terminal by link or in a meeting room.
- [Session Recording](/plugins/session-recording) records terminal sessions.
- [Tmux Monitor](/plugins/tmux-monitor) watches tmux sessions across hosts.
- [Snippets](/plugins/snippets) runs saved commands in the terminal.
- [AI Assistant](/plugins/ai) can sit next to the terminal and read your history.
