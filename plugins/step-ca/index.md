---
title: "Step CA"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/step-ca"
description: "Connect to hosts with short-lived SSH certificates from a smallstep step-ca server."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Step-CA/edit/main/docs/index.md"
plugin_id: "step-ca"
plugin_version: "1.0.0"
plugin_latest: true
---
Step CA lets you connect to hosts with short-lived SSH certificates from a [smallstep step-ca](https://smallstep.com/docs/step-ca/) server. You sign in with your identity provider in the browser, the CA signs a certificate, and Termix uses it until it expires. No passwords or long-lived keys on your hosts.

No `step` binary is needed on the Termix server.

## Before you start

- A step-ca server with SSH certificates on and an **OIDC provisioner**, set up with your identity provider. See [smallstep's SSH guide](https://smallstep.com/docs/tutorials/ssh-certificate-login/).
- Your hosts set to trust the CA's SSH user key.

## Set it up

1. Install the plugin from the **Plugins** tab.
2. Open **Settings**, **Step CA**:
   - **CA URL**: your CA's https address.
   - **Root fingerprint (SHA-256)**: from `step ca bootstrap` or `step certificate fingerprint root_ca.crt`.
   - **OIDC provisioner name**: the provisioner's name on the CA.
3. Copy the **Redirect URI**, like `https://termix.example.com/plugin-api/step-ca/callback`, and register it with the identity provider behind the provisioner.
4. If the CA or your identity provider is on your own network, list their hosts under **Allowed private Step CA hosts**.
5. Save.

Leave the CA URL, fingerprint and provisioner empty to turn Step CA off.

## Use it on a host

1. Open the host in **Manage**.
2. Set **Authentication Method** to **Step CA** and save.
3. Connect. Termix asks you to sign in with your identity provider in the browser, then carries on.

The certificate is kept until it expires, so you only sign in again after that. It works for the terminal, file manager, Docker and every other plugin that connects over SSH.

## More than one Termix server

Sign in state is kept in memory. If you run several Termix servers behind a load balancer, point them at the same Redis with `REDIS_URL`.
