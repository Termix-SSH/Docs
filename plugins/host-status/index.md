---
title: "Host Status"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/host-status"
description: "Shows if each host is online with a dot in the host list, checked by connecting to its port."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Host-Status/edit/main/docs/index.md"
plugin_id: "host-status"
plugin_version: "1.0.0"
plugin_latest: true
---
Host Status shows if each host is online. It adds the green or red dot next to every host in the host list.

## How it checks

Termix opens a connection to the host's port on a timer. If the port answers, the host is online. If it does not answer twice in a row, the host is offline. Host Status never logs in to the host, so devices that send a two factor prompt on every login stay quiet.

A host that has a session open, or a login that just worked, counts as online without a check.

Hosts behind jump hosts are checked through the jump hosts. Hosts that share the same jump hosts share one connection.

Nothing is checked for a user who is not using the app. Checks start when someone opens the host list.

## Turn it on

Host Status comes with Termix. If you turned it off, install it again from the Plugins tab. Without it, hosts show no dot.

## Settings

Admins set how often hosts are checked in Settings, under Host Status. The default is 30 seconds. Any value from 5 to 3600 works.

A single host can use its own interval, or turn checks off, in its host settings.
