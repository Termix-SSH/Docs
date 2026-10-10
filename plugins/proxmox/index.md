---
title: "Proxmox"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/proxmox"
description: "Import Proxmox VE guests as hosts, keep them in sync and watch node stats."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Proxmox/edit/main/docs/index.md"
plugin_id: "proxmox"
plugin_version: "1.0.0"
plugin_latest: true
---
Proxmox finds the VMs and LXC containers on a Proxmox VE node and imports them as hosts, so you don't add each one by hand. It can keep them in sync as guests come and go, and shows node, guest, storage and cluster stats in their own tab.

It works over SSH to the node and runs `pvesh`. No API token needed.

This page is about managing guests on a Proxmox server you already run. To install Termix itself on Proxmox, see [Proxmox install](/install/server/proxmox).

## Set up the node

1. Add your Proxmox node as a normal SSH host. The SSH user needs to be able to run `pvesh`, so `root` or a user with the right rights.
2. Open the node in **Manage**, go to its **Proxmox** section and turn on **Enable Proxmox**.
3. Pick how imported guests sign in under **Default Auth Type**, and a **Default Credential** if you use one.
4. Save.

## Import guests

1. Pick **Discover & import Proxmox guests** from the node's menu.
2. Termix lists every VM and container in the cluster, with its status and IP when it has one.
3. Select the ones you want and import them.

Imported guests go in a folder named after their node.

Termix guesses how each guest connects:

- **Windows / RDP detection**: guests whose name matches one of these patterns are set up for RDP, if [Remote Desktop](/plugins/remote-desktop) is on.
- **Docker detection**: guests whose name matches turn on [Docker](/plugins/docker).

Both are comma separated name patterns, not case sensitive. You can change any guest before importing.

## Keep them in sync

Turn on **Auto sync guests** and set a **Sync interval** (5 minutes or more). Termix rediscovers the node on that schedule and creates or updates hosts to match. It runs as you, while your account is unlocked.

## Proxmox Stats

Turn on **Enable Proxmox Stats** on the node and pick **Proxmox Stats** from its menu. The tab shows:

- Node CPU, memory, disk, network, uptime and PVE version.
- Every guest with its state and use. Filter by VM or LXC and search.
- Storage pools.
- Cluster health and quorum.

**Poll interval** sets how often it refreshes, 15 seconds or more. If the node name isn't the same as its hostname, set **Node name override**.

## Troubleshooting

- **pvesh was not found.** The host isn't a Proxmox node, or the SSH user can't run `pvesh`.
- **Guests have no IP.** Proxmox only knows a VM's IP when the QEMU guest agent runs in it. Install the agent, or set the address by hand after import.
