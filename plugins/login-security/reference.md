---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/login-security/reference"
custom_edit_url: null
plugin_id: "login-security"
plugin_version: "1.2.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Sign out after idle minutes | number | `0` | Sign people out after this many minutes without activity. The server ends the session too, so a copied token stops working. 0 turns it off. |
| Longest session in hours | number | `0` | Sessions end after this many hours, even with remember me. 0 means no extra limit. |
| Allow remember me | boolean | `true` | Off hides remember me at login and ignores devices remembered before, so every login asks for the second factor. |
| Alert on a new device | boolean | `true` | Send people an alert when someone signs in to their account from a device it has not seen before. Each person can turn it off for themselves. |
| Require a second factor | select | `"off"` | People without one must set one up after they sign in, before they can use Termix. A passkey sign in with a PIN or fingerprint counts. |
| Also for single sign-on | boolean | `false` | Ask for the second factor after SSO and LDAP logins too. Leave it off when your identity provider already asks for one. |
| Ask for a second factor before connecting | select | `"off"` | People enter their second factor when they open a terminal, remote desktop or file manager on a host. Metrics, tunnels and other background work are not asked. |
| Minutes before asking again | number | `60` | After entering it, a person can connect to any host for this long. Signing out ends it early. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Alert me on a new device | boolean | `true` | Get an alert when someone signs in to your account from a device not seen before. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Ask for a second factor before connecting | boolean | `false` | Used when Login Security is set to ask on hosts marked for it. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `login-security.manage` | admin | See the second factor status and change login security settings. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `auth:policy` | High | Set sign in rules. It can sign people out when idle, limit session length, turn off remember me and require a second factor. |
| `hosts:connect-policy` | High | Decide who can connect. Can block or allow every SSH and remote desktop connection to any host. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## API

The plugin's HTTP routes are in the [API reference](/api/login-security/login-security-api).

## Platforms

Linux, Windows, macOS

