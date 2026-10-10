---
title: "Coding agents"
sidebar_position: 11
slug: "/ai/agents"
custom_edit_url: "https://github.com/Termix-SSH/Plugin-AI/edit/main/docs/agents.md"
plugin_id: "ai"
plugin_version: "1.0.0"
plugin_latest: true
---
A coding agent is a tool like Claude Code that reads and changes code. AI Assistant can start one on an SSH host, in a folder you pick, and let you talk to it from Termix. It uses an AI provider you already added, so the host doesn't need its own API key.

Supported agents: **Pi**, **OpenCode**, **Claude Code** and **Codex**.

The agent runs as the SSH user and can run commands and change files in that folder. Only start one where you would let that user work.

## What the host needs

- Node.js 22.19 or newer.
- The agent installed.
- SSH remote loopback forwarding allowed, so the agent can reach your provider through Termix.

Termix can set this up for you:

- **Install selected agent and Node.js** installs both for the SSH user, in `~/.local/share/termix-agent`. It only downloads from nodejs.org and registry.npmjs.org and checks what it gets.
- **Enable Agent forwarding** turns on loopback forwarding in the SSH server config. It needs root or passwordless sudo, backs up the config and checks it before reloading.

Your existing agent config on the host is never overwritten.

## Start one

1. Right-click a host and open **AI Agent**.
2. Press **New session**, pick the agent, a compatible provider, a model and the working directory.
3. Press **Start agent** and type what you want done.

Claude Code needs an Anthropic provider. Codex needs an OpenAI provider with the Responses API.

## While it works

- When the agent wants to do something that needs your say, it asks. **Allow once** or **Deny**.
- **Interrupt turn** stops what it is doing now. **Stop session** ends it.
- Queue more messages while it works.
- Attach files or paste images, up to 4 at 1 MB each.
- See its Git changes, diffs and branches from the review panel.

Sessions are kept per host. **Resume** picks one back up. **Archive and stop** puts it away.

## Who can use it

Starting agents needs the `ai.agents` permission. Only admins have it at first.
