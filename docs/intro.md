# Introduction

Termix is a free, self-hosted server management platform. It's an all in one place for SSH, remote desktop, file management, and tunneling, so you don't need a pile of separate tools to manage your servers.

It's built for people who SSH into things a lot. Homelabbers, sysadmins, anyone running their own servers. If you're tired of juggling a terminal app, a separate RDP client, an SFTP client, and a tunnel manager, Termix puts all of that in one web app, desktop app, or mobile app.

## What you can do with it

**Terminal.** A full SSH terminal with split screen, tabs, themes, and command history. Connect through jump hosts, use tmux sessions, and run the same command across every open terminal at once.

**Remote desktop.** RDP, VNC, and Telnet, right in the browser, powered by Guacamole.

**File manager.** Browse, edit, upload, and download files on your servers over SFTP, with support for code, images, and more.

**Tunnels.** Set up SSH tunnels and SOCKS5 proxies, with automatic reconnection if a connection drops.

**Docker.** Start, stop, and inspect containers on your servers without opening a separate tool.

**Host metrics.** See CPU, memory, disk, and network usage for your Linux servers, plus a network graph that maps out your homelab.

**Auth and access control.** Sign in with a local account, or connect OIDC, LDAP, GitHub, or Google as login providers. Add two factor auth, and share hosts with other users using roles.

**Tailscale and Proxmox.** Pull devices straight from your Tailscale tailnet, or import guests from a Proxmox server, instead of typing in IP addresses by hand.

See the [Features](/features/overview) section for the full list, with a page for almost everything above.

## Where it runs

Termix has a server you self host, plus connector apps so you can reach it from anywhere:

- A web app, served by your own Termix server
- A desktop app for Windows, Linux, and macOS (it can also run standalone, without a separate backend)
- A PWA for installing the web app like a native app
- Mobile apps for iOS and Android

## Get started

Head to [Installation](/install) to set up the Termix server with Docker, manually, or on Proxmox, then grab the connector app for whatever device you want to use.
