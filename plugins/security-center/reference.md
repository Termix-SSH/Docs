---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/security-center/reference"
custom_edit_url: null
plugin_id: "security-center"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Scan for vulnerabilities | boolean | `true` | Send installed package names and versions to OSV to find known vulnerabilities. Turn off to keep package lists on your network. |
| OSV address | string | `"https://api.osv.dev"` | Where to look vulnerabilities up. Change it to use your own OSV mirror. |
| Check known exploited list | boolean | `true` | Download the CISA list of known exploited vulnerabilities once a day to mark the urgent ones. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the Security panel with terminals | boolean | `false` | Open the panel by itself on hosts that have it. |
| Panel side | select | `"right"` | Where the Security panel opens beside a terminal. |
| Panel size | number | `380` | Width or height of the panel in pixels. |
| Show the edge button | boolean | `true` | Show a small button on the edge of the terminal to open the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Security Center | boolean | `false` | Audit the SSH keys on this host and scan it for known vulnerabilities. |
| Use sudo | boolean | `true` | Run the checks with passwordless sudo so every user's keys can be read. |
| Read only | boolean | `false` | Block key rotation and removal from Termix. |
| Show the side panel | boolean | `true` | Offer the Security panel beside terminals on this host. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `security-center.use` | admin, user | See keys, findings and vulnerabilities on hosts you can access. |
| `security-center.scan-vulns` | admin, user | Start a vulnerability scan from Termix. |
| `security-center.rotate` | admin | Rotate login keys and host keys, and remove keys from hosts. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `security-center.keys`<br />SSH keys | A host | Read only |  |
| `security-center.findings`<br />Security findings | A host | Read only |  |
| `security-center.vulns`<br />Vulnerabilities | A host | Read only |  |
| `security-center.status`<br />Security | A host | Read only |  |
| `security-center.critical-vulns`<br />Critical vulnerabilities | A host | Read only |  |
| `security-center.weak-keys`<br />Key problems | A host | Read only |  |
| `security-center.scan`<br />Scan for vulnerabilities | A host | Changes |  |
| `security-center.rotate-key`<br />Rotate login key | A host | Destructive |  |
| `security-center.revoke-key`<br />Remove an SSH key | A host | Destructive | `fingerprint`, `path` |
| `security-center.rotate-host-keys`<br />Make new host keys | A host | Destructive |  |

## Events

Automations can start when one of these happens.

| Event | What it means |
| --- | --- |
| `security-center.vuln-found` | New critical vulnerability |
| `security-center.key-weak` | Weak key found |
| `security-center.rotated` | Login key rotated |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `credentials:write` | Medium | Save new credentials. It can add passwords and keys to your saved credentials. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `files:own` | Low | Store its own files. In its own folder on disk, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `security-center.access` | 1.0.0 | `security-center.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/security-center/security-center-api).

## Platforms

Linux, Windows, macOS

