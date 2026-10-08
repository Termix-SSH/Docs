---
title: Writing docs
description: Docs and API docs for your plugin.
---

# Writing docs

Every plugin should tell people what it does and how to use it. Docs live in your plugin's repo, next to the code, so they change in the same pull request as the feature.

## The docs folder

```
docs/
  index.md        required. What it does, how to turn it on, first use
  setup.md        any more pages you want
  img/            images, linked as img/name.png
```

`docs/index.md` is the page people see first. Lead with what the plugin does in a sentence or two, then how to turn it on, then how to use it.

Extra pages take front matter:

```md
---
title: Setting up the API
order: 1
---
```

`order` sorts the pages. Lower comes first.

Pages are plain Markdown. No MDX, no components, no HTML scripts.

`termix-plugin validate` warns when `docs/index.md` is missing.

## What you don't write

The site adds these from your plugin for you, so don't repeat them by hand:

- The header: name, description, version, category, links.
- **Features**, from `features` in your manifest.
- A **Reference** page: settings at every scope, permissions, capabilities, environment variables, services and the plugins it works with. Labels come from your `locales/en.json`.
- An **API reference** from your `@openapi` comments.
- A **Changelog** page from `CHANGELOG.md`.

## Official plugins

Official plugins' docs are on this site at `docs.termix.site/plugins/<id>`. When a plugin is released, the docs site rebuilds with that release's docs, so the docs always match a version you can install. Older versions stay readable with the version picker.

## Community plugins

Community plugins host their own docs anywhere: a `docs/` folder on GitHub, a site, a wiki. Put the link in `docs` in your manifest:

```json
"docs": "https://github.com/you/termix-plugin-hello/tree/main/docs"
```

Termix shows it as **Documentation** on your plugin's page and as a book icon in its settings. It must be https.

## Link to your docs from the app

Link from the screen people are on to the page that explains it.

```tsx
import { DocsLink, PanelShell } from "@termix-ssh/plugin-sdk/ui";
import { useDocsUrl } from "@termix-ssh/plugin-sdk/frontend";

function HelloTab() {
  const docs = useDocsUrl();
  return (
    <PanelShell title="Hello" docs={docs}>
      <p>
        Need an API key? <DocsLink page="setup" anchor="api-key" />
      </p>
    </PanelShell>
  );
}
```

- `PanelShell`'s `docs` prop puts a book icon in the header.
- `DocsLink` is an inline link. `page` is a page of your docs, `anchor` a heading on it.
- `useDocsUrl(page, anchor)` and `app.docs.page(page, anchor)` give you the URL.
- `app.docs.open(page)` opens it.

They all build on the `docs` link in your manifest, and render nothing without one. Never hard code a docs URL.

## API docs

Put an `@openapi` block above every route:

```ts
/**
 * @openapi
 * /plugin-api/hello/notes:
 *   post:
 *     summary: Add a note for the signed-in user
 *     tags:
 *       - Hello
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note added
 *       400:
 *         description: Missing or empty text
 */
router.post("/notes", addNote);
```

Write the full path with your `/plugin-api/<id>/` prefix. `termix-plugin openapi` writes `dist/openapi.json` and `build` runs it too, so it ships in your `.tmxplug`. Open the file in any OpenAPI viewer to check it.

Sign in is described for you: every route takes a session cookie, a session token or an API key.

## Environment variables

List them in `env` in your manifest. They show up in your reference page and on the site's [environment variables](/configure/environment-variables) page. See [manifest](/develop/manifest#environment-variables).

## Style

Write like you talk to a friend who is good with computers.

- Short sentences. One idea each.
- Plain words. "Use", not "utilize".
- Tell people what to do, step by step.
- Name buttons and fields exactly as the UI does, in bold.
- No em dashes.
