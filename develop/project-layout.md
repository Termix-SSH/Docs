---
title: Project layout
description: What every file in a plugin is for.
---

# Project layout

```
manifest.json            what the plugin is, adds and may do
package.json             npm scripts and dependencies
CHANGELOG.md             release notes, one section per version
README.md                the repo front page
docs/
  index.md               the plugin's docs page
src/
  backend/
    index.ts             activate(ctx), run in the Termix server
    tables.ts            table definitions
    routes.ts            HTTP routes
  frontend/
    index.tsx            activate(app), run in the browser
locales/
  en.json                every string the plugin shows
migrations/
  sqlite/ postgres/ mysql/
  snapshot.json          what the last migration knew about
tests/
  backend/  frontend/
vitest.config.ts
```

## manifest.json

The plugin's contract with Termix. Termix reads it without running any plugin code, so it can show what a plugin does before anyone installs it. See [manifest](/develop/manifest).

## src/backend/index.ts

Exports `activate(ctx)` and, if you need it, `deactivate()`. `ctx` is everything your backend can use. See [backend](/develop/backend).

A plugin without a backend can leave it out, but most have one.

## src/frontend/index.tsx

Exports `activate(app)`. `app` is how you add things to the UI. See [frontend](/develop/frontend).

## locales/en.json

Every string the plugin shows, in English. Keys are looked up in the plugin's own namespace, so `tab.title` in your manifest means `tab.title` in this file. See [translations](/develop/i18n).

## migrations/

SQL for SQLite, PostgreSQL and MySQL, made by `npm run migrations` from `src/backend/tables.ts`. Never edit one that has shipped. See [database](/develop/database).

## docs/

Your docs. `docs/index.md` is the page people see first. See [writing docs](/develop/docs).

## dist/

What `npm run build` makes. The release packs it into a `.tmxplug`.

## npm scripts

| Script               | What it runs                                             |
| -------------------- | -------------------------------------------------------- |
| `npm run build`      | `termix-plugin build`, bundles into `dist/`.             |
| `npm test`           | `termix-plugin test`, runs your tests.                   |
| `npm run typecheck`  | `tsc`, type checks.                                      |
| `npm run validate`   | `termix-plugin validate`, checks the manifest and files. |
| `npm run migrations` | `termix-plugin migrations`, writes migrations.           |
| `npm run pack`       | `termix-plugin pack`, writes the `.tmxplug`.             |

See the [CLI reference](/develop/reference/cli) for every command.
