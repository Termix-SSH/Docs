---
title: "Manifest fields"
sidebar_position: 1
description: "Every field manifest.json can have."
---
This page is made from `manifest.schema.json` in the plugin SDK. Point your editor at it to get the same checks while you type:

```json
{ "$schema": "./node_modules/@termix-ssh/plugin-sdk/schema/manifest.schema.json" }
```

## Top level

| Field | Required | Type | What it is |
| --- | --- | --- | --- |
| `id` | yes | string | Unique plugin id. Lowercase, starts with a letter, 2-40 characters. Must equal the plugin's directory name. |
| `name` | yes | string |  |
| `version` | yes | string | Semver version string. |
| `description` | yes | string |  |
| `author` | yes | object |  |
| `license` | yes | string |  |
| `repository` |  | string |  |
| `category` | yes | string |  |
| `icon` |  | string | A Lucide icon name, like "Play". |
| `video` |  | string | A YouTube link shown at the top of the plugin's page. |
| `features` |  | array | Short lines listing what the plugin does, shown on its page. |
| `docs` |  | string | Where the plugin's docs live. Shown as a Documentation link in Termix. |
| `env` |  | array | Environment variables the plugin reads, listed in its docs. |
| `engine` | yes | object |  |
| `capabilities` | yes | array | Catalog capability ids this plugin's code needs. See the SDK capability catalog. |
| `dependencies` |  | object | Plugin ids this plugin cannot run without, mapped to a semver range. |
| `optionalDependencies` |  | object | Plugin ids this plugin uses when present. It must keep working without them. |
| `provides` |  | array |  |
| `requires` |  | array |  |
| `providesSecret` |  | array |  |
| `requiresSecret` |  | array |  |
| `contributes` |  | object |  |
| `backend` |  | string | Built backend entry, relative to the plugin root. Defaults to dist/backend.js. |
| `frontend` |  | string | Built frontend entry, relative to the plugin root. Defaults to dist/frontend.js. |
| `locales` |  | string | Locales directory, relative to the plugin root. Defaults to locales. |
| `platforms` |  | array |  |
| `desktop` |  | string | How a desktop linked to a server treats this plugin: mirror follows the server, local is decided on each desktop, server never runs on a linked desktop. Defaults to mirror. |
| `nativeDependencies` |  | array | Bare npm package names this plugin depends on that carry a native (.node) binding. The build never bundles them: they stay a real dependency in the plugin's own package.json and are resolved from node_modules at runtime, the same as a host-provided package, so the compiled native binary is never copied into the JS bundle. |

## contributes

| Field | What it adds |
| --- | --- |
| `tabs` |  |
| `guest` |  |
| `protocols` | Connection protocols whose per-host login core stores, encrypts, shares and syncs for the plugin. |
| `keybindingActions` | Keybinding actions the plugin adds, with the parameters a saved binding carries. |
| `syncEntities` | Wire names of the sync entities this plugin registers. |
| `guestViews` |  |
| `auth` |  |
| `panels` |  |
| `dashboardCards` |  |
| `actions` |  |
| `actionSlots` |  |
| `permissions` | Role permissions this plugin contributes. Core registers each as <pluginId>.<name>. |
| `settings` | Settings fields core renders on the plugin's settings page and in the host editor. |
| `hostCapability` | A host-editor checkbox backed by a boolean column on the host record. Reshaped by a later step. |
| `http` | HTTP options for the plugin's /plugin-api/<id>/ router. |
| `uiPresets` | The plugin's Appearance defaults for each interface preset, read with usePluginUiPreferences. |
| `uses` | Other plugins' action, slot and extension point ids this plugin calls, fills or extends. |

## Categories

- Terminal
- Files & Transfer
- Infrastructure
- Monitoring
- Networking
- Access & Security
- Productivity
