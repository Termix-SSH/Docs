---
title: Hosts config file
description: Keep hosts, folders and sharing in a YAML or JSON file instead of the database.
---

# Hosts config file

You can keep hosts in a file next to your deployment, for example in git, instead of adding them in the editor. The [Hosts Config](https://github.com/Termix-SSH/Plugin-Hosts-Config) plugin loads the file into Termix and reloads it when it changes.

The file is the source of truth for its hosts. They show a lock in the host list, open read only, and can't be edited, deleted or reshared in Termix. Each user can still pin them and change their order. Hosts that are not in the file keep working, unless the file turns on strict mode, which blocks adding hosts by hand.

The file covers SSH, RDP, VNC, Telnet and any protocol a plugin adds, folders, shares with users and roles, and plugin features per host. Secrets come from env vars, files or saved credentials, so the file never needs a password in it.

## Set it up

1. Install the Hosts Config plugin from the Plugins tab. It needs Termix 26.10.3 or later.
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

## How a reload works

- Each load checks the whole file first. If anything is wrong, nothing is written and every problem is listed in Settings, Hosts Config and in the server log.
- Hosts are matched by their `id`, so a reload updates a host in place and keeps its shares, recordings and history.
- An id that is gone from the file deletes its host. A missing or broken file deletes nothing.
- Admins can reload by hand in Settings, Hosts Config.

See the [Hosts Config plugin docs](https://github.com/Termix-SSH/Plugin-Hosts-Config/blob/main/docs/index.md) for every field, secrets, sharing and strict mode.
