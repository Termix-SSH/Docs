---
title: "AI Assistant"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/ai"
description: "An AI assistant that reads your setup and proposes changes for you to approve."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-AI/edit/main/docs/index.md"
plugin_id: "ai"
plugin_version: "1.2.1"
plugin_latest: true
---
AI Assistant brings an assistant that knows your Termix setup. Ask it about your hosts, snippets, fleets, alerts and more, or ask it to change them. It works as you, with your permissions, through the Termix CLI that ships inside the plugin. See [AI assistant](assistant.md).

It works with a model you bring: Ollama on your own network, Anthropic, OpenAI, Google Gemini, or anything with an OpenAI compatible API. Nothing is sent anywhere until you add a provider and send a message.

## Turn it on

The assistant is off for everyone until an admin allows it, and then off for each person until they turn it on.

1. An admin opens Settings, AI Assistant and turns on AI assistant.
2. Each user turns on Enable the AI assistant on the same page, or just opens the assistant.
3. Add a provider under Providers: pick the type, give it a name, and fill in the address, API key and default model.
4. Open AI from the sidebar, or press Ctrl+J on any page, and ask something.

### Self-hosted models

Termix blocks requests to private addresses by default. To use Ollama or another model on your own network, an admin lists its host under Allowed private AI hosts, one per line. `localhost`, `127.0.0.1`, `::1` and `host.docker.internal` are allowed out of the box.

## The assistant

One assistant, in two views that share their conversations: a floating panel on every page, and the full-screen AI tab. It changes things without asking first, and with the `ai.ops.use` permission it can also run shell commands across hosts you select. See [AI assistant](assistant.md).

## Auto-ops

With the Automations plugin, automations can start the assistant on their own: on a schedule, when a disk fills up, when a host goes down. It investigates read-only and writes a report, or proposes a plan that runs only after someone approves it. Presets for a daily patrol, disk cleanup and host down triage get you started. See [Auto-ops](auto-ops.md).

## Asset inventory

Assets, in the AI tab, collects every host you can connect to with one read-only script: listening ports, connections, services, containers, Proxmox guests and cloud metadata. It sorts assets into zones by built-in and your own CIDR rules, marks hosts that sit in more than one zone, and links guests and containers to where they run. See [Asset inventory](assets.md).

## In the terminal

Turn on Enable AI Assistant in a host's settings to get an assistant panel next to its terminal. It knows which host you are on and reads your setup through a fixed set of tools.

| It can read                                 |                                                         |
| ------------------------------------------- | ------------------------------------------------------- |
| Hosts                                       | Names, addresses and settings. Never passwords or keys. |
| Snippets, fleets, automations               | If those plugins are on.                                |
| Workspaces, homepage items, the network map | If those plugins are on.                                |
| Notification channels                       | Names and types only.                                   |
| Your command history                        | From the SSH terminal.                                  |

To change something, it proposes it. A card shows exactly what would happen, and nothing runs until you press Approve; commands it suggests can run in your open session. Approving needs the Apply proposals permission.

Turn on Allow read-only diagnostic commands and it can run safe commands without asking each time, to answer things like "how full is the disk". Only a fixed list runs this way: `df`, `du`, `free`, `uptime`, `uname`, `ps`, `top`, `ip`, `ss`, `lsblk`, `cat` (only system files under `/proc` and `/sys`), `ls`, `systemctl status`, `journalctl`, `docker ps` and `docker logs`, and a few more. Anything else is proposed first.

## Coding agents

The plugin can also start a coding agent, like Claude Code, Codex, OpenCode or Pi, on an SSH host and drive it from Termix. See [coding agents](agents.md).

## Permissions

| Permission            | What it allows                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------- |
| `ai.use`              | Use the assistant, in the AI tab, the floating panel and the terminal.                   |
| `ai.manage_providers` | Add, edit and remove providers and their keys.                                           |
| `ai.apply_proposals`  | Approve the changes the terminal assistant proposes.                                     |
| `ai.agents`           | Start coding agents on hosts. Admins only by default.                                    |
| `ai.ops.use`          | Let the assistant run shell commands on hosts, and use auto-ops. Admins only by default. |
| `ai.usage.view_all`   | See every user's token usage. Admins only by default.                                    |
| `ai.assets.view`      | See the asset inventory. Admins only by default.                                         |
| `ai.assets.manage`    | Collect assets, edit zone rules and the schedule. Admins only by default.                |
