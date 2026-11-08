---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/ansible/reference"
custom_edit_url: null
plugin_id: "ansible"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Ansible | boolean | `false` | Use this host as an Ansible control host. Ansible must be installed on it. |
| Project folder | string | `"~/ansible"` | The folder on this host with your playbooks, roles and ansible.cfg. |
| Vault password file | string |  | A file on this host with the Ansible Vault password. Leave empty if you do not use Vault. |
| Read only | boolean | `false` | Show playbooks and runs but never edit files or start runs on this host. |
| Alert when a run fails | boolean | `true` | Send an alert when a run on this host ends failed or lost. Checked when run state is read. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `ansible.use` | admin, user | See playbooks and runs on control hosts you can reach. Edit files and run Ansible on hosts you can edit. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `operations:provide` |  |  |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## API

The plugin's HTTP routes are in the [API reference](/api/ansible/ansible-api).

## Platforms

Linux, Windows, macOS

