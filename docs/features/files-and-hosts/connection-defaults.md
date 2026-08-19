# Connection Defaults

Connection defaults set values once and let every host inherit them. Change the terminal font in one place instead of editing forty hosts.

## How inheriting works

Every setting on a host can be left unset, which means inherit. Those hosts follow the default. Set the same thing on a host and that host wins.

So the order is simple: whatever the host says, otherwise the default, otherwise Termix's own built-in value.

Changing a default updates every host that inherits it. Hosts where you deliberately set something are left alone.

## Setting them

Open connection defaults from the sidebar and press Manage. There are two tabs.

Terminal covers appearance: font, colour theme, font size, line height, cursor style, cursor blinking, and scrollback size.

Remote Desktop covers RDP display settings like colour depth and how a resize is handled.

Each field has an Inherit option, which clears your default and falls back to Termix's built-in value. Clear All resets the whole tab.

## Overriding on one host

Open the host and set the value there. That host stops following the default for that setting, and everything else it leaves unset still inherits.

This is the usual reason to override: one server you want in a different colour so you notice when you are on it.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
