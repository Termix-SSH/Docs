---
title: Mobile app
description: How a plugin shows in the Termix mobile app.
---

# Mobile app

The Termix mobile app (2.0.0 and later) reads each linked server's plugin list and decides, per plugin, what to show. A plugin can:

- Open in a web view: your normal frontend, or a bundle made for phones, runs inside the app.
- Have native screens: the app has its own screens for it. Only official plugins can do this, since the screens ship in the app.
- Show nothing: the plugin still runs on the server, and the app lists it as not in the app.

Official plugins are mapped by the app itself, so they leave `contributes.mobile` out. Your plugin opts in with the manifest.

## Declare it

```json
"contributes": {
  "mobile": { "mode": "webview", "views": ["hello"], "sizes": ["phone", "tablet"] }
},
"engine": { "termix": ">=26.10.6", "api": "^1.13" }
```

Termix 26.10.5 and older refuse a manifest with `mobile`, so the engine ranges above are required. The fields are in the [manifest guide](/develop/manifest#mobile-app).

## Web view plugins

- Only your plugin loads, with the same `app` object, SDK hooks and `/ui` kit as the web app. The shell is not there (`useShell()` is null), and neither are other plugins' views, extensions or components.
- A tab with `host-context-menu` in `openFrom` opens from a host's menu as a session tab. Other views are listed on Home under From your server and in Settings, Plugins.
- `views` picks which tabs and panels the app offers. `sizes` hides the plugin on phones or tablets when it does not fit.
- `entry` points to a bundle made for the app, like `dist/mobile.js`. `termix-plugin build` makes it from `src/mobile/index.tsx`, and it shares `frontend.css`. Leave it out and your frontend runs in a phone sized frame.
- Every request and socket goes through the app, which adds the login, proxy headers and client certificate. The app only lets through your own `/plugin-api`, `/plugin-ws` and `/plugin-assets` routes, your settings and a short list of core reads (hosts, folders, permissions, current user, version, health, activity). Other core routes answer 403, so call your own backend.
- Images load straight from the server, without proxy headers or a client certificate.
- Nothing in `localStorage` survives closing the view. Keep preferences in settings.
- The view follows the app's theme. Use the theme tokens, not fixed colors.

## Versions

The app bundles its own copy of the SDK, and each app version understands one plugin API version. Settings, Plugins shows it next to your `engine.api`.

- When the app's API is too old for your `engine.api`, the app says to update the app instead of opening your view.
- When your range is for an older API major, the app says to update the plugin.
- A `/ui` name newer than the app's copy also shows the update the app message.

So ask only for the API you use. A plugin that needs `^1.13` opens on every app that has API 1.13 or newer in the 1.x line.

Termix sends `engine` in its plugin list from 26.10.6. On older servers the app cannot check, and opens the view.

## Host settings

The app's host editor also shows your `contributes.settings.host` fields when the app has no screen of its own for your plugin. It draws `boolean`, `string`, `number`, `select`, `secret` and `textarea` fields, honors `enableKey`, `requires`, `min`, `max` and `hidden`, and says to use the web app for the rest. Labels come from your `locales/en.json`, so keep every `labelKey` there. Saving sends only the fields that changed, through the same host settings route the web app uses.

## Turning a plugin on or off

There is no push from the server. The app reloads the plugin list when it comes back to the front, when the user pulls down the plugin list, and when any request answers 503 with your `pluginId` (core does that for a plugin that is off). A tab of a plugin that was turned off says so and comes back when the plugin is on again.

## Try it

1. Add `contributes.mobile` and the engine ranges, build and install the plugin on a server.
2. Link that server in the app and open Settings, Plugins. Your plugin shows under On this server with Web view.
3. Tap it to see its API range and the app's, and Open it.
