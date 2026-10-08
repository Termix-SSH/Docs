---
title: More extension points
description: Actions, slots, components, extensions, onboarding and more.
---

# More extension points

## Actions

An action is a function one plugin answers and anyone can call.

```ts
app.registerAction("hello.greet", async (name: string) => `Hello ${name}`);

const text = await app.invokeAction("hello.greet", "Ada");
```

With no plugin answering, `invokeAction` returns `undefined`. Termix itself calls a few actions by name, like `host.openFiles`, and whichever plugin registers it answers.

## Slots

A slot is a place in the UI another plugin draws into. The owner declares it with `app.declareActionSlot` (and lists it in `contributes.actionSlots`). Others fill it:

```ts
app.registerAction("hello.wave", (context) => wave(context));

app.registerSlotContribution("terminal.toolbar", {
  actionId: "hello.wave",
  titleKey: "toolbar.wave",
  icon: Hand,
  kind: "button",
});
```

A button runs its action when pressed. A `component` contribution draws whatever you give it, with the slot owner's props. `when` hides it when it doesn't apply.

Some slots you can fill:

| Slot                                                                                   | Where                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `terminal.toolbar`, `terminal.toolbarStatus`, `terminal.sidePanel`, `terminal.overlay` | The SSH terminal.                                                    |
| `dashboard.counters`, `dashboard.hostMetrics`                                          | Dashboard cards.                                                     |
| `admin.userTabs`                                                                       | A tab on a user's page in admin settings.                            |
| `hosts.importMenu`, `hosts.panel`                                                      | The hosts panel.                                                     |
| `credentials.badges`                                                                   | Credential rows.                                                     |
| `shell.overlay`                                                                        | Rendered once at the root of the app, for UI that is always mounted. |
| `tab.menu`                                                                             | A tab's menu.                                                        |

## Components

Offer a component by id and others render it with `PluginComponent`:

```tsx
app.registerComponent("hello.badge", HelloBadge);

<PluginComponent id="hello.badge" name="Ada" />;
```

Start the id with your own plugin id. The props are your contract, so document them.

## Extensions

An extension point is a named list one plugin reads and others add to. The [Homepage](/plugins/homepage) plugin reads `homepage.widgets`:

```ts
app.registerExtension("homepage.widgets", {
  id: "hello.widget",
  titleKey: "widget.title",
  component: HelloWidget,
});
```

## Onboarding steps

`app.registerOnboardingStep` adds a step to first-run setup. New users see it in their setup. People who already finished see only your step the next time they open Termix. Give it a `version` and bump it when the step changes enough to show again.

## Keybindings

Declare an action in `contributes.keybindingActions`, register it with `app.registerKeybindingAction`, and give it a default with `app.registerKeybindingDefault`. Users rebind it in **Settings**, **Keybindings**.

## Command palette

`app.registerPaletteEntry` adds one entry. `app.registerPaletteGroup` adds a searchable group, loaded every time the palette opens.

## Dashboard cards

Declare the id in `contributes.dashboardCards` and register the component with `app.registerDashboardCard`.

## Desktop app

`ctx.desktop.openIsolatedWindow` opens a URL in its own window in the desktop app, with its own cookies. `app.desktop.available` tells the frontend it runs in the desktop app. These need the `desktop:window` capability.
