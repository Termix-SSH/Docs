---
title: Backend
description: The ctx object your backend gets.
---

# Backend

Your backend exports `activate(ctx)`. Termix calls it when the plugin starts and hands it `ctx`, which is everything your backend can use.

```ts
import type { PluginContext } from "@termix-ssh/plugin-sdk/backend";

export async function activate(ctx: PluginContext) {
  ctx.log.info("hello is starting");

  const router = ctx.http.router();
  router.get("/ping", (_req, res) => res.json({ ok: true }));
}

export async function deactivate() {
  // Optional. Anything made through ctx is cleaned up for you.
}
```

`src/backend/index.ts` is bundled to `dist/backend.js` as ESM for Node 22 and up.

## What ctx has

The types in `@termix-ssh/plugin-sdk/backend` are the full reference. This is the map.

| Member                 | Capability                       | What it does                                                                 |
| ---------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| `pluginId`, `manifest` | none                             | Your id and manifest.                                                        |
| `log`                  | none                             | Lines in Termix's log, tagged with your plugin.                              |
| `db`                   | `db:own`                         | Your own tables. See [database](/develop/database).                          |
| `kv`                   | `kv:own`                         | Small key value state.                                                       |
| `files.dataDir()`      | `files:own`                      | A folder of your own under the data folder.                                  |
| `settings`             | none                             | Your settings. See [settings](/develop/settings).                            |
| `secrets`              | `secrets:own`                    | Encrypted values per user, or sealed values for your own tables.             |
| `http`, `ws`           | `network:serve`                  | Routes and sockets. See [HTTP and WebSockets](/develop/http-and-websockets). |
| `rbac`                 | none                             | Check the actor's permissions. See [permissions](/develop/permissions).      |
| `hosts`                | `hosts:read`, `hosts:write`      | List, read, create, update and share hosts as the actor.                     |
| `ssh`                  | `ssh:connect`, `credentials:use` | Connect to hosts through Termix's own SSH pipeline.                          |
| `credentials`          | varies                           | The actor's saved SSH keys, and protocol logins.                             |
| `services`             | per service                      | Call other plugins and offer your own. See [services](/develop/services).    |
| `events`               | `events:core` for core topics    | Emit and listen for events.                                                  |
| `notify`               | `notify:send`                    | Send alerts to the [Alerts](/plugins/alerts) inbox.                          |
| `fetch`                | `network:outbound`               | Outbound HTTP, with SSRF protection.                                         |
| `process`              | `process:spawn`                  | Run programs on the server.                                                  |
| `schedule`             | none                             | Timers that stop on disable and never overlap.                               |
| `audit.record`         | none                             | Write your own audit line.                                                   |
| `sync`                 | none                             | Sync your tables to a linked desktop.                                        |
| `auth`                 | `auth:provide`                   | Login methods, second factors, SSH auth types. See [auth](/develop/auth).    |
| `system`               | `system:tls`                     | The server's HTTPS certificate.                                              |
| `plugins.list()`       | `plugins:read`                   | Which plugins are installed.                                                 |
| `asUser(userId, fn)`   | always audited                   | Run background work as a user.                                               |
| `currentActor()`       | none                             | The user the current call runs for.                                          |
| `disposables.add(fn)`  | none                             | Extra cleanup on disable.                                                    |

## Connecting to hosts

Never open your own SSH connection. Use `ctx.ssh`, so jump hosts, proxies, port knocking, host key checks, every auth type and sharing all work the way the user set them up.

```ts
const { client, dispose } = await ctx.ssh.connect(hostId, {
  purpose: "hello",
  profile: "background",
});
try {
  // use the ssh2 client
} finally {
  dispose();
}
```

`withConnection(hostId, { pool, purpose }, fn)` borrows a pooled connection, which is better for frequent short commands. `@termix-ssh/plugin-sdk/host-commands` has helpers to detect the OS and run package manager and sudo commands over a client.

Hosts you get from `ctx.hosts` never carry passwords or keys. Only a plugin with `credentials:read` sees them, and most don't need to: pass the host or its id back to `ctx.ssh` and Termix connects with the real secrets.

## Events

```ts
ctx.events.on("host.deleted", ({ hostId }) => cleanUp(hostId));
ctx.events.emit("plugin.hello.greeted", { name });
```

Your own events are `plugin.<id>.<name>`. Listening to other plugins' events needs nothing. Core events, like `user.deleted` and host changes, need `events:core`.

## Timers

```ts
ctx.schedule.every(60_000, () => refresh(), { jitterMs: 5_000 });
```

They stop when the plugin is disabled, and a run that is still going skips the next tick.

## Outbound HTTP

```ts
const res = await ctx.fetch("https://api.example.com/v1/thing", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(payload),
});
```

`ctx.fetch` refuses private and loopback addresses unless you list the exact host in `allowPrivateHosts`. It doesn't follow redirects.

## Dependencies

You can use any npm package. It is bundled into `dist/backend.js`. A few come from Termix instead and are never bundled, so you share one copy:

`@termix-ssh/plugin-sdk`, `express`, `ssh2`, `ws`, `multer`, `cookie-parser`, `axios`, `jszip`, `guacamole-lite`, `@anthropic-ai/sdk`, `drizzle-orm`, `sharp`, and every Node builtin.

Packages with native `.node` bindings can't be bundled. List them in `nativeDependencies`. A community plugin can't rely on them being on the server yet, so avoid them if you can.
