---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/automations/reference"
custom_edit_url: null
plugin_id: "automations"
plugin_version: "1.0.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `automations.view` | user | See the automations and their history. |
| `automations.create` | user | Add new automations. |
| `automations.edit` | user | Change existing automations. |
| `automations.delete` | user | Remove automations. |
| `automations.run` | user | Trigger an automation by hand. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `settings:read-core` | Low | Read Termix settings. Server settings, not your hosts or credentials. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Needs: [snippets](/plugins/snippets) ^1.0.0.

Works better with: [fleets](/plugins/fleets) ^1.0.0, [tunnels](/plugins/tunnels) ^1.0.0, [docker](/plugins/docker) ^1.0.0, [host-metrics](/plugins/host-metrics) ^1.0.0, [wake-on-lan](/plugins/wake-on-lan) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `automations.access` | 1.0.0 | `automations.view` |

| Uses | Version | Optional |
| --- | --- | --- |
| `snippets.access` | ^1.0.0 | no |
| `fleets.access` | ^1.0.0 | yes |
| `tunnels.access` | ^1.0.0 | yes |
| `docker.containers` | ^1.0.0 | yes |
| `docker.events` | ^1.0.0 | yes |
| `host-metrics.viewers` | ^1.0.0 | yes |
| `wake-on-lan.send` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/automations/automations-api).

## Platforms

Linux, Windows, macOS

