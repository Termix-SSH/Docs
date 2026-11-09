---
title: "Certificates"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/certificates"
description: "See, issue and renew TLS certificates on your hosts with certbot and acme.sh, and get an alert before they expire."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Certificates/edit/main/docs/index.md"
plugin_id: "certificates"
plugin_version: "1.0.0"
plugin_latest: true
---
Certificates manages the TLS certificates on a Linux host over SSH. Each host gets its own tab for its certbot and acme.sh certificates. For the HTTPS certificate of Termix itself, use [ACME SSL](/plugins/acme-ssl).

## Set up a host

1. Make sure Termix logs in to the host as root, or as a user with passwordless sudo, or save the host's Sudo Password.
2. Open the host in Manage and turn on the Certificates setting.
3. Open the host menu and choose Certificates.
4. If neither client is installed, press Install certbot.

## What you can do

- Certificates: see every certificate with its days left, soonest first.
- Issue: get a new certificate with the standalone, web root or DNS challenge.
- Renew: renew one certificate or everything that is due. Certbot also has a dry run.
- Revoke: mark a certificate as invalid and remove it.
- Stop managing: remove a certificate from the client without revoking it.
- Inspect: read a certificate file on the host, or check what a server sends over TLS, as seen from the host.
- Renewal: see whether a timer or cron job renews certificates on its own.

## Challenges

- Standalone: the client runs a small web server on port 80, so nothing else may use that port.
- Web root: the client puts a file in your web server's folder. The folder must be inside `/var/www`, `/srv` or `/usr/share/nginx`.
- DNS: the client adds a DNS record through your provider's API. Wildcards need this one.

DNS API tokens are set up on the host. For certbot, install the DNS plugin and enter the path of its credentials file. For acme.sh, set the provider's variables once on the host, and enter the name without `dns_`, like `cf`. Termix never reads these files.

## Alerts

Press the bell to get alerts for a host. It is checked every 6 hours as you, and you get one alert when a certificate gets close to expiring and one when it expires. Set how close with the Warn before expiry host setting.

## Dashboard card

The Certificates card lists the certificates that expire next across your hosts. Each host is checked once an hour unless you press Check again.

## In Host Metrics

With [Host Metrics](/plugins/host-metrics) installed, Certificates fills its SSL card.

## Limits

- acme.sh is read from the home of root, or of the login user without sudo.
- acme.sh has no dry run.
- Certificates made by other tools don't show in the list. Use Inspect to read them.
- On RHEL, certbot needs the EPEL repository.
