---
title: "Hosts Config"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/hosts-config"
description: "Keep hosts, folders and sharing in a YAML or JSON file. Termix loads them as read only hosts and reloads when the file changes."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Hosts-Config/edit/main/docs/index.md"
plugin_id: "hosts-config"
plugin_version: "1.0.0"
plugin_latest: true
---
Hosts Config loads hosts from a file you keep next to your deployment, for example in git. The file is the source of truth for those hosts: they show a lock in Termix, open read only, and can't be edited, deleted or reshared there. Each user can still pin them and change their order.

Hosts that are not in the file keep working as normal, unless the file turns on strict mode.

## Set it up

1. Install Hosts Config from the Plugins tab.
2. Mount the file into the container and point `TERMIX_HOSTS_CONFIG` at it.
3. Restart Termix. The file loads a few seconds after start.

```yaml
services:
  termix:
    image: ghcr.io/termix-ssh/termix:latest
    environment:
      TERMIX_HOSTS_CONFIG: /config/hosts.yaml
      WEB1_PASSWORD: ${WEB1_PASSWORD}
    volumes:
      - ./hosts.yaml:/config/hosts.yaml:ro
    secrets:
      - deploy_key

secrets:
  deploy_key:
    file: ./deploy_key
```

The file can be YAML (`.yaml`, `.yml`) or JSON (`.json`).

## Full example

```yaml
version: 1

# true blocks adding hosts by hand in the editor, imports and other plugins
strict: false

# The user that owns every host unless a host names its own owner
owner: admin

# Shares here go to every host in the folder and its subfolders
folders:
  - path: Production
    share:
      - { role: ops, level: connect }

hosts:
  # A bastion with a key from a Docker secret
  - id: bastion
    name: Bastion
    ip: 203.0.113.10
    port: 22
    username: jump
    key: { file: /run/secrets/deploy_key }
    folder: Production

  # A web server that jumps through the bastion and uses a saved credential
  - id: web-1
    name: Web 1
    ip: 10.0.0.5
    username: deploy
    credential: Deploy key
    jumpHosts: [bastion]
    folder: Production / Web
    tags: [web, linux]
    notes: Runs nginx and the API.
    pin: true
    plugins:
      docker: true
      tunnels: false
    share:
      - { user: alice, level: view }

  # Monitoring only: status and metrics, but no terminal or file manager
  - id: nas
    name: NAS
    ip: 10.0.0.20
    username: monitor
    password: { env: NAS_PASSWORD }
    statusCheckEnabled: true
    plugins:
      ssh-terminal: false
      file-manager: false
      docker: false

  # A Windows box over RDP
  - id: win-1
    name: Windows 1
    connectionType: rdp
    ip: 10.0.0.30
    port: 3389
    enableSsh: false
    protocolAuth:
      rdp:
        username: Administrator
        password: { env: WIN1_PASSWORD }

  # VNC with a saved credential
  - id: lab-vnc
    connectionType: vnc
    ip: 10.0.0.40
    port: 5900
    enableSsh: false
    protocolAuth:
      vnc: { credential: Lab VNC }

  # Telnet to a switch, owned by another user
  - id: switch-1
    owner: netadmin
    connectionType: telnet
    ip: 10.0.1.2
    port: 23
    enableSsh: false
```

## Hosts

| Field                                                    | What it is                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                     | Required. A stable name for the host in this file: letters, numbers, dot, dash and underscore. Keep it the same so a reload updates the host instead of making a new one.                                                                                                                                                                                   |
| `name`                                                   | The name shown in Termix. Defaults to the id.                                                                                                                                                                                                                                                                                                               |
| `connectionType`                                         | `ssh` (the default), `rdp`, `vnc`, `telnet` or any protocol a plugin adds.                                                                                                                                                                                                                                                                                  |
| `ip`, `port`                                             | Required address. `port` defaults to 22 for SSH and is required for other protocols.                                                                                                                                                                                                                                                                        |
| `username`                                               | The login name.                                                                                                                                                                                                                                                                                                                                             |
| `owner`                                                  | The username that owns the host. Defaults to the top level `owner`.                                                                                                                                                                                                                                                                                         |
| `folder`                                                 | The folder path, with `/` between levels, like `Production / Web`.                                                                                                                                                                                                                                                                                          |
| `tags`                                                   | A list, or comma separated text.                                                                                                                                                                                                                                                                                                                            |
| `notes`                                                  | Free text.                                                                                                                                                                                                                                                                                                                                                  |
| `pin`                                                    | Pinned when the host is first made. After that each user pins it themselves.                                                                                                                                                                                                                                                                                |
| `authType`                                               | `password`, `key`, `credential`, `agent`, `none` or a type a plugin adds. Guessed from what you set when left out.                                                                                                                                                                                                                                          |
| `credential`                                             | The name of a credential the owner saved in Termix.                                                                                                                                                                                                                                                                                                         |
| `password`, `key`, `keyPassword`, `sudoPassword`         | Secrets. See below.                                                                                                                                                                                                                                                                                                                                         |
| `keyType`                                                | The key type, when it can't be detected.                                                                                                                                                                                                                                                                                                                    |
| `enableSsh`, `sshPort`                                   | Whether the host has SSH, and its port when the host's main protocol is something else.                                                                                                                                                                                                                                                                     |
| `statusCheckEnabled`, `statusCheckInterval`              | The status dot check, and how often it runs in seconds.                                                                                                                                                                                                                                                                                                     |
| `forceKeyboardInteractive`, `overrideCredentialUsername` | The same switches as in the host editor.                                                                                                                                                                                                                                                                                                                    |
| `sshOptions`                                             | Keepalive, legacy algorithms, agent and environment options, as in a Termix export.                                                                                                                                                                                                                                                                         |
| `jumpHosts`                                              | A list of host ids from this file, in order.                                                                                                                                                                                                                                                                                                                |
| `protocolAuth`                                           | Logins for other protocols, keyed by protocol id. Each takes `username`, `password`, `credential`, `authType` (`direct`, `credential` or `none`) and `fields` for the protocol's extra fields. Set a protocol to `null` to remove its login.                                                                                                                |
| `plugins`                                                | Plugin features for this host, keyed by plugin id. `true` or `false` turns the plugin's host switch on or off (for example `ssh-terminal`, `file-manager`, `docker`, `tunnels`, `tmux-monitor`, `session-recording`, `web-endpoint`). An object sets that plugin's host settings, with `enabled` for the switch. A plugin that is not installed is skipped. |
| `share`                                                  | Who else can reach the host. See below.                                                                                                                                                                                                                                                                                                                     |

Fields you leave out follow the host defaults set in Settings, as for hosts made in the editor.

## Secrets

Never put passwords or keys in the file itself. Every secret field takes one of:

- `{ env: NAME }` reads an environment variable of the Termix container.
- `{ file: /path }` reads a file, like a Docker or Kubernetes secret. A trailing newline is dropped.
- `credential: Name` on a host or a protocol login uses a credential the owner saved in Termix. The name must match exactly one of the owner's credentials.

Plain text still works but is logged as a warning on every load. A missing env var or file stops the whole load.

Secrets are read when the file loads and stored encrypted, like any host. Change the env var or file and reload to update them.

## Sharing

`share` is a list of `{ user: name, level }` or `{ role: name, level }`. The level is `connect` (the default), `view`, `edit` or `manage`. Folder shares are added to every host in that folder. When a host gets the same user or role twice, the higher level wins.

The file is the whole list: shares added in Termix are removed on the next load, and sharing can't be changed in Termix for these hosts.

## Reloads

Termix checks the file every few seconds and loads it when it changes. Admins can also reload it in Settings, Hosts Config, which also shows the file, how many hosts it manages, when it last applied and every problem it found.

Each load first checks the whole file: the format, the ids, users, roles, credentials and secrets. If anything is wrong nothing is written, the problems are listed in Settings and the server log, and the last good load stays in place.

When the file applies, hosts are matched by `id`:

- A new id makes a new host.
- A known id updates that host in place, so its shares, recordings and history stay.
- An id that is gone from the file deletes its host.
- A host deleted in Termix some other way comes back on the next load.
- Changing a host's `owner` moves it by deleting and making it again.

A file with `hosts: []` deletes every host it made. A missing or broken file deletes nothing.

If a single host fails to write, for example because a plugin refused one of its settings, the rest still apply. That host is listed under the hosts that could not be written, and the next load tries again.

## What stays with each user

Pins, order and each user's own settings, like their personal plugin settings, stay theirs. A user with a share can still set their own login for the host when the share allows it.

## Strict mode

With `strict: true` nobody can add hosts by hand: the Add host buttons are hidden, and the editor, imports, desktop sync and other plugins are refused. Hosts that were added before stay and keep working.

## Turning it off

Unset `TERMIX_HOSTS_CONFIG`, or turn off the plugin, and the hosts it made become normal hosts again that their owner can edit.

## Environment variables

This plugin reads some environment variables on the Termix server. See the [reference](/plugins/hosts-config/reference#environment-variables) for the list.
