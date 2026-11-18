---
title: "Login Security"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/login-security"
description: "Sign people out when idle, limit session length, turn off remember me and require a second factor at login."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Login-Security/edit/main/docs/index.md"
plugin_id: "login-security"
plugin_version: "1.1.0"
plugin_latest: true
---
Login Security adds login rules for admins: sign people out when idle, limit how long a session lasts, turn off remember me and require a second factor. It also shows everyone their own sessions and API keys, alerts people about sign ins from new devices and holds the admin wait.

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

## Ask before connecting

Ask for a second factor before connecting asks people for it when they open a terminal, remote desktop or file manager on a host. Pick Every host, or Hosts marked for it and turn on the switch in each host's editor.

The connection stops with a Verify button that opens a tab for the code. Once it is entered, go back and connect again. Minutes before asking again sets how long that lasts, for every host that person connects to. Signing out ends it early. Each person verifies on their own. Metrics, tunnels and other background work are never asked. Someone with no second factor is told to set one up first.

## Sessions and keys

Open Sessions and keys from the command palette. Everyone sees their own sessions with the device, when each was last active and when it signed in, and can sign out any of them or all the others at once. The API keys tab lists the keys an admin made for you with their scopes, when each was last used and when it expires, and can revoke one or all of them.

Admins also get Sign everyone out. It ends every session on the server but their own, and can revoke every API key too. Desktop apps linked to the server have to link again afterwards.

## New device alerts

When someone signs in to an account from a device it has not seen before, that person gets an alert in Termix and on their alert channels, like email or ntfy, if they set any up. A device is the app plus browser and system, not the address. The first sign in after installing Login Security only remembers the device. Admins turn this off for everyone with Alert on a new device, and each person can turn it off for themselves in their own settings.

## Admin wait

On a server with two or more admins, some changes can wait before they apply, so a stolen admin account can't quietly take over the server. Open Admin wait from the command palette, set the minutes and turn it on. It is off by default and does nothing on a server with one admin.

These changes wait: making someone an admin, turning off password login, turning off a sign in plugin like SSO, Login Security or a second factor, and turning on or giving access to a plugin that can read saved logins, run programs, act as other users or change sign in. The other admins get an alert straight away and can cancel the change on the Admin wait page. A plugin installed or updated while the wait is on starts without that access until the wait is over.

Turning the wait on or making it longer applies at once. Turning it off or making it shorter waits too. To set it from the server instead, set `TERMIX_ADMIN_HOLD_MINUTES`; the page then only shows it.

## HTTPS

To send plain HTTP to HTTPS, turn on Redirect HTTP to HTTPS in the Termix admin settings. It only works while Termix serves HTTPS itself. The Docker image already redirects when `ENABLE_SSL` is on.
