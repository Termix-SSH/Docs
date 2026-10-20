---
title: "Capabilities"
sidebar_position: 2
description: "Every capability a plugin can ask for."
---

A capability is something a plugin's code may do. List what you need in `capabilities` in `manifest.json`. People see this list before they install your plugin, worst first. The SDK method that needs a capability throws if the manifest does not list it.

Capabilities are not user permissions. A capability says what the plugin's code can reach. A permission says which users can use a feature.

## Critical

| Capability | Shown as | What it means |
| --- | --- | --- |
| `credentials:read` | See your passwords and keys | It can read the stored secret for any host you can reach. |
| `system:tls` | Manage certificates | It can replace the certificate Termix serves over HTTPS and answer domain checks from certificate authorities. |

## High

| Capability | Shown as | What it means |
| --- | --- | --- |
| `ssh:connect` | Run commands on your servers | Any command, on hosts you connect it to, with your access. |
| `process:spawn` | Run programs on this machine | Programs run on the Termix server itself, not on your hosts. |
| `users:write` | Create and change user accounts | It can add users and change their roles. |
| `users:impersonate` | Act as other users | Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `db:core-refs` | Read core account tables | Can query users, roles and hosts directly from the database. |
| `auth:provide` | Handle sign in | It can add a login method, a second factor or an SSH sign-in type. |
| `auth:policy` | Set sign in rules | It can sign people out when idle, limit session length, turn off remember me and require a second factor. |
| `sync:provide` | Run sync | It can answer all sync requests, so it sees the data that devices and servers sync. |
| `ssh:transport` | Choose how hosts are reached | It can carry the SSH connection to a host over its own route, so it sees everything sent to and from those hosts, passwords included. |
| `device:serial` | Access serial and USB devices | It can open a physical serial port on the machine running Termix. |
| `notify:hub` | Receive every alert | Stores and delivers the alerts all plugins send, including their contents. |
| `ui:layout` | Replace the whole app layout | When chosen, its code draws every screen, including your terminals and settings. |
| `hosts:export` | Export hosts with their secrets | Can read your hosts in full, including saved passwords and keys, and hand them out. Every export is written to the audit log. |
| `desktop:local` | Use this computer | Can read and change files, run a shell and open local ports on this computer. Only in the Termix desktop app. |

## Medium

| Capability | Shown as | What it means |
| --- | --- | --- |
| `hosts:write` | Create and change hosts | It can add hosts and edit the ones you already have. |
| `credentials:use` | Connect to your servers | It cannot see your passwords or keys. |
| `credentials:write` | Save new credentials | It can add passwords and keys to your saved credentials. |
| `network:outbound` | Reach the internet | It can send requests to outside services. |
| `network:serve` | Accept connections | It opens a port on the Termix server. |
| `network:broadcast` | Send network broadcasts | It can send packets to devices on the local network, such as a Wake-on-LAN signal. |
| `network:probe` | Check if ports answer | Can open a plain connection to any address from the server, to see if it is reachable. |
| `hosts:status-provide` | Provide host status | Becomes the source of the online and offline dots for every host. |
| `hosts:activity-provide` | Store recent activity | Becomes the store for the recent activity list of every user. |
| `hosts:lock` | Manage hosts as read only | Hosts it manages can't be edited, deleted or reshared by anyone else. |
| `users:read` | See usernames and roles | Never password hashes, never two factor state. |
| `events:core` | Watch everything happening | Including activity from other users, not just yours. |
| `notify:send` | Send alerts | To you or other users, and through the channels they set up. |
| `audit:read` | Read the audit log | It can see who did what and when. |
| `desktop:window` | Open desktop windows | Only in the Termix desktop app. |

## Low

| Capability | Shown as | What it means |
| --- | --- | --- |
| `hosts:read` | See your host list | Names and addresses for hosts you can already see. |
| `db:own` | Store its own data | Kept in its own tables, separate from other plugins. |
| `kv:own` | Remember small settings | Kept separate from other plugins. |
| `files:own` | Store its own files | In its own folder on disk, separate from other plugins. |
| `secrets:own` | Store its own secrets | Encrypted by Termix. The plugin never holds the key. |
| `settings:read-core` | Read Termix settings | Server settings, not your hosts or credentials. |
| `plugins:read` | See installed plugins | It can see which plugins are installed and running. |
| `ui:surface` | Add its own screens | Tabs, panels and settings you can hide later. |
| `ui:theme` | Add color themes | Only colors and styles. No code runs for a theme. |
