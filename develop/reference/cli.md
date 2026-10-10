---
title: termix-plugin CLI
sidebar_position: 3
description: Every command of the termix-plugin CLI.
---

# termix-plugin CLI

The plugin SDK ships a CLI called `termix-plugin`. Run it from your plugin's folder, through `npx` or the npm scripts.

| Command                        | What it does                                                                                                                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `build`                        | Bundles `src/backend/index.ts` to `dist/backend.js` and `src/frontend/index.tsx` to `dist/frontend.js`, builds your CSS, copies locales and migrations, and writes `dist/openapi.json`. |
| `validate`                     | Checks the manifest, the files it names, migrations for every database, the changelog and `package.json`. Warns about missing docs and unlisted env vars.                               |
| `test`                         | Runs your Vitest suite.                                                                                                                                                                 |
| `migrations`                   | Compares `src/backend/tables.ts` with `migrations/snapshot.json` and writes a migration per database. `--check` fails when a table changed without one.                                 |
| `openapi`                      | Writes `dist/openapi.json` from the `@openapi` comments in `src/backend`.                                                                                                               |
| `pack`                         | Validates, then writes `<id>-<version>.tmxplug`. `--out <dir>` picks the folder.                                                                                                        |
| `sign <file>`                  | Signs a `.tmxplug` with the key in `TERMIX_PLUGIN_SIGNING_KEY`.                                                                                                                         |
| `verify <file> --key <base64>` | Checks a `.tmxplug` against its `.sig`.                                                                                                                                                 |
| `keygen`                       | Writes a new signing key pair. `--out <dir>` picks the folder.                                                                                                                          |
| `changelog`                    | Prints one version's notes from `CHANGELOG.md`. `--version x.y.z` picks it.                                                                                                             |
| `patch`                        | Applies the plugin's dependency patches. `build` does this too.                                                                                                                         |
| `dev`                          | Builds, packs and installs on a running server, then again on every change.                                                                                                             |

## dev

```bash
npx termix-plugin dev --server http://localhost:8080 --key tmx_your_key
```

| Option     | What it does                                    |
| ---------- | ----------------------------------------------- |
| `--server` | Your Termix server. Or set `TERMIX_SERVER_URL`. |
| `--key`    | An admin API key. Or set `TERMIX_API_KEY`.      |
| `--once`   | Install once and stop.                          |

The server needs developer mode on. The plugin installs as unverified. You can't use the id of a plugin that ships with Termix, and you have to uninstall a registry copy of the same plugin first.
