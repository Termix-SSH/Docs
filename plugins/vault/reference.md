---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/vault/reference"
custom_edit_url: null
plugin_id: "vault"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Allowed private Vault hosts | textarea |  | Private or loopback Vault hostnames/IPs that anyone's own profile may use. Shared profiles and profiles made by people who can share already may. Separate entries with commas or newlines. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `vault.use` | admin, user | Create Vault signer profiles and connect to hosts that use Vault. |
| `vault.share` | admin | Mark a Vault signer profile as shared so every user can pick it. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `auth:provide` | High | Handle sign in. It can add a login method, a second factor or an SSH sign-in type. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/vault/hashicorp-vault-api).

## Platforms

Linux, Windows, macOS

