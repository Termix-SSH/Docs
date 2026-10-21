---
title: "Docker"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/docker/v/1.1.0"
description: "Manage Docker and Podman containers on your hosts over SSH, with logs, stats and a console."
hide_title: true
custom_edit_url: null
plugin_id: "docker"
plugin_version: "1.1.0"
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

## Containers panel beside a terminal

Open the Docker button on the right edge of an SSH terminal, or Docker panel in the tab's menu, to see the host's containers next to your shell. Each container is one line. Start, stop or restart it from the line, or click it to open its logs, stats and console. Drag the panel's edge to resize it and use the arrow in its header to move it.

In Settings, Docker you can open the panel with every new terminal, pick its side and size, and hide the edge button. Turn off Show containers panel in terminals on a host to keep it from opening there.

## With other plugins

- [Automations](/plugins/automations) can run when a container exits, starts, restarts or turns unhealthy, and can start, stop or restart containers as a step.
- [AI Assistant](/plugins/ai) can read `docker ps` and `docker logs` output when you allow read-only commands.

## Troubleshooting

- Nothing shows up: Run `docker ps` as the SSH user in a terminal. If that fails, Docker will fail too.
- Permission denied: The user isn't in the `docker` group, or hasn't signed in again since being added.
- The host can't connect: Open a terminal to it first. Docker uses the same login, so a sign in problem shows up there too.

Who can use it is set by the `docker.use` permission. Admins and users have it at first.
