---
title: Themes
description: Add color themes to Termix with a CSS file.
---

# Themes

A theme is one CSS file. No code runs. Themes need Termix 26.10.3 and `engine.api` `^1.4`.

## Declare it

```json
{
  "capabilities": ["ui:theme"],
  "contributes": {
    "themes": [
      {
        "id": "paper",
        "label": "theme.paper",
        "mode": "light",
        "css": "themes/paper.css",
        "swatch": {
          "background": "#ffffff",
          "panel": "#eef0f3",
          "text": "#1f2937"
        }
      }
    ]
  }
}
```

`ui:theme` is low risk. `mode` is `light` or `dark`. `swatch` is the colors the picker shows for the theme. `label` is a key in your `locales/en.json`.

## Write the CSS

The id becomes a class on `<html>`. Put your rules under that class:

```css
.paper {
  --background: #ffffff;
  --foreground: #1f2937;
  --card: #ffffff;
  --primary: #2563eb;
  --border: rgba(0, 0, 0, 0.12);
  --terminal-bg: #ffffff;
}
```

Set the same tokens the built in themes set: `--background`, `--foreground`, `--card`, `--popover`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--chart-1` to `--chart-5`, the `--sidebar` tokens, `--surface`, `--surface-dim`, `--warning` and `--terminal-bg`. The [Classic Themes](https://github.com/Termix-SSH/Plugin-Classic-Themes) repo has nine complete examples, and [Plugin-Example-Theme](https://github.com/Termix-SSH/Plugin-Example-Theme) is a small one to copy, with one light and one dark theme.

The rules are strict:

- Every selector starts with `.<id>`, `:root.<id>` or `html.<id>`.
- `@media` and `@supports` are fine. `@import` and other at-rules are not.
- `url()` may point inside your plugin or use `data:`, never to another host.
- No `expression()`, `javascript:` or script bindings, and no nested rules.

`termix-plugin validate` checks all of this, and the server checks it again before it serves the file.

## A plugin with only themes

If a plugin holds only themes, leave out `src/`. `termix-plugin build` writes an empty backend and `validate` does not ask for a frontend. Keep a test that runs `validateThemeCss()` on each file. Classic Themes is built this way.

## How Termix picks a theme

- A theme with the id `light` or `dark` replaces Termix's basic copy while the plugin runs. Termix always keeps that basic light and dark theme, so the app stays readable without any theme plugin.
- Themes show in the picker as Termix lists its own, then in the order your manifest gives.
- The accent color, interface font, font size and density are not part of a theme. Termix applies them on top.
- System follows the device between light and dark.
- A saved theme that no longer exists shows as System. It comes back when its plugin does.
- Only the stylesheet of the shown theme is loaded.

Users pick a theme in Settings, Appearance. See [Choose a look](/guide/looks).
