---
title: "Usage Statistics"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/telemetry"
description: "Sends a small anonymous daily report so we can see how Termix is used."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Telemetry/edit/main/docs/index.md"
plugin_id: "telemetry"
plugin_version: "1.0.0"
plugin_latest: true
---
Usage Statistics sends a small anonymous report once a day so the Termix team can see how Termix is used: which platforms it runs on, which features people open, which plugins are on. It helps decide what to work on.

It never sends usernames, hostnames, IP addresses, commands or credentials.

## What is sent

Admins choose in **Settings**, **Usage Statistics**:

| Setting                        | Sends                                                                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **Include platform info**      | Operating system, CPU architecture, Node.js version, database type, and how Termix is installed (Docker, desktop app or server). |
| **Include feature usage**      | How many times each kind of tab was opened and how many SSH logins happened since the last report.                               |
| **Include installed features** | Which plugins are on and their versions.                                                                                         |

Each report also carries the Termix version and a random **Instance ID**, so one install's reports can be counted together. **Reset instance ID** makes a new one.

Each user can leave their own tab counts out with **Include my feature usage** in their settings.

## See it first

**Preview report** shows exactly what the next report contains. **Send now** sends one straight away.

## Turn it off

Turn off **Share anonymous usage statistics**, or uninstall the plugin. To lock it from the environment, set `ENABLE_TELEMETRY=false`. Then the setting can't be changed in the app.

During first-run setup, admins can also turn it off on the plugin picker.

## Where it goes

Reports go to Termix's [PostHog](https://posthog.com/) project. To send them to your own PostHog instead, set `POSTHOG_API_KEY` and `POSTHOG_HOST`.

The code that builds the report is in this plugin's repo, so you can read exactly what it does.
