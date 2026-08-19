# termix tunnel and termix docker

Control SSH tunnels and containers from the shell.

## termix tunnel

Start and stop the tunnels you configured on your hosts. See [SSH Tunnels](/features/networking/tunnels).

### List running tunnels

```bash
termix tunnel
termix tunnel list
```

Shows every tunnel and its status. The names here are the full internal names you need for `stop`.

### See a host's tunnels

```bash
termix tunnel show 3
```

Lists the tunnels configured on host 3, each with an index. You use that index to start one.

### Start a tunnel

```bash
termix tunnel start 3 0
```

Starts the first tunnel on host 3. Get the index from `tunnel show`.

### Stop a tunnel

```bash
termix tunnel stop <name>
```

Use the full name from `termix tunnel list`, not the short label you gave it in the web app.

```bash
termix tunnel list -q      # names, one per line
```

## termix docker

Manage containers on a host. See [Docker](/features/networking/docker).

### List containers

```bash
termix docker ps 3
```

Container ids are shortened to 12 characters, which is enough to use in the other commands.

### View logs

```bash
termix docker logs 3 abc123def456
termix docker logs 3 abc123def456 --tail 100
```

| Option       | What it does          |
| ------------ | --------------------- |
| `--tail <n>` | Only the last n lines |

### Control containers

```bash
termix docker start 3 abc123def456
termix docker stop 3 abc123def456
termix docker restart 3 abc123def456
termix docker pause 3 abc123def456
termix docker unpause 3 abc123def456
```

All five take a host id then a container id.

### Restarting a container everywhere

To restart the same container across a group of servers, go through a fleet:

```bash
termix fleets exec 2 "docker restart myapp"
```

## Podman

Podman works too. Termix detects which one a host uses, and the commands are the same.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
