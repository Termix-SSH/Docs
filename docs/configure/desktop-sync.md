---
title: Desktop sync
description: Use the desktop app on its own or linked to your Termix server.
---

# Desktop sync

The desktop app runs a small Termix server of its own. That gives it two ways to work.

| Mode                   | What happens                                                                                                                                                           |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **This device only**   | Everything is stored on your computer. No server and no sign in needed.                                                                                                |
| **Linked to a server** | You sign in with your account on your Termix server. Your hosts, credentials and settings sync both ways, and a copy stays on your computer so it still works offline. |

You pick when you first open the app. Change it any time from **Sync** in the sidebar.

## Link to a server

1. Open **Sync** and press **Link to a server**.
2. Enter the address you use to open Termix in your browser. If it runs under a path, include it, like `https://example.com/termix`.
3. Sign in with your server account.
4. Choose what to do with anything already on this device.

The server must run Termix 2.9 or newer.

## What syncs

Under **What syncs** you can turn each kind of data on or off.

- Hosts, folders and credentials
- Preferences and plugin settings
- Hosts and credentials people shared with you
- Data from plugins, like snippets, workspaces, homepage items and Vault profiles

Each plugin decides if its data syncs. Things tied to one machine or one session, like open terminals, metrics history and recordings, stay where they happened.

To keep one host or folder off the server, turn on **Keep on this device only** in its settings.

## Conflicts

If something changes here and on the server before they sync, the server version wins. It shows under **Conflicts**, where you can press **Keep mine** to send yours instead.

## Where connections start

A linked app can connect to hosts from your computer or through the server. Set the default in **Sync**, under **Where connections start**, and change it per host in the host editor with **Connection Origin**.

Start from your computer for hosts on your own network. Start from the server for hosts only it can reach.

## A proxy in front of the server

If Cloudflare Access, a login page or basic auth sits in front of Termix, open **Reverse proxy** in **Sync**. You can add headers, like a Cloudflare Access service token, a username and password, or trust a self-signed certificate.

## Unlink

**Unlink** stops syncing and signs out. You can keep your data on the device or remove everything that came from the server. Hosts shared with you by others are removed either way.

A link shows as a session on your account on the server, so you can also sign a device out from there.
