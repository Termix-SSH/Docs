---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/step-ca/reference"
custom_edit_url: null
plugin_id: "step-ca"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| CA URL | string |  | The https URL of your smallstep CA. Leave the CA URL, fingerprint and provisioner empty to turn Step CA off. |
| Root fingerprint (SHA-256) | string |  | The root certificate fingerprint, as shown by step ca bootstrap. |
| OIDC provisioner name | string |  | The name of the CA's OIDC provisioner. Then choose "Step CA" as a host's authentication type. |
| Allowed private Step CA hosts | textarea |  | Private hosts the Step CA certificate flow may contact: the CA itself and, if internal, your identity provider. Separate them with commas or new lines. |

## Environment variables

Set these on the Termix server, for example under `environment:` in your compose file.

| Variable | Default | What it does |
| --- | --- | --- |
| `REDIS_URL` |  | Redis that several Termix servers share for sign in state. Not needed with one server. |
| `TERMIX_STEP_CA_REDIS_PREFIX` | `termix:step-ca` | Prefix for the keys it writes in Redis. |

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

The plugin's HTTP routes are in the [API reference](/api/step-ca/step-ca-api).

## Platforms

Linux, Windows, macOS

