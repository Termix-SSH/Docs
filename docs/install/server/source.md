---
title: From source
description: Build and run Termix from the source code.
---

# From source

Use this if you want to build Termix yourself. Docker is easier for most people.

## What you need

- Node.js 24 and npm 11
- Git
- Build tools for native modules: `python3`, `make` and a C++ compiler. On Debian or Ubuntu: `sudo apt install build-essential python3`.

## Build

```bash
git clone https://github.com/Termix-SSH/Termix.git
cd Termix
npm ci
npm run build
```

`npm run build` builds the plugin SDK, the web UI, the server and the bundled plugins into `dist/`.

## Run

```bash
DATA_DIR=./db/data node dist/backend/backend/starter.js
```

The server listens on `127.0.0.1:30001` and serves the web UI too. Open `http://localhost:30001`.

It only listens on localhost on purpose. To reach it from other machines, put a reverse proxy in front of it. The nginx config the Docker image uses is in `docker/nginx.conf`, and [reverse proxy](/configure/reverse-proxy) has simpler examples. Point the proxy at `http://127.0.0.1:30001`.

## Keep it running

A systemd unit:

```ini
[Unit]
Description=Termix
After=network.target

[Service]
WorkingDirectory=/opt/termix
Environment=DATA_DIR=/opt/termix/db/data
Environment=NODE_ENV=production
ExecStart=/usr/bin/node dist/backend/backend/starter.js
Restart=on-failure
User=termix

[Install]
WantedBy=multi-user.target
```

## Remote desktop

The [Remote Desktop](/plugins/remote-desktop) plugin needs guacd. Run it with Docker or install it from your distro, then set `GUACD_HOST` and `GUACD_PORT`.

## Build your own image

```bash
docker build -t termix:local -f docker/Dockerfile .
```

Then use `termix:local` in place of the image name in the [Docker](/install/server/docker) compose file.

## Update

```bash
git pull
npm ci
npm run build
```

Then restart Termix.
