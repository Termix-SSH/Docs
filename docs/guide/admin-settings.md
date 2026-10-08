---
title: Admin settings
description: Server-wide settings for admins.
---

# Admin settings

Admins see a **This server** group in **Settings**.

| Page              | What is on it                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| **General**       | Sign in options, session length, status check interval, log level, suggested host tags, plugin developer mode. |
| **Updates**       | The beta program and plugin betas. See [betas](/configure/betas).                                              |
| **Users**         | See [users](/guide/users).                                                                                     |
| **Sessions**      | Every signed in session. Sign any of them out.                                                                 |
| **Roles**         | See [roles](/guide/roles).                                                                                     |
| **Host defaults** | The server level of [host defaults](/guide/host-defaults).                                                     |
| **Branding**      | Your own name, tagline and logo.                                                                               |
| **Database**      | Export and import the whole database.                                                                          |
| **SSL**           | The HTTPS certificate. See [HTTPS](/configure/https).                                                          |
| **API keys**      | Every user's API keys.                                                                                         |
| **Audit log**     | See [audit log](/guide/audit-log).                                                                             |

## General

| Setting                                           | What it does                                                                                                      |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Allow User Registration**                       | Let people make their own account on the sign in page.                                                            |
| **Allow Password Login**                          | Sign in with a username and password. Termix keeps it on if no other way in is set up, so nobody gets locked out. |
| **Auto-create external accounts**                 | Make an account the first time someone signs in with SSO or LDAP, even with registration off.                     |
| **Ask for a second factor after external logins** | Also ask for TOTP or a passkey after SSO and LDAP sign ins.                                                       |
| **Allow Password Reset**                          | Allow the reset code flow on the sign in page.                                                                    |
| **Session Timeout**                               | How long a sign in lasts, from 1 to 720 hours.                                                                    |
| **Status Check**                                  | How often hosts are checked, unless a host sets its own interval.                                                 |
| **Log Level**                                     | How much the server logs.                                                                                         |
| **Predefined host tags**                          | Tags every user sees as suggestions in the host editor.                                                           |
| **Plugin developer mode**                         | Lets admins install plugins from a `.tmxplug` file. See [managing plugins](/guide/plugins#install-from-a-file).   |

Some of these can be set with [environment variables](/configure/environment-variables) instead. When one is set, it wins.

## Branding {#branding}

Replace "Termix" on the sign in page and browser tab with your own name, a tagline and a logo (PNG, JPEG or WEBP, up to 750 KB).

## Database {#database}

- **Export Database** downloads a portable `.sqlite` copy of all hosts, credentials and settings.
- **Import Database** loads one, on any database type. Use it to move between SQLite, PostgreSQL and MySQL. See [database](/configure/database#move-an-existing-install).

The export has every secret in it, decrypted.
