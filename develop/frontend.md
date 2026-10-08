---
title: Frontend
description: The app object and the hooks your frontend uses.
---

# Frontend

Your frontend exports `activate(app)`. Termix loads it after sign in and calls it with `app`, which is how you add things to the UI.

```tsx
import type { TabProps, TermixApp } from "@termix-ssh/plugin-sdk/frontend";
import { useTranslation } from "@termix-ssh/plugin-sdk/frontend";
import { PanelShell } from "@termix-ssh/plugin-sdk/ui";
import { Hand } from "lucide-react";

function HelloTab(_props: TabProps) {
  const { t } = useTranslation();
  return (
    <PanelShell icon={<Hand className="size-4" />} title={t("tab.title")}>
      <p className="p-4">{t("tab.empty")}</p>
    </PanelShell>
  );
}

export function activate(app: TermixApp) {
  app.registerRailItem({
    id: "hello",
    icon: Hand,
    titleKey: "tab.title",
    kind: "tab",
  });
  app.registerTab("hello", HelloTab, {
    icon: Hand,
    titleKey: "tab.title",
    singleton: true,
    hostless: true,
  });
}
```

Every `register*` call returns a function that undoes it, and everything is undone when the plugin is disabled. Every component you register runs inside your plugin's scope, an error boundary and Suspense, so a crash stays in your box.

## What app has

| Member                                                                   | What it does                                                                                                                |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `registerRailItem`                                                       | A button in the sidebar rail.                                                                                               |
| `registerTab`, `registerPanel`                                           | A tab type or a sidebar panel. The id must be in `contributes.tabs` or `contributes.panels`.                                |
| `registerDashboardCard`                                                  | A dashboard card, declared in `contributes.dashboardCards`.                                                                 |
| `registerHostAction`                                                     | An action on a host: a button, a palette entry, the default connect.                                                        |
| `registerHostEditorSection`                                              | Your own section in the host editor. Most plugins don't need it, since host [settings](/develop/settings) get one for free. |
| `registerHostProtocol`                                                   | A connection protocol next to SSH.                                                                                          |
| `registerHostBadge`, `registerHostContextMenuItem`                       | Badges and menu items on host rows.                                                                                         |
| `registerPaletteEntry`, `registerPaletteGroup`                           | Command palette entries.                                                                                                    |
| `registerKeybindingAction`, `registerKeybindingDefault`                  | Things keys can be bound to.                                                                                                |
| `registerSettingsComponent`                                              | A component for a `custom` settings field.                                                                                  |
| `registerAction`, `invokeAction`                                         | Call and answer actions across plugins.                                                                                     |
| `registerSlotContribution`, `declareActionSlot`                          | Fill slots other plugins own, or own one. See [more extension points](/develop/more-extension-points).                      |
| `registerComponent`                                                      | Offer a component other plugins render by id.                                                                               |
| `registerExtension`                                                      | Add an item to a named list another plugin reads.                                                                           |
| `registerOnboardingStep`                                                 | A step in first-run setup.                                                                                                  |
| `registerLoginMethod`, `registerSecondFactorUI`, `registerSshAuthEditor` | Sign in UI. See [auth](/develop/auth).                                                                                      |
| `api`                                                                    | An axios client for your `/plugin-api/<id>/` routes, with auth.                                                             |
| `fetch(path)`                                                            | A raw fetch to your routes, for streamed responses.                                                                         |
| `wsUrl(path)`                                                            | The URL and auth for one of your sockets.                                                                                   |
| `docs`                                                                   | Links into your own docs. See [writing docs](/develop/docs#link-to-your-docs-from-the-app).                                 |
| `tabs`                                                                   | Open, close and read tabs.                                                                                                  |
| `confirm`                                                                | Ask a yes or no question.                                                                                                   |
| `listHosts`, `getHost`                                                   | Hosts the user can see.                                                                                                     |
| `t`, `hasPermission`                                                     | Strings and permission checks outside a component.                                                                          |
| `desktop`                                                                | Whether you run in the desktop app, and the server it is linked to.                                                         |
| `onSettingsChanged`, `onDispose`                                         | Hooks.                                                                                                                      |

## Hooks

Inside your components, from `@termix-ssh/plugin-sdk/frontend`:

| Hook                                                       | What it gives you                                |
| ---------------------------------------------------------- | ------------------------------------------------ |
| `useTranslation()`                                         | `t` for your own strings.                        |
| `usePermission("use")`                                     | Whether the user has `<your id>.use`.            |
| `useSettings("user")`                                      | Your settings and a `save`.                      |
| `useHost(id)`, `useHosts()`                                | Hosts, with only your own host settings on them. |
| `usePluginApi()`                                           | The same client as `app.api`.                    |
| `useCurrentUser()`, `useTheme()`, `useToast()`             | The user, the theme and toasts.                  |
| `useDocsUrl(page)`                                         | A link to a page of your docs.                   |
| `useTabs()`, `useSlotContributions()`, `useSshAuthTypes()` | Tabs, slot contents and SSH auth types.          |

## Styling

Build your UI from [the UI kit](/develop/ui) so it looks like the rest of Termix and follows the theme. Tailwind classes work: `termix-plugin build` compiles the ones you use against Termix's theme into `dist/frontend.css`.

## Shared packages

These come from Termix, so you never ship a second copy: `react`, `react-dom`, `i18next`, `react-i18next`, `sonner`, `@termix-ssh/plugin-sdk/frontend` and `@termix-ssh/plugin-sdk/ui`. Anything else, like `lucide-react`, is bundled into your plugin.

## Hosts in the browser

A host your code receives carries only your own plugin's host settings, under `host.pluginSettings[<your id>]`. To read another plugin's setting, ask that plugin through an action or a service.
