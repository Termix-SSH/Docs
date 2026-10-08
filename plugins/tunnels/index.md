---
title: "Tunnels"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/tunnels"
description: "SSH port forwarding that reconnects on its own, plus client tunnels from the desktop app."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Tunnels/edit/main/docs/index.md"
plugin_id: "tunnels"
plugin_version: "1.0.0"
plugin_latest: true
---
Tunnels sets up SSH port forwarding that stays up. If a tunnel drops, it reconnects on its own. Tunnels can start when Termix starts, so they are always there, and the desktop app can run tunnels on your own computer.

## Kinds of tunnel

| Mode        | Like     | What it does                                                                                  |
| ----------- | -------- | --------------------------------------------------------------------------------------------- |
| **Local**   | `ssh -L` | Opens a port and forwards it to a port on the remote side, or a machine the remote can reach. |
| **Remote**  | `ssh -R` | Opens a port on the remote side and forwards it back.                                         |
| **Dynamic** | `ssh -D` | Opens a SOCKS5 proxy. Anything you point at it goes out through the host.                     |

And two places a tunnel can run:

- **On the Termix server** (server to server). Termix holds the tunnel open between a host and an endpoint. It keeps running when you close your browser.
- **On your computer** (client to server). Only in the desktop app. The tunnel listens on your own machine, like running `ssh -L` yourself.

## Add a server tunnel

1. Open a host in **Manage** and turn on **Enable tunnels** in its Tunnels section.
2. Add a tunnel. Pick the mode, the ports, and the **Endpoint Host**: the same host, another of your hosts, or any address the host can reach.
3. Turn on **Auto-start** to bring it up whenever Termix starts. Termix connects on its own, so nobody has to be signed in.
4. Save.

Start, stop and watch tunnels from the **Forwarding** panel in the sidebar, or the **Tunnels** tab on a host.

### Through a second host

An endpoint can be another SSH host. Termix connects to the first host, then through it to the endpoint, checking the endpoint's host key and login like any other connection.

### Reconnecting

When a tunnel drops, Termix retries up to the max retries you set, with the delay you set between tries. A wrong password or a bad config doesn't retry, since trying again won't fix it.

## Client tunnels in the desktop app

Open **Forwarding** in the desktop app and add a tunnel that runs on your computer. Save sets of them as **Client Tunnel Presets**. Presets are stored on the server, so you can load them on another computer.

## What the host needs

The SSH server has to allow forwarding. In `/etc/ssh/sshd_config`:

```
AllowTcpForwarding yes
```

For a remote tunnel that listens on anything other than localhost, also set `GatewayPorts yes`. Restart sshd after changing it.

## With other plugins

- [Web Endpoint](/plugins/web-endpoint) opens a host's web UI through a tunnel.
- [Automations](/plugins/automations) can start or stop a tunnel, and run when one drops.
- [Homepage](/plugins/homepage) has a **Tunnel Manager** widget.
- The dashboard shows how many tunnels are up.

Who can use tunnels is set by the `tunnels.use` permission. Admins and users have it at first.
