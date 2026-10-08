---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/sso/reference"
custom_edit_url: null
plugin_id: "sso"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Sign in with SSO automatically | boolean | `false` | Send visitors straight to the first SSO provider instead of showing the login form. The OIDC_SILENT_LOGIN_DEFAULT environment variable overrides this. |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file.

| Variable | Default | What it does |
| --- | --- | --- |
| `OIDC_CLIENT_ID` |  | Client ID of an OIDC provider set from the environment. Needs the next four too. |
| `OIDC_CLIENT_SECRET` |  | Its client secret. |
| `OIDC_ISSUER_URL` |  | Its issuer URL. |
| `OIDC_AUTHORIZATION_URL` |  | Its authorization endpoint. |
| `OIDC_TOKEN_URL` |  | Its token endpoint. |
| `OIDC_USERINFO_URL` |  | Its userinfo endpoint, if it is not the usual one. |
| `OIDC_IDENTIFIER_PATH` | `sub` | Claim that identifies a user. |
| `OIDC_NAME_PATH` | `name` | Claim with the display name. |
| `OIDC_SCOPES` | `openid email profile` | Scopes to ask for. |
| `OIDC_ALLOWED_USERS` |  | Emails allowed to sign in, comma separated. Empty allows everyone. |
| `OIDC_ADMIN_GROUP` |  | Members of this group are admins. |
| `OIDC_GROUP_CLAIM` |  | Claim with the groups, if not groups, roles or group. |
| `OIDC_ROLE_MAP` |  | Groups to Termix roles as group:role pairs, comma separated. Works for every OIDC provider, not just this one. |
| `OIDC_ENV_OVERRIDE` | `false` | true makes the provider above the only one, even when providers are set up in the app. |
| `OIDC_SILENT_LOGIN_DEFAULT` |  | true or false. Sends visitors straight to SSO, and locks the setting. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `sso.manage` | admin | Add, change and remove the SSO providers people can sign in with. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `auth:provide` | High | Handle sign in. It can add a login method, a second factor or an SSH sign-in type. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/sso/single-sign-on-api).

## Platforms

Linux, Windows, macOS

