---
title: Frames
description: How a plugin API 2 frontend runs in sandboxed frames, and what that changes for you.
---

# Frames

From Termix 26.11.2, the frontend of a plugin made for plugin API 2 never runs in the app's page. Termix loads it into sandboxed frames. Each frame has its own origin, no login cookie and no way into the rest of the page or into other plugins. Your code stays the same: `activate(app)`, the SDK hooks and the UI kit work as before, with the same look, fonts and theme.

Official plugins that are the shell itself (a layout, a theme or a login method) still run in the page.

## How your plugin runs

- One hidden background frame runs `activate` and keeps what has no screen of its own: actions, command palette entries and groups, keybinding actions, rail badges, host dots, companion defaults and `shell.overlay` components.
- Every screen you register is its own frame that runs `activate` too: tabs, panels, dashboard cards, companions, homepage widgets, settings components, host editor sections and slot components.
- `app.frame.role` is `"background"` or `"view"`. Skip polling and timers in views.
- Each frame has its own module state. Code that opens a dialog from anywhere (a palette entry, a keybinding) should live in the background frame, next to the `shell.overlay` component that shows it.

## What crosses to Termix

What you register reaches Termix as data:

- Icons must come from `lucide-react`. Termix draws them by name.
- Functions become calls into your frame. A callback Termix reads while it draws (`when`, `label`, `items`, `visible`, `validate`) answers its default first and your answer a moment later. Keep these cheap.
- A companion's `getHandle()` gives a handle whose methods return promises. `sendInput` and `paste` need `terminal.sendToActive` or `terminal.sendToSession` in your manifest `uses`.
- A popover or menu can't leave its frame. Keep menus in tabs and panels, not in small slots.

Not available in a frame: host badges with a `component` (use `useDot`), host status indicators, host editor toolbar items, `useShell`, and other plugins' components through `usePluginComponent`, `useExtensions` or `useSlotContributions`.

## Network and data

- `app.api`, `app.fetch` and `app.wsUrl` reach only your own routes and sockets. Termix gives the frame a short token for that and renews it.
- The hooks and the UI kit read Termix through the shell, which allows a fixed list: the signed-in user, their permissions, hosts (with only your own host settings), credentials without secrets, your own settings, operations and recent activity. Saved passwords are not available.
- `invokeAction` runs your own actions and the action ids listed in your manifest `uses`.
- Opening links, downloads, the clipboard, toasts and confirms go through the shell. `localStorage` works and is kept per plugin.
- The frame can only load code from your plugin's own asset folder and can only talk to your own routes.

## Checking your plugin

`checkFrameApp` from `@termix-ssh/plugin-sdk/testing` (SDK 2.1.0) runs `activate` the way a frame does and lists anything that would not reach Termix:

```ts
import { checkFrameApp } from "@termix-ssh/plugin-sdk/testing";
import manifest from "../../manifest.json";
import * as plugin from "../../src/frontend";

it("runs in a frame", async () => {
  const { problems } = await checkFrameApp(plugin, { manifest });
  expect(problems).toEqual([]);
});
```
