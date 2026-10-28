---
title: Plugins on the phone
description: How Termix plugins show in the mobile app.
---

# Plugins on the phone

The Termix app (2.0.0 and newer) reads the plugin list of each linked server and shows each plugin in one of three ways:

- With the app's own screens. Terminal, files, tunnels, Docker, metrics, services, remote desktop and more are built into the app. Many of them also work on This device with no server.
- In a web view. Plugins with no phone version, like Homepage, Alerts and Proxmox, open inside the app with the same screens as the web app.
- Not at all. The plugin still runs on the server.

## Settings, Plugins

Settings, Plugins lists the plugins on the active server: their version, whether they are on, and how each shows in the app. Everything lists every feature and plugin and says if it works on the phone or needs the server.

## Web view plugins

A plugin screen about a host opens from the host's menu as a tab. The others are listed on Home and Tools under From your server, and in Settings, Plugins.

Plugin screens follow the app's theme and work behind proxies and client certificates. Each one can only reach its own plugin on your server.

## When a plugin changes

When an admin turns a plugin off, the app hides it the next time it checks: when you come back to the app, pull down a list, or the server says it is off. An open tab of that plugin says so and comes back when the plugin is on again.

A plugin made for a newer app says to update the app, and one made for an older one says to update the plugin.

Plugin authors: see [mobile app](/develop/mobile) in the plugin guide.
