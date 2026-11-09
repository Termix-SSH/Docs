---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/dns/reference"
custom_edit_url: null
plugin_id: "dns"
plugin_version: "1.0.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `dns.view` | admin, user | Open the DNS tab and see zones, records, domains and health checks. |
| `dns.edit` | admin | Add, change and delete records, import zone files and refresh domains. |
| `dns.manage` | admin | Add provider logins, link records to hosts, watch domains and restore zone copies. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `dns.list-zones`<br />List DNS zones | The server | Read only |  |
| `dns.list-records`<br />List DNS records | The server | Read only | `zone` |
| `dns.list-domains`<br />List domains and expiry dates | The server | Read only |  |
| `dns.check-zone`<br />Check a zone | The server | Read only | `zone` |
| `dns.upsert-record`<br />Set a DNS record | The server | Changes | `zone`, `type`, `name`, `content`, `ttl` |
| `dns.delete-record`<br />Delete a DNS record | The server | Destructive | `zone`, `type`, `name`, `content` |
| `dns.snapshot-zone`<br />Save a copy of a zone | The server | Changes | `zone`, `label` |
| `dns.sync-links`<br />Update linked records | The server | Changes |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:probe` | Medium | Check if ports answer. Can open a plain connection to any address from the server, to see if it is reachable. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `dns.records` | 1.0.0 | `dns.manage` |

## API

The plugin's HTTP routes are in the [API reference](/api/dns/dns-api).

## Platforms

Linux, Windows, macOS

