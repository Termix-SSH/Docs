---
title: "Login Security"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/login-security"
description: "Sign people out when idle, limit session length, turn off remember me and require a second factor at login."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Login-Security/edit/main/docs/index.md"
plugin_id: "login-security"
plugin_version: "1.0.0"
plugin_latest: true
---
Login Security adds login rules for admins: sign people out when idle, limit how long a session lasts, turn off remember me and require a second factor.

## Set it up

1. Install Login Security from the Plugins tab.
2. Open Settings, then Login Security, and pick the rules you want. Everything is off until you turn it on.

Rules apply to logins made after you change them. People who are already signed in keep their session until it ends or they sign out.

## Sign out when idle

Sign out after idle minutes ends a session after that many minutes without activity. The app signs out by itself in the browser, and the server ends the session too, so a copied token stops working once it sits unused. Typing in a terminal counts as activity.

The rule applies to the web app, the desktop app and the mobile app. A desktop app linked to a server for sync is not signed out.

## Limit session length

Longest session in hours ends every session after that many hours, even when someone picked remember me. 0 means no extra limit, so the normal session timeout in Termix applies.

## Remember me

Turn off Allow remember me to hide remember me on the login page. Devices that were remembered before are ignored, so the second factor is asked at every login.

## Require a second factor

Require a second factor has three choices:

- Off: people use a second factor only if they set one up themselves.
- On a new device: a second factor is needed unless the device was remembered after an earlier login.
- At every login: a second factor is needed every time.

Any installed second factor counts, like an authenticator app from the TOTP plugin or a security key from the WebAuthn plugin. Signing in with a passkey that asks for a PIN or fingerprint also counts.

Someone who has no second factor yet can still sign in, but sees a page that asks them to set one up first. Until they do, they can't use anything else. The settings page warns you when no second factor plugin is installed.

SSO and LDAP logins skip the rule unless you turn on Also for single sign-on. Leave it off when your identity provider already asks for a second factor.

## HTTPS

To send plain HTTP to HTTPS, turn on Redirect HTTP to HTTPS in the Termix admin settings. It only works while Termix serves HTTPS itself. The Docker image already redirects when `ENABLE_SSL` is on.
