---
title: "Auto-ops"
sidebar_position: 13
slug: "/ai/auto-ops"
custom_edit_url: "https://github.com/Termix-SSH/Plugin-AI/edit/main/docs/auto-ops.md"
plugin_id: "ai"
plugin_version: "1.1.0"
plugin_latest: true
---
Auto-ops lets the assistant work when nobody is at the keyboard. An automation from the Automations plugin starts it, on a schedule, when a metric crosses a threshold, when a host goes down, or on any other trigger. The assistant follows a runbook, looks into the hosts and writes a report. It can also propose a fix, which runs only after someone approves it.

It needs the Automations plugin, the `ai.ops.use` permission and a provider. Admins have `ai.ops.use` by default.

## Get started

1. Open AI from the sidebar and switch to Auto-ops at the top.
2. Optionally pick the provider and model your tasks use. Left as they are, tasks use your default provider and model.
3. Under Presets, press Enable on a preset, check the hosts, trigger, what the assistant may do and the time limit, and press Enable again.

This creates an automation you can change further in Automations. You can also add an Ask AI step to any automation yourself.

## What it may do

| Level          | What the assistant does                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Report only    | Runs read-only commands and writes a report. It changes nothing.                                        |
| Propose a plan | Looks into it the same way, then proposes exact commands per host. Nothing runs until someone approves. |

While it looks into a problem, the assistant can only run commands from a fixed list of read-only ones, like `df`, `free`, `systemctl status`, `journalctl` and `docker ps`. Anything else is refused, and so are commands that would print secrets or never finish.

On Termix 26.10.2 and later it can also read Termix itself through the CLI, signed in as the task's owner. Only read-only commands run there too.

## Presets

| Preset                    | When                                 | Level          |
| ------------------------- | ------------------------------------ | -------------- |
| Daily patrol              | Every day at 09:00                   | Report only    |
| Disk space cleanup        | A disk at 85% or more for 5 minutes  | Propose a plan |
| Host down triage          | A host goes offline                  | Report only    |
| Service failure           | A health check starts failing        | Propose a plan |
| Container anomaly         | A container exits or turns unhealthy | Propose a plan |
| CPU overload              | CPU at 95% or more for 15 minutes    | Report only    |
| Memory overload           | Memory at 95% or more for 10 minutes | Report only    |
| Weekly security updates   | Mondays at 09:30                     | Report only    |
| Weekly certificate expiry | Mondays at 09:45                     | Report only    |

The enable form shows each preset's runbook. Change it there, and press Save as preset to keep it as your own. Turn on Share when saved as a preset to offer it to everyone who may use auto-ops.

When a newer version of a preset ships, its card shows Update available. Your automation is not changed; enable the preset again to get the new version.

## Tasks and reports

Every run is listed under Tasks with its status, severity, summary, how long it took and the tokens it used. Open one to read its report. Open in assistant shows the whole run as a conversation, where you can ask follow-up questions.

You get an alert when a report is ready, a plan is waiting, a plan has run or a task failed. Test runs from the Automations editor never send alerts and are always report only.

## Approving a plan

Plans waiting for a decision are under Approvals. Each host shows its commands, why, the risk, how to roll back and how to check the result.

- The automation's owner, or anyone with `ai.ops.use` who can reach every host in the plan, can approve or reject it.
- Approve and run runs each command exactly as shown, in order. A host stops at its first failed command. The result is added to the task's report.
- A plan nobody decides on expires after 24 hours.

## Limits

An admin sets these under Settings, AI Assistant.

| Setting                          | Default   | What it does                                                   |
| -------------------------------- | --------- | -------------------------------------------------------------- |
| Pause AI auto-ops                | Off       | Stops every running task and plan and skips new ones.          |
| AI tasks per automation per hour | 6         | More triggers in the same hour are skipped.                    |
| Token budget per AI task         | 200,000   | A task that reaches it stops and reports what it found.        |
| Daily AI token budget per user   | 2,000,000 | Counted per UTC day across all AI use. After that, tasks stop. |

A trigger is also skipped while a task for the same automation and host is still running or waiting for approval. Every command a task runs is in the audit log.
