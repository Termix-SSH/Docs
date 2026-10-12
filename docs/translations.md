# Translations

Termix and its plugins are written in English. Every other language is translated by AI on each release, so new text shows up in every language right away.

## Adding or changing text

Only update the English `en.json` file (`src/ui/locales/en.json` in Termix, `locales/en.json` in a plugin). New strings, and strings whose English changed, are translated into every other language at the next release.

## Fixing a translation

If a translation is wrong, open a pull request that fixes it in that language's file (`src/ui/locales/translated/<language>.json` in Termix, `locales/translated/<language>.json` in a plugin). Your fix is kept until the English text for that string changes.

## Missing a language?

Open an issue in the [Termix repo](https://github.com/Termix-SSH/Termix/issues) to ask for it.
