---
title: "Docker"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/docker/v/1.2.1"
description: "Manage Docker and Podman containers on your hosts over SSH, with logs, stats and a console."
hide_title: true
custom_edit_url: null
plugin_id: "docker"
plugin_version: "1.2.1"
plugin_latest: false
---
Docker lets you manage the containers on your hosts from Termix: start, stop, restart, pause and remove them, watch their stats, read their logs and open a shell inside them. It works with Docker and Podman.

It talks to your hosts over SSH, the same way the terminal does. It never needs the Docker socket exposed, and there is nothing to install on the host besides Docker or Podman.

## Set up a host

1. Make sure the SSH user can run Docker without sudo. Check by running `docker ps` in a terminal on the host. If it asks for a password or says permission denied, add the user to the `docker` group and sign in again:

   ```bash
   sudo usermod -aG docker $USER
   ```

2. Open the host in Manage and turn on Enable Docker in the Docker section.
3. If the host uses Podman, set Container Runtime to Podman.
4. Save. Open the host's menu and pick Docker.

## What you can do

- Containers: See every container with its image, state, ports and uptime. Start, stop, restart, pause, unpause or remove them.
- Stats: Live CPU, memory, network and disk use per container.
- Logs: Read a container's logs, follow them live, and download them.
- Console: Open a shell inside a running container.
- Updates: See which containers have a newer image and update them.
- Stacks: Manage compose projects when stack management is on.

## Updates

Termix checks the registry for a newer image when you open the Docker tab and every 30 minutes after that. Containers with a newer image get an Update badge. Use the arrow button in the header to check again.

The Update button on a container pulls the new image. If the container belongs to a compose project, it also recreates that service, which restarts the container. A container that was not started by compose only gets the new image pulled, so recreate it yourself to use it.

Checks use `docker buildx imagetools inspect` for Docker and `skopeo` for Podman, so one of them has to be installed on the host. Images pinned by digest or built locally are skipped. Private registries need the host to be logged in.

## Stacks

Stack management is for compose projects. It is off by default and invisible until you turn it on.

1. An admin opens Settings, Plugins, Docker and turns on Stack management.
2. On a host, turn on Stack management in the Docker section. The Stacks folder defaults to /opt/stacks.
3. Open the Docker tab. A Containers | Stacks switcher shows at the top.

Each stack is a folder in the Stacks folder with a compose file and an optional .env file. Compose projects that run elsewhere on the host also show up, without file editing.

- New stack: Pick a name and paste a compose file, then create.
- Compose: Edit the file, check it, then save or save and deploy. Ctrl+S saves.
- Environment: Edit variables in a table with hidden values, or as raw text.
- Actions: Deploy, pull and deploy, restart, pause, stop, take down or destroy. Most also work on one service.
- Logs and terminal: Read the logs of the whole stack or one service, and open a shell in a running service.

Stack management needs a Linux or macOS host with the compose plugin installed, and SFTP enabled for the SSH user.

## Containers panel beside a terminal

Open the Docker button on the right edge of an SSH terminal, or Docker panel in the tab's menu, to see the host's containers next to your shell. Each container is one line. Start, stop or restart it from the line, or click it to open its logs, stats and console. Drag the panel's edge to resize it and use the arrow in its header to move it.

In Settings, Docker you can open the panel with every new terminal, pick its side and size, and hide the edge button. Turn off Show containers panel in terminals on a host to keep it from opening there.

## Docker hosts card

Add the Docker hosts card in the dashboard's edit mode. It shows running, stopped and unhealthy containers on each host with Docker on. Termix checks a few hosts at a time over SSH and keeps the result for a minute, so the card only costs one docker ps per host each minute while it is on screen. Use the refresh button to check again now.

## With other plugins

- [Automations](/plugins/automations) can run when a container exits, starts, restarts or turns unhealthy, and can start, stop or restart containers as a step.
- [AI Assistant](/plugins/ai) can read `docker ps` and `docker logs` output when you allow read-only commands.

## Troubleshooting

- Nothing shows up: Run `docker ps` as the SSH user in a terminal. If that fails, Docker will fail too.
- Permission denied: The user isn't in the `docker` group, or hasn't signed in again since being added.
- The host can't connect: Open a terminal to it first. Docker uses the same login, so a sign in problem shows up there too.

Who can use it is set by the `docker.use` permission. Admins and users have it at first.
