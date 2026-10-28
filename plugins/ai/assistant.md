---
title: "AI assistant"
sidebar_position: 12
slug: "/ai/assistant"
custom_edit_url: "https://github.com/Termix-SSH/Plugin-AI/edit/main/docs/assistant.md"
plugin_id: "ai"
plugin_version: "1.3.0"
plugin_latest: true
---
The AI assistant works on all of Termix for you: it reads and changes hosts, credentials, snippets, fleets and alerts, opens views, and, if an admin allows it, runs shell commands on the hosts you pick.

There is one assistant with two views, sharing the same conversations. A run started in one shows in the other.

- Floating: a panel over any page. Press Ctrl+J (Cmd+J on a Mac), or use Floating panel in the AI tab.
- Full screen: AI in the sidebar opens the AI tab.

Changes run without asking you first. Only use it for requests you would trust a person signed in as you with.

## Open it

- Press Ctrl+J on any page, or use Floating panel in the AI tab. Change the key under Settings, Keybindings, Toggle the AI assistant.
- Drag the panel's header to move it and its edges to resize it. The dock button pins it to the right as a full-height drawer that moves the page over, and the expand button opens the AI tab.
- The assistant works on the server. Closing the panel, switching pages, reloading or closing the browser does not stop it, and neither does a dropped connection. Come back to see how it went, or to watch it carry on. One message at a time per conversation.

Pick a provider at the top. With none set up yet, Add provider takes you to Settings, AI Assistant, Providers. Manage models at the bottom of the list opens the same page.

Conversations shows past conversations, with the tokens each has used. Plus starts a new one.

A reply shows in the order it happened: some text, a tool call, more text, the next tool call. When the model thinks before answering, its thinking shows as a collapsed Thinking block above the text it led to; click it to read it. It is never mixed into the answer.

## What it can do

- Manage Termix with the Termix CLI, which ships inside the plugin: list, add, change and delete hosts, credentials, snippets and fleets, list and revoke API keys, read alerts, sessions and the audit log, and call any route with `termix api`. It works as you, with your permissions.
- Open a terminal on a host, a tab, a settings page or a sidebar view.
- With the `ai.ops.use` permission, run shell commands on target hosts. See [run commands on hosts](#run-commands-on-hosts).

It also knows which tab you are on, and the host when that tab is a terminal or file manager.

The CLI cannot open an interactive terminal, log in or out, keep a tunnel running, or read and write files on the Termix server's own disk. It also cannot run `hosts export`, create API keys, or call export routes through `termix api`, because those print decrypted credentials or new tokens, which would be sent to the model provider.

Every CLI call is kept with its arguments, exit code and output, and written to the audit log as `ai_cli_command`. Passwords, keys, tokens and similar values in the arguments are masked.

## Run commands on hosts

With the `ai.ops.use` permission, the assistant can work on many hosts at once: you pick the hosts, describe what you want, and it runs shell commands on them over SSH and reports back per host. Without it, the target picker and chips are not shown, and the assistant cannot run `termix exec`, `termix fleets exec`, `termix snippets run` or call an execute route through `termix api`.

### Targets

Targets are the hosts the assistant may run commands on.

- In the AI tab, check them on the left: fleets (if the Fleets plugin is on), folders including every folder under them, tags, or hosts one at a time. Search filters every list. Hosts without SSH are not listed.
- In either view, type `@` and part of a name to add a host, fleet, folder or tag. A fleet, folder or tag adds all of its hosts. They show as chips above the input; click the x on a chip to remove it.
- The assistant can also choose targets itself, for example "check disk space on everything tagged prod". The chips and the picker update as it does.

The targets go with every message, and the conversation remembers them. The assistant can still manage Termix with no targets.

### Commands

- It can list its targets, run a command on some or all of them, several hosts at a time, and read each host's OS, kernel, CPU count, memory and uptime, once per conversation. A host that is not a target is refused.
- Each command shows as a card with the command, how many hosts it ran on and how many succeeded or failed. Hosts appear as they finish, with their exit code, how long it took and the first line of output. Click a host to see its full output.
- Commands run without a terminal, so anything that waits for input fails or times out. Long output keeps its start and end.
- Stop ends the assistant's run and closes any command still running.

Every command on every host is kept with its exit code, duration and output, and written to the audit log. Your own SSH access to each host still applies.

## Context and compaction

A model can only read so much at once, its context window. The header shows how much of it the latest call took, for example `42k / 524k`. A `~` means the number is an estimate. Hover the meter for details.

The window is read from the provider when it reports one. Otherwise it is guessed from the model's name, or set to 128k. To set it yourself, edit the provider under Settings, AI Assistant, Providers and use Context window per model.

When a conversation gets close to the window, the assistant makes room on its own. It first shortens older tool results, then summarises the earlier part of the conversation if that is not enough. A "Context compacted" line marks the spot, and the conversation carries on from the summary after a reload. The compact button in the header does the same on request.

## Usage

Every model call is counted: the assistant, the terminal assistant and compaction. The chart button in the header shows today's tokens; click it for the usage view, which is also under Settings, AI Assistant, Token usage. It shows today, the last 7 and 30 days, tokens per day, per model and per feature. Someone with `ai.usage.view_all`, admins by default, can switch to all users and see a breakdown per user.

Tokens come from the provider's own counts. When a provider reports none, they are estimated and marked as such.

The dashboard can show an AI token usage card with today's and the last 30 days' tokens, your own, or the whole server's if you can see everyone's.

## Limits

The assistant keeps going until it is done or you press Stop; there is no step limit. It does stop on its own when it calls the same tool with the same arguments and gets the same result five times in a row, since it is then going nowhere.

An admin can change how many hosts run at once, the command timeout and how much output is kept per host, under Settings, AI Assistant. The assistant can ask for a longer timeout on one command, up to 600 seconds.

## Who can use it

Anyone with the `ai.use` permission, once an admin has turned the assistant on. Opening it turns it on for you. Running commands on hosts also needs `ai.ops.use`, which only admins have at first. Seeing every user's token usage needs `ai.usage.view_all`, also admins only at first.
