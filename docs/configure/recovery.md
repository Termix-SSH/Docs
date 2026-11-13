---
title: Recovery
description: Get back in when an admin is locked out, and what to do when an admin account is taken over.
---

# Recovery

These steps need a shell on the server Termix runs on. That is on purpose: nobody can use them from a browser, an API key or a plugin.

## The recovery tool

`termix-recover` asks the running Termix server to do a few things without anyone signing in. In Docker:

```bash
docker exec termix termix-recover list-admins
docker exec termix termix-recover reset-second-factor <username>
docker exec termix termix-recover revoke-sessions <username>
docker exec termix termix-recover revoke-sessions --all
```

Use your container's name if it is not `termix`. Without Docker, run `npm run recover -- <command>` in the Termix folder as the same user Termix runs as.

| Command                      | What it does                                                            |
| ---------------------------- | ----------------------------------------------------------------------- |
| `list-admins`                | Lists the usernames of every admin.                                     |
| `reset-second-factor <user>` | Removes every second factor of that user and signs them out everywhere. |
| `revoke-sessions <user>`     | Signs that user out everywhere.                                         |
| `revoke-sessions --all`      | Signs everyone out.                                                     |

Termix must be running. The tool hands the request over through a folder in the data directory and waits up to 30 seconds for the answer. Each action is written to the audit log as `server console`, and every admin gets an alert.

## An admin lost their second factor

1. Run `termix-recover reset-second-factor <username>`.
2. The admin signs in with their password and sets up a new second factor.

If Login Security requires a second factor, they are asked to set one up right after signing in.

## An admin forgot their password

Another admin can reset it in Settings, Users. If there is no other admin and password reset is allowed, use Forgot password on the sign in page. The reset code is written to the server log.

## An admin account was taken over

1. Run `termix-recover revoke-sessions --all` to sign everyone out, including the attacker.
2. Run `termix-recover reset-second-factor <username>` for the taken account, then reset its password.
3. In Settings, API keys, revoke every key you don't recognize. In Settings, Users, remove admins you didn't add.
4. Read the [audit log](/guide/audit-log) from the time it started. Run the audit log check from [Audit Tools](/plugins/audit-tools) and compare a head you saved before, so you know the log itself wasn't changed.
5. Check the Plugins tab for plugins, access or registries you didn't add.
6. Rotate the JWT secret and, if the server itself may have been reached, the encryption keys. See [rotate keys](/configure/security#rotate-keys).

## Make a takeover harder

- Keep more than one admin, and turn on the [admin wait](/configure/security#admin-wait). A new admin, turning off password login or a plugin with dangerous access then waits, and the other admins can cancel it.
- Set up an [alert channel](/plugins/alerts) for every admin, so the security alerts reach you outside Termix.
- Download the audit log head now and then with [Audit Tools](/plugins/audit-tools) and keep it somewhere else.
