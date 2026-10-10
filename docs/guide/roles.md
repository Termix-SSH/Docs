---
title: Roles
description: Group users and decide what they can do.
---

# Roles

A role is a group of users with a set of permissions. Roles are used two ways:

- **Permissions.** What people with the role can do in Termix.
- **Sharing.** Share a host or credential with a role instead of one person at a time. See [sharing](/guide/sharing).

## Built in roles

| Role    | Permissions at first                 |
| ------- | ------------------------------------ |
| `admin` | Everything.                          |
| `user`  | All host and credential permissions. |

Every new account gets `user`. Admins get `admin` too. You can edit what these two grant.

## Make a role

In **Settings**, **Roles**, press **New Role**. Give it a name, a display name and a description. Then add users to it from their page in **Settings**, **Users**.

## Permissions

Press **Edit permissions** on a role. Permissions are grouped:

| Group          | Permissions                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Hosts          | `hosts.view`, `hosts.create`, `hosts.edit`, `hosts.delete`, `hosts.share`                                                                |
| Credentials    | `credentials.view`, `credentials.create`, `credentials.edit`, `credentials.delete`, `credentials.share`                                  |
| Administration | `admin.users.view`, `admin.users.manage`, `admin.roles.manage`, `admin.settings.manage`, `admin.sessions.manage`, `admin.plugins.manage` |
| Plugins        | Each plugin adds its own, like `docker.use`. They are listed on each plugin's reference page.                                            |

A plugin's permissions show up when it is installed. Each plugin picks which built in roles get them at first.

## From SSO or LDAP

The [Single sign-on](/plugins/sso) and [LDAP](/plugins/ldap) plugins can map groups from your identity provider to Termix roles, so roles follow the directory.
