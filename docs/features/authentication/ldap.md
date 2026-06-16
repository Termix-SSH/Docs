# LDAP

LDAP is its own provider type in Termix, separate from OIDC. It connects to an LDAP or Active Directory server and checks a username and password directly, instead of redirecting to a login page. For how the provider system works as a whole, see [SSO Providers](./sso-providers).

## Adding an LDAP provider

1. Sign in as an admin and open **Admin Settings**.
2. Go to the SSO providers section and add a new provider.
3. Set the type to **LDAP**.
4. Fill in the fields below.
5. Save, then enable the provider.

## Fields

| Field | What it is |
|---|---|
| Host | Your LDAP server's hostname or address |
| Port | Your LDAP server's port, usually `389`, or `636` for TLS |
| Use TLS | Turn this on if your server needs an encrypted connection |
| Bind DN | The distinguished name Termix uses to log in to LDAP and search for users |
| Bind Password | The password for the bind DN |
| User Search Base | The base DN to search for users under, for example `ou=users,dc=example,dc=com` |
| User Search Filter | The filter used to find a user by username, for example `(uid={{username}})`. Termix replaces `{{username}}` with whatever the user types in |
| Username Attribute | The LDAP attribute that holds the username, usually `uid` |
| Display Name Attribute | The LDAP attribute that holds the user's display name, usually `cn` |
| Group Search Base | The base DN to search for groups under, used for the admin group check below |
| Admin Group | A group name or DN. Users in this group are made admins |
| Allowed Users | A comma separated list of usernames allowed to sign in. Leave empty to allow anyone who can bind |

## How sign in works

The LDAP login form shows up under the provider's button on the login page, asking for a username and password. Termix sends those to `/users/ldap/login`, which binds to your LDAP server with the bind DN, searches for the user using your search base and filter, then checks the password.

## Admin group sync

If you set both Group Search Base and Admin Group, Termix checks the user's group membership on every login and updates their admin status to match. Add someone to the group and they become an admin on their next login. Remove them and they lose admin access on their next login too.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
