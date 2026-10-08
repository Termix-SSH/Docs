---
title: "AI Assistant"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/ai"
description: "An AI assistant that reads your setup and proposes changes for you to approve."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-AI/edit/main/docs/index.md"
plugin_id: "ai"
plugin_version: "1.0.0"
plugin_latest: true
---
AI Assistant is a chat that knows your Termix setup. Ask it about your hosts, snippets, fleets, automations and more. When you ask for a change, it proposes one and waits for you to approve it. It never changes anything on its own.

It works with a model you bring: Ollama on your own network, Anthropic, OpenAI, Google Gemini, or anything with an OpenAI compatible API. Nothing is sent anywhere until you add a provider and send a message.

## Turn it on

The assistant is off for everyone until an admin allows it, and then off for each person until they turn it on.

1. An admin opens **Settings**, **AI Assistant** and turns on **AI assistant**.
2. Each user turns on **Enable the AI assistant** on the same page.
3. Add a provider under **Providers**: pick the type, give it a name, and fill in the address, API key and default model.
4. Open **AI** from the sidebar and ask something.

### Self-hosted models

Termix blocks requests to private addresses by default. To use Ollama or another model on your own network, an admin lists its host under **Allowed private AI hosts**, one per line. `localhost`, `127.0.0.1`, `::1` and `host.docker.internal` are allowed out of the box.

## What it can see

The assistant starts knowing nothing. To answer, it calls tools that read your setup as you, with your permissions:

| It can read                                 |                                                         |
| ------------------------------------------- | ------------------------------------------------------- |
| Hosts                                       | Names, addresses and settings. Never passwords or keys. |
| Snippets, fleets, automations               | If those plugins are on.                                |
| Workspaces, homepage items, the network map | If those plugins are on.                                |
| Notification channels                       | Names and types only.                                   |
| Your command history                        | From the SSH terminal.                                  |

There is no tool for credentials, users, roles, sessions, API keys, sign in settings or the audit log. No prompt can make it read them.

Type `@` in the chat to point it at a host, snippet or automation.

## Changes need your approval

To change something, the assistant proposes it. A card shows exactly what would happen, and nothing runs until you press **Approve**. **Reject** throws it away.

It can propose to add, change or delete hosts and snippets, add fleets and automations, and run a command on a host. Approving needs the **Apply proposals** permission.

## Read-only commands

Turn on **Allow read-only diagnostic commands** and the assistant can run safe commands without asking each time, to answer things like "how full is the disk on web-1". Only a fixed list runs this way: `df`, `du`, `free`, `uptime`, `uname`, `ps`, `top`, `ip`, `ss`, `lsblk`, `cat`, `ls`, `systemctl status`, `journalctl`, `docker ps` and `docker logs`, and a few more. Anything else is proposed first.

## In the terminal

Turn on **Enable AI Assistant** in a host's settings to get an assistant panel next to its terminal. It knows which host you are on, and commands it suggests can run in your open session.

## Coding agents

The assistant can also start a coding agent, like Claude Code, Codex, OpenCode or Pi, on an SSH host and drive it from Termix. See [coding agents](agents.md).

## Permissions

| Permission            | What it allows                                        |
| --------------------- | ----------------------------------------------------- |
| `ai.use`              | Open the assistant and ask it things.                 |
| `ai.manage_providers` | Add, edit and remove providers and their keys.        |
| `ai.apply_proposals`  | Approve the changes it proposes.                      |
| `ai.agents`           | Start coding agents on hosts. Admins only by default. |
