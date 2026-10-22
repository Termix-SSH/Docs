---
title: "Reverse Proxy"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/reverse-proxy"
description: "Reverse proxy for TCP, UDP, HTTP and HTTPS with free certificates and Termix login, managed per host."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Reverse-Proxy/edit/main/docs/index.md"
plugin_id: "reverse-proxy"
plugin_version: "1.0.0"
plugin_latest: true
---
Reverse Proxy shares services running on your hosts through your Termix server. Routes belong to hosts and are managed in one tab. A route can be a web address with a free certificate, or a raw TCP or UDP port.

## How it works

The plugin opens its own ports on the Termix server and forwards traffic to the host you picked. It does not use the Termix web port, so you need to publish the plugin's ports yourself.

| What                     | Default  | Public port you map to it |
| ------------------------ | -------- | ------------------------- |
| HTTP (and Let's Encrypt) | 8081     | 80                        |
| HTTPS                    | 8444     | 443                       |
| TCP and UDP routes       | Your own | The same number           |

The defaults are high ports because the Termix container does not run as root and cannot open ports below 1024. In Docker Compose it looks like this:

```yaml
services:
  termix:
    ports:
      - "8080:8080"
      - "80:8081"
      - "443:8444"
      - "5432:5432"
      - "5353:5353/udp"
```

Change the HTTP and HTTPS ports in Settings, under Reverse Proxy.

## Manage routes

Open Reverse Proxy from a host's menu. The tab belongs to that host and lists only its routes, with status and traffic. Search, filter by status, switch a route on or off, or click one to see and change everything about it. Certificates are on their own view in the same tab.

To add a route, choose Add route and fill in the domain (web) or the public port (TCP and UDP) and the port to forward to. The route starts when you save.

The host's own settings only customize routes. Under Reverse proxy in a host's settings you can turn routes off for that host, set a different target address (to reach a container or another machine instead of the host itself), and pick the default login for new web routes.

The target is the host's own address unless a route or the host settings say otherwise.

## On the dashboard

Add the Reverse proxy card in the dashboard's edit mode. It shows how many routes are running, lists the ones that are stopped or failing, and your certificates with the soonest to expire first.

## Web routes

Point the domain's DNS record at your server, then add the route.

- Certificate: Let's Encrypt asks for a free certificate and renews it 30 days before it ends. The plugin answers the check on its HTTP port, so public port 80 must reach it. Set the certificate email in Settings first. Self-signed and your own certificate also work.
- Redirect HTTP to HTTPS: on by default when a certificate is used. If visitors reach HTTPS on a port other than 443, set the public HTTPS port.
- WebSockets work without any setting.
- Extra request headers, an allow list and a block list of IP addresses are available on every route.
- Use Trust any target certificate when the target serves HTTPS with a self-signed certificate.

To use another ACME certificate authority, such as a private step-ca, set Custom certificate authority in Settings to its directory address.

Use Let's Encrypt staging in Settings while you test. Staging certificates are not trusted by browsers, but they do not count against rate limits.

## Termix login in front of a route

Set Who can open it on a web route:

- Anyone: no login.
- Signed-in Termix users: visitors sign in with Termix first.
- Users with access to this host: visitors also need to be allowed to connect to the host in Termix.

Set Termix address in Settings, for example `https://termix.example.com`. A visitor without a login is sent to a page on Termix, signs in there, and is sent back with a cookie for the route's domain. The cookie lasts as long as Login length in Settings. The cookie is only kept by the plugin and is not sent to your service.

This protects the web page. A TCP or UDP route has no login. Use the allow list on those.

## TCP and UDP routes

Pick TCP or UDP, choose the public port and the target port. Use the allow list to limit who can connect. UDP keeps one session per visitor and closes quiet ones after the idle timeout.

## Things to know

- Removing a host removes its routes.
- Routes use the address Termix has for the host. If the host is behind a jump host, set the target address to one the Termix server can reach directly.
- Ports below 1024 need extra setup in Docker. Map a public low port to a high container port as shown above.
- Not included yet: wildcard certificates, DNS challenges and load balancing across several targets.
