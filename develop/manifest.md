---
title: Manifest
description: Write manifest.json.
---

# Manifest

`manifest.json` describes your plugin. Termix reads it before running any of your code, so everything that decides whether the plugin can load, what it may do and where its UI shows up is in here.

Unknown fields are refused, at every level. A typo fails validation instead of being quietly ignored.

```json
{
  "id": "hello",
  "name": "Hello",
  "version": "1.0.0",
  "description": "Says hello and keeps a few notes.",
  "author": { "name": "You", "url": "https://example.com" },
  "license": "Apache-2.0",
  "repository": "https://github.com/you/termix-plugin-hello",
  "docs": "https://github.com/you/termix-plugin-hello/tree/main/docs",
  "category": "Productivity",
  "icon": "Hand",
  "features": ["A tab from the sidebar", "Notes per user"],
  "engine": { "termix": ">=26.10.0", "api": "^1.2" },
  "capabilities": ["db:own", "network:serve", "ui:surface"],
  "env": [],
  "contributes": {
    "tabs": [
      {
        "id": "hello",
        "titleKey": "tab.title",
        "icon": "Hand",
        "openFrom": ["rail"]
      }
    ],
    "permissions": [
      {
        "name": "use",
        "titleKey": "permissions.use.title",
        "descriptionKey": "permissions.use.description",
        "defaultRoles": ["admin", "user"]
      }
    ]
  },
  "locales": "locales",
  "platforms": ["linux", "win32", "darwin"]
}
```

## The main fields

| Field                  | What it is                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                   | Lowercase, starts with a letter, 2 to 40 characters. It names your tables, routes and permissions, so it never changes.                                      |
| `version`              | Semver. Must match `package.json` and the newest `CHANGELOG.md` section.                                                                                     |
| `category`             | One of the [categories](/develop/reference/manifest#categories).                                                                                             |
| `icon`                 | A [Lucide](https://lucide.dev/icons/) icon name, like `Hand`.                                                                                                |
| `features`             | Up to 20 short lines, shown on the plugin's page in Termix and on this site.                                                                                 |
| `docs`                 | An https link to your docs. Termix shows it on the plugin's page and in its settings.                                                                        |
| `env`                  | Environment variables your plugin reads. See below.                                                                                                          |
| `engine.termix`        | The Termix versions you work with.                                                                                                                           |
| `engine.api`           | The plugin API versions you work with, a semver range. This build of Termix has API **1.2**.                                                                 |
| `capabilities`         | What your code may do. See [how it works](/develop/how-it-works#capabilities-what-your-code-may-do).                                                         |
| `dependencies`         | Plugins you can't work without: `{ "snippets": "^1.0.0" }`.                                                                                                  |
| `optionalDependencies` | Plugins you use when they are there. You must keep working without them.                                                                                     |
| `provides`, `requires` | [Services](/develop/services) you offer and use.                                                                                                             |
| `contributes`          | Everything you add to Termix.                                                                                                                                |
| `desktop`              | How a linked desktop app treats you: `mirror` (follow the server, the default), `local` (each desktop decides) or `server` (never runs on a linked desktop). |
| `platforms`            | Server operating systems you run on.                                                                                                                         |

## contributes

| Field                    | What it adds                                                                 |
| ------------------------ | ---------------------------------------------------------------------------- |
| `tabs`, `panels`         | Tab types and sidebar panels. Your frontend registers the components.        |
| `dashboardCards`         | Dashboard cards.                                                             |
| `actions`, `actionSlots` | Frontend actions, and slots other plugins can fill.                          |
| `permissions`            | [Permissions](/develop/permissions).                                         |
| `settings`               | [Settings](/develop/settings) at admin, user and host scope.                 |
| `protocols`              | Connection protocols next to SSH, like RDP.                                  |
| `auth`                   | Login methods, second factors and SSH auth types. See [auth](/develop/auth). |
| `syncEntities`           | Tables that sync to a linked desktop.                                        |
| `keybindingActions`      | Things keys can be bound to.                                                 |
| `http`                   | Redirects from old URLs.                                                     |
| `guest`, `guestViews`    | Views that work without signing in, like a shared session.                   |
| `uiPresets`              | What your UI shows in the Simple, Balanced and Advanced presets.             |

Every field is listed in the [manifest reference](/develop/reference/manifest), made from the schema.

## Environment variables

List every environment variable your backend reads. They show up in your docs, on this site's [environment variables](/configure/environment-variables) page and on your plugin's page in Termix.

```json
"env": [
  {
    "name": "HELLO_API_URL",
    "description": "Where to send greetings.",
    "default": "https://api.example.com",
    "required": false
  },
  { "name": "HELLO_TOKEN", "description": "Token for the API.", "secret": true }
]
```

`termix-plugin validate` warns when your code reads `process.env.X` and `X` is not listed.

Prefer [settings](/develop/settings) over environment variables. Settings can be changed in the app, saved per user or host, and secrets are encrypted. Use an environment variable only for something that has to be set before Termix starts.

## Editor help

Point your editor at the schema for checks while you type:

```json
{
  "$schema": "./node_modules/@termix-ssh/plugin-sdk/schema/manifest.schema.json"
}
```
