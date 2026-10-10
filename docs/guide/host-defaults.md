---
title: Host defaults
description: Set a value once and have every host follow it.
---

# Host defaults

Host defaults let you set something once, like a terminal font or a status check interval, and have hosts follow it. Change the default later and every host that follows it changes too.

## Levels

A host takes each setting from the first level that sets it:

1. **The host itself.**
2. **Its folder**, then the folder above it, and so on up.
3. **My defaults**, your own defaults.
4. **Server**, the admin's defaults for everyone.
5. **Built-in**, Termix's own value.

There are no admin locks. A user or a host can always set its own value.

## Edit them

- **Server**: admins, in **Settings**, **Host defaults**, or in **Manage**, **Defaults**.
- **My defaults**: in **Manage**, **Defaults**.
- **A folder**: **Folder defaults** in the folder's menu.

Change a field to set it at that level. Clear it to leave it unset. When you save, Termix tells you how many hosts will change.

Every setting a host has can be a default, including the ones plugins add. Secrets can't, so a password is never a default.

## In the host editor

Each field shows where its value comes from, like **Folder Production** or **Server**. Set a field on the host to override it. The reset button next to it hands it back to the default.

To reset many hosts at once, select them and use **Reset** to put everything, or just the connection and SSH settings, back to their defaults.

## Shared hosts

A shared host follows its owner's defaults, so it acts the same for everyone. Settings marked as personal, like terminal colors, follow your own defaults instead.
