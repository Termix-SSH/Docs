---
title: Choose a look
description: Pick the layout and theme you use.
---

# Choose a look

The look of Termix is two choices: the layout, which is how the whole app is arranged, and the theme, which is the colors. Both come from plugins.

## Pick your own

Open Settings, Appearance.

- Layout: the arrangement of the rail, sidebar and tabs. Termix ships with Classic.
- Theme: light, dark, System, or one of Dracula, Catppuccin, Nord, Solarized, Tokyo Night, One Dark and Gruvbox. System follows your device between light and dark. Hover a theme to preview it.

Your choice is saved to your account, so your other devices use it too. If you keep settings on this device only, it stays here.

## Admin defaults

Admins can set the default layout and theme for everyone in the same place. Anyone who picked their own keeps it. Everyone else follows the default, including when it changes later.

## Get more

Open the Plugins tab and look for layouts and themes. Install one, then pick it in Settings, Appearance. Classic Layout and Classic Themes ship with Termix. You can switch away from them but not remove them.

## Accent, font and size

Accent color, interface font, font size and density work with every theme. A theme does not change them.

## If something is wrong

If a layout cannot load, Termix shows a [repair screen](/develop/repair-view) where you can switch, reset or, as an admin, update or restore the layout. Add `?safe-layout=1` to the address to open it on purpose.

If the layout you picked is uninstalled, you get the default layout instead. A theme that goes missing shows as System until it is back.

Plugin authors can [write a layout](/develop/layouts) or [a theme](/develop/themes).
