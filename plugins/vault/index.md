---
title: "HashiCorp Vault"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/vault"
description: "Connect to hosts with short-lived SSH certificates signed by HashiCorp Vault."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Vault/edit/main/docs/index.md"
plugin_id: "vault"
plugin_version: "1.0.0"
plugin_latest: true
---
HashiCorp Vault lets you connect to hosts with short-lived SSH certificates signed by [Vault](https://www.vaultproject.io/). When you connect, you sign in to Vault with OIDC, Vault signs a throwaway key, and Termix uses it for that connection. No Vault token, password or long-lived key is stored in Termix.

## Before you start

- Vault's [SSH secrets engine](https://developer.hashicorp.com/vault/docs/secrets/ssh/signed-ssh-certificates) set up to sign client keys, and your hosts set to trust its CA.
- Vault's OIDC auth method set up with your identity provider.

## Set it up

1. Install the plugin from the **Plugins** tab.
2. Open **Settings**, **HashiCorp Vault** and copy the **Redirect URI**, like `https://termix.example.com/plugin-api/vault/oidc/callback`. Add it to `allowed_redirect_uris` on each Vault OIDC role Termix signs in with.
3. If Vault is on your own network, an admin lists it under **Allowed private Vault hosts**.

## Make a signer profile

A profile says how to talk to your Vault. Open a host in **Manage**, set **Authentication Method** to **Vault**, and press **Manage Vault profiles**, then **New profile**:

| Field                  | What it is                                                             |
| ---------------------- | ---------------------------------------------------------------------- |
| **Vault Address**      | Like `https://vault.example.com`.                                      |
| **Namespace**          | For Vault Enterprise namespaces.                                       |
| **OIDC Auth Mount**    | Where the OIDC auth method is mounted. `oidc` by default.              |
| **OIDC Role**          | The OIDC role to sign in with.                                         |
| **SSH Secrets Mount**  | Where the SSH engine is mounted. `ssh-client-signer` by default.       |
| **SSH Signer Role**    | The SSH role that decides the certificate's principals and extensions. |
| **Valid Principals**   | Principals to ask for, comma separated.                                |
| **Ephemeral Key Type** | The throwaway key's type. `ssh-ed25519` by default.                    |

Admins can turn on **Share with all users** so everyone can pick the profile. Profiles sync with the desktop app.

## Use it on a host

Set **Authentication Method** to **Vault**, pick a **Vault Signer Profile** and save. When you connect, Termix asks you to sign in to Vault in the browser, then carries on.

It works for the terminal, file manager, Docker and every other plugin that connects over SSH. A host's profile can only be changed by its owner.

## Permissions

| Permission    | What it allows                                       |
| ------------- | ---------------------------------------------------- |
| `vault.use`   | Make profiles and connect to Vault hosts.            |
| `vault.share` | Share a profile with everyone. Admins only at first. |
