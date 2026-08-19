# Local Terminal

The desktop app can open a terminal on the computer it is running on, not on a server. It is a normal shell in a Termix tab, alongside your remote sessions.

This saves switching to a separate terminal app for the small things: checking an SSH key, running a git command, or looking at a file before you upload it.

## Opening one

In the desktop app, open a local terminal from the command palette (double tap left Shift) or the app rail. It opens as a tab like any other, so it works in [split screen](./split-screen) and can be saved in a [workspace](/features/workspaces).

## Which shell you get

Termix uses the usual shell for your system:

| System  | Shell                               |
| ------- | ----------------------------------- |
| Windows | PowerShell                          |
| macOS   | zsh                                 |
| Linux   | bash, or whatever `SHELL` is set to |

To use something else, set `TERMIX_LOCAL_SHELL` to the shell you want before starting Termix.

## Desktop only

This needs the desktop app, because it runs a shell on your own machine. The web app cannot do it, and would not be safe if it could, since that would mean a browser page starting programs on the server.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
