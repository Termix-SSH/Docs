---
title: How it works
description: Capabilities, permissions, the lifecycle and the trust model.
---

# How it works

## Where plugins run

A plugin runs in two places:

- Its **backend** runs inside the Termix server process.
- Its **frontend** runs in the browser, in the same page as the rest of Termix.

There is no sandbox. Every plugin, official or not, runs the same way.

## Capabilities: what your code may do

A capability is something your backend code is allowed to do, like `ssh:connect` (run commands on hosts) or `network:outbound` (make HTTP requests). List what you need in `capabilities` in the manifest.

- An admin sees the list, worst first, before installing your plugin.
- Every `ctx` method that needs a capability checks it. Calling one you didn't list throws `PluginCapabilityError`.
- Every privileged call, allowed or refused, writes an audit line with your plugin's id and the user it ran for.
- An update that adds a capability waits for an admin to approve it.

Ask for as little as you can. See [all capabilities](/develop/reference/capabilities).

## Permissions: what a user may do

A permission is something a user can do, like `docker.use`. You declare short names in `contributes.permissions`, and Termix registers them as `<your id>.<name>`. Admins give them to roles. See [permissions](/develop/permissions).

Capabilities and permissions are different things. A capability is about your code. A permission is about the person using it. They are spelled differently so you can't mix them up: `hosts:read` is a capability, `hosts.view` is a permission.

## The actor

Most backend calls run as a user, called the actor. In a route it is the signed-in user, set by Termix, never by you. `ctx.currentActor()` returns it.

For background work with no request, like a timer, use `ctx.asUser(userId, fn)`. It is always audited, and everything inside still applies that user's permissions.

## Lifecycle

1. Termix applies your migrations.
2. It calls `activate(ctx)` on the backend, in dependency order.
3. After sign in, the browser loads your frontend and calls `activate(app)`.
4. When an admin disables the plugin, or Termix stops, it calls `deactivate()` and removes everything you registered.

Rules that keep this working:

- **Create everything inside `activate`.** No servers, timers or connections at the top of a module. A disable and enable runs `activate` again on the same module.
- **Register cleanup.** Things made through `ctx` and `app` are cleaned up for you. Anything you make yourself goes in `ctx.disposables.add(fn)` or `app.onDispose(fn)`.
- **Never touch `process.exit` or signals.** Termix stops plugins in order on shutdown.
- **Enable, disable, enable must work** without a restart.

## When things go wrong

A plugin is in one of four states:

| State      | Means                                         |
| ---------- | --------------------------------------------- |
| `enabled`  | Running.                                      |
| `disabled` | Turned off by an admin.                       |
| `blocked`  | A plugin it needs is missing or off.          |
| `failed`   | `activate` threw, or it hit its error budget. |

Errors from your routes, sockets, event listeners and timers count against an error budget. Five inside a minute and Termix turns the plugin off, so a plugin that throws on every call can't drag the server down. An admin can press **Restart** to try again. A 4xx you send on purpose does not count.

## What Termix protects, and what it doesn't

The capability system means:

- What a plugin can do through `ctx` is listed before you install it.
- Calls it didn't ask for are refused.
- Every privileged call leaves an audit line.

It does not mean a plugin is contained. Your code runs in the server process. It could import `node:fs` and read anything the server can, or do anything else Node allows. Capabilities stop mistakes and make honest plugins easy to audit. What stops harmful plugins is signing, review and admins only installing code they trust.

Write your plugin as if the admin will read every capability and every line of the audit log. Many will.
