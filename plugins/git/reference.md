---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/git/reference"
custom_edit_url: null
plugin_id: "git"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the panel with the terminal | boolean | `false` | Show the Git panel when a terminal opens on a host that has it. |
| Panel side | select | `"right"` | Where the panel sits next to the terminal. |
| Panel size | number | `360` | Width of the panel, or its height at the bottom, in pixels. |
| Edge button | boolean | `true` | Show a small button on the terminal edge to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Git | boolean | `false` | Manage git repos on this host from the Git tab. |
| Scan folders | string |  | Folders searched for repos when you scan this host. Separate them with commas. Default is the home folder. |
| Use sudo | boolean | `false` | Run git as root with sudo. Only for repos that the login user cannot use. |
| Read only | boolean | `false` | Show repos but never change them on this host. |
| Panel beside the terminal | boolean | `true` | Offer the Git panel on this host's terminal tabs. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `git.use` | admin, user | See git repos on hosts you can reach, and change them on hosts you can edit. |
| `git.run-commands` | admin | Set a command that runs on the host after an auto pull brings in new commits. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `git.list-repos`<br />List git repos | A host | Read only |  |
| `git.fetch`<br />Fetch a repo | One item on a host | Changes |  |
| `git.pull`<br />Pull a repo | One item on a host | Changes |  |
| `git.push`<br />Push a repo | One item on a host | Changes |  |
| `git.checkout`<br />Switch branch | One item on a host | Changes | `branch` |
| `git.reset-hard`<br />Reset a repo hard | One item on a host | Destructive | `ref` |
| `git.read-behind`<br />Repos behind | A host | Read only |  |
| `git.read-dirty`<br />Repos with changes | A host | Read only |  |
| `git.read-pull-failing`<br />Auto pull failing | A host | Read only |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## API

The plugin's HTTP routes are in the [API reference](/api/git/git-api).

## Platforms

Linux, Windows, macOS

