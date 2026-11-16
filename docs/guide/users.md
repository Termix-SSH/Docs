---
title: Users
description: Make, invite, turn off and manage user accounts.
---

# Users

Admins manage accounts in Settings, Users. A [role](/guide/roles) with `admin.users.view` or `admin.users.manage` also opens this page, without being an admin.

## Add a user

There are four ways:

- Press Create and give a username and password.
- Send an [invite link](#invites).
- Let people sign up themselves with Allow User Registration in Settings, General.
- Sign in plugins like [Single sign-on](/plugins/sso) and [LDAP](/plugins/ldap) make accounts on first sign in. They can [wait for approval](#approval).

## Invite links {#invites}

Under Invite links on the Users page, press New invite. Pick:

- A note, so you know who it is for.
- A role the new account gets.
- When the link ends: 1, 3, 7 or 30 days.
- How many accounts it can make. One is the default.
- Make them an admin. Only admins see this. On a server with an [admin wait](/security/your-server#admin-wait), the new account becomes an admin only after the wait.

Copy the link right away. It is shown once. Whoever opens it picks a username and password, even when sign up is off. Revoke a link to stop it.

## Approve new SSO accounts {#approval}

Turn on Approve new SSO accounts in Settings, General, Accounts and access. Someone who signs in through SSO or LDAP for the first time then gets an account that waits. Every admin gets an alert. Filter the user list by Waiting for approval, open the user and press Approve.

The first account on a server never waits.

## Manage a user

Click a user to open them. The tabs are:

| Tab         | What you can do                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account     | Turn the account off or on, set its display name and email, make them an admin, give them roles, reset their password or second factors, link or unlink an SSO account. |
| Hosts       | See, add and edit their hosts. Admins only.                                                                                                                             |
| Credentials | See, add and edit their credentials. Admins only.                                                                                                                       |
| Access      | Everything shared with this user or by them. See [access review](/guide/access-review).                                                                                 |
| Sessions    | See where they are signed in. Sign one or all out.                                                                                                                      |
| Danger      | Delete the user and all their data.                                                                                                                                     |

Data Export downloads the user's hosts, credentials and file manager data as JSON, with secrets decrypted. Admins only.

## Turn an account off {#disable}

Press Turn off account on the Account tab. The user is signed out everywhere, their open terminals close, they can't sign in and their API keys stop working. Nothing is deleted. Press Turn on account to let them back in.

Use this when someone leaves or is away, instead of deleting them. You can't turn off your own account or the last admin.

The user list shows Off on turned off accounts and Waiting on ones waiting for approval. Filter by state with the menu next to the search box.

## Name and email

Each account can have a display name and an email. Users set their own in Settings, Account. Admins set them on the Account tab. Two accounts can't share an email. The user list shows the display name and searches it too, and the Account tab shows when the user last signed in.

## Sessions {#sessions}

Every sign in is a session. Sign out one of them, or all at once with Revoke All Sessions, to force the user to sign in again. Their open terminals and other live connections close too. Settings, Sessions lists everyone's sessions in one place.

## Admins

An admin can do everything. To delete an admin, remove their admin status first. The first account made on a server is an admin. Removing admin from someone signs them out everywhere, so nothing they opened as admin keeps running.

Only admins can make someone an admin, change an admin's account or open other users' hosts and credentials. Admins can be stopped from opening other users' hosts, see [admin settings](/guide/admin-settings#accounts-and-access).

## Delete a user

On the Danger tab, pick who gets the user's hosts and credentials, then press Delete. Shares the user made on those hosts, credentials and folders move with them. Someone who is not an admin has to pick another user or nobody, never themselves.

## Link accounts

If someone has a local account and also signed in once with SSO, they end up with two accounts. Link Accounts merges the SSO one into the local one, so either way of signing in reaches the same data.

## Locked data

A user who has not signed in since an upgrade that changed encryption shows as LOCKED. Their hosts and credentials can't be opened until they sign in once.
