---
title: "Proxmox"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/proxmox"
description: "Import Proxmox VE guests as hosts, keep them in sync and watch node stats."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Proxmox/edit/main/docs/index.md"
plugin_id: "proxmox"
plugin_version: "1.4.0"
plugin_latest: true
---
Proxmox finds the VMs and LXC containers on a Proxmox VE node and imports them as hosts, so you don't add each one by hand. It can keep them in sync as guests come and go, and shows node, guest, storage and cluster stats in their own tab.

It works over SSH to the node and runs `pvesh`. No API token needed.

This page is about managing guests on a Proxmox server you already run. To install Termix itself on Proxmox, see [Proxmox install](/install/server/proxmox).

## Set up the node

1. Add your Proxmox node as a normal SSH host. The SSH user needs to be able to run `pvesh`, so `root` or a user with the right rights.
2. Open the node in Manage, go to its Proxmox section and turn on Enable Proxmox.
3. Pick how imported guests sign in under Default Auth Type, and a Default Credential if you use one.
4. Save.

## Import guests

1. Pick Discover & import Proxmox guests from the node's menu.
2. Termix lists every VM and container in the cluster, with its status and IP when it has one.
3. Select the ones you want and import them.

Imported guests go in a folder named after the cluster, or after the node when it is not in a cluster. Set Folder
for guests on the node to pick another name, and turn on Folder per node to put each guest in a subfolder named after
the node it runs on.

Termix guesses how each guest connects:

- Windows / RDP detection: guests whose name matches one of these patterns are set up for RDP, if [Remote Desktop](/plugins/remote-desktop) is on.
- Docker detection: guests whose name matches turn on [Docker](/plugins/docker).

Both are comma separated name patterns, not case sensitive. You can change any guest before importing.

## Keep them in sync

Turn on Auto sync guests and set a Sync interval (5 minutes or more). Termix rediscovers the node on that schedule and creates or updates hosts to match. It runs as you, while your account is unlocked.

Every node of a cluster sees the whole cluster, so you can turn on sync for more than one node. Termix knows they are
in the same cluster and keeps one host per guest. When a guest moves to another node, its host is updated, not copied.
A guest you moved to a folder of your own stays there.

## Proxmox Stats

Turn on Enable Proxmox Stats on the node and pick Proxmox Stats from its menu. The tab shows:

- Node CPU, memory, disk, network, uptime and PVE version.
- Every guest with its state and use. Filter by VM or LXC and search.
- Storage pools.
- Cluster health and quorum.

Poll interval sets how often it refreshes, 15 seconds or more. If the node name isn't the same as its hostname, set Node name override.

## Proxmox nodes card

Add the Proxmox nodes card in the dashboard's edit mode. It shows CPU, memory, disk and running guests for every node with Proxmox Stats on, and only collects them while the card is on screen. Click a node to open its stats.

## Consoles

In Proxmox Stats, open Guests. Every running guest has a console button:

- VMs open their screen with noVNC, like the console in the Proxmox web UI. Use Ctrl+Alt+Del and Full screen at the top.
- VMs also have a serial console button. It needs a serial port on the VM (Hardware, Add, Serial Port) and a guest that uses it, like `console=ttyS0` on Linux.
- Containers open a root shell inside the container, like `pct enter`.

Consoles work for guests that have no network or SSH, because they go through the Proxmox node. A guest on another node of the cluster is reached with the cluster's own SSH between nodes.

Opening a console needs the Proxmox guests permission and edit access to the node's host. The node's SSH login must be root, have passwordless sudo, or have a saved sudo password. With a saved sudo password a text console can't follow window resizes.

## Create and clone

New guest in the Guests list creates a VM or a container. Pick the node, a name, the ID (the next free one is filled in), CPU, memory, a disk storage and size, and the network bridge. A VM can boot from an ISO on the node's storage. A container needs a template; download one in Proxmox under the storage, CT Templates. Add an SSH public key so you can log in, or set a root password from the console with `passwd`.

The clone button copies a guest. A full clone copies every disk. A linked clone is faster, but Proxmox only allows it from a template. Pick a target node to clone onto another node.

Create and clone are also Operations Center and Automations actions, and wait for the Proxmox task to finish.

## Actions and snapshots

With Proxmox on for the node, Operations Center and Automations can list guests, start, shut down, reboot and stop them, and work with snapshots:

- List guest snapshots, for every guest or one guest ID.
- Take snapshot. Leave the name empty to get a dated one like `termix-20261119-153000`. The result carries the name, so a later step can roll back to it.
- Roll back to snapshot and Delete snapshot. Both are destructive, so approval rules apply.

A snapshot action waits for the Proxmox task to finish, so the next step only runs once the snapshot exists.

## Troubleshooting

- pvesh was not found: The host isn't a Proxmox node, or the SSH user can't run `pvesh`.
- Guests have no IP: Proxmox only knows a VM's IP when the QEMU guest agent runs in it. Install the agent, or set the address by hand after import.
