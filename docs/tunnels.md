# SSH Tunnels

## Understanding SSH Tunnels

A SSH tunnel creates a connection between two hosts, allowing traffic on a port to pass through safely in either direction.

Tunnels have two main concepts:

**Scope** - who initiates the tunnel:
- `s2s` (server-to-server): The Termix server manages the tunnel between a source host and an endpoint host. This is the default.
- `c2s` (client-to-server): Your local machine (the Termix desktop client) connects to a remote host and forwards traffic between your machine and the server.

**Mode** - which direction traffic flows:
- `local`: Forwards a local port to a remote target. Like `ssh -L`.
- `remote`: Forwards a remote port back to a local target. Like `ssh -R`.
- `dynamic`: Acts as a SOCKS5 proxy, letting you route any traffic through the tunnel.

## Server Requirements

### Required SSH Server Settings

For tunnels to work, the endpoint SSH server needs these settings in `/etc/ssh/sshd_config`:

```bash
AllowTcpForwarding yes
GatewayPorts yes
PermitRootLogin yes
PubkeyAuthentication yes
PasswordAuthentication yes
```

After making changes, restart the SSH service:

```bash
sudo systemctl restart sshd
```

## Setup

Navigate to the tunnel tab when adding or editing a host in the Host Manager. At the bottom of the tab, click `Add Tunnel Connection`.

### Field Explanation

**Tunnel Type:**
- Local (-L): Forwards a port on the source host to the endpoint
```
[ Source ]
localhost:8080
     |
     v
[ Endpoint ]
127.0.0.1:8080
```
- Remote (-R): Forwards a port on the endpoint back to the source
```
[ Endpoint ]
localhost:8080
     |
     v
[ Source ]
127.0.0.1:8080
```

**Port:**
- Source: The port on the source host
- Endpoint: The port on the endpoint host

**Endpoint SSH Configuration:**
- Select the host that acts as the remote endpoint

### Auto Start

Tunnels with auto start enabled will connect automatically when Termix starts. The server resolves credentials on its own, so you don't need to be logged in.

### Retry Behavior

If a tunnel disconnects, Termix will automatically retry up to the configured max retries. You can configure the max retries and the delay between retries per tunnel. Authentication failures and config errors won't retry since they won't fix themselves.

### SOCKS5 Proxy

If your source host is only reachable through a SOCKS5 proxy, you can configure it on the host and the tunnel will use it automatically.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
