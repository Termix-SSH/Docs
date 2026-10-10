---
title: Releasing
description: Version, package and sign your plugin.
---

# Releasing

A release is a `.tmxplug` file: a gzipped tar of your manifest, `dist/`, locales, migrations, README, changelog and icon. It is built the same on any machine, so the same commit always gives the same file and the same hash.

## Versions

Plugins use [semver](https://semver.org/). The version in `manifest.json`, `package.json` and the newest `CHANGELOG.md` section must match. `termix-plugin validate` checks it.

Betas are `X.Y.Z-beta.N`. Termix only offers them to people who put your plugin on the beta channel.

## The changelog

`CHANGELOG.md` holds every release, newest first:

```md
# Changelog

## 1.1.0

### Added

- A wave button in the terminal toolbar

### Fixed

- Notes keep their order after a restart
```

Sections are `### Added`, `### Changed`, `### Fixed`, `### Removed`, `### Deprecated` and `### Security`. No `## Unreleased`: write notes under the version they ship in. Termix shows these notes on your plugin's page and before an update.

## Build and pack by hand

```bash
npm run build
npm run validate
npm run pack
```

This writes `<id>-<version>.tmxplug`. Install it on a server with developer mode on, from **Plugins**, **Install from file**.

## Sign it

```bash
npx termix-plugin keygen
TERMIX_PLUGIN_SIGNING_KEY=termix-plugin-signing.key npx termix-plugin sign hello-1.1.0.tmxplug
```

`keygen` writes a private key and prints the public key. Keep the private key secret and out of git. `sign` writes `hello-1.1.0.tmxplug.sig`. `termix-plugin verify` checks one.

Termix only trusts signatures from keys built into it. Your own signature proves to your users the file came from you, but Termix still treats your plugin as unverified. You don't need to sign a plugin you submit to the [community registry](/develop/community-registry). The registry signs it after review.

## The release workflow

The template has a **Release** workflow that does all of this on GitHub. It calls a shared workflow in [Termix-Registry](https://github.com/Termix-SSH/Termix-Registry), so fixes reach every plugin at once.

Work happens on a `dev-X.Y.Z` branch named after the version it will ship as. Run **Release** by hand from that branch:

| Choice        | What it does                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------ |
| **stable**    | Tests, builds and publishes `X.Y.Z` as a GitHub release, merges the branch into `main` and deletes it. |
| **beta**      | Publishes `X.Y.Z-beta.N`. N counts up on its own.                                                      |
| **overwrite** | Releases the manifest version again from this commit, replacing its files.                             |
| **dry-run**   | Builds and packs without publishing.                                                                   |

The release notes come from your changelog. No secrets are needed: the workflow records GitHub build provenance for the file instead of signing it. To also sign it with your own key, set `TERMIX_PLUGIN_SIGNING_KEY` as a repo secret. If a dev branch changes files in `.github/workflows`, add a `TERMIX_PAT` secret (a token with `repo` and `workflow` scopes) so the release can push it to `main`.

## After you release

Official plugins are picked up by the registry within the hour, and their docs on this site rebuild from the release. For your own plugin, the run's summary shows what to put in a [community registry](/develop/community-registry) submission.
