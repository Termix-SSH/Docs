---
title: Managing plugins
description: Install, update, turn off and remove plugins.
---

# Managing plugins

Admins manage plugins in the Plugins tab at the bottom of the rail. It has four lists:

| List       | What is in it                                                                       |
| ---------- | ----------------------------------------------------------------------------------- |
| Installed  | Plugins on this server, on or off.                                                  |
| Browse     | Every plugin in the registries that are on. Filter by registry, category or search. |
| Updates    | Plugins with a newer version.                                                       |
| Registries | Where plugins come from. Turn on community plugins or add your own registry.        |

Click a plugin to see its page: what it does, what it can do on your server, its versions, release notes and links to its docs and source. The [plugin list](/plugins) on this site has the same info.

## Install

Press Install. Termix shows what the plugin can do, worst first, before it installs. Read it. A plugin runs inside the Termix server with those [capabilities](/develop/reference/capabilities).

If the plugin needs another plugin, Termix installs that too.

## Turn on and off

Disable stops a plugin without removing it. Its tabs and settings go away, and its data stays. Enable brings it all back.

## Update

Updates come from the registry the plugin was installed from, not from a new Termix image.

- Press Update on one plugin, or update all from Updates.
- Turn on Update on its own for a plugin to get new versions by itself.
- Stay on this version pins a plugin so it skips updates. Pick any version from its page.

An update that wants new capabilities never installs by itself. It waits in Updates for you to review it.

## Betas

Try beta puts one plugin on its beta channel. See [betas](/configure/betas).

## Uninstall

Uninstall removes the plugin's code. You can also delete its data: its tables, settings and files. The plugin's page shows how much data it has before you decide.

Plugins that ship with Termix stay uninstalled after an update or a new container. To get one back, install it from Browse.

## When a plugin fails

A plugin that fails to start shows as Stopped unexpectedly with the error. Press Restart to try again. Report an issue opens an issue in the plugin's repo with your versions filled in.

## Safe mode

If a plugin breaks the server or the app so badly that you cannot get to the Plugins tab, start Termix in safe mode. Set `TERMIX_SAFE_MODE=1` and restart:

```yaml
services:
  termix:
    environment:
      TERMIX_SAFE_MODE: "1"
```

In safe mode only layout and theme plugins (and the plugins they need) start, so the app still draws. Every other plugin stays off, and everyone sees a Safe mode notice. Open Plugins and disable or uninstall the plugin that caused the problem. You cannot turn plugins on while safe mode is on.

Safe mode does not change which plugins are enabled. Remove `TERMIX_SAFE_MODE` and restart, and every enabled plugin starts again.

If the layout itself is the problem, use the [repair screen](/develop/repair-view) instead, or both.

## Install from a file

Plugin authors can install a `.tmxplug` file that is not in the registry. Turn on Plugin developer mode in Settings, General first. Only do this with plugins you trust. See [develop](/develop/quick-start).

## Registries

A registry is a list of plugins Termix can install. Manage them in Plugins, Registries.

- Official: plugins made by the Termix team. Always on.
- Community: plugins made by other people. Off until you turn it on.
- Custom: registries you add yourself by their URL.

Plugins from community and custom registries have a badge with where they came from. A plugin only updates from the registry it was installed from, and only the official registry can offer the official plugins.

### Community plugins

Turn on Community to browse plugins made by other people. Every version is checked by a person and by automated checks before it is listed, and signed with the community key once it passes. They are still not made by the Termix team, so only install plugins you trust and read what each one asks for before you install it.

Plugin authors can [submit theirs](/develop/community-registry).

### Custom registries

Press Add registry, paste the link to the registry's `index.json` and press Check. Termix shows the registry's name, how many plugins it has and the key it signs them with. Compare that key with the one its owner published, then press Trust and add.

Nobody but the registry's owner reviews what is in it. Only add registries from people you trust.

From then on, every plugin from it must be signed with that key. If the registry later switches to another key, Termix stops installing and updating from it until you remove it and add it again.

Turning a registry off hides its plugins in Browse and stops their updates. Plugins already installed from it keep running. To remove a custom registry, uninstall its plugins first.

To make your own, see [host your own registry](/develop/registries#host-your-own-registry).

## Desktop app

A desktop app linked to a server uses the server's plugins. The server decides, so the Plugins tab there is read only.
