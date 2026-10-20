---
title: Repair screen
description: What happens when a layout cannot load.
---

# Repair screen

A layout draws every screen, so a broken one could lock people out. Termix shows a small repair screen instead. It is part of Termix, not a second app, and it works without any plugin.

## When it shows

- No layout is chosen or installed. A layout someone picked whose plugin was uninstalled does not count: Termix moves on to the admin default, then the default look.
- The layout plugin is turned off, blocked or does not fit this Termix version.
- The layout throws while it starts.
- The layout crashes twice. The first crash remounts it once.
- The address has `?safe-layout=1`.
- The server runs with `TERMIX_SAFE_LAYOUT=1`. This opens the repair screen for everyone.

## What it shows

The name and version of the layout that failed and its error text, with a button to copy it for a bug report.

## What people can do

Everyone:

- Switch to another installed layout or theme.
- Retry.
- Reset to the default look.

Admins also:

- Install a layout or theme from a registry. This uses the same install flow as the Plugins tab.
- Reset the default look for everyone.
- Update the layout plugin, when a registry has a newer version.
- Turn the plugin off.
- Restore the copy of a bundled plugin that shipped with Termix.

Other people see a note to ask an admin for those.

## For layout authors

Make `activate` cheap and let errors through. The repair screen reports whatever your layout throws, so a clear error message helps the person who has to fix it. Ship the fix as a plugin release. People get it by updating the plugin, even from the repair screen.
