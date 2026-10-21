---
title: "Tunnels"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/tunnels"
description: "SSH port forwarding that reconnects on its own, WireGuard gateways that publish private services, and client tunnels from the desktop app."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Tunnels/edit/main/docs/index.md"
plugin_id: "tunnels"
plugin_version: "1.2.0"
plugin_latest: true
---
Tunnels sets up SSH port forwarding that stays up. If a tunnel drops, it reconnects on its own. Tunnels can start when Termix starts, so they are always there, and the desktop app can run tunnels on your own computer.

## Kinds of tunnel

| Mode    | Like     | What it does                                                                                  |
| ------- | -------- | --------------------------------------------------------------------------------------------- |
| Local   | `ssh -L` | Opens a port and forwards it to a port on the remote side, or a machine the remote can reach. |
| Remote  | `ssh -R` | Opens a port on the remote side and forwards it back.                                         |
| Dynamic | `ssh -D` | Opens a SOCKS5 proxy. Anything you point at it goes out through the host.                     |

And two places a tunnel can run:

- On the Termix server (server to server). Termix holds the tunnel open between a host and an endpoint. It keeps running when you close your browser.
- On your computer (client to server). Only in the desktop app. The tunnel listens on your own machine, like running `ssh -L` yourself.

## Add a server tunnel

1. Turn on Enable Tunneling in the host's Tunnels section in the host editor. It is off unless you turn it on, or your host defaults do.
2. Open the Tunnels tab and pick Add tunnel to host. On a host's own Tunnels tab, use Add Tunnel.
3. Pick the mode, the ports, and the Endpoint Host: the same host, another of your hosts, or any address the host can reach.
4. Turn on Auto-start to bring it up whenever Termix starts. Termix connects on its own, so nobody has to be signed in.
5. Save.

Start, stop and watch tunnels from the Tunnels tab. Search them, and switch between a grid, a list and a compact list with the view buttons. Use the pencil on a tunnel to change or delete just that tunnel, and Add tunnel to add one. The host editor only has the on/off switch. Tunnels saved before 1.2.0 were moved over for you.

### Through a second host

An endpoint can be another SSH host. Termix connects to the first host, then through it to the endpoint, checking the endpoint's host key and login like any other connection.

### Reconnecting

When a tunnel drops, Termix retries up to the max retries you set, with the delay you set between tries. A wrong password or a bad config doesn't retry, since trying again won't fix it.

## Client tunnels in the desktop app

Open Forwarding in the desktop app and add a tunnel that runs on your computer. Save sets of them as Client Tunnel Presets. Presets are stored on the server, so you can load them on another computer.

## Gateways

A gateway publishes services on a private host, such as a home server with no public address, through a public host, such as a cloud server. The two hosts are joined with WireGuard and each public port on the public host is sent through it. It works for TCP and UDP, so game servers are fine.

### Set one up

1. Open the Tunnels tab, pick Gateways and New gateway.
2. Pick the private host (the one with the services) and the public host.
3. Enter the public address of the public host. Use its public IP or domain, not a Tailscale address.
4. Termix checks both hosts. If WireGuard or nftables is missing, Install missing packages adds them.
5. Create. Termix writes the WireGuard config and the forwarding rules on both hosts.

Both hosts need a root login or passwordless sudo, because Termix changes network settings. The private host dials out, so it needs no open port. The public host needs the tunnel port open (UDP, shown in the gateway).

### Ports

Add a port with a protocol, the public port, and where it goes. Leave the target empty for a service on the private host itself, or enter the address of another machine on its network. Each port has a switch, so you can turn it off without deleting it. Termix warns if the public host already has something listening on that port.

Traffic reaches your service from the tunnel address of the gateway, not from the real visitor address.

Termix cannot change a cloud firewall such as an AWS security group. The gateway lists the public ports to open there.

### Port scan

Turn on Scan for ports to look for services listening on the private host, and on any extra hosts you pick. If the private host is a Proxmox node, Scan Proxmox guests also looks inside its running VMs and containers (VMs need the guest agent and jq on the node), and forwards to the guest's own address. Guest ports below 1024 are skipped. New ones show up under Found by scan, switched off. Turn on Turn new ports on to forward them right away, except ports the public host already uses. Ports you list under Ports to skip, and common system and database ports like 22, 53, 3306 and 5432, are never added.

### What it changes on the hosts

Each gateway has its own WireGuard interface (`wgtx` and the gateway number), its own nftables table (`termix_gw_` and the number) and its own systemd unit. Nothing else on the host is touched, so an existing WireGuard setup keeps working. On a host with Docker, the interface is also allowed in the `DOCKER-USER` chain. Removing a gateway takes all of it off both hosts.

Termix checks every gateway about every 30 seconds. If the tunnel or the rules are gone, for example after a reboot, it applies them again.

## What the host needs

The SSH server has to allow forwarding. In `/etc/ssh/sshd_config`:

```
AllowTcpForwarding yes
```

For a remote tunnel that listens on anything other than localhost, also set `GatewayPorts yes`. Restart sshd after changing it.

## With other plugins

- [Web Endpoint](/plugins/web-endpoint) opens a host's web UI through a tunnel.
- [Automations](/plugins/automations) can start or stop a tunnel, and run when one drops.
- [Homepage](/plugins/homepage) has a Tunnel Manager widget.
- The dashboard shows how many tunnels are up.

Who can use tunnels is set by the `tunnels.use` permission. Admins and users have it at first.
