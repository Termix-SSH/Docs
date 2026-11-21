---
title: "Classic Themes"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/classic-themes"
description: "Light, dark, high contrast, color blind and seven more color themes for Termix."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Classic-Themes/edit/main/docs/index.md"
plugin_id: "classic-themes"
plugin_version: "1.2.0"
plugin_latest: true
---
Classic Themes holds the color themes that ship with Termix: light, dark, High Contrast, Color Blind, Dracula, Catppuccin, Nord, Solarized, Tokyo Night, One Dark and Gruvbox. It is always installed.

## Pick a theme

Open Settings, Appearance and pick a theme, or pick System to follow your device between light and dark. Admins can set the default theme for everyone. Your own choice always wins over the default.

## Accessible themes

High Contrast Dark and High Contrast Light use pure black and white, bright borders and a clear outline around whatever has keyboard focus.

Color Blind Dark and Color Blind Light are made for red and green color blindness. Anything that is normally green, like an online host, shows as blue. Anything that is normally red, like an offline host or a delete button, shows as orange. Warnings are yellow so they stand apart from errors by brightness.

## If it is missing

Termix keeps a basic light and dark theme of its own, so the app stays readable without this plugin. A theme you picked that no longer exists falls back to System.

## For plugin authors

Each theme is one CSS file in `themes/`, scoped under the theme's class, for example `.nord`. This plugin is a small example of a theme only plugin: no backend, no frontend code, just `manifest.json` and CSS. See the guide on writing a theme for the rules.
