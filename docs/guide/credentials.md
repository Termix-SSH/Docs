---
title: Credentials
description: Save a password or key once and use it on many hosts.
---

# Credentials

A credential is a username with a password, an SSH key, or both. Save it once and pick it on as many hosts as you like. Change it and every host that uses it changes too.

## Add one

Open [Manage](/guide/manage), pick **Credentials** and press **+**. Or use **Add Credential** in the Credentials panel.

- **Password**, **Key**, or both. Termix can make a key pair for you.
- **Key Password** if the key has a passphrase.
- **CA Certificate**: a `-cert.pub` file, for servers that use SSH certificates.

You can also turn a host's own login into a credential with **Create Credential** in the host editor.

## Use it

In a host's **SSH** section, pick **Stored Credential** and choose it. To use the host's username instead of the credential's, turn on **Override Credential Username**.

A folder can have a credential too. Hosts in the folder that use **Stored Credential** without picking one get the folder's.

## Deploy a key

**Copy deploy command** gives you a command that adds the public key to a server's `authorized_keys`. Or use **Deploy key to host** to do it over an existing connection.

## Share

Share a credential with users or roles from its menu.

| Level      | What they can do                                               |
| ---------- | -------------------------------------------------------------- |
| **Use**    | Pick it on their hosts and connect. They never see the secret. |
| **Manage** | Also edit it and share it on.                                  |

Each person gets their own encrypted copy. It updates when you change the credential and is removed when you stop sharing.
