---
title: "Import and Export"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/import-export"
description: "Import hosts from a JSON file or an SSH config file and export them to share or back up."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Import-Export/edit/main/docs/index.md"
plugin_id: "import-export"
plugin_version: "1.0.0"
plugin_latest: true
---
Import and Export moves your hosts in and out of Termix. Use it to bring hosts in from another setup, back them up, or hand a set of hosts to someone else.

## Import

Open the Import / Export menu at the top of the Hosts panel.

- Import (skip existing): reads a Termix JSON file and adds the hosts. A host that has the same address, port and username as one you already have is skipped.
- Import (overwrite): the same, but updates the hosts you already have instead of skipping them.
- Import from SSH config: reads an OpenSSH config file and adds each host it defines.
- Download Sample: saves an example file you can fill in.

You can import up to 100 hosts at once. The file can be a list of hosts or an object with a `hosts` list and an optional `credentials` list. A host can point at one of those credentials by its `credentialAlias`.

You need to be allowed to create and edit hosts to import.

## Export

Choose Export in the same menu, or select hosts in the Hosts panel and use Export.

1. Pick all hosts or only some.
2. Pick which fields to include. Connection details are always included.
3. Turn on Credentials to include passwords and keys. Leave it off to share without secrets.

The preview hides every secret. Every export is written to the audit log.

A share export has no secrets at all. Hosts that use a saved credential point at a list of credentials by name, with no password or key in it.

## Permissions

The Import and export hosts permission lets a role use the plugin. Importing also needs the core permissions to create and edit hosts. An export only ever contains your own hosts.
