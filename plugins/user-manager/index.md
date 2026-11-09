---
title: "Users"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/user-manager"
description: "Manage the user accounts, groups, passwords and SSH keys on your hosts."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-User-Manager/edit/main/docs/index.md"
plugin_id: "user-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
Users manages the accounts on a Linux host over SSH. Each host gets its own tab with its users, groups and sessions.

## Set up a host

1. Make sure Termix logs in to the host as root, or as a user with passwordless sudo, or save the host's Sudo Password.
2. Open the host in Manage and turn on the Users setting.
3. Open the host menu and choose Users.

Without root or sudo you can still see accounts, but password states show as unknown and nothing can be changed.

## What you can do

- Users: see every account with its groups, shell and password state. System accounts are behind a filter.
- New users: set the name, full name, shell, home folder, groups, sudo and an optional password.
- Passwords: set a password, or make the user pick a new one at the next login.
- Access: give or take sudo, and lock or unlock an account.
- SSH keys: add and remove the keys in `~/.ssh/authorized_keys`.
- Groups: create and delete groups and change who is in them.
- Sessions: see who is logged in and recent logins.

## Locking an account

Lock turns off the password and expires the account, so SSH keys stop working too. Unlock undoes both.

## Safety

Root and the user Termix logs in as can't be locked or deleted, and the login user can't lose sudo. These checks also run on the host itself, so a request can't get around them. Removing the only way to log in to a host is still possible in other ways, so take care with passwords and keys.

## Passwords

A password travels over SSH inside the script and is set with `chpasswd`. It never shows up in a command line, and it is not stored in Termix or written to the audit log.

## Sudo

Sudo here means being in the `sudo` or `wheel` group. Rules in `/etc/sudoers` are not read or changed. Removing a user from the group does not end sessions they already have.

## In Host Metrics

With [Host Metrics](/plugins/host-metrics) installed, Users fills its Users card.

## Limits

- Accounts from LDAP or another directory show up, but changes only work on local accounts.
- Alpine needs the `shadow` package for `useradd` and `usermod`.
- SSH keys with options like `from=` are shown and marked, and new keys with options can't be added here.
