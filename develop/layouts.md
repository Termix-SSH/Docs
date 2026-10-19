---
title: Layouts
description: Replace the whole Termix interface with a plugin.
---

# Layouts

A layout draws the whole app: the rail, the sidebar, the tab bar and the screens around the tabs. Termix has no layout of its own. The one people use by default is the bundled [Classic Layout](/plugins/classic-layout) plugin, and you can write another.

Layouts need Termix 26.10.3 and `engine.api` `^1.4`.

## Declare it

```json
{
  "capabilities": ["ui:layout"],
  "contributes": {
    "layouts": [
      {
        "id": "my-layout",
        "label": "layout.name",
        "description": "layout.description",
        "defaultTheme": "dark"
      }
    ]
  }
}
```

`ui:layout` is high risk, because a layout draws every screen. Admins see that when they install it. `defaultTheme` is the theme people get with this layout when nobody picked one.

## Register it

```tsx
import { useShell, type TermixApp } from "@termix-ssh/plugin-sdk/frontend";
import {
  ShellConfirmCapture,
  SurfaceScope,
  TabStage,
} from "@termix-ssh/plugin-sdk/ui";

function MyLayout() {
  const shell = useShell();
  if (!shell) return null;
  return (
    <div className="flex h-dvh w-screen flex-col bg-background">
      <header>{/* tabs, palette button, your own chrome */}</header>
      <SurfaceScope kind="tab">
        <ShellConfirmCapture />
        <TabStage />
      </SurfaceScope>
    </div>
  );
}

export function activate(app: TermixApp) {
  app.registerLayout({
    id: "my-layout",
    label: "layout.name",
    component: MyLayout,
  });
}
```

Pass `mobileComponent` for phones and narrow windows. The desktop app always uses `component`.

## What Termix keeps

Your layout only draws. Termix keeps the state, so switching layouts never closes a session.

- `useShell()` gives the live shell: tabs, splits, hosts, the docks, the command palette and the user. The registries (tab types, panels, rail items, palette entries, keybindings, actions, slots and dashboard cards) are there as hooks.
- `TabStage` is where tabs show. Place it anywhere. Tabs are never remounted when it moves, so a terminal keeps its connection.
- Providers for the theme, branding, preferences, server status and surfaces wrap your layout. An error boundary does too.
- Your layout draws the command palette. Termix keeps whether it is open (`shell.palette.isOpen`, and Ctrl+K calls `shell.palette.open()`) and what goes in it: hosts, rail items and the entries plugins register with `usePaletteEntries`.
- Overlays and onboarding stay in Termix.

## Settings, Manage and the rest

Screens like Settings, Manage and the Dashboard belong to the layout. Register them as tab types in your layout plugin. Classic Layout does this and also offers its host list and Dashboard as components other plugins can place. Only the chosen layout is loaded, so another layout cannot use Classic Layout's tab types or components.

- Termix always keeps a home tab with the id `dashboard`. `useShell()` leaves it out until a plugin registers a `dashboard` tab type, so a layout without a home screen has no empty tab to show.
- When someone switches layouts, Termix closes the tabs the old layout plugin declared, since nothing can draw them anymore.
- A layout without a settings screen should still show `LookSettings` from `@termix-ssh/plugin-sdk/ui`, so people can switch back. `shell.tabs.openSingleton("plugins")` opens the Plugins tab, which works in every layout.

## When it breaks

If a layout fails to load or crashes twice, Termix opens the [repair screen](/develop/repair-view) instead of a blank page. A fix to a layout is a plugin release, not a Termix release.

For a small example to copy, read [Plugin-Example-Topbar-Layout](https://github.com/Termix-SSH/Plugin-Example-Topbar-Layout): a top bar with search and a host menu, tabs under it and a phone version, built only on `useShell()`, `TabStage` and `@termix-ssh/plugin-sdk/ui`.

For a full example, read [Plugin-Classic-Layout](https://github.com/Termix-SSH/Plugin-Classic-Layout). It reads the shell with `useShellController()`, which exposes more than `useShell()` and can change with Termix. Start from `useShell()` in your own layout.
