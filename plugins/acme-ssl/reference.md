---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/acme-ssl/reference"
custom_edit_url: null
plugin_id: "acme-ssl"
plugin_version: "1.2.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Renew automatically | boolean | `false` | Check twice a day and get a new certificate when there is none, it does not cover the domain, or it expires within 30 days. |
| Domain | string |  | The public domain name for the certificate. |
| Email | string |  | Contact email for the ACME account and expiry notices. |
| Certificate authority | select | `"letsencrypt"` | Where to get the certificate. Use staging to test without hitting Let's Encrypt rate limits. |
| ACME directory URL | string |  | Only for a custom certificate authority. Must be an https URL. |
| Challenge type | select | `"http-01"` | How to prove you own the domain. |
| Cloudflare API token | secret |  | Scoped token with Zone:DNS:Edit permission for your domain. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `acme-ssl.manage` | admin | See the certificate status and request a new certificate now. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `acme-ssl.certificate`<br />HTTPS certificate | The server | Read only |  |
| `acme-ssl.request`<br />Request a certificate now | The server | Changes |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `system:tls` | Critical | Manage certificates. It can replace the certificate Termix serves over HTTPS and answer domain checks from certificate authorities. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Uses | Version | Optional |
| --- | --- | --- |
| `dns.records` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/acme-ssl/acme-certificates-api).

## Platforms

Linux, Windows, macOS

