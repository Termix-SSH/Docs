---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/operations-center/reference"
custom_edit_url: null
plugin_id: "operations-center"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Show the attention dot | boolean | `true` | A dot next to a host's name in the host list while one of its status tiles is warning or failing. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `operations-center.use` | admin, user | Run actions from the Operations tab, start rollouts, set up drift checks and open host pages. |
| `operations-center.rules` | admin | Decide which actions need a person to approve them for everyone. |
| `operations-center.mcp` | admin | Let outside AI tools run actions with this user's API keys. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `operations:approve` | High | Decide what needs approval. Can let actions run with no approval, or block them, for every user. |
| `operations:invoke` | High | Run other plugins' actions. Acts for the signed-in user on the actions its manifest lists. Approval rules still apply. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/operations-center/operations-center-api).

