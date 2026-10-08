---
title: Quick start
description: Make a plugin from the template and run it on your Termix server.
---

# Quick start

You need:

- Node.js 24
- A Termix server, 26.10 or newer, where you are an admin. A local one from Docker is fine.

## 1. Make your repo

Open the [plugin template](https://github.com/Termix-SSH/Termix-Plugin-Template) and press **Use this template**. Clone your new repo.

```bash
git clone https://github.com/you/termix-plugin-hello
cd termix-plugin-hello
npm install
```

## 2. Name it

In `manifest.json`, change:

| Field                          | To                                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------- |
| `id`                           | Your plugin's id. Lowercase letters, numbers and dashes, like `hello`. It can't change later. |
| `name`                         | What people see.                                                                              |
| `description`                  | One short sentence.                                                                           |
| `author`, `repository`, `docs` | You, your repo and your docs link.                                                            |

Then rename `hello-world` to your id in `locales/en.json`, in the permission names, and in the table index name in `src/backend/tables.ts`. Delete the `migrations/` folder and make it again for your id:

```bash
npm run migrations
```

## 3. Turn on developer mode

In Termix, open **Settings**, **General** and turn on **Plugin developer mode**. This lets admins install plugins that are not from the registry.

Then make an API key in **Settings**, **API keys**.

## 4. Run it

```bash
npx termix-plugin dev --server http://localhost:8080 --key tmx_your_key
```

This builds the plugin, installs it on your server and does it again every time you save a file. Open Termix and you'll see a new tab in the sidebar.

You can also set `TERMIX_SERVER_URL` and `TERMIX_API_KEY` instead of passing them each time.

## 5. Change something

Open `src/frontend/index.tsx` and change the tab. Save. The plugin rebuilds and reloads. Do the same with a route in `src/backend/routes.ts`.

## 6. Test it

```bash
npm test
npm run typecheck
npm run validate
```

`validate` checks the manifest, the migrations, the changelog and the docs. Fix what it reports before you release.

## Next

- [Project layout](/develop/project-layout) explains every file.
- [How it works](/develop/how-it-works) covers what your plugin is allowed to do.
- [Releasing](/develop/releasing) when you are ready to ship.
