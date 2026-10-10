---
title: Testing
description: Test your plugin's backend and frontend.
---

# Testing

Plugins test with [Vitest](https://vitest.dev/). The SDK has a preset and test helpers that act like the real Termix.

```ts
// vitest.config.ts
import { pluginVitestConfig } from "@termix-ssh/plugin-sdk/vitest-preset";

export default pluginVitestConfig(import.meta.url);
```

Put backend tests in `tests/backend/` (they run in Node) and frontend tests in `tests/frontend/` (they run in jsdom). Run them with `npm test`.

## Backend

`createMockCtx()` gives you a `ctx` that checks capabilities the way Termix does. `createTestDb()` opens an in-memory SQLite database with your migrations applied, plus stub `users`, `ssh_data`, `roles` and `user_roles` tables.

```ts
import express, { type Router } from "express";
import { createMockCtx, createTestDb } from "@termix-ssh/plugin-sdk/testing";
import manifest from "../../manifest.json";
import { activate } from "../../src/backend/index.js";

const db = await createTestDb(pluginDir);
let router: Router | null = null;
const mock = createMockCtx({
  pluginId: manifest.id,
  manifest,
  capabilities: manifest.capabilities,
  db: db.database,
  router: () => (router = express.Router()),
  permissions: ["hello.use"],
});
await activate(mock.ctx);
mock.setActor("user-1");
```

`createMockCtx` takes:

| Option         | What it does                                                             |
| -------------- | ------------------------------------------------------------------------ |
| `capabilities` | What the plugin is granted. Calls outside it throw, like the real thing. |
| `db`           | A real database from `createTestDb`.                                     |
| `router`       | Make the router real, so you can serve and call routes.                  |
| `permissions`  | The actor's permissions. Leave it out to allow everything.               |
| `hosts`        | Hosts `ctx.hosts` returns.                                               |
| `services`     | Other plugins' services, for a plugin that uses them.                    |

It returns `setActor(userId)` and `services`, what your plugin provided. `createFakeContext()` is a looser double for tests that don't care about capabilities.

The template's `tests/backend/routes.test.ts` serves the routes with Express and calls them with `fetch`. Start from it.

## Frontend

`renderWithApp(plugin)` activates your frontend against Termix's real registries, records what it registered and renders any tab, panel, card or slot.

```tsx
import { renderWithApp } from "@termix-ssh/plugin-sdk/testing";
import * as plugin from "../../src/frontend/index.js";

const app = await renderWithApp(plugin, {
  api: { get: async () => ({ data: [] }) },
});
expect(app.registered.tabs()).toContain("hello");
```

Every official plugin has a `tests/frontend/activate.test.tsx` built on it.

## What to test

- Every route, including what happens without permission.
- That your plugin works when an optional dependency is missing.
- That disable and enable again works.
- Migrations: `createTestDb` applies them, so a broken one fails your tests.
