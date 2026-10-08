---
title: "Appearance"
sidebar_position: 11
slug: "/ssh-terminal/appearance"
custom_edit_url: "https://github.com/Termix-SSH/Plugin-SSH-Terminal/edit/main/docs/appearance.md"
plugin_id: "ssh-terminal"
plugin_version: "1.0.0"
plugin_latest: true
---
How the terminal looks and feels is set per host, in the host's Terminal section. Set it once for all your hosts with [host defaults](/guide/host-defaults). These settings are personal: on a host shared with you, you see your own.

## Theme

Pick a built-in theme, or make your own from **Saved themes** and pick each color. A background image can sit behind the text, with its own opacity.

## Font

Termix ships a few monospace fonts, like Caskaydia Cove Nerd Font Mono, JetBrains Mono and Fira Code. To use another, pick **Custom** and type its exact name, like `MesloLGS NF`.

A custom font has to be installed on the computer you use Termix from, not the server. If the name doesn't match, the terminal falls back to a plain monospace font. This is how you get a Nerd Font for prompts like Powerlevel10k.

Also: font size, line height, letter spacing and minimum contrast.

## Cursor and scrollback

Cursor style (block, underline or bar), blinking, and how many lines of scrollback to keep.

## Syntax highlighting

Colors IPs, paths, errors, URLs and more in the output. Pick which kinds under **Highlight Categories**, or turn it off.

## Local echo

On a slow link there is a gap between pressing a key and seeing it. Local echo shows the character at once while the real one is on its way.

| Setting | What it does                          |
| ------- | ------------------------------------- |
| Off     | Never guesses.                        |
| Auto    | Turns on when the connection is slow. |
| On      | Always guesses.                       |

Only plain printable keys are guessed. Password prompts and control keys never are.

## Input

- **Right click selects word**, **Zoom with Ctrl or Cmd and scroll**.
- **Option is Meta** on a Mac.
- **Fast scroll key** and speed.
- **Backspace** mode, for old devices that want Ctrl+H.
- **Link click**: open links straight away, or ask first.
- **Offer to fill password prompts** and **Fill sudo prompts** with the host's saved passwords.
- **Use the SSH title** for the tab name.
