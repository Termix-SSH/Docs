---
title: iOS
description: Install the Termix app on iPhone and iPad.
---

# iOS

From app version 2.0.0 the app works on its own with no Termix server: hosts, logins and snippets live on the phone, and SSH, files, tunnels, Docker, metrics, services and remote desktop connect straight from it. Link one or more Termix servers to sync your data and to use what only a server can do.

## Plugins

Settings, Plugins lists the plugins on a linked server, their version, whether they are on, and how each shows in the app: with the app's own screens, in a web view with the same screens as the web app, or not at all. Everything lists what works on the phone and what needs the server.

When an admin turns a plugin off, the app hides it the next time it checks: when you come back to the app, pull down the list, or the server says it is off. A plugin made for a newer app says to update the app, and one made for an older one says to update the plugin.

Before 2.0.0 the app needs a server, and it hides features whose plugin is off or not installed (1.6.0 and later).

## App Store

Get [Termix on the App Store](https://apps.apple.com/us/app/termix-ssh-companion/id6752672071), open it and enter your server's address.

## Sideload

Every release also has an `.ipa` on [GitHub](https://github.com/Termix-SSH/Mobile/releases/latest). Install it with a sideloading tool like [AltStore](https://faq.altstore.io/).

The app's code is in the [Mobile repo](https://github.com/Termix-SSH/Mobile).
