---
title: Managing plugins
description: Install, update, turn off and remove plugins.
---

# Managing plugins

Admins manage plugins in the **Plugins** tab at the bottom of the rail. It has three lists:

| List          | What is in it                                               |
| ------------- | ----------------------------------------------------------- |
| **Installed** | Plugins on this server, on or off.                          |
| **Browse**    | Every plugin in the registry. Filter by category or search. |
| **Updates**   | Plugins with a newer version.                               |

Click a plugin to see its page: what it does, what it can do on your server, its versions, release notes and links to its docs and source. The [plugin list](/plugins) on this site has the same info.

## Install

Press **Install**. Termix shows what the plugin can do, worst first, before it installs. Read it. A plugin runs inside the Termix server with those [capabilities](/develop/reference/capabilities).

If the plugin needs another plugin, Termix installs that too.

## Turn on and off

**Disable** stops a plugin without removing it. Its tabs and settings go away, and its data stays. **Enable** brings it all back.

## Update

Updates come from the plugin registry, not from a new Termix image.

- Press **Update** on one plugin, or update all from **Updates**.
- Turn on **auto update** for a plugin to get new versions on their own.
- **Pin** a plugin to stay on one version. Pick any version from its page.

An update that wants new capabilities never installs by itself. It waits in **Updates** for you to review it.

## Betas

**Try beta** puts one plugin on its beta channel. See [betas](/configure/betas).

## Uninstall

**Uninstall** removes the plugin's code. You can also delete its data: its tables, settings and files. The plugin's page shows how much data it has before you decide.

Plugins that ship with Termix stay uninstalled after an update or a new container. To get one back, install it from **Browse**.

## When a plugin fails

A plugin that fails to start shows as **failed** with the error. Press **Restart** to try again. **Report issue** opens an issue in the plugin's repo with your versions filled in.

## Install from a file

Plugin authors can install a `.tmxplug` file that is not in the registry. Turn on **Plugin developer mode** in **Settings**, **General** first. Only do this with plugins you trust. See [develop](/develop/quick-start).

## Desktop app

A desktop app linked to a server uses the server's plugins. The server decides, so the Plugins tab there is read only.
