---
title: "Import and Export"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/import-export"
description: "Import hosts from Termix, SSH config, Termius, MobaXterm, PuTTY, SecureCRT or mRemoteNG and export them to share or back up."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Import-Export/edit/main/docs/index.md"
plugin_id: "import-export"
plugin_version: "1.3.0"
plugin_latest: true
---
Import and Export moves your hosts in and out of Termix. Use it to bring hosts in from another setup, back them up, or hand a set of hosts to someone else.

## Import

Open the Import / Export menu at the top of the Hosts panel.

- Import (skip existing): opens a view where you pick a Termix JSON file, then adds the hosts. Download Sample there saves an example file you can fill in. A host that has the same address, port and username as one you already have is skipped.
- Import (overwrite): the same, but updates the hosts you already have instead of skipping them.
- Import from SSH config: reads an OpenSSH config file and adds each host it defines.
- Import from another app: reads hosts from Termius, MobaXterm, PuTTY, SecureCRT or mRemoteNG. See [Switch from another app](#switch-from-another-app).

You can import up to 100 hosts at once. The file can be a list of hosts or an object with a `hosts` list and an optional `credentials` list. A host can point at one of those credentials by its `credentialAlias`.

You need to be allowed to create and edit hosts to import.

## Switch from another app

Open Import / Export, Import from another app. Pick the app, or leave it on Find out from the file, then pick the export file. Termix shows the hosts it found and the entries it left out, and why. Press Import to add them.

| App       | What to pick                                                                                                                                                                                                                                                         |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Termius   | Termius has no export of its own. Pick a CSV made from its import template (Groups, Label, Tags, Hostname/IP, Protocol, Port, Username, Password) or one written by a Termius export tool. Other CSV files with columns like Name, Host, Port and Username work too. |
| MobaXterm | Right click User sessions and pick Export all sessions to file, or pick MobaXterm.ini.                                                                                                                                                                               |
| PuTTY     | Export the sessions from the registry: `reg export HKCU\Software\SimonTatham putty.reg`, then pick `putty.reg`.                                                                                                                                                      |
| SecureCRT | Tools, Export Settings, then pick the XML file. You can also pick the Config/Sessions folder with Pick folder.                                                                                                                                                       |
| mRemoteNG | Pick `confCons.xml` from `%APPDATA%\mRemoteNG`. If you set a master password in mRemoteNG, Termix asks for it.                                                                                                                                                       |

What comes along:

- Name, address, port, username, folders and, for Termius CSV, tags.
- SSH and Telnet hosts, plus RDP and VNC hosts when the Remote Desktop plugin is on. Serial, FTP, local shells and other kinds are left out.
- Passwords from mRemoteNG and from a Termius CSV. The other apps keep passwords encrypted with a key Termix can't read, so those hosts come in without one.
- Key files are not copied. The path of the key the app used goes in the host's notes, so you can add the key in Termix.

SSH hosts need a username. If some have none, set Username for hosts without one before importing. Turn on Update existing hosts to update hosts that have the same address, port and username instead of skipping them. Up to 2000 hosts can be imported at once.

## Export

Choose Export in the same menu, or select hosts in the Hosts panel and use Export.

1. Pick all hosts or only some.
2. Pick which fields to include. Connection details are always included.
3. Turn on Credentials to include passwords and keys. Leave it off to share without secrets.

The preview hides every secret. Every export is written to the audit log.

A share export has no secrets at all. Hosts that use a saved credential point at a list of credentials by name, with no password or key in it.

## Back up to object storage

With the [Object Storage](/plugins/object-storage) plugin, Back up to object storage in the same menu keeps copies of your hosts in a bucket, such as Amazon S3, MinIO or Backblaze B2.

1. Pick a storage login from Object Storage, a bucket and a folder.
2. Pick Every day, Every Sunday or only when you press Back up now, the hour in UTC, and how many backups to keep.
3. Set a passphrase of at least 8 characters.

Each backup holds your hosts with their passwords and keys, locked with the passphrase (AES-256-GCM with a key from scrypt), so the bucket never sees a secret. Keep the passphrase somewhere safe: a backup can't be opened without it. Termix keeps the passphrase sealed so scheduled backups can run, and removes the oldest backups past the number to keep.

Press Restore on a backup to bring its hosts back. Turn on Overwrite hosts that already exist to replace your copies, or leave it off to only add the missing ones. If a scheduled backup fails, you get an alert through [Alerts](/plugins/alerts).

Writing to the bucket needs the Object Storage edit permission, and reading needs view.

## Permissions

The Import and export hosts permission lets a role use the plugin. Importing also needs the core permissions to create and edit hosts. An export only ever contains your own hosts.
