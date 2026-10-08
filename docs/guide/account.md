---
title: Your account
description: Password, second factors and your data.
---

# Your account

Open **Settings** from the bottom of the rail. The pages under **Your account** are about you.

## Account

Your username, role, how you sign in and the Termix version. **Delete Account** removes your account and everything in it, for good.

## Security {#security}

- **Change Password.**
- **Second factors** from plugins: an authenticator app with [TOTP](/plugins/totp), or a passkey or security key with [Passkeys](/plugins/webauthn). Each shows here once its plugin is on.

## Sign in methods

Besides a username and password, plugins can add other ways in: [Single sign-on](/plugins/sso) (OpenID Connect, GitHub, Google), [LDAP](/plugins/ldap) and [Termix Identity](/plugins/termix-identity). Admins turn these on. An admin can also link an SSO or LDAP account to a local one, so both work.

If you sign in with SSO or LDAP, use `$external.username` as a host's username to fill in the name you signed in with.

## Your data {#your-data}

In **Data and sync**:

- **Export My Data** downloads your hosts, credentials and settings as a `.sqlite` file.
- **Import My Data** loads one back, on this server or another.

The export has your secrets in it, decrypted. Keep it safe.

In the desktop app this page also has [desktop sync](/configure/desktop-sync).

## Forgot your password

If **Allow Password Reset** is on, use **Forgot password** on the sign in page. Termix prints a reset code in the server logs, so you need access to them, or an admin who has. An admin can also reset your password in **Settings**, **Users**.
