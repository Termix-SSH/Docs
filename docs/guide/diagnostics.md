---
title: Diagnostics report
description: Make one file with what is needed to find a problem, and send it with a bug report.
---

# Diagnostics report

When something in Termix breaks, a diagnostics report saves a lot of back and forth. It is one file with the errors, logs, plugin states and connection checks a maintainer needs. Attach it to a [GitHub issue](https://github.com/Termix-SSH/Termix/issues/new/choose) or send it in Discord. Termix 26.11.3 and newer.

## Make a report

Open the report page in any of these ways:

- Press Ctrl+Alt+Shift+D (Cmd+Alt+Shift+D on a Mac). This works even when buttons stop working.
- Click Report a bug in Settings, the dashboard menu or the command palette.
- On a plugin's page in Plugins, click Make a diagnostics report. That plugin comes first in the report and the issue goes to its repo.
- On the login page, click Trouble signing in.
- If the loading screen takes a long time, click the link under it.
- Add `?diagnostics` to your Termix address, like `https://termix.example.com/?diagnostics`. This opens only the report page and starts no plugins, so it works when a plugin breaks the whole page.

Make the report right after the problem happens, in the same tab, so the browser part still has the errors. Then check the preview and click Download. Open GitHub issue downloads the file and opens a new issue with a short summary filled in. Drag the file into it.

## What is in it

You choose which parts to include. All are on by default.

| Part               | What it has                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| Detected problems  | Plain checks run on everything below, like a login proxy blocking plugin files    |
| Server             | Version, database health, SSL, safe mode, and which settings are set. Admins only |
| Plugins            | Each plugin's version and state, on the server and in the browser                 |
| Plugin details     | Extra details running plugins add about themselves. Admins only                   |
| Server logs        | The server log since it started and the newest lines. Admins only                 |
| Connection         | Header and cookie names the server got, which show a proxy in front of Termix     |
| Connection checks  | Tests that Termix and each plugin's files load, with and without cookies          |
| Browser errors     | Uncaught errors, failed loads and blocked loads, also from plugin views           |
| Browser console    | Recent console lines from the page and plugin views                               |
| Network            | Recent requests with their status and timing, and WebSocket closes                |
| Browser and window | Browser, screen size, language and the names of saved storage keys                |
| Page layout        | The outline of the page, for layout problems                                      |

A user who is not an admin gets the browser parts. Ask an admin to make one too when the problem is on the server.

## What is never in it

- Passwords, private keys, API keys, tokens, cookies and session values are always removed, even from log lines.
- Password reset codes printed to the server log are never kept for the report or the log view.
- Header and cookie values, storage values and what you type in fields are never read.
- Env vars show only their names, except a few plain settings like `PORT` and `LOG_LEVEL`.

Hide names and addresses is on by default. It swaps IPs, host names, usernames, emails and your server's address for placeholders like `host-1` and `user-1`, the same placeholder for the same value everywhere in the file. Page text is off by default, since it can show your data.

The report is only made in your browser. Nothing is sent anywhere until you send the file yourself. Admins making a report is recorded in the [audit log](/guide/audit-log).

## Server logs

Admins have a Server logs tab on the report page. It shows the server log live, the same lines `docker logs termix` shows, with secrets removed. Filter by level or plugin, search, pause and download. The server keeps the first 400 lines since it started and about the last 4,000 lines in memory.

## For plugin authors

A plugin can add its own section with `ctx.diagnostics.provide` and open the report page with `app.openDiagnostics()`. See the plugin guide.
