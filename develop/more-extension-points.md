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

A button runs its action when pressed. A `component` contribution draws whatever you give it, with the slot owner's props. A `data` contribution gives plain values that Termix draws (see Data slots below). `when` hides it when it doesn't apply.

Some slots you can fill:

| Slot                                                         | Where                                                                       |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `terminal.toolbar`, `terminal.sidePanel`, `terminal.overlay` | The SSH terminal.                                                           |
| `dashboard.counters`                                         | Dashboard cards.                                                            |
| `admin.userTabs`                                             | A tab on a user's page in admin settings.                                   |
| `hosts.importMenu`, `hosts.panel`                            | The hosts panel.                                                            |
| `credentials.rowActions`                                     | Buttons on key rows, run with `{ id, name }`.                               |
| `shell.overlay`                                              | Rendered once at the root of the app, for UI that is always mounted.        |
| `shell.rightEdge`                                            | The right edge of the window. Whatever width it takes pushes the page over. |
| `tab.menu`                                                   | A tab's menu.                                                               |

## Data slots

Small things drawn once per host, tab or credential are data, not components. A component from a plugin that runs in a frame costs one frame per row, so a dashboard with 20 hosts would load 20 frames. Return plain values instead, and Termix draws them the same way for every plugin. Needs plugin API 2.6.

```ts
app.registerSlotContribution("dashboard.hostRow", {
  actionId: "hello.row",
  titleKey: "row.title",
  kind: "data",
  useValue: (context, rowKey) => {
    const load = useLoad(Number(rowKey));
    return load
      ? { shape: "bars", items: [{ label: "Load", value: load / 100 }] }
      : null;
  },
});
```

`useValue` is a hook. It runs once for each row on screen, with the owner's context and the row key. In a frame it runs in your background frame and only the values cross. Return `null` to draw nothing.

| Shape   | Value                                              |
| ------- | -------------------------------------------------- |
| `bars`  | `items: [{ label, value (0 to 1), tone, detail }]` |
| `stat`  | `items: [{ label, value, unit, tone, tooltip }]`   |
| `badge` | `label, tone, tooltip, actionId`                   |
| `dot`   | `tone, label`                                      |
| `text`  | `text, tone, tooltip, actionId`                    |

Tones are `default`, `good`, `warn`, `bad` and `muted`. An `actionId` must be one of your own actions.

| Data slot                | Row key       | Context                                   |
| ------------------------ | ------------- | ----------------------------------------- |
| `dashboard.hostRow`      | Host id       | `hostId`, `host`, `online`                |
| `dashboard.hostRowBadge` | Host id       | `hostId`, `host`, `online`                |
| `homepage.hostMetrics`   | Host id       | `hostId`, `online`, `shownMetrics`        |
| `terminal.toolbarStatus` | Tab id        | `hostId`, `host`, `isConnected`, `active` |
| `credentials.badges`     | Credential id | `credentialId`                            |

Host badges, status indicators and host editor toolbar items take `useValue(host)` the same way. To own a data slot, declare it with `accepts: ["data"]` and draw it with `DataSlot` from `@termix-ssh/plugin-sdk/ui`. `termix-plugin validate` warns when a component goes into a data slot.

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

Declare an action in `contributes.keybindingActions`, register it with `app.registerKeybindingAction`, and give it a default with `app.registerKeybindingDefault`. Users rebind it in Settings, Keybindings.

## Command palette

`app.registerPaletteEntry` adds one entry. `app.registerPaletteGroup` adds a searchable group, loaded every time the palette opens.

## Dashboard cards

Declare the id in `contributes.dashboardCards` and register the component with `app.registerDashboardCard`.

The dashboard is a 12 column tile grid. `defaultSize: { w, h }` sets the width in columns and the height in px when someone adds the card. A card that can show many things, like one status out of many, can pass `entries(language)`: each entry is its own line in the add list with a title, a group and a `config`. The card gets that copy's `config` as a prop, can change it with `setConfig` and knows when the user is arranging the dashboard from `editMode`. Keep `config` small, it is saved in one line. Termix 26.11.1 and later.

```tsx
app.registerDashboardCard({
  id: "status",
  titleKey: "card.status",
  defaultSize: { w: 4 },
  entries: async () => [
    { key: "disk", title: "Disk space", config: { check: "disk" } },
    { key: "load", title: "Load", config: { check: "load" } },
  ],
  component: ({ config }) => <StatusTile check={String(config?.check)} />,
});
```

## Desktop app

`ctx.desktop.openIsolatedWindow` opens a URL in its own window in the desktop app, with its own cookies. `app.desktop.available` tells the frontend it runs in the desktop app. These need the `desktop:window` capability.
