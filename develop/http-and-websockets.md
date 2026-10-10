---
title: HTTP and WebSockets
description: Serve routes and sockets from your plugin.
---

# HTTP and WebSockets

Your routes live under `/plugin-api/<your id>/` and your sockets under `/plugin-ws/<your id>/`. They are served by the main Termix server, behind its auth. You never need a port of your own or an nginx change.

Both need the `network:serve` capability.

## Routes

```ts
const router = ctx.http.router();

router.get("/items", async (req, res) => {
  const userId = ctx.currentActor();
  res.json(await listItems(userId));
});
```

`ctx.http.router()` gives you an Express router. Before your handler runs, Termix:

1. Checks the user is signed in.
2. Sets the actor to that user.
3. Answers 503 if your plugin is disabled.
4. Parses the body, up to 2 MB by default.
5. Catches errors, logs them against your plugin and never sends the stack.

Never take a user id from the request body. Use `ctx.currentActor()`.

### Options

```ts
ctx.http.router({
  public: ["/webhook/:token"],
  bodyLimit: "20mb",
  rawBody: false,
});
```

| Option      | What it does                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public`    | Paths that work without signing in. Each one is audited and listed for admins. `:param` matches one segment. A trailing `/*` opens everything below it. |
| `bodyLimit` | A bigger body limit.                                                                                                                                    |
| `rawBody`   | Turn off body parsing, for routes that parse their own (uploads, signature checks).                                                                     |

A public route has no actor. Check its own token yourself and rate limit it.

`ctx.http.baseUrl(req)` gives the public address Termix is reached at, for callback URLs.

## Call them from the frontend

```ts
const { data } = await app.api.get("/items");
await app.api.post("/items", { name: "new" });
```

`app.api` adds auth and your prefix.

## Document them

Put an `@openapi` block above each route. It is how your routes get into the [API reference](/api) on this site.

```ts
/**
 * @openapi
 * /plugin-api/hello/items:
 *   get:
 *     summary: List the signed-in user's items
 *     tags:
 *       - Hello
 *     responses:
 *       200:
 *         description: The items
 */
router.get("/items", handler);
```

Write the full path, starting with `/plugin-api/<your id>/`. `termix-plugin build` turns these into `dist/openapi.json`. See [writing docs](/develop/docs#api-docs).

## WebSockets

```ts
ctx.ws.route("/live", (socket, conn) => {
  socket.on("message", (data) => {
    if (!conn.isDataUnlocked()) return socket.close();
    socket.send(data);
  });
});
```

The socket is at `/plugin-ws/<your id>/live`, with the same auth as HTTP. On the frontend, `app.wsUrl("/live")` gives you the URL and the auth to open it.

A long-lived socket should check `conn.isDataUnlocked()` per message, so an expired session stops being served. Every socket is closed when your plugin is disabled.

`ctx.ws.upgrade(path, handler)` hands over the raw upgrade, for a library that has to own its own WebSocket server.

## Old URLs

If something outside Termix calls a URL you can't change, list it in `contributes.http.legacyRedirects` as `{ "from": "/old/path", "to": "/new" }`. Termix redirects it to your router.
