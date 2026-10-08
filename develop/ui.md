---
title: UI kit
description: Termix's own components, for your plugin's UI.
---

# UI kit

`@termix-ssh/plugin-sdk/ui` gives you the same components Termix is built from. Use them and your plugin looks like the rest of the app, follows the theme and keeps up when the design changes.

```tsx
import {
  PanelShell,
  ListRow,
  AddButton,
  Button,
} from "@termix-ssh/plugin-sdk/ui";
```

The list of exports is fixed and checked in Termix's CI. Anything listed here is public API. The full list with every prop type is in [`ui.api.txt`](https://github.com/Termix-SSH/Termix/blob/main/packages/plugin-sdk/ui.api.txt).

## Design rules

- **Square.** Panels, cards and buttons have no rounded corners.
- **Flat.** Borders, not shadows.
- **Small type.** Most text is 11 to 13px. Section headers are 10 to 11px uppercase with wide letter spacing.
- **One accent.** Orange (`text-accent-brand`) for the thing that matters. Don't add colors.
- **No new modal dialogs.** Open things inside the panel or tab with `InlineView`, ask with `useConfirm()`, and use `PanePrompt` for small prompts.

## Panels and tabs

| Component                                            | Use it for                                                                                                                   |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `PanelShell`                                         | The frame of every tab and panel: header with icon, title, status and actions, then a body. Pass `docs` to show a docs link. |
| `PanelSearch`, `TabStrip`, `Segmented`, `ViewToggle` | Header tools.                                                                                                                |
| `BackButton`                                         | Going back inside a tab.                                                                                                     |
| `InlineView`                                         | A view that opens inside the current panel or tab, in place of a dialog.                                                     |
| `EmptyState`                                         | Nothing to show yet.                                                                                                         |
| `Facts`, `GroupHeading`                              | Small fact rows and section headings.                                                                                        |

## Lists

| Component                    | Use it for                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------- |
| `PanelList`, `ListRow`       | A list of things, with a tone stripe, title, meta text and actions on hover. |
| `ListRowFolder`              | A folder header in a list.                                                   |
| `ListRowAction`, `ListBadge` | Row buttons and small badges.                                                |
| `AddButton`                  | The one way to add a new item.                                               |
| `FormFooter`                 | Delete, Cancel and Save under a form.                                        |

## Forms

`TextField`, `TextAreaField`, `NumberField`, `SelectField`, `SwitchRow`, `SecretField`, `PasswordInput`, `TagInput`, `Repeater`, `SettingRow`, `SectionCard`, plus the plain `Input`, `Textarea`, `Select`, `Switch`, `Checkbox`, `Slider` and `Label`.

## Data

`DataView`, `MetricCard`, `Meter`, `MiniStat`, `StatRow`, `Sparkline`, `LineChart`, `BarSeries`, `RadialGauge`, and the dashboard grid pieces `GridLayout` and `CardMasonry`.

## Connections

`ConnectionGate` handles the whole connect flow for a host session: progress, host key checks, TOTP, passphrases, browser sign in and errors. Use it instead of building your own.

## Docs links

`DocsLink` links to your own docs:

```tsx
<DocsLink page="setup" />
<DocsLink page="setup" anchor="ports">How ports work</DocsLink>
<DocsLink page="" variant="icon" />
```

It uses the `docs` link in your manifest and renders nothing if you don't have one.

## Other plugins' UI

`PluginComponent` renders a component another plugin registered by id. `ComponentSlot` and `ActionSlot` render whatever plugins put in a slot. See [more extension points](/develop/more-extension-points).
