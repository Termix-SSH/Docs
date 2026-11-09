---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/wake-on-lan/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "wake-on-lan"
plugin_version: "1.2.0"
plugin_latest: true
---
## 1.2.0

### Added

- Power tab: every machine with its status, last change, open ports and a power button
- Send the wake packet from any SSH host on the machine's network, for when Termix is somewhere else
- Keep a host's own address and set a separate LAN IP, so a Tailscale host needs no second entry
- Network scan from an SSH host or the Termix server, with results matched to your hosts
- Shut down over SSH, with Sleep-On-LAN, or with your own command
- Status from ports, ping through an SSH host, or your own command
- Custom wake, shutdown and check commands with `{{ DEVICE_IP }}` and `{{ DEVICE_MAC }}`
- Commands can run over SSH, or on the Termix server once an admin allows it
- Wake and shut down on a cron schedule, with an alert if a run fails
- Use the BMC from the Out-of-band plugin to power on and shut down, switched on per device
- Wake, shut down and sleep from Automations, Fleets, the CLI, the phone app and the command palette through Termix actions
- Power state shows as a status tile on the dashboard and host page
- SecureON passwords, wake port 7 or 9, broadcast worked out from the LAN IP and netmask
- Device description, a clickable link that can open after waking, and a confirm step
- Wake all for a folder
- Homepage widget with status and power buttons
- Shut down button on the host row
- Shut down, scan and server command permissions

### Changed

- The dashboard card shows status and shuts machines down as well as waking them
- The Wake-on-LAN host settings now sit behind a Power switch, turned on for hosts that already have a MAC
- Automations and Mobile wake a host with its saved method

### Fixed

- Wake in the desktop app sends from the server when the host connects from the server, like it does in a browser

## 1.1.0

### Added

- Wake-on-LAN dashboard card: wake any host with a MAC address in one click

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Wake a host in one click from its menu
- Wake a host before a remote desktop connection
- Wake a host from an automation
- Per-host MAC address and subnet broadcast address
