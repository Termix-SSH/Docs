# SSH Tunnels

## Understanding SSH Tunnels

A SSH tunnel creates a connection between a local computer and a remote server, allowing the traffic on a port to pass through safely in either direction.

A tunnel can either be local (forward local port to remote) or remote (forward remote port to local).

## Server Requirements

### Required SSH Server Settings

For SSH tunnels to work properly, the endpoint SSH server must have these settings in `/etc/ssh/sshd_config`:

```bash
# Allow port forwarding
AllowTcpForwarding yes

# Bind remote ports (required for reverse tunnels)
GatewayPorts yes

# Allow root login (if using root user)
PermitRootLogin yes

# Allow public key authentication
PubkeyAuthentication yes

# Allow password authentication (if using passwords)
PasswordAuthentication yes
```

After making changes, restart the SSH service:

```bash
sudo systemctl restart sshd
```

### Installing sshpass

For password-based authentication, install `sshpass` on both local and remote systems:

**Debian/Ubuntu:**

```bash
sudo apt install sshpass
```

**CentOS/RHEL/Fedora:**

```bash
sudo yum install sshpass
# or
sudo dnf install sshpass
```

**macOS:**

```bash
brew install hudochenkov/sshpass/sshpass
```

## Setup

Navigate to the tunnel tab when adding/editing a host in the Host Manager. At the bottom of the tab, click `Add Tunnel Connection`.

### Field Explanation:

**Tunnel Type:**
- Local (-L): Forwards the port on the source (host your currently adding/editing) to the remote endpoint
```bash
[ Source ]
localhost:8080
     |
     |
     v
[ Endpoint ]
     |
     v
127.0.0.1:8080
```
- Remote (-R): Forwards the port on the remote endpoint to the source (host your currently adding/editing)
```bash
[ Endpoint ]
localhost:8080
     |
     |
     v
[ Source ]
     |
     v
127.0.0.1:8080
```

**Port:**
- Source: The port that will be forwarded/recieved (depending on tunnel type) on the source host
- Endpoint: The port that will be forwarded/recieved (depending on tunnel type) on the endpoint host

**Endpoint SSH Configuration:**
- This is where you select the host that defines the remote endpoint where traffic is forwarded/recieved (depending on tunnel type)

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
