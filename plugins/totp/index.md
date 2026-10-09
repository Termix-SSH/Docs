---
title: "TOTP"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/totp"
description: "Two-factor sign in with a code from an authenticator app, with backup codes."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-TOTP/edit/main/docs/index.md"
plugin_id: "totp"
plugin_version: "1.0.0"
plugin_latest: true
---
TOTP adds two-factor sign in with a code from an authenticator app, like Google Authenticator, Authy, 1Password, Bitwarden or Aegis. After your password, Termix asks for the 6-digit code from your app.

## Turn it on

1. Install the plugin from the **Plugins** tab. Then each person sets it up for themselves.
2. Open **Settings**, **Security** and press **Enable** under **TOTP Authenticator**.
3. Scan the QR code with your app, or type the secret in.
4. Enter the 6-digit code it shows and press **Verify**.
5. Save your **Backup Codes** somewhere safe. **Download Backup Codes** saves them as a file.

From then on, signing in asks for a code. Each code works once, so if you just used one, wait for the next. A backup code works in place of a code, once each.

Wrong codes are rate limited, both at sign in and when you add a device, turn TOTP off or make new backup codes.

## More than one device

**Add device** shows the QR code again for another phone or app. Confirm with a current code or a backup code first. All your devices make the same codes.

## Turn it off

Press **Disable** in **Settings**, **Security** and confirm with a code.

## Lost your phone

Use a backup code to sign in, then set it up again. If you have no backup codes, an admin can reset your second factors in **Settings**, **Users**.

## Other sign in methods

TOTP is asked for after a password sign in. After SSO or LDAP it is only asked for if an admin turns on **Ask for a second factor after external logins** in **Settings**, **General**.

With [trusted proxy login](/configure/trusted-proxy-login) on, the proxy decides who signs in, so you can't set up TOTP.

For a phishing proof second factor, look at [Passkeys](/plugins/webauthn).
