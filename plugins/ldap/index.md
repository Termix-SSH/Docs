---
title: "LDAP"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/ldap"
description: "Sign in with your LDAP or Active Directory username and password."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-LDAP/edit/main/docs/index.md"
plugin_id: "ldap"
plugin_version: "1.0.0"
plugin_latest: true
---
LDAP lets people sign in to Termix with their LDAP or Active Directory username and password. Termix checks the password against your directory. Nobody needs a separate Termix password.

You can add more than one directory. Each gets its own button on the sign in page.

## Add a directory

1. Install the plugin from the **Plugins** tab.
2. Open **Settings**, **LDAP** and press **Add Directory**.
3. Fill in the fields below, turn on **Enabled** and press **Save Directory**.

The sign in page now shows a button for the directory. Pressing it asks for an LDAP username and password.

## Fields

| Field                          | What it is                                                                                                                                               |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Display Name**               | The button label, like `Company directory`.                                                                                                              |
| **LDAP Host**, **Port**        | Your server. Usually port `389`, or `636` for LDAPS.                                                                                                     |
| **Use TLS (LDAPS)**            | Connect over LDAPS. Use it unless the directory is on the same trusted network.                                                                          |
| **CA certificate**             | The PEM certificate that signed your directory's certificate, if it isn't from a public CA.                                                              |
| **Skip certificate check**     | Accept any certificate. Only for a test directory.                                                                                                       |
| **Bind DN**, **Bind Password** | The account Termix signs in as to look users up.                                                                                                         |
| **User Search Base**           | Where users live, like `ou=users,dc=example,dc=com`.                                                                                                     |
| **User Search Filter**         | How to find a user. `{{username}}` is replaced with what they typed, like `(uid={{username}})`, or `(sAMAccountName={{username}})` for Active Directory. |
| **Username Attribute**         | The attribute with the username. Usually `uid`, or `sAMAccountName` in Active Directory.                                                                 |
| **Display Name Attribute**     | The attribute with their name. Usually `cn`.                                                                                                             |
| **Group Search Base**          | Where groups live, for the admin check.                                                                                                                  |
| **Admin Group**                | Members of this group are Termix admins.                                                                                                                 |
| **Allowed Users**              | A comma separated list of usernames allowed to sign in. Empty allows anyone the directory accepts.                                                       |

## How sign in works

1. Termix binds with the bind DN and searches for the user with your filter.
2. It checks their password by binding as them.
3. It finds or makes their Termix account.

If **Auto-create external accounts** is off in **Settings**, **General**, only people who already have an account can sign in this way. An admin can link an LDAP account to an existing local one in **Settings**, **Users**.

If you set **Group Search Base** and **Admin Group**, admin rights follow the group on every sign in. Add someone to the group and they are an admin next time they sign in. Remove them and they lose it.

## With other sign in options

LDAP works next to passwords, [Single sign-on](/plugins/sso), [TOTP](/plugins/totp) and [Passkeys](/plugins/webauthn). To ask for a second factor after an LDAP sign in too, turn on **Ask for a second factor after external logins** in **Settings**, **General**.

Use `$external.username` as a host's username to fill in the name someone signed in with.

## Troubleshooting

- **Invalid credentials for everyone.** Check the bind DN and password first, then the search base and filter. The server log shows why a sign in was refused.
- **Certificate errors with LDAPS.** Paste your CA under **CA certificate**.
- **Too many attempts.** Sign ins are rate limited per user to stop guessing. Wait a few minutes.

Who can add and change directories is set by `ldap.manage`. Only admins have it at first.
