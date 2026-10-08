# termix tunnel and termix docker

Control SSH tunnels and containers from the shell.

## termix tunnel

Start and stop the tunnels you configured on your hosts. See [SSH Tunnels](/plugins/tunnels).

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

Lists the tunnels configured on host 3 in its Tunnels settings, each with an index. You use that index to start one.

### Start a tunnel

```bash
termix tunnel start 3 0
```

Starts the first tunnel on host 3 and waits a few seconds to tell you whether it connected. Get the index from `tunnel show`. A tunnel started here shows up in the web app as the same tunnel.

### Stop a tunnel

```bash
termix tunnel stop <name>
```

Use the full name from `termix tunnel list`, not the short label you gave it in the web app.

```bash
termix tunnel list -q      # names, one per line
```

## termix docker

Manage containers on a host. See [Docker](/plugins/docker).

### List containers

```bash
termix docker ps 3
```

Container ids are shortened to 12 characters, which is enough to use in the other commands.

Docker has to be turned on for the host, in the host's Docker settings. If it is off, the command tells you. Hosts that ask for a verification code or key passphrase prompt for it.

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
