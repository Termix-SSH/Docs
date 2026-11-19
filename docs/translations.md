# Translations

Termix, its plugins and the mobile app are written in English. Every other language is translated by AI on each release, so new text shows up in every language right away. The model runs on a self-hosted server, see [Self-Hosted AI on AWS](./self-hosted-ai.md).

## Adding or changing text

Only update the English `en.json` file (`src/ui/locales/en.json` in Termix, `locales/en.json` in a plugin, `src/i18n/locales/en.json` in the mobile app). New strings, and strings whose English changed, are translated into every other language at the next release. The mobile app also translates them as soon as `en.json` changes on its dev branch, and again before every build.

## Fixing a translation

If a translation is wrong, open a pull request that fixes it in that language's file (`src/ui/locales/translated/<language>.json` in Termix, `locales/translated/<language>.json` in a plugin, `src/i18n/locales/translated/<language>.json` in the mobile app). Your fix is kept until the English text for that string changes.

## Missing a language?

You can add it yourself:

1. Add a line for it to `translate/languages.json` in [Termix-Registry](https://github.com/Termix-SSH/Termix-Registry/tree/main/translate), like `{ "code": "is", "file": "is_IS", "name": "Icelandic", "label": "Íslenska" }`.
2. Add the same line to `languages.json` next to the `en.json` you want it in. In the mobile app, then run `node scripts/i18n-bundles.mjs`.
3. Open the pull requests. Once they are merged, the new language is translated automatically.

Or open an issue in the [Termix repo](https://github.com/Termix-SSH/Termix/issues) to ask for it.
