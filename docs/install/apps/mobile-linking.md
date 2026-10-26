---
title: Linking a server
description: Link the Termix mobile app to one or more Termix servers and sync with them.
---

# Linking a server

The Termix app (2.0.0 and newer) works without a server. Link one when you want your hosts, logins, snippets and settings in sync with Termix on the web and desktop, or to use plugins only a server has.

## Link

1. On the welcome screen pick Link a Termix server, or later open Settings, Accounts and press Link a server.
2. Enter the server's address, like `termix.example.com` or `192.168.1.20:30001`. The app adds `https://` when you leave it out and checks the address before it saves anything. If Termix runs under a path, include it.
3. Sign in with any login the server offers: password, LDAP, SSO, passkeys or security keys. A second factor is asked for after.
4. The first time, the app asks what to do with the hosts already on This device.

If a proxy or a client certificate sits in front of the server, see [signing in on the phone](mobile-sign-in.md).

## Merge or replace

| Choice  | What it does                                                                                                            |
| ------- | ----------------------------------------------------------------------------------------------------------------------- |
| Merge   | Copies This device's hosts, logins and snippets to the server too. Ones that look the same as a server host are skipped |
| Replace | Uses only what is on the server for this account. Nothing is copied                                                     |

This device keeps its own data either way.

## Sync

When the server has the [Sync](/plugins/sync) plugin on, the app keeps its own encrypted copy of that server on the phone. It syncs both ways, also in the background, and hosts of the server keep working offline. They can still connect from the phone with no server in reach.

Without the Sync plugin the app reads the server live, so its hosts need the server to be reachable. Settings, Accounts, Sync and proxy says so and how to turn it on.

### What syncs

Under Sync and proxy, What syncs you can turn each kind off for that server: hosts and folders, logins, snippets, host defaults and preferences. Data you turn off stays on the phone only.

### Conflicts

When a host was changed on the phone and on the server at the same time, the server's version is kept and the change shows under Conflicts. Press Keep mine to send yours again, or Use server to drop it.

Changes the server refused, for example on a host you can only view, show under Not saved on the server. They stay on the phone.

## Many servers

Link as many servers as you like. Each one is its own account with its own copy. Switch at the top of Home and Hosts. Open tabs keep running when you switch.

## Unlink

Open Settings, Accounts, Sync and proxy and press Unlink. The phone signs out of the server, and nothing is deleted on the server.

- Keep a copy on This device moves your own hosts, logins and snippets to This device. Hosts shared with you are not kept.
- Delete from this phone removes everything the phone has for that server.

## Older servers

The app also links to older servers, with fewer features. A copy on the phone needs the Sync plugin, which runs on Termix 26.10.3 and newer. Passkey sign in and host colors and icons need Termix 26.10.6 or newer.
