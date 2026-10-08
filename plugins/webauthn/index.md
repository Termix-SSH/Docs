---
title: "Passkeys"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/webauthn"
description: "Sign in with a passkey or security key instead of a password."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-WebAuthn/edit/main/docs/index.md"
plugin_id: "webauthn"
plugin_version: "1.0.0"
plugin_latest: true
---
Passkeys lets you sign in to Termix with a passkey or a security key instead of a password: Face ID, Touch ID, Windows Hello, a YubiKey, or a passkey synced by your password manager. Passkeys can't be phished, since they only work on the site they were made for.

## Add a passkey

1. Install the plugin from the **Plugins** tab.
2. Open **Settings**, **Security** and press **Add Passkey**.
3. Give it a name, like `MacBook` or `YubiKey`, and follow your browser's prompt.

You can add as many as you like. Synced passkeys are marked **synced**. Remove one with **Delete passkey**.

## Sign in

Press **Sign in with passkey** on the sign in page and pick your passkey. No username or password needed.

## As a second factor

A passkey that checks your PIN, fingerprint or face counts as a second factor on its own. If you use [TOTP](/plugins/totp) too, signing in with a passkey like that doesn't ask for a code.

## Things to know

- Passkeys are tied to the address you use for Termix, like `termix.example.com`. If you change the address, add your passkeys again.
- Browsers only allow passkeys over HTTPS, or on `localhost`. See [HTTPS](/configure/https).
- Lost every passkey? Sign in with your password, or ask an admin to reset your second factors in **Settings**, **Users**.
