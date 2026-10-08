---
title: "Snippets"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/snippets"
description: "Save the commands you run often and run them in a terminal or on many hosts in one click."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Snippets/edit/main/docs/index.md"
plugin_id: "snippets"
plugin_version: "1.0.0"
plugin_latest: true
---
Snippets are commands you save so you don't type them again: a restart, a log tail, a long diagnostic one-liner. Run them in a terminal, in several terminals at once, or straight on a set of hosts with no terminal open.

## Make one

Open **Snippets** from the sidebar and add one with a name and the command. Put snippets in folders and drag them into the order you want.

A snippet can also be a **Note**: text that is pasted into the terminal without running, like a config block.

## Variables

Snippets can fill in parts of the command when they run:

| Variable           | Becomes                                                                      |
| ------------------ | ---------------------------------------------------------------------------- |
| `$HOST`            | The host's address.                                                          |
| `$USER`            | The SSH username.                                                            |
| `$PORT`            | The SSH port.                                                                |
| `$NAME`            | The host's name in Termix.                                                   |
| `${INPUT_1:Label}` | Something you type in before it runs. `Label` is the question you are asked. |

```bash
journalctl -u ${INPUT_1:Service} --since "${INPUT_2:Since}" -n 200
```

When a snippet has inputs, Termix asks for them and shows a preview before running.

## Run one

- **In a terminal.** Click the snippet to send it to the terminal you are in. With several terminals selected, it goes to all of them.
- **On hosts.** Set **Target hosts** on the snippet and use **Run on target hosts**. It runs over SSH on each one, without a terminal, and shows each result.
- **From a key.** Bind a snippet to a key in **Settings**, **Keybindings**.
- **From the command palette.** Search for it by name.

Turn on **Confirm before running** in your settings to be asked first.

## On connect

Set a **Startup Snippet** on a host and it runs in the terminal every time you connect. A snippet that asks for inputs is skipped.

## Quick actions

**Quick Actions** on a host are snippet buttons in that host's [Host Metrics](/plugins/host-metrics) toolbar, for one click jobs.

## Share

Share a snippet or a whole folder with users or roles. They can run it but not change it. Handy for a team's standard commands.

## Import and export

The Snippets panel has **Export** and **Import**. The file is JSON:

```json
{
  "snippets": [
    {
      "name": "Restart nginx",
      "content": "sudo systemctl restart nginx",
      "description": "Restart the web server",
      "folder": "Web",
      "order": 0
    }
  ],
  "folders": [{ "name": "Web", "color": "#3b82f6", "icon": "folder" }]
}
```

`name` and `content` are required. When importing, pick whether to overwrite snippets with the same name and folder or skip them.

## With other plugins

- [Automations](/plugins/automations) can run a snippet as a step.
- [Fleets](/plugins/fleets) can run a snippet on every host in a fleet.
- [AI Assistant](/plugins/ai) can read and propose snippets.

## Permissions

| Permission                                            | What it allows                    |
| ----------------------------------------------------- | --------------------------------- |
| `snippets.view`                                       | See your own and shared snippets. |
| `snippets.create`, `snippets.edit`, `snippets.delete` | Change them.                      |
| `snippets.share`                                      | Share them with users or roles.   |
