---
title: Build a plugin
slug: /
sidebar_label: Overview
description: How Termix plugins work and where to start building one.
---

# Build a plugin

Every feature in Termix past hosts, credentials, users and sharing is a plugin. The SSH terminal is a plugin. So are the file manager, Docker, single sign-on and the rest. A plugin you write has the same tools they do.

A plugin is:

- **A manifest**, `manifest.json`. It says what the plugin is, what it adds and what it is allowed to do.
- **A backend**, run inside the Termix server. It gets a `ctx` object with everything it may use: its own tables, settings, HTTP routes, SSH connections to hosts and more.
- **A frontend**, run in the browser. It gets an `app` object to add tabs, panels, buttons and settings to the UI.

Both halves only talk to Termix through the plugin SDK, [`@termix-ssh/plugin-sdk`](https://www.npmjs.com/package/@termix-ssh/plugin-sdk). They never import Termix's own code.

## Start here

1. [Quick start](/develop/quick-start): make a plugin from the template and run it on your server in a few minutes.
2. [Project layout](/develop/project-layout): what every file in a plugin is for.
3. [How it works](/develop/how-it-works): capabilities, permissions, the lifecycle and what Termix does and does not protect.

Then pick what your plugin needs from **Building**, and read **Shipping** when you are ready to release it.

## Look at real plugins

All 34 official plugins are open source and built the same way. When the docs don't answer something, read one that does what you want:

| You want to                      | Read                                                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Start small                      | [Plugin-Workspaces](https://github.com/Termix-SSH/Plugin-Workspaces)                                             |
| Run commands on hosts            | [Plugin-Docker](https://github.com/Termix-SSH/Plugin-Docker)                                                     |
| Add a sign in method             | [Plugin-SSO](https://github.com/Termix-SSH/Plugin-SSO), [Plugin-TOTP](https://github.com/Termix-SSH/Plugin-TOTP) |
| Add an SSH auth type             | [Plugin-Vault](https://github.com/Termix-SSH/Plugin-Vault)                                                       |
| Offer a service to other plugins | [Plugin-Snippets](https://github.com/Termix-SSH/Plugin-Snippets)                                                 |
| Use other plugins' services      | [Plugin-Automations](https://github.com/Termix-SSH/Plugin-Automations)                                           |
| Add a connection protocol        | [Plugin-Remote-Desktop](https://github.com/Termix-SSH/Plugin-Remote-Desktop)                                     |

## Get help

Ask in the [Discord](https://discord.gg/jVQGdvHDrf). Bugs in the SDK go in the [Termix repo](https://github.com/Termix-SSH/Termix/issues/new/choose).
