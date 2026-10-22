---
title: "Simple Layout"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/simple-layout"
description: "A simple Termix layout for small setups with a top bar, a Home screen and only the basics."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Simple-Layout/edit/main/docs/index.md"
plugin_id: "simple-layout"
plugin_version: "1.0.0"
plugin_latest: true
---
Simple Layout is a layout for small setups, like a home lab with a handful of hosts. It leaves out the sidebar, docks, split view and the long settings lists.

## What it gives you

A top bar holds Home, your open tabs, Search, Settings and your account menu. Home shows a card for each host. Click a card to connect, or use the buttons on it to open a plugin tool such as files or Docker.

Hosts and credentials are managed in the Hosts tab. The forms ask for the basics first. Extra options from plugins sit under More options.

Settings has Appearance, Account, Plugins and the settings plugins add.

## Switch layouts

Open Settings, Appearance and pick a layout. Admins can set the default for everyone. You can switch back at any time.

If a layout cannot be shown, Termix opens a repair screen. Add `?safe-layout=1` to the address to open it on purpose.

## What is not here

Split view, the side docks, the icon rail, keyboard shortcut editing and the admin pages for users and server settings. Switch to Classic Layout when you need them.
