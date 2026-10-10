---
title: "Network Topology"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/network-topology"
description: "Draws your hosts and the links between them as a live, interactive graph."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Network-Topology/edit/main/docs/index.md"
plugin_id: "network-topology"
plugin_version: "1.0.0"
plugin_latest: true
---
Network Topology draws your hosts and the links between them as a graph. You build it by hand, so it shows your network the way you think about it: the router, the switch behind it, the servers in each rack. Each host shows its live status.

## Open it

Open **Network Graph** from the sidebar. There is also a **Network Graph** card you can add to the dashboard.

## Build the graph

- **Add Host**: pick one of your hosts to add as a node.
- **Add Group**: make a colored group, like a rack or a VLAN. Groups can nest inside other groups.
- **Add Link**: draw a line from one host to another, like a jump host to the servers behind it.

Right-click a node for more: move it to a group, open its details, connect it, or remove it. Right-click a group to add a host straight into it.

Drag nodes around. **Zoom In**, **Zoom Out** and **Reset View** help with big graphs.

## Status

Each node shows whether the host is online, from Termix's host status checks. Right-click it to see its details, or open it in [Host Metrics](/plugins/host-metrics).

## Save and share

The graph saves as you edit, to your account, and syncs with the desktop app. **Export JSON** downloads it and **Import JSON** loads one back, for a backup or to move it to another server.

## With other plugins

[AI Assistant](/plugins/ai) can read the graph to answer questions about how your hosts connect.

Who can use it is set by the `network-topology.use` permission. Admins and users have it at first.
