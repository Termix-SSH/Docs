---
title: "Wake-on-LAN"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/wake-on-lan"
description: "Wake sleeping machines by sending a Wake-on-LAN packet to their MAC address."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Wake-On-LAN/edit/main/docs/index.md"
plugin_id: "wake-on-lan"
plugin_version: "1.0.0"
plugin_latest: true
---
Wake-on-LAN wakes sleeping or powered off machines by sending them a magic packet. Wake a host in one click, before a remote desktop session, or from an automation.

## Set up a host

1. The machine needs Wake-on-LAN turned on in its BIOS or UEFI, and often in its network card settings too.
2. Open the host in **Manage** and fill in its **MAC address** in the Wake-on-LAN section, like `00:11:22:33:44:55`.
3. If the machine is on another subnet, set **Broadcast address** to that subnet's broadcast, like `192.168.20.255`. Leave it blank for `255.255.255.255`.
4. Save.

## Wake it

Pick **Wake** from the host's menu. With [Remote Desktop](/plugins/remote-desktop), you can also wake a host from its connect screen.

[Automations](/plugins/automations) has a **Wake a host** step. Pair it with a schedule to bring machines up in the morning.

## It doesn't wake

The packet is sent from the Termix server, so the server has to be on the same network as the machine.

- **Termix in Docker.** Broadcast packets don't leave Docker's default bridge network. Run the container with `network_mode: host`, or use a macvlan network.
- **Another subnet.** Most routers drop broadcasts between subnets. Set the subnet's broadcast address, and your router may need to forward it.
- **Wrong MAC.** Use the MAC of the wired port that is set to wake.

Who can wake hosts is set by the `wake-on-lan.send` permission. Admins and users have it at first.
