---
title: "Web Endpoint"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/web-endpoint"
description: "Open a host's web UI inside Termix, directly or over an SSH tunnel."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Web-Endpoint/edit/main/docs/index.md"
plugin_id: "web-endpoint"
plugin_version: "1.0.0"
plugin_latest: true
---
Web Endpoint opens a host's web UI inside Termix: Proxmox, a router page, Portainer, Home Assistant, anything with a web interface. Open it in a Termix tab, or in its own window in the desktop app. Reach it directly, or over an SSH tunnel through the host when it isn't reachable otherwise.

It needs the [Tunnels](/plugins/tunnels) plugin.

## Add an endpoint

1. Open the host in **Manage** and turn on **Enable web endpoints** in its Web UI section.
2. Press **Add endpoint** and fill in:
   - **Label**, like `Proxmox`.
   - **Scheme**, **Port** and **Path**, like `https`, `8006` and `/`.
   - **Access**: **Direct**, or **SSH tunnel**.
   - **Open in**: a **Termix tab**, or an **Isolated desktop window** in the desktop app.
3. Save, then pick the endpoint from the host's menu.

## Direct or SSH tunnel

- **Direct**: your browser opens the host's address and port itself. The port has to be reachable from where you are.
- **SSH tunnel**: Termix forwards the port over the host's SSH connection. Use it for a web UI that only listens on the host itself, or behind a firewall. It needs SSH on for the host.

For a tunnel, **Bind Host** is where the forward listens. Leave it blank for `127.0.0.1`. If you set an address others can reach, anyone who can reach that port gets the web UI with no Termix login, so be careful. **Local Port** is picked for you unless you set one.

## Your Termix login stays safe

An embedded page never sees your Termix session. Embedded pages run in an isolated frame with their own cookies. If opening an endpoint would send your Termix cookies to it, because it is on the same hostname as Termix, Termix refuses and tells you why.

Some web UIs won't load in a frame, or loop on sign in because of how they set cookies. Use **Open externally**, or an **Isolated desktop window** in the desktop app, for those.

**Allow invalid certificate** accepts a self-signed certificate on a direct endpoint.
