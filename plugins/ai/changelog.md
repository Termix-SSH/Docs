---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/ai/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "ai"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Added

- One AI assistant with two views that share their conversations: a floating panel on every page, opened with Ctrl+J or from the AI tab, and the full-screen AI tab
- The assistant manages Termix through the Termix CLI, which ships inside the plugin and runs as the signed-in user, and can open terminals, tabs, settings and sidebar views
- With the new `ai.ops.use` permission (admins only by default), the assistant runs shell commands on target hosts in parallel, with live results per host; pick targets by fleet, folder, tag or host, type `@` to add them, or let the assistant choose
- Every command on a host and every Termix CLI call is recorded and written to the audit log, with secret arguments masked
- Admin settings for the assistant's parallel hosts, command timeout and output kept per host
- Pick up past conversations from Conversations, with the tokens each has used
- The assistant shows its replies in the order they happened, text and tool calls interleaved, with the model's thinking in a collapsed Thinking block of its own
- A context meter in the assistant's header, with the window read from the provider: `max_model_len` and the other fields of OpenAI-compatible model lists (vLLM, OpenRouter, Groq and more), Ollama's `num_ctx` and trained length, Gemini's and Anthropic's model limits; a guess from the model name only when the provider says nothing, marked with `~`
- A context window override per model in the provider settings, which list each model's window and where it came from, with Refresh to ask the provider again
- The assistant loads Ollama models with the conversation's window as `num_ctx`, and uses prompt caching on Anthropic
- Automatic compaction: as a conversation nears what the context window leaves after the reply's tokens, older tool results are trimmed and then the earlier part is summarised, marked with "Context compacted"; a header button compacts on request
- Token usage for every AI call, with a usage view in the assistant and in settings, a dashboard card, and every user's usage for those with the new `ai.usage.view_all` permission (admins only by default)
- Auto-ops: the `ai.tasks` service lets an automation start the assistant unattended, to investigate read-only and report, or to propose a plan per host that runs verbatim only after the owner or someone with `ai.ops.use` approves it; plans expire after 24 hours
- An Auto-ops view in the AI tab with tasks and their reports, plans waiting for approval with live progress, and presets for a daily patrol, disk space cleanup and host down triage that become automations in one step; save your own presets, privately or shared
- More auto-ops presets: service failure and container anomaly (propose a single restart or start for approval), CPU and memory overload, weekly security updates and weekly certificate expiry (report only); the enable form lets you pick the container event
- Auto-ops guardrails under Settings, AI Assistant: Pause AI auto-ops, AI tasks per automation per hour, a token budget per task and a daily token budget per user; duplicate triggers for a host with an open task are skipped
- Alerts when an auto-ops report is ready, a plan waits for approval, a plan has run or a task failed, linking to the AI tab
- The read-only command list also allows `docker system df`, `find` without writing actions, `ping -c`, `nc -z`, `qm` and `pct` status and list, `timedatectl`, `openssl x509 -noout`, update checks and reboot checks
- The read-only command list also allows `docker inspect` with a `--format` limited to a container's state, memory limits and restart policy, `dnf` and `yum` `updateinfo summary` and `list`, `needs-restarting -r`, and reading `/var/run/reboot-required.pkgs`
- The read-only command list also allows `kubectl` and `k3s kubectl` `get`, `describe`, `top`, `logs --tail`, `events`, `version`, `cluster-info`, `api-resources` and `auth can-i`, without secrets and with full objects only for kinds that hold no pod template or data; `crictl` `ps`, `pods`, `images`, `stats`, `version` and `logs --tail`; `nvidia-smi` queries and `topo -m`; `zpool status`, `list` and `iostat` with a count, `zfs list` and `zfs get` of native properties; `pvesm status` and `list`, `pvecm status` and `nodes`, `pveversion`, `pvesh get` of listed status, task, storage and log paths; and `systemctl list-timers`
- The daily patrol and overload presets (version 2) no longer take an LXC container's load for its own when lxcfs passes through the hypervisor's, and `systemd-detect-virt` is on the read-only list
- With Termix 26.10.2+ auto-ops tasks can read Termix through the Termix CLI as the task's owner, limited to read-only commands, with a five-minute session per call that is never stored; plans still hold only shell commands
- With Termix 26.10.2+ auto-ops reports are written in the owner's Termix language, falling back to the language the AI tab saved, then English; the plugin now asks for `users:read` for this, which an admin approves on update
- Assistant runs go on on the server: closing the panel, switching pages, reloading, closing the browser or losing the connection no longer stops them, and coming back shows the conversation with the run continuing live; only Stop ends a run early
- Manage models at the bottom of the assistant's provider list opens the provider settings
- With Termix 26.10.2+ the assistant docked on the right moves the page over instead of covering it

### Changed

- The plugin name and description show in your language
- AI in the sidebar now opens the assistant full screen, replacing the old chat; the terminal assistant still proposes changes for you to approve
- Without `ai.ops.use`, the assistant has no target hosts and cannot run commands on hosts through the CLI, including `exec`, `fleets exec`, `snippets run` and execute routes
- The assistant has no step limit any more and runs until it is done or stopped; it only stops itself when it repeats the same call with the same result five times
- A tool result sent back to the model is capped at 12,000 characters, keeping its start and end

### Fixed

- Change proposals showed a host id instead of the host name
- Anthropic providers failed every chat with "signal: Extra inputs are not permitted"
- Thinking from reasoning models, sent as `reasoning_content`, `<think>` tags, Gemini thought parts or Ollama's thinking field, no longer runs into the answer
- Read-only commands no longer allow `journalctl --vacuum-*` and `--rotate`, `ip` changes such as `ip link set`, `date -s` or setting the hostname
- Read-only `docker logs` needs `--tail` (up to 1000 lines) and cannot follow, and `docker stats` needs `--no-stream`, so neither runs until the command times out

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Ask about your hosts, snippets, fleets, alerts, automations and more, or about one host right from its terminal
- Proposes changes instead of making them, and nothing runs until you approve it
- Can run safe read-only commands like `df` and `uptime` if you allow it
- Works with Ollama, Anthropic, OpenAI, Google Gemini and any OpenAI compatible endpoint
- AI Agents: run Pi, OpenCode, Claude Code or Codex on an SSH host using one of your Termix providers, with tool approvals, queued messages, attachments, Git diffs and worktrees
- One-click install of the selected agent and Node.js, and a button to set up SSH loopback forwarding
