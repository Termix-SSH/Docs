# termix exec and termix ssh

Two ways to run things on a server. `exec` runs one command and comes back. `ssh` opens a terminal you sit in.

## termix exec

```bash
termix exec <hostId> <command...>
```

Runs a command on a host, prints the output, and exits with whatever the command exited with.

```bash
termix exec 3 uptime
termix exec 3 df -h
termix exec 3 "systemctl restart nginx && systemctl is-active nginx"
```

Quote anything containing `&&`, `|`, `;`, or `>` so your own shell does not take it first.

### It gives you the real exit code

The exit code you get back is the one from the server:

```bash
termix exec 3 "test -f /etc/nginx/nginx.conf"
echo $?     # 0 if the file is there, 1 if not
```

That makes it safe to use in an `if`:

```bash
if termix exec 3 "systemctl is-active --quiet nginx"; then
  echo "running"
fi
```

An exit code of 255 means the CLI could not run the command at all, rather than the command failing.

### Use this one in scripts

`exec` works with an API key, so it is the right choice for cron jobs and CI. See [Scripting](/cli/scripting).

## termix ssh

```bash
termix ssh <hostId>
```

Opens a proper interactive terminal, the same connection the web app uses. Full colour, resizing, and Ctrl+C all work as normal.

| Option                | What it does                        |
| --------------------- | ----------------------------------- |
| `--command <command>` | Run this instead of opening a shell |
| `--path <path>`       | Start in this directory             |
| `--tmux <session>`    | Attach to a tmux session by name    |

```bash
termix ssh 3
termix ssh 3 --path /var/log
termix ssh 3 --tmux deploy
```

If the host's key needs a passphrase, you are asked for it.

### It needs a real login

`termix ssh` does not work with an API key, because interactive terminals use a websocket and API keys cannot open one. Run `termix login` first, or use `termix exec` in a script.

## Which one to use

| Situation                      | Use          |
| ------------------------------ | ------------ |
| Working by hand on a server    | `ssh`        |
| One quick command              | `exec`       |
| Anything in a script or CI     | `exec`       |
| Authenticating with an API key | `exec`       |
| Attaching to tmux              | `ssh --tmux` |

## Running on many hosts

For the same command across a group of servers, use fleets instead of a loop:

```bash
termix fleets exec 2 "apt-get update"
```

See [Fleets](/cli/commands/fleets).

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
