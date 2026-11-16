---
title: Roles
description: Group users and decide what they can do.
---

# Roles

A role is a group of users with a set of permissions. Roles are used two ways:

- Permissions: What people with the role can do in Termix.
- Sharing: Share a host, folder or credential with a role instead of one person at a time. See [sharing](/guide/sharing).

## Built in roles

| Role    | Permissions                          |
| ------- | ------------------------------------ |
| `admin` | Everything. This can't be changed.   |
| `user`  | All host and credential permissions. |

Every new account gets `user`. Admins get `admin` instead. Termix keeps the `admin` role in step with who is an admin, so give admin with Make admin on the user's page, not by adding the role.

## Ready made roles

New and upgraded servers also get these. They are normal roles: edit, rename or delete them. A deleted one doesn't come back.

| Role     | Permissions                                                       | For                                                  |
| -------- | ----------------------------------------------------------------- | ---------------------------------------------------- |
| Viewer   | `hosts.view`, `credentials.view`                                  | People who only look.                                |
| Operator | `hosts.*`, `credentials.view`                                     | People who run hosts but don't handle secrets.       |
| Auditor  | `admin.audit.view`, `admin.users.view`, `admin.operations.view`   | Reading the audit log, users, shares and operations. |
| Helpdesk | `admin.users.view`, `admin.users.manage`, `admin.sessions.manage` | Resetting passwords, turning accounts off, sessions. |

## Make a role

In Settings, Roles, press New Role. Give it a name, a display name and a description. Then add users to it from their page in Settings, Users.

## Permissions

Press Edit permissions on a role. Permissions are grouped:

| Group          | Permissions                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hosts          | `hosts.view`, `hosts.create`, `hosts.edit`, `hosts.delete`, `hosts.share`                                                                                                             |
| Credentials    | `credentials.view`, `credentials.create`, `credentials.edit`, `credentials.delete`, `credentials.share`                                                                               |
| Administration | `admin.users.view`, `admin.users.manage`, `admin.audit.view`, `admin.roles.manage`, `admin.settings.manage`, `admin.sessions.manage`, `admin.operations.view`, `admin.plugins.manage` |
| Plugins        | Each plugin adds its own, like `docker.use`. They are listed on each plugin's reference page.                                                                                         |

A plugin's permissions show up when it is installed. Each plugin picks which built in roles get them at first.

### Administration permissions

| Permission              | Lets someone                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `admin.users.view`      | Open Settings, Users and the [access review](/guide/access-review), and see account details.                                   |
| `admin.users.manage`    | Make accounts, reset passwords and second factors, turn accounts off and on, approve them, make invite links and delete users. |
| `admin.sessions.manage` | See everyone's sessions and sign people out.                                                                                   |
| `admin.audit.view`      | Read the [audit log](/guide/audit-log).                                                                                        |
| `admin.roles.manage`    | Make and edit roles and give them to users.                                                                                    |
| `admin.settings.manage` | Change server settings like host defaults and tags.                                                                            |
| `admin.operations.view` | See every user's operation runs.                                                                                               |
| `admin.plugins.manage`  | Install, update and turn plugins on and off.                                                                                   |

Someone with these permissions who is not an admin still can't touch an admin's account, make someone an admin, or open other users' hosts and credentials. Someone who manages roles without being an admin can only give permissions they hold themselves.

## From SSO or LDAP

The [Single sign-on](/plugins/sso) and [LDAP](/plugins/ldap) plugins can map groups from your identity provider to Termix roles, so roles follow the directory. A group mapped to `admin` makes the user an admin, and removing them from it removes admin at their next sign in.
