---
slug: /cli
---

# Termix CLI

The Termix CLI is a command called `termix` that talks to your Termix server from a terminal. It uses the same hosts, credentials, and permissions you already have, so anything you set up in the web app works from the shell straight away.

It is good for the things a browser is slow at. Opening a server you use twenty times a day, running one command across a fleet, copying a file down, or wiring Termix into a script.

## Install it

```bash
npm install -g @termix-cli/cli
```

You need Node.js 20.11 or newer. There are also standalone downloads for Windows, Linux, and macOS that do not need Node at all. See [Installation](/cli/installation).

## Log in

```bash
termix login --url https://termix.example.com
```

It asks for your username and password, and a 2FA code if you use one. Your details are saved, so you only do this once per machine.

## Try it

```bash
termix hosts
```

That lists your hosts with their ids. You use those ids in most other commands.

```bash
termix ssh 3           # open a terminal on host 3
termix exec 3 uptime   # run one command and come back
```

## What it can do

| Area                     | Commands                          |
| ------------------------ | --------------------------------- |
| Terminals                | `ssh`, `exec`                     |
| Hosts                    | `hosts`                           |
| Files                    | `files`                           |
| Fleets                   | `fleets`                          |
| Tunnels and containers   | `tunnel`, `docker`                |
| Snippets and credentials | `snippets`, `credentials`         |
| Alerts and sessions      | `alerts`, `sessions`              |
| Admin                    | `users`, `audit-logs`, `api-keys` |
| Info                     | `version`, `status`, `whoami`     |

Every command has built-in help:

```bash
termix --help
termix hosts --help
termix fleets exec --help
```

## Output you can use in scripts

On a terminal you get a readable table. When you pipe the output somewhere, it switches to JSON on its own, so this just works:

```bash
termix hosts | jq '.[].name'
```

Force it either way with `--json` or `--no-json`. Use `-q` when you only want ids.

For scripts and CI, use an API key instead of logging in. See [Scripting](/cli/scripting).

## Next steps

- [Installation](/cli/installation)
- [Authentication](/cli/authentication)
- [Configuration](/cli/configuration)
- [Scripting](/cli/scripting)
- [Hosts](/cli/commands/hosts)

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
