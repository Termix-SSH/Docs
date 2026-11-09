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

- Square: Panels, cards and buttons have no rounded corners.
- Flat: Borders, not shadows.
- Small type: Most text is 11 to 13px. Section headers are 10 to 11px uppercase with wide letter spacing.
- One accent: Orange (`text-accent-brand`) for the thing that matters. Don't add colors.
- No new modal dialogs: Open things inside the panel or tab with `InlineView`, ask with `useConfirm()`, and use `PanePrompt` for small prompts.
- Tiles: Page content sits edge to edge on the page background, with one line between sections and no gaps, padding or card fill around them.

## Panels and tabs

| Component                                            | Use it for                                                                                                                   |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `PanelShell`                                         | The frame of every tab and panel: header with icon, title, status and actions, then a body. Pass `docs` to show a docs link. |
| `PanelSearch`, `TabStrip`, `Segmented`, `ViewToggle` | Header tools.                                                                                                                |
| `BackButton`                                         | Going back inside a tab.                                                                                                     |
| `InlineView`                                         | A view that opens inside the current panel or tab, in place of a dialog.                                                     |
| `EmptyState`                                         | Nothing to show yet.                                                                                                         |
| `NoticePanel`                                        | Why a view is not ready and what to do, like Not installed with an Install button.                                           |
| `LoadingState`                                       | Waiting on the first load.                                                                                                   |
| `SideNav`                                            | The left list of sections on a page with many of them.                                                                       |
| `RefreshButton`, `PanelFrame`                        | The header refresh button and the outer box of a tab.                                                                        |
| `Facts`, `GroupHeading`                              | Small fact rows and section headings.                                                                                        |

Build a tab like this: `PanelFrame` around `PanelShell`, page views in the `tabs` band as a `TabStrip`, and `Segmented` only for filters and view modes. The body has no padding. Forms keep `PANEL.body` padding inside their section.

## Tile look

| Component                   | Use it for                                                                                   |
| --------------------------- | -------------------------------------------------------------------------------------------- |
| `TileStack`                 | Sections in a column with a line under each.                                                 |
| `TileColumn`                | The same when the cards sit deeper than direct children, like a settings page.               |
| `TileWall`                  | A fixed grid of tiles with shared lines, for stat strips and card lists. `DataView` uses it. |
| `TileFrame`                 | A titled tile.                                                                               |
| `StatTile`                  | One number with an optional usage bar and hint.                                              |
| `InlineView` with `stacked` | A form made of `SectionCard`s, laid out like a settings page.                                |

`Card`, `SectionCard` and `MetricCard` drop their own box inside these. The last line shows only when the tiles stop short of the bottom of the screen, the same rule `TileGrid` uses.

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

`StatusBadge` and `StatusDot` take a state like "running" and pick the color. `InfoGrid` lays out label and value pairs, `DataTable` is a plain table, and `Pager` with `usePaged` goes under long lists.

## Tile pages

`TileGrid` is the grid the dashboard, the host page and Host Metrics use: 12 columns, tiles you drag and resize while `editMode` is on, and one column on narrow screens. Slots are `{ id, x, y, w, h }`, with `x` and `w` in columns and `h` a fixed height in px or null for the tile's own height. Wrap each tile in `TileFrame` for the shared look, show `TileEditBar` over the grid and `TilePicker` beside it while editing so people can search, filter and add tiles. Save the slots where your plugin keeps preferences, run saved ones through `sanitizeTiles` and add new ones with `appendTile`. Needs Termix 26.11.1, so raise `engine.termix` when you use them.

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
