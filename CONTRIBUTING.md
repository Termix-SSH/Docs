# Contributing to the docs

## Development

```bash
npm install
npm start          # dev server on http://localhost:3000
npm run build      # production build, fails on broken links
npm run check-links  # every docs link in the Termix app has a page (after build)
npm run typecheck
npm run format
```

## Where things are

| Path              | What it is                                                         |
| ----------------- | ------------------------------------------------------------------ |
| `docs/`           | Core pages: install, configure, guide, CLI.                        |
| `develop/`        | Building plugins. `develop/reference/` is partly made by the sync. |
| `plugins/`        | Made by the sync from each plugin repo. Don't edit.                |
| `api/`            | Made by `npm run gen-api` from `static/openapi/`. Don't edit.      |
| `src/data/`       | JSON made by the sync: plugins, env vars, releases, capabilities.  |
| `src/components/` | Page components, like the plugin catalog and download tables.      |
| `redirects.ts`    | Old URLs and where they go now.                                    |

## Plugin docs

A plugin's docs are in its own repo under `docs/`. Edit them there. The **Sync Docs** workflow pulls them in when a plugin is released, and once a day.

To see plugin docs you are writing before a release, clone the plugin repos into `../Termix-Plugins` and core into `../Termix`, build the SDK there (`npm run build:sdk`), then:

```bash
npm run preview:local
```

That pulls every local plugin's docs, builds the API pages and starts the dev server. Run it again after you change a plugin's docs.

## Writing

Short sentences, plain words, no em dashes. Name buttons and fields the way the app does, in bold. Tell people what to do.
