---
title: "Samba Shares"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/samba"
description: "Create and manage Samba (SMB) file shares, users and permissions on your hosts from one tab."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Samba/edit/main/docs/index.md"
plugin_id: "samba"
plugin_version: "1.0.0"
plugin_latest: true
---
Samba Shares lets you share folders on your hosts over SMB from Termix. Install Samba, create shares, add users and set folder permissions from one tab. Windows, macOS, Linux and phones can then open the shares.

It talks to your hosts over SSH, the same way the terminal does. Nothing is installed on the host except Samba itself.

## Set up a host

1. The SSH user must be root, or have passwordless sudo. Check by running `sudo -n true` in a terminal on the host. If it asks for a password, add a sudoers rule for the user.
2. Open the host in Manage and turn on Samba shares.
3. Save. Open the host's menu and pick Samba Shares.
4. If Samba is not installed, press Install Samba. It works with apt, dnf, yum, pacman, apk and zypper.

## What you can do

- Shares: Create, edit and delete shares. Set the folder, comment, read only, guest access, allowed users, a write list, force user and group, masks, recycle bin and more.
- Users: Add Samba users with a password, change a password, turn an account off or on and remove it. Make Linux groups and manage who is in them.
- Folder permissions: Set the owner, group and mode of a share's folder, and add or remove user and group ACL entries.
- Sessions: See who is connected, which shares they use and which files are open. Disconnect a session.
- Config: Edit the file Termix manages, test the config with testparm and read smb.conf.
- Logs: Read the Samba log from the journal or the log file.
- Service: Start, stop, restart or reload Samba and set it to start at boot.

## How the config is kept

Termix never rewrites your smb.conf. It adds one line at the end that includes `/etc/samba/termix.conf`, and keeps a copy of the original as `smb.conf.termix.bak`. Shares made in Termix live in that file.

Every change is written to a temporary file and checked with testparm first. If the check fails, nothing changes and you see the error.

Shares that already exist in smb.conf show up in the list with a From smb.conf badge. They are read only here. Change them in smb.conf.

Keep the include line as the last line of smb.conf. Anything added after it would end up inside the last share.

## Users

Samba keeps its own passwords. A Samba user must also be a Linux user. When you add a user that does not exist, Termix creates a Linux user without a login shell, so the account cannot be used to sign in over SSH.

Passwords go to the host over the SSH session and are never stored by Termix.

Removing a user removes the Samba account. The Linux user stays.

## Folder permissions

Samba can only give out what the folder allows. A share is open to a user when both the share settings and the folder permissions allow it. The Folder permissions section on a share changes the owner, group and mode, and adds ACL entries for single users or groups. ACLs need the acl package, which Install Samba adds.

Apply to everything inside runs the change on all files and folders below the share. Use it with care on large shares.

## Firewall and SELinux

Termix does not change your firewall. The Service view shows the command to open Samba for ufw or firewalld.

On hosts with SELinux enforcing, run `setsebool -P samba_export_all_rw on` to let Samba share folders outside the home directories.

## Limits

- Linux hosts only.
- Standalone Samba servers with local users. Domain joins and Active Directory are not managed.
- Printer sharing and the homes share are not managed.
