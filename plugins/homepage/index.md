---
title: "Homepage"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/homepage"
description: "A drag and drop widget page for your servers and services, plus service links for the dashboard."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Homepage/edit/main/docs/index.md"
plugin_id: "homepage"
plugin_version: "1.0.0"
plugin_latest: true
---
Homepage is a page of widgets you arrange yourself: your servers' status, links to your services, bookmarks, a clock, the weather, notes, an RSS feed, even a live terminal. Think of it as a start page for your homelab.

## Open it

Switch the dashboard's header to **Homepage**, or open it from the command palette. It also adds two dashboard cards: **Service Links** and **Homepage Preview**.

## Edit it

1. Press **Unlock Layout**.
2. **Add Widget** and pick one. Drag it where you want and drag its corner to resize.
3. Click a widget's settings to configure it.
4. Press **Lock Layout** when you are done, so nothing moves by accident.

Use a **Folder** widget as a background card to group widgets together.

## Widgets

| Widget                                           | Shows                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------ |
| Host Status, Host Grid                           | Live status and metrics for one host, or all of them.              |
| Quick Connect                                    | Buttons to open a terminal, files, Docker and more for your hosts. |
| SSH Terminal                                     | A live terminal to a host.                                         |
| Ping Status                                      | Whether URLs or services answer.                                   |
| Service Link, Service Grid, Link Tree, Bookmarks | Links to your services.                                            |
| Dashboard Links                                  | Your dashboard service links.                                      |
| Search Bar, Search Shortcuts                     | Search Google, DuckDuckGo, Bing or your own engine.                |
| Clock, Calendar, Countdown                       | Time and dates.                                                    |
| Weather                                          | The weather for a place.                                           |
| RSS Feed                                         | Items from an RSS or Atom feed.                                    |
| Notes, Markdown Notes, Text Banner               | Text and headings.                                                 |
| Image, iFrame Embed                              | An image or any web page.                                          |
| Custom API                                       | Data from any JSON API.                                            |
| Recent Activity, System Overview, Termix Uptime  | What is happening in Termix.                                       |

Other plugins add their own: **Docker Manager**, **File Manager**, **Tunnel Manager**, **Metrics Chart** and **Alert Feed** show up when those plugins are on.

## Private addresses

Ping Status and Custom API run from the Termix server. To keep them from poking around your internal network, private and loopback addresses are blocked unless an admin allows them. In **Settings**, **Homepage**, list exact hostnames or IPs under **Allowed private hosts**, without schemes, ports or paths.

If those hosts use a certificate from your own CA, paste it under **Private certificate authority**. Certificates are still checked.

## Sync

Your homepage is saved to your account and syncs with the desktop app.

## For plugin authors

Add a widget by registering an extension on the `homepage.widgets` point. See [more extension points](/develop/more-extension-points#extensions).
