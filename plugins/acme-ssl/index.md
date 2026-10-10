---
title: "ACME Certificates"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/acme-ssl"
description: "Gets the Termix HTTPS certificate from Let's Encrypt or any ACME provider and renews it for you."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-ACME-SSL/edit/main/docs/index.md"
plugin_id: "acme-ssl"
plugin_version: "1.0.0"
plugin_latest: true
---
ACME Certificates gets the HTTPS certificate Termix serves from Let's Encrypt, or any other ACME certificate authority, and renews it before it runs out. The new certificate is swapped in without a restart.

Use it when Termix serves HTTPS itself. If a reverse proxy like Caddy or Traefik handles HTTPS for you, you don't need this plugin.

## Before you start

- A public domain name that points at your Termix server, like `termix.example.com`.
- One of:
  - **Port 80** on that domain reaching Termix, for the HTTP challenge. In Docker, publish it: `"80:8080"`.
  - **A Cloudflare API token** with `Zone:DNS:Edit` on the domain, for the DNS challenge. Port 80 can stay closed.
- Port `8443` published, so the certificate can be served. See [HTTPS](/configure/https).

## Set it up

1. Install the plugin from the **Plugins** tab.
2. Open **Settings**, then **ACME Certificates**.
3. Fill in **Domain** and **Email**.
4. Pick a **Certificate authority**. Try **Let's Encrypt (staging)** first if you are testing. Staging certificates are not trusted by browsers, but they don't count against Let's Encrypt's rate limits.
5. Pick a **Challenge type**. For the DNS challenge, paste your **Cloudflare API token**.
6. Turn on **Renew automatically** and save.
7. Press **Request certificate now**.

Once it is issued, Termix serves it over HTTPS at once. The status at the top of the page shows the names it covers, who issued it and when it expires.

## Renewing

With **Renew automatically** on, the plugin checks twice a day. It gets a new certificate when there is none, when it doesn't cover the domain any more, or when it expires within 30 days. If a renewal fails, admins get an alert.

The **SSL** page in **Settings** shows that ACME Certificates renews the certificate. If you turn the plugin off, the last certificate keeps being served until it expires.

## Another certificate authority

Pick **Custom ACME directory** and paste the authority's directory URL. It must be https. This works with Buypass, step-ca and other authorities that don't need external account binding (EAB). ZeroSSL needs EAB, so it does not work yet.

## Troubleshooting

- **The HTTP challenge fails.** Let's Encrypt has to reach `http://your-domain/.well-known/acme-challenge/` from the internet. Check port 80 is forwarded to Termix and nothing else answers it first. Behind a reverse proxy, forward that path to Termix too.
- **The DNS challenge fails.** Check the token has `Zone:DNS:Edit` on the right zone.
- **Rate limited.** Let's Encrypt limits how often you can ask for the same domain. Use staging while you test.
