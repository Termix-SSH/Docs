# Installing the CLI

There are two ways to install: through npm, or by downloading a single file that needs nothing else.

## With npm

```bash
npm install -g @termix-cli/cli
```

This needs Node.js 20.11 or newer. Check what you have with `node --version`.

Then make sure it worked:

```bash
termix version
```

To update later:

```bash
npm update -g @termix-cli/cli
```

To remove it:

```bash
npm uninstall -g @termix-cli/cli
```

## Standalone download

If you would rather not install Node, every release has a single file you can download and run. Grab one from the [releases page](https://github.com/Termix-SSH/CLI/releases).

| File                     | For                               |
| ------------------------ | --------------------------------- |
| `termix_windows_x64.exe` | Windows                           |
| `termix_linux_x64`       | Linux on Intel or AMD             |
| `termix_linux_arm64`     | Linux on ARM, like a Raspberry Pi |
| `termix_macos_x64`       | Mac with an Intel chip            |
| `termix_macos_arm64`     | Mac with Apple silicon            |

On Linux or macOS, make it runnable and put it somewhere on your PATH:

```bash
chmod +x termix_linux_x64
sudo mv termix_linux_x64 /usr/local/bin/termix
```

On Windows, put the `.exe` in a folder and add that folder to your PATH, or just call it by its full path.

These downloads have everything built in, so they work on servers where you do not want to install Node.

:::info
macOS may refuse to run a downloaded file the first time. Open **System Settings**, go to **Privacy and Security**, and allow it there.
:::

## Which one should you pick

Use npm on your own machine, since updating is one command.

Use the standalone file on servers, in containers, and in CI, where fewer moving parts is better.

## Next step

Now connect it to your server. See [Authentication](/cli/authentication).

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
