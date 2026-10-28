---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/sync/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "sync"
plugin_version: "1.0.1"
plugin_latest: true
---
## 1.0.1

### Added

- Keep all mine or keep all server settles every sync conflict at once, after a confirm

## 1.0.0

### Added

- Sync the desktop app with a server, with an offline copy of its data
- The Sync screen, the link wizard and the first run step for the desktop app
- Link several servers and accounts, each with its own copy, and switch between them from the profile row in the rail
- Add other Termix servers as remote sites with an API key. Their SSH hosts appear as real, read only hosts in a managed folder of your own list, with their logins, so the terminal, files, Docker and tunnels all work
- Open a session on a mirrored host like on any host, connecting through the remote server
- Link to a server that asks for a client certificate (mutual TLS), with a .pfx or .p12 file or a certificate from the system store
- Client type and device id in the sync handshake, and documented sync endpoints
