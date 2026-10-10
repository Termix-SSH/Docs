---
title: Users
description: Make and manage user accounts.
---

# Users

Admins manage accounts in **Settings**, **Users**.

## Add a user

Press **Create** and give a username and password. Or let people sign up themselves with **Allow User Registration** in **Settings**, **General**. Sign in plugins like [Single sign-on](/plugins/sso) and [LDAP](/plugins/ldap) can make accounts on first sign in.

## Manage a user

Click a user to open them. The tabs are:

| Tab             | What you can do                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Account**     | Make them an admin, give them [roles](/guide/roles), reset their password or second factors, link or unlink an SSO account. |
| **Hosts**       | See, add and edit their hosts.                                                                                              |
| **Credentials** | See, add and edit their credentials.                                                                                        |
| **Sessions**    | See where they are signed in. Sign one or all out.                                                                          |
| **Danger**      | Delete the user and all their data.                                                                                         |

**Data Export** downloads the user's hosts, credentials and file manager data as JSON, with secrets decrypted.

## Sessions {#sessions}

Every sign in is a session. Sign out one of them, or all at once with **Revoke All Sessions**, to force the user to sign in again. **Settings**, **Sessions** lists everyone's sessions in one place.

## Admins

An admin can do everything. To delete an admin, remove their admin status first. The first account made on a server is an admin.

## Link accounts

If someone has a local account and also signed in once with SSO, they end up with two accounts. **Link Accounts** merges the SSO one into the local one, so either way of signing in reaches the same data.

## Locked data

A user who has not signed in since an upgrade that changed encryption shows as **LOCKED**. Their hosts and credentials can't be opened until they sign in once.
