---
title: "Log Search"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/log-search"
description: "Search logs from the journal, log files and Docker containers across many hosts at once."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Log-Search/edit/main/docs/index.md"
plugin_id: "log-search"
plugin_version: "1.0.0"
plugin_latest: true
---
Log Search looks through the logs of many hosts at once. It reads the logs over SSH when you search, so nothing is copied or stored in Termix.

## Set up

Log Search is on for every host by default. To leave a host out, open it in Manage and turn off the Log Search setting. Then open Logs from the sidebar or the command palette.

The journal, protected log files and some Docker setups need a root login, passwordless sudo or the host's saved Sudo Password. Without one, Log Search reads what the login user can read.

## Search

Type what to look for and press Search. Leave the box empty to read the most recent lines.

- Hosts: all hosts by default. Press the hosts button to pick some.
- Sources: the systemd journal, log files and Docker containers. Turn off the ones you don't need to make the search faster.
- Time range: the last 15 minutes up to the last 7 days.
- Level: all lines, warnings and errors, or errors only.
- Unit, container or file: only look at names that contain this text, like `nginx`.
- Regex: read the search as a regular expression. Plain text is the default and is matched exactly, so characters like `.` and `*` mean themselves.
- Match case: off by default.

Results are merged and shown newest first, up to 500 lines. Matches are marked. A line under the search tells you about hosts that could not be read and why. Use the copy and download buttons to take the results with you.

## What is searched

- Journal: `journalctl` for the time range. Priorities 0 to 3 count as errors and 4 as warnings.
- Log files: files changed in the time range under `/var/log`, including rotated `.gz`, `.xz`, `.zst` and `.bz2` files. To search other folders, set Log folders in the host settings. Binary files are skipped.
- Docker: running Docker or Podman containers. Stopped containers are not searched.

Files and containers have no fixed level, so Log Search guesses it from words like error, warn and debug in the line. File times are read from the start of each line. A line with no time uses the time its file last changed.

## Limits

- At most 50 hosts per search, 6 at a time.
- At most 7 days back.
- Each file or container gives its newest 1000 lines, and the journal its newest 5000.
- Search text can be 200 characters. Regular expressions with a repeat inside a repeat are refused.

## Permissions

Use Log Search lets a user search. They can only search hosts they can connect to. Admins and users have it by default.

## Assistant, CLI and Operations

Log Search adds a Search logs action. The assistant, the CLI and MCP can use it to search the last 15 minutes up to 7 days across your hosts and read the matching lines.
