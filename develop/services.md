---
title: Services
description: Let plugins call each other.
---

# Services

A service is how one plugin offers something to others, like Snippets offering `snippets.access` to Automations. Services are typed, versioned and checked per call against the caller's permissions.

## Offer one

Declare it in the manifest:

```json
"provides": [
  { "service": "hello.greetings", "version": "1.0.0", "permission": "hello.use" }
]
```

Then provide it in `activate`:

```ts
ctx.services.provide("hello.greetings", {
  async list() {
    const userId = ctx.currentActor();
    return listGreetings(userId);
  },
});
```

The service name needs a dot, and should start with your id. `permission` is checked for the calling user before every call, and the call runs as that user, so read them from `ctx.currentActor()`. Never take a user id from the caller.

Treat a service like a public API. Add methods in a minor version. Bump the major to remove or change one.

## Use one

```json
"requires": [{ "service": "hello.greetings", "versionRange": "^1.0.0", "optional": true }],
"optionalDependencies": { "hello": "^1.0.0" }
```

```ts
const greetings = ctx.services.get<GreetingsService>("hello.greetings");
if (greetings) {
  const list = await greetings.list();
}
```

`get` returns nothing while no compatible provider runs. Plugins come and go, so always handle that. If you can't work without it, list the plugin in `dependencies` and the requirement without `optional`. Termix then won't start you without it.

For background work, `ctx.services.get(name, { userId })` calls as another user. That is the same as `ctx.asUser` and is audited.

## Several providers

When several plugins provide the same service side by side, each one names itself. `sessions.live` is provided by the SSH terminal as `ssh` and by Remote Desktop as `rdp`, `vnc` and `telnet`. List the names in `provides[].names`, provide with `{ name }`, and reach one with `ctx.services.get(service, { provider })`.

## Events

For "something happened" rather than "do something", use events. Emit `plugin.<your id>.<name>` with `ctx.events.emit`. Anyone can listen with `ctx.events.on` without a capability.

## Frontend

The frontend has its own ways to work across plugins: actions, slots, components and extensions. See [more extension points](/develop/more-extension-points).

## Services you can use

Each plugin's reference page lists what it provides and uses. Some useful ones:

| Service             | From                                                                             | What it does                     |
| ------------------- | -------------------------------------------------------------------------------- | -------------------------------- |
| `snippets.access`   | [Snippets](/plugins/snippets)                                                    | Read and run saved snippets.     |
| `tunnels.access`    | [Tunnels](/plugins/tunnels)                                                      | Open a port forward.             |
| `docker.containers` | [Docker](/plugins/docker)                                                        | List containers and act on them. |
| `sessions.live`     | [SSH Terminal](/plugins/ssh-terminal), [Remote Desktop](/plugins/remote-desktop) | Live sessions.                   |
| `recordings.writer` | [Session Recording](/plugins/session-recording)                                  | Write a recording.               |
| `wake-on-lan.send`  | [Wake-on-LAN](/plugins/wake-on-lan)                                              | Wake a host.                     |
