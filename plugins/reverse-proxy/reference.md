---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/reverse-proxy/reference"
custom_edit_url: null
plugin_id: "reverse-proxy"
plugin_version: "1.2.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| HTTP port | number | `8081` | The port this plugin listens on for HTTP. Map your public port 80 to it. Needed for Let's Encrypt. |
| HTTPS port | number | `8444` | The port this plugin listens on for HTTPS. Map your public port 443 to it. |
| Listen address | string | `"0.0.0.0"` | Use 0.0.0.0 to accept connections from anywhere, or 127.0.0.1 to keep routes local. |
| Termix address | string |  | The address people use to open Termix, like https://termix.example.com. Needed for routes that ask for Termix login. |
| Certificate email | string |  | Let's Encrypt uses it for expiry notices. |
| Use Let's Encrypt staging | boolean | `false` | Test certificates that browsers do not trust. Use while setting up to avoid rate limits. |
| Custom certificate authority | string |  | The ACME directory address of another CA, like a private step-ca. Leave empty to use Let's Encrypt. |
| Login length in hours | number | `12` | How long a visitor stays signed in on a protected route. |
| Web endpoint domain | string |  | A domain with a wildcard DNS record pointing at this proxy, like *.apps.example.com. Web Endpoint's Through Termix mode opens each page on its own temporary name under it. Needs the Termix address above. Add a port after a colon if visitors use one. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Allow reverse proxy routes | boolean | `false` | Routes for this host are managed in the Reverse Proxy tab. Turn this off to stop them. |
| Target address | string |  | Where routes send traffic. Leave empty to use this host's own address. Set it to reach a container or another machine. |
| Default login for new web routes | select | `"none"` | What new web routes on this host start with. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `reverse-proxy.use` | admin | Open the Reverse Proxy tab and add routes to hosts you can edit. |
| `reverse-proxy.access` | admin, user | Sign in to web routes that ask for a Termix login. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `reverse-proxy.list-routes`<br />List proxy routes | A host | Read only |  |
| `reverse-proxy.failing`<br />Proxy routes failing | A host | Read only |  |
| `reverse-proxy.enable-route`<br />Turn a proxy route on | One item on a host | Changes |  |
| `reverse-proxy.disable-route`<br />Turn a proxy route off | One item on a host | Destructive |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `reverse-proxy.endpoints` | 1.0.0 | `reverse-proxy.access` |

## API

The plugin's HTTP routes are in the [API reference](/api/reverse-proxy/reverse-proxy-api).

## Platforms

Linux, Windows, macOS

