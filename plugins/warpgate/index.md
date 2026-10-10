---
title: "Warpgate"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/warpgate"
description: "Connect to hosts through a Warpgate SSH bastion."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Warpgate/edit/main/docs/index.md"
plugin_id: "warpgate"
plugin_version: "1.0.0"
plugin_latest: true
---
Warpgate lets Termix connect to hosts through a [Warpgate](https://github.com/warp-tech/warpgate) SSH bastion. Warpgate can ask you to approve a sign in in the browser. Termix shows that as a sign in dialog in the terminal, and sends your saved password to Warpgate for you.

## Set up a host

1. Install the plugin from the **Plugins** tab.
2. Add the host with Warpgate's address and port, and the username Warpgate expects, like `you:target-name`. See the [Warpgate docs](https://warpgate.null.page/) for the format.
3. Set the login, like a password, as you would for Warpgate.
4. Turn on **Warpgate Gateway** in the host's Warpgate section and save.

## Connect

Connect as usual. If Warpgate asks for a browser approval, Termix shows a dialog with the link. Open it, approve, and the connection carries on.

Without this plugin, Warpgate's prompts show up as plain keyboard-interactive questions in the terminal.
