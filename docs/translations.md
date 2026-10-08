# Translations

Termix and its plugins are written in English. Every other language is translated automatically.

## Adding or changing text

Only update the English `en.json` file (`src/ui/locales/en.json` in Termix, `locales/en.json` in a plugin). Any string that doesn't have a translation yet is translated into every other language for you.

## Fixing a translation

If an automatic translation is wrong, open a pull request that fixes it in that language's file (`src/ui/locales/translated/<language>.json` in Termix, `locales/translated/<language>.json` in a plugin). Strings that already have a translation are never overwritten, so your fix stays.
