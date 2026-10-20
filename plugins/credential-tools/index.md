---
title: "Credential Tools"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/credential-tools"
description: "Generate SSH keys, check them and copy a public key to a host."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Credential-Tools/edit/main/docs/index.md"
plugin_id: "credential-tools"
plugin_version: "1.0.0"
plugin_latest: true
---
Credential Tools adds key helpers to Termix: make a new SSH key, check one you have, and put a public key on a host.

## Generate a key

In the credential editor, choose SSH key and pick Ed25519, ECDSA or RSA. Termix fills in the private and public key. If you typed a passphrase first, the new private key is protected with it.

## Get the public key

Use Generate from private key next to the public key field to work out the public key of a private key you pasted in. A private key kept in a secret source works too.

## Check a key pair

The tools can tell the type of a private or public key and check that a public key belongs to a private key. The editor uses this when you paste keys in.

## Deploy a key to a host

Each key credential in the Credentials list has a Deploy button. Pick one of your hosts and Termix connects over SSH and adds the public key to the host's `~/.ssh/authorized_keys`. A key that is already there is left alone.

- You need to be allowed to view credentials and edit hosts.
- You can only deploy to hosts you own.
- Every deploy is written to the audit log.

## Permissions

The Use credential tools permission lets a role use the plugin.
