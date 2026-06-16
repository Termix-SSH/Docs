# Tmux

Termix has two separate tmux features: auto attaching to a tmux session when you connect, and a Tmux Monitor app for watching and controlling tmux sessions across all your hosts at once.

## Auto Tmux

Turn on **Auto Tmux** in a host's settings and Termix will check for tmux on that server every time you connect. If a session already exists, you'll be asked whether to attach to it or start a new one. If tmux isn't running yet, Termix starts a new session for you. This keeps your shell alive across disconnects without you having to type `tmux attach` every time.

## Tmux Monitor

Tmux Monitor is a separate app in Termix for keeping an eye on tmux sessions without opening a terminal tab for each one. Turn on **Enable Tmux Monitor** in a host's settings, then open the Tmux Monitor app from the sidebar.

From there you can:

- See every session, window, and pane across your hosts in one tree
- Get live CPU and activity metrics per pane
- Search across pane output to find a session doing something specific
- Tag sessions to keep track of what they're for
- Create, rename, and kill sessions, windows, and panes, and split panes, all without attaching to them

It polls hosts every few seconds for updates, so what you see stays close to real time.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
