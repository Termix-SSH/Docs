# Introduction

Termix is a free, self-hosted server management platform. It's an all-in-one place for SSH, remote desktop, file management, tunneling, and more, so you don't need a pile of separate tools to manage your servers.

It's built for people who SSH into things a lot -- homelabbers, sysadmins, anyone running their own infrastructure. If you're tired of juggling a terminal app, a separate RDP client, an SFTP client, and a tunnel manager, Termix puts all of that in one web app, desktop app, or mobile app.

## What you can do with it

**Terminal.** A full SSH terminal with split screen (up to 4 panels), a browser-like tab system, themes, fonts, and command history. Connect through jump hosts, use tmux sessions, and run the same command across every open terminal at once. Tabs and sessions persist across devices and refreshes if enabled.

**Remote desktop.** RDP, VNC, and Telnet right in the browser, powered by Guacamole, with split screen and full customization.

**File manager.** Browse, edit, upload, and download files on your servers over SFTP. Supports code, images, audio, and video. Includes sudo support and the ability to move files between servers.

**Tunnels.** Set up local, remote, and dynamic SOCKS5 SSH tunnels with automatic reconnection and health monitoring. Client-to-server preset snapshots can be saved, loaded, and shared across desktop installs.

**Docker and Podman.** Start, stop, pause, and remove containers. View live stats. Open a docker exec terminal directly in the UI. Works with both Docker and Podman.

**Host metrics.** See CPU, memory, disk, network, uptime, system info, firewall rules, open ports, log viewer, users, permissions, and SSL certificates for your Linux servers. Includes time-series history graphs and threshold-based alerts with ntfy and webhook support.

**Alerts.** Set alert rules on any host metric and get notified via ntfy, Discord, or webhooks when they fire or resolve. Full alert history log included.

**Fleets.** Group your hosts into fleets, either by picking them or by tag, then run one command across the whole group, push and pull files to every host at once, install packages, and collect an inventory of what each machine is running.

**Automations.** Pick a trigger, like a metric crossing a line, a schedule, a Docker event, or a webhook, then run a list of steps. Steps can run commands and snippets, restart containers, call an API, wake a machine, branch on a condition, and notify you. Dry run mode lets you test one safely first.

**AI assistant.** Connect OpenAI, Anthropic, Gemini, Ollama, or any OpenAI-compatible endpoint and ask questions about your setup. It can read your configuration but cannot change anything without you approving it first, and it can never touch credentials. Off by default.

**Workspaces.** Save a set of tabs and their split layout, then bring the whole thing back in one click. Termix also keeps your last session so you can pick up where you left off.

**Session sharing.** Let someone else watch or join a terminal session you have open, read only or read and write, with a share link or a specific user.

**Homepage.** A fully customizable homepage with a drag-and-drop widget grid. Add widgets for host status, service links, clocks, notes, RSS feeds, weather, Docker containers, host metrics charts, embedded terminals, iframes, and more.

**Network graph.** Visualize your homelab as a network map built from your SSH connections, with live status indicators.

**Host manager.** Save, organize, and manage SSH connections with tags and folders, including nested folder support. Automate SSH key deployment. Quick Connect lets you open a session without saving anything.

**SSH tools.** Create reusable command snippets that run with a single click. Double-tap left Shift to open the command palette and jump to any connection from the keyboard. Full command history with autocomplete.

**Auth and access control.** Sign in with a local account or connect OIDC, LDAP, GitHub, or Google as login providers. Add 2FA (TOTP), passkeys (WebAuthn), and API keys with expiration dates. View and revoke active sessions across all devices. Full audit log of user actions.

**RBAC.** Create roles and share hosts and credentials across users and roles with fine-grained permissions.

**Tailscale and Proxmox.** Pull devices straight from your Tailscale tailnet or import guests from a Proxmox server instead of typing in IP addresses by hand. Supports Tailscale SSH as an auth method, letting your tailnet ACLs handle authorization without storing credentials.

**Serial connections.** Connect to serial devices (routers, switches, microcontrollers) directly from the browser or desktop app, with configurable baud rate, data bits, stop bits, and parity.

**Termix ID.** Claim a handle, publish your public SSH keys at a resolver URL, and use a built-in CA to issue SSH certificates -- a self-hosted alternative to sshid.io built right in.

**Advanced SSH.** Supports jump hosts, Warpgate, TOTP-based connections, SOCKS5, host key verification, password autofill, OPKSSH, tmux, port knocking, terminal logging, SSH agent forwarding, Bitwarden SSH agent, and HashiCorp Vault SSH certificate signing.

**Command line.** A `termix` CLI for your shell and your scripts. Open a terminal, run a command on one host or a whole fleet, move files over SFTP, and manage hosts, snippets, and credentials without opening a browser. See [CLI](/cli).

**Data and security.** Databases are encrypted at rest. Runs on SQLite out of the box, with PostgreSQL and MySQL also supported, see [Database](/setup/database). Export and import SSH hosts, credentials, and file manager data. Automatic SSL certificate generation with HTTPS redirects. ~30 languages supported via Crowdin.

See the [Features](/features/overview) section for the full list, with a dedicated page for almost everything above.

## Where it runs

Termix has a server you self-host, plus connector apps so you can reach it from anywhere:

- A web app, served by your own Termix server (any modern browser, PWA support)
- A desktop app for Windows, Linux, and macOS (can also run standalone without a separate backend)
- Mobile apps for iOS and Android

## Get started

Head to [Installation](/install) to set up the Termix server with Docker, manually, or on Proxmox, then grab the connector app for whatever device you want to use.
