---
title: First run
description: Make the admin account and pick your plugins.
---

# First run

Open Termix in your browser. On a new install you see a sign up page.

## 1. Make the admin account

The first account you make is the admin. Pick a strong password. You can add more users later, or let people sign up on their own.

## 2. Set up your workspace

Termix then walks you through a short setup. You can skip any step and change it later.

| Step                 | What it does                                                         |
| -------------------- | -------------------------------------------------------------------- |
| Choose your features | Pick which plugins to keep on, off or removed. Admins only.          |
| How much on screen   | Simple, Balanced or Advanced. It only changes how much the UI shows. |
| Make it yours        | Theme, accent color, font and language.                              |
| Secure your account  | Add a passkey or an authenticator app, if those plugins are on.      |

### Choosing plugins

Each plugin can be:

- **On.** It runs and you can use it.
- **Off.** It stays installed but does nothing. Turn it on any time.
- **Remove.** It is deleted from the server with its data. You can install it again from the Plugins tab.

The recommended set covers what most people want: the SSH terminal, the file manager, metrics and a few more. Read about each one in the [plugin list](/plugins).

Some plugins need others. Termix keeps those on and tells you why.

You can change all of this later in the **Plugins** tab. See [managing plugins](/guide/plugins).

## 3. Add a host

Open **Manage** from the sidebar and press **+**. Fill in the address, port, username and how to sign in. See [hosts](/guide/hosts).

Then click the host in the sidebar to connect.

## Before you open it to the internet

- Serve it over HTTPS. Use a [reverse proxy](/configure/reverse-proxy) or Termix's own [HTTPS](/configure/https).
- Decide if people can sign up. Turn off **Allow User Registration** in **Settings**, **General** if you will make accounts yourself.
- Think about a second factor. Turn on the [TOTP](/plugins/totp) or [Passkeys](/plugins/webauthn) plugin.
