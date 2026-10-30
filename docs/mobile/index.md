---
title: Mobile app
description: What the Termix app for iPhone, iPad and Android does, with or without a server.
---

# Mobile app

The Termix app for [iOS](/install/apps/ios) and [Android](/install/apps/android) is an SSH client that works on its own. From version 2.0.0 you don't need a Termix server: hosts, logins and snippets live on the phone and the phone connects to them itself. Link a server when you want your data in sync with Termix on the web and desktop, or when you want a feature only a server has.

## First start

A new install asks how you want to start:

- Use without a server. Everything stays on the phone. You can link a server any time later.
- Link a Termix server. See [linking a server](linking.md).
- Import. Bring hosts from a Termix host file, an SSH config, a QR code or a backup.

The app then asks once whether to share anonymous usage statistics. It stays off until you answer. See [usage statistics](/privacy#mobile-app).

## This device

This device is the account the app always has. Its hosts, logins and snippets are kept in an encrypted database on the phone, and nothing is sent anywhere.

With no server the phone can:

- Open SSH and Telnet terminals, with password, key, keyboard-interactive and TOTP logins, certificates, jump hosts, proxies and port knocking
- Browse and edit files over SFTP, with downloads, uploads and sharing from other apps
- Run local, remote and dynamic tunnels
- Show Docker containers, host metrics and systemd or OpenRC services
- Open RDP and VNC hosts
- Run snippets on one host or many, wake hosts with Wake-on-LAN and check if hosts are online

Host keys are checked and saved on the phone, and the app warns you when one changes.

Some logins need a server: OPKSSH, Vault, Step CA and `op://` references. A host that uses one says which product it needs.

## Backups

Settings, Backup and data, Local data exports This device to a file locked with a passphrase. Restore it on the same phone or another one. The same place deletes all local data.

Host export and import, with or without passwords and keys, is under Settings, Backup and data, Import and export. It reads Termix host files and SSH config files.

## Accounts

Link as many servers as you like. Each one is its own account, with its own encrypted copy on the phone when the server has the Sync plugin. Switch between them at the top of Home and Hosts, or in Settings, Accounts. Open tabs keep running when you switch.

## Where a host connects from

A host of a linked server can connect from the phone or through the server. Pick it per host in the host editor under SSH, Connect from:

| Choice        | What it does                                                    |
| ------------- | --------------------------------------------------------------- |
| Automatic     | Uses the phone when it can reach the host, otherwise the server |
| This phone    | The phone opens SSH itself                                      |
| Termix server | The server opens SSH and the phone only shows it                |

The choice is a host setting, so it syncs with the host. If a connection fails, the error says what went wrong and offers to try the other way.

## Server features

A linked server adds what the phone can't do alone, like session sharing, server side history, alerts, and plugins with no phone version. See [plugins on the phone](plugins.md).

Features that need a server say so and offer to connect the host through it.

## Background sessions

On Android, open sessions keep running in the background with a notification that lists them. Settings, Notifications, Background sessions has the battery and notification settings Android needs.

iOS stops network connections soon after you leave the app. Tabs reconnect when you come back, and tmux or screen sessions pick up where they were.

## More

- [Linking a server](linking.md)
- [Plugins on the phone](plugins.md)
- [Signing in on the phone](sign-in.md): proxies, client certificates, pins, passkeys and links into the app
- [F-Droid build](/install/apps/f-droid)
