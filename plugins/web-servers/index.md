---
title: "Web Servers"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/web-servers"
description: "Manage nginx, Apache and Caddy on your hosts: sites, config, logs and HTTPS, with every change tested first."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Web-Servers/edit/main/docs/index.md"
plugin_id: "web-servers"
plugin_version: "1.0.0"
plugin_latest: true
---
Web Servers manages nginx, Apache and Caddy on a Linux host over SSH. Each host gets its own tab for its sites, config files, logs and the server itself. Every change is tested with the server's own check before it reloads, and a broken change is put back.

This plugin works with web servers installed on the host. For a proxy that runs inside Termix itself, use [Reverse Proxy](/plugins/reverse-proxy). For web servers in containers, use [Docker](/plugins/docker).

## Set up a host

1. Make sure Termix logs in to the host as root, or as a user with passwordless sudo, or save the host's Sudo Password.
2. Open the host in Manage and turn on the Web Servers setting.
3. Open the host menu and choose Web Servers.
4. If no web server is installed, open Server and press Install next to the one you want.

## Supported layouts

- nginx with `sites-available` and `sites-enabled` (Debian, Ubuntu), or with `conf.d` (Fedora, RHEL, Rocky, Alma).
- Apache as `apache2` with `sites-available` and `sites-enabled` (Debian, Ubuntu), or as `httpd` with `conf.d` (Fedora, RHEL, Rocky, Alma).
- Caddy with `/etc/caddy/Caddyfile`. Termix keeps its sites in `/etc/caddy/sites` and adds one `import` line to the Caddyfile the first time you add a site. The old Caddyfile is kept as `Caddyfile.termix.bak`.

Other layouts show their files in Config, but a new site may not be loaded if the main config does not include its folder.

## What you can do

- Sites: see every site with its domains, web root or app, HTTPS and how many days its certificate has left. Turn sites on and off, or delete them.
- Add site: make a static, reverse proxy, PHP or redirect site from a form, with HTTPS, compression, an upload limit and its own log files. Press Preview to see the config before you save.
- Edit a site: sites made in the form open in the form again. Any site can be edited as text. Saving the text of a form site turns its form off, so your own changes are kept.
- Get certificate: certbot gets a Let's Encrypt certificate for the site's domains with its nginx or Apache plugin. A site made in the form switches to HTTPS with it. certbot renews it and reloads the server. Caddy does all of this by itself.
- Config: open any file under `/etc/nginx`, `/etc/apache2`, `/etc/httpd` or `/etc/caddy`, test the config and save. The last 10 versions of each file are kept and can be restored.
- Logs: read the end of any file in the server's log folder, or its journal, and follow it live. Access logs also show counts by status code, the top paths and the top clients.
- Server: start, stop, restart and reload each server, choose whether it starts at boot, and install nginx, Apache, Caddy or certbot.

## Safe changes

Every save, site change, restore and reload runs the server's own test first: `nginx -t`, `apachectl -t` or `caddy validate`. When the test fails, the file is put back and the server keeps running the old config. The error shows in Termix.

Old versions of changed and deleted files are kept on the host in `/var/lib/termix-web-servers/backups`.

## Alerts

Press the bell to get alerts for a host. Termix checks every minute as you and sends one alert when a web server stops and one when it runs again.

## Logs and permissions

Reading logs and following them live uses the same login. When the login is not root and sudo needs a password, live follow runs as the login user, which needs to be in the `adm` group (Debian, Ubuntu) to read the logs.

## Read only hosts

Turn on Read only in the host settings to see sites, config and logs without any way to change them.
