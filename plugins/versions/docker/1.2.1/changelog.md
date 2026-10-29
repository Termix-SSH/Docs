---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/docker/v/1.2.1/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "docker"
plugin_version: "1.2.1"
plugin_latest: false
---
## 1.2.1

### Added

- Docker hosts dashboard card: running, stopped and unhealthy containers on each host with Docker on

### Changed

- The container grid fits as many cards as the tab has room for, or pick how many per row next to the grid and list switch

## 1.2.0

### Added

- Optional stack management for compose projects, off until an admin turns it on in the plugin settings and a host turns on Stack management
- A Containers | Stacks switcher in the Docker tab with a list of stacks, search, status filters and a status for each one
- Create stacks from a compose file, edit the compose file and the environment file, check a file, and save and deploy
- Deploy, pull, restart, pause, stop, take down or destroy a stack, or run most of these on a single service
- Logs for a whole stack or one service, and a terminal into any running service
- Compose projects that already run on the host show up as stacks
- Update checks for container images, with an Update badge on containers that have a newer image
- Update a container with one button. Compose containers pull and recreate their service, other containers pull the new image

## 1.1.0

### Added

- A containers panel beside any SSH terminal on a host with Docker on. See and start, stop or restart containers, and open their logs, stats and console, without leaving the terminal
- Settings for the panel: open it with new terminals, which side it sits on, its size and the edge button
- Show containers panel in terminals, per host

## 1.0.2

### Changed

- The plugin name and description show in your language

### Fixed

- The container console started at the wrong width, so the first prompt wrapped and the shell got the wrong size
- Opening Docker could connect twice and show no containers until the next refresh

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Start, stop, restart, pause and remove containers
- Live CPU, memory, network and disk stats
- Read and download container logs
- Open a shell inside a container
- Works with Docker and Podman
