---
title: "Passkeys"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/webauthn"
description: "Sign in with a passkey or security key instead of a password."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-WebAuthn/edit/main/docs/index.md"
plugin_id: "webauthn"
plugin_version: "1.2.0"
plugin_latest: true
---
Passkeys lets you sign in to Termix with a passkey or a security key instead of a password: Face ID, Touch ID, Windows Hello, a YubiKey, or a passkey synced by your password manager. Passkeys can't be phished, since they only work on the site they were made for.

## Add a passkey

1. Install the plugin from the Plugins tab.
2. Open Settings, Security and press Add Passkey.
3. Give it a name, like `MacBook` or `YubiKey`, and follow your browser's prompt.

The list next to the name sets whether the passkey checks your PIN, fingerprint or face: Required, Preferred (the default) or Discouraged.

You can add as many as you like. Synced passkeys are marked synced. Remove one with Delete passkey.

## Sign in

Press Sign in with passkey on the sign in page and pick your passkey. No username or password needed.

An account that only signs in through SSO or LDAP can't use a passkey to sign in on its own, so disabling the user at the identity provider always locks them out. Accounts that also have a password are not affected.

An admin can turn off Passkey sign in in Settings, Passkeys. The button then leaves the sign in page and passkeys no
longer sign anyone in on their own, which is useful when your identity provider already asks for a passkey. Security
keys as the step after a password keep working.

## As a second factor

A passkey that checks your PIN, fingerprint or face counts as a second factor on its own. If you use [TOTP](/plugins/totp) too, signing in with a passkey like that doesn't ask for a code.

You can also use a security key or passkey as the step after your password. Open Settings, Security and press Turn on under Security key. With no key yet, the same button adds one first. After that, every password login asks you to touch your key. Turning it on signs you out on your other devices.

Deleting your last key turns the step off. Signing in with a passkey still works either way.

## Things to know

- Passkeys are tied to the address you use for Termix, like `termix.example.com`. If you change the address, add your passkeys again.
- Browsers only allow passkeys over HTTPS, or on `localhost`. See [HTTPS](/configure/https).
- Lost every passkey? Sign in with your password, or ask an admin to reset your second factors in Settings, Users.
