---
title: "Sync"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/sync"
description: "Sync the desktop app with one or more servers, and manage other Termix servers as remote sites from a master."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Sync/edit/main/docs/index.md"
plugin_id: "sync"
plugin_version: "1.0.1"
plugin_latest: true
---
Sync keeps the Termix desktop app and your servers in step. The desktop app keeps its own copy of what a server holds, so it works offline and catches up when it can reach the server again. You can link the desktop app to several servers, and a server can manage other Termix servers as remote sites.

## Link the desktop app to a server

1. Open the desktop app and go to Sync.
2. Enter the address of your server. Add proxy headers, basic auth or a client certificate (.pfx or .p12) if a reverse proxy sits in front of it. A certificate in your system store is used on its own.
3. Sign in to the server. Any sign in method works, including SSO, passkeys and two factor codes.
4. Choose Merge to add this device's data to the account, or Replace to take the account's data and clear this device's.

After the first pass the app syncs on its own: when you change something, when the server changes something, and every few minutes.

What syncs: hosts, folders, credentials, snippets, sharing, host defaults and the data of plugins that sync. In the Sync settings you can switch off a kind of data so it stays on this device.

### Conflicts

If you edit something offline and someone changes the same thing on the server, the server's version wins on the desktop. Your version is kept in the conflicts list in the Sync settings, where you can put it back.

### Unlinking

Unlinking ends the desktop's session on the server. You can keep the synced data on the device as its own, or delete it. Copies of what other people shared with you are always removed.

## Several servers and accounts

Each server you link is its own account in the desktop app, with its own copy of the data, its own session and its own sync state. Data from two accounts never mixes.

- Use the account switcher in the app rail to switch between this device and your servers.
- Choose Add a server to make a new empty account, then link it to a server like the first one.
- Removing an account unlinks it and deletes its copy of the data on this device.

Every linked server keeps syncing in the background, not only the one you are looking at. The app talks to the active account's server for things like proxy headers and remote connections.

### In the browser

A browser can be signed in to more than one account of the same server. Choose Add an account in the switcher, sign in with the other account, then switch between them without typing a password again. The browser holds one session cookie for one address, so accounts on different servers need the desktop app.

## Permissions

| Permission | What it allows                     |
| ---------- | ---------------------------------- |
| sites      | Add, edit and remove remote sites. |

See [Remote sites](sites.md) and the [sync protocol](protocol.md).
