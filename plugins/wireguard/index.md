---
title: "WireGuard"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/wireguard"
description: "Install WireGuard on your hosts and manage interfaces, clients and configs from one tab."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-WireGuard/edit/main/docs/index.md"
plugin_id: "wireguard"
plugin_version: "1.0.0"
plugin_latest: true
---
WireGuard installs and manages WireGuard on a Linux host over SSH. Each host gets its own tab where you create a VPN server, add clients and keep an eye on who is connected.

## Set up a host

1. Make sure Termix logs in to the host as root, or as a user with passwordless sudo.
2. Open the host in Manage and turn on the WireGuard setting.
3. Open the host menu and choose WireGuard.
4. If WireGuard is not installed, press Install WireGuard. It uses apt, dnf, yum, pacman, apk or zypper.

## What you can do

- Interfaces: create server interfaces, start, stop and restart them, start them at boot and delete them.
- Clients: add a client, turn it on or off, give it new keys and remove it.
- Live status: see the last handshake and the traffic of each client.
- Config: edit the raw config file. It is checked with wg-quick before it is saved.
- Logs: read the journal of the wg-quick units.

## Create an interface

Press Add interface and pick a name, an address with a subnet (like 10.8.0.1/24) and a UDP port. Keys are made on the host and the private key never leaves it.

- Share the host's internet (NAT): clients can reach the internet and the host's network through this host. This needs iptables, which the install adds.
- IP forwarding: turned on now and saved in `/etc/sysctl.d/99-termix-wireguard.conf`.
- Open the port: adds the UDP port to ufw or firewalld when one is running.
- Server endpoint: the public address clients connect to, like `vpn.example.com:51820`. Set it before you add clients. If the host is behind a router, forward the UDP port to it.

## Add a client

Press Add client and give it a name. The plugin makes the client keys and a preshared key on the host, picks the lowest free address in the subnet and adds the peer to the server. It then shows the client config with a QR code. Scan the QR code with the WireGuard app, or download the `.conf` file.

The client config is saved on the host in `/etc/wireguard/termix/<interface>/<name>.conf` so you can open it again later. It holds the client's private key. Only users with edit access to the host can read it, and every read is audited.

Turning a client off comments its block out of the config and removes it from the running interface. Giving it new keys keeps its address and makes the old config stop working.

## How the config is kept

The interface config lives in `/etc/wireguard/<interface>.conf`. Clients made here have a `# termix:client <name>` line above their block. Peers you added by hand are shown too, and you can turn them off or remove them, but they have no saved client config.

Every change is checked with `wg-quick strip` on a temporary copy first. The old file is kept as `<interface>.conf.termix.bak`. Peer changes are applied to a running interface with `wg syncconf`, so connected clients stay connected. Address and NAT changes need a restart.

The raw editor hides private and preshared keys. Leave the placeholder in place to keep a key.

Interfaces named `wgtx*` belong to the Tunnels plugin and are never shown or changed here.

## In Host Metrics

With [Host Metrics](/plugins/host-metrics) on, this plugin fills its WireGuard card. It lists the host's interfaces and brings them up or down, which needs edit access to the host. Click an interface to open the WireGuard tab. Turn on WireGuard for the host first.

## Limits

- Linux hosts only. Boot start needs systemd.
- Clients get an IPv4 address from the subnet. IPv6 on the interface is supported for NAT, but clients are not given an IPv6 address.
- A client config shows the server endpoint as it was when the client was made.
