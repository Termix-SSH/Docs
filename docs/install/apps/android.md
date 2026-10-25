---
title: Android
description: Install the Termix app on Android.
---

# Android

From app version 2.0.0 the app works on its own with no Termix server: hosts, logins and snippets live on the phone, and SSH, files, tunnels, Docker, metrics, services and remote desktop connect straight from it. Link one or more Termix servers to sync your data and to use what only a server can do.

## Plugins

Settings, Plugins lists the plugins on a linked server, their version, whether they are on, and how each shows in the app: with the app's own screens, in a web view with the same screens as the web app, or not at all. Everything lists what works on the phone and what needs the server.

When an admin turns a plugin off, the app hides it the next time it checks: when you come back to the app, pull down the list, or the server says it is off. A plugin made for a newer app says to update the app, and one made for an older one says to update the plugin.

Before 2.0.0 the app needs a server, and it hides features whose plugin is off or not installed (1.6.0 and later).

## Google Play

Get [Termix on Google Play](https://play.google.com/store/apps/details?id=com.karmaa.termix), open it and enter your server's address.

## APK

Download [termix_android.apk](https://github.com/Termix-SSH/Mobile/releases/latest/download/termix_android.apk) on your phone and open it. Android asks you to allow installs from your browser the first time.

There is also a [build for F-Droid](f-droid.md) with no Google code.

The app's code is in the [Mobile repo](https://github.com/Termix-SSH/Mobile).
