---
title: "SSH Certificate Signer"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/vault"
description: "Connect to hosts with short-lived SSH certificates signed by HashiCorp Vault or OpenBao."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Vault/edit/main/docs/index.md"
plugin_id: "vault"
plugin_version: "1.1.0"
plugin_latest: true
---
SSH Certificate Signer lets you connect to hosts with short-lived SSH certificates signed by [HashiCorp Vault](https://www.vaultproject.io/) or [OpenBao](https://openbao.org/). When you connect, you sign in to your Vault or OpenBao server with OIDC, it signs a throwaway key, and Termix uses that key for the connection. No token, password or long-lived key is stored in Termix.

OpenBao is a fork of Vault with the same API, so both work the same way. Pick which one you use on each signer profile.

## Before you start

- The SSH secrets engine set up to sign client keys, and your hosts set to trust its CA. See the [Vault docs](https://developer.hashicorp.com/vault/docs/secrets/ssh/signed-ssh-certificates) or the [OpenBao docs](https://openbao.org/docs/secrets/ssh/signed-ssh-certificates/).
- The OIDC auth method set up with your identity provider. See the [Vault docs](https://developer.hashicorp.com/vault/docs/auth/jwt) or the [OpenBao docs](https://openbao.org/docs/auth/jwt/).

## Set it up

1. Install the plugin from the Plugins tab.
2. Open Settings, SSH Certificate Signer and copy the Redirect URI, like `https://termix.example.com/plugin-api/vault/oidc/callback`. Add it to `allowed_redirect_uris` on each OIDC role Termix signs in with.
3. If your server is on your own network, an admin lists it under Allowed private signer hosts.

## Make a signer profile

A profile says how to talk to your server. Open a host in Manage, set Authentication Method to Vault or OpenBao, and press Manage signer profiles, then New profile:

| Field              | What it is                                                             |
| ------------------ | ---------------------------------------------------------------------- |
| Signer             | HashiCorp Vault or OpenBao.                                            |
| Server Address     | Like `https://vault.example.com` or `https://openbao.example.com`.     |
| Namespace          | For Vault Enterprise or OpenBao namespaces.                            |
| OIDC Auth Mount    | Where the OIDC auth method is mounted. `oidc` by default.              |
| OIDC Role          | The OIDC role to sign in with.                                         |
| SSH Secrets Mount  | Where the SSH engine is mounted. `ssh-client-signer` by default.       |
| SSH Signer Role    | The SSH role that decides the certificate's principals and extensions. |
| Valid Principals   | Principals to ask for, comma separated.                                |
| Ephemeral Key Type | The throwaway key's type. `ssh-ed25519` by default.                    |

Admins can turn on Share with all users so everyone can pick the profile. Profiles sync with the desktop app.

## Use it on a host

Set Authentication Method to Vault or OpenBao, pick a Signer Profile and save. When you connect, Termix asks you to sign in in the browser, then carries on.

It works for the terminal, file manager, Docker and every other plugin that connects over SSH. A host's profile can only be changed by its owner, and it has to be a shared profile or one the owner made.

## Permissions

| Permission    | What it allows                                        |
| ------------- | ----------------------------------------------------- |
| `vault.use`   | Make profiles and connect to hosts that use a signer. |
| `vault.share` | Share a profile with everyone. Admins only at first.  |

The permission names still start with `vault` because the plugin id is `vault`.
