---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/docker/v/1.1.0/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "docker"
plugin_version: "1.1.0"
plugin_latest: false
---
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
