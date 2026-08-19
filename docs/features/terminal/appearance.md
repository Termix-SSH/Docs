# Terminal Appearance

How the terminal looks and feels: font, colours, cursor, and a setting that makes typing feel faster on slow links.

These are set per host in the host editor. To set them once for every host, use [Connection Defaults](/features/files-and-hosts/connection-defaults).

## Fonts

Termix ships with a set of monospace fonts you can pick from:

- Caskaydia Cove Nerd Font Mono
- JetBrains Mono
- Fira Code
- Cascadia Code
- Source Code Pro
- SF Mono
- Consolas
- Monaco

### Using your own font

Pick **Custom** in the font list and type the exact name of a font, like `MesloLGS NF`.

Termix cannot install fonts for you. The font has to already be installed on the computer you are looking at Termix on, and the name has to match what your system calls it. Get it slightly wrong and the terminal quietly falls back to a normal monospace font.

This is how you use a Nerd Font, which is what themes like Powerlevel10k need for their icons. Install the font on your own machine first, then type its name here.

A font is a client-side thing. Install it on each computer you use Termix from, not on the server.

## Colours and cursor

Alongside the font you can set:

- A colour theme
- Font size and line height
- Cursor style: block, underline, or bar
- Whether the cursor blinks
- How many lines of scrollback to keep

## Local echo

On a slow or far away connection there is a visible gap between pressing a key and seeing it, because every keystroke goes to the server and back. Local echo shows the character straight away while the real one is still in flight, so typing feels immediate.

Three settings:

| Setting   | What it does                                              |
| --------- | --------------------------------------------------------- |
| Off       | Never predict                                             |
| Automatic | Turn on when the connection is slow enough to be worth it |
| Always on | Always predict                                            |

Automatic is the sensible choice. On a fast local connection prediction is not needed, and it switches on when latency makes it useful.

Only ordinary printable characters are predicted. Password prompts and control keys never are, so your password cannot appear on screen because of this setting.

There is a global preference in your user profile, and each host can override it or leave it on **Use global setting**.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
