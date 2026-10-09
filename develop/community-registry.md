---
title: Community registry
description: Submit your plugin so it is listed for everyone.
---

# Community registry

The community registry lists plugins made by anyone. A person reviews every version before it is listed. It lives in [Termix-Registry](https://github.com/Termix-SSH/Termix-Registry) next to the official plugins, in `community/`.

Termix can't install community plugins yet. That comes in a later update. Submissions are open now so the community registry already has plugins when it ships. Until then, people can install your plugin from a `.tmxplug` file with [developer mode](/develop/quick-start) on.

## Before you submit

- Your plugin is in a public GitHub repo with an open source license.
- It was made from the [plugin template](https://github.com/Termix-SSH/Termix-Plugin-Template), or uses the same `.github/workflows/release.yml`.
- `npm test`, `npm run typecheck`, `npm run validate` and `npm run build` pass.
- The `id` in `manifest.json` is not used by an official plugin or another submission.
- `manifest.json` has a clear `name`, `description` and `author`, `repository` set to your repo, and a `docs` link or a README that explains how to use it. See [docs](/develop/docs).

## Release it

Run the Release workflow in your repo, as in [releasing](/develop/releasing). No secrets are needed. For plugins outside the Termix team, the workflow:

- publishes the `.tmxplug` as a GitHub release, without a signature
- records GitHub build provenance for it, which proves the file was built by the release workflow from your repo
- shows the version and `sha256` to submit in the run's summary

## Submit it

Fork [Termix-Registry](https://github.com/Termix-SSH/Termix-Registry) and add `community/plugins/<id>.json`:

```json
{
  "$schema": "../../community-submission-schema.json",
  "id": "my-plugin",
  "repository": "https://github.com/you/termix-plugin-my-plugin",
  "maintainers": ["you"],
  "versions": [{ "version": "1.0.0", "sha256": "<from the run summary>" }]
}
```

| Field         | What it is                                                                |
| ------------- | ------------------------------------------------------------------------- |
| `id`          | The id from your manifest. The file is named `<id>.json`.                 |
| `repository`  | The GitHub repo the plugin is released from.                              |
| `maintainers` | GitHub usernames allowed to send updates. You must be one of them.        |
| `versions`    | The versions to list, newest first. Each one is the `v<version>` release. |

Open a pull request. The Check submission job downloads your release and checks that:

- the file has the `sha256` you gave
- the manifest in it has your id, version and repo
- it has build provenance from the Termix release workflow
- you are one of the maintainers

It writes a summary with links to your source at the tag, what changed since your last listed version, and your plugin's capabilities. Then a maintainer reviews the source and merges it. The registry signs the reviewed file with the community key and lists it in `community/index.json` a few minutes later.

## Updates

Every version is reviewed. Release the new version, then open a PR that adds it to the top of `versions`. Only a maintainer listed in the file can do that. Betas (`X.Y.Z-beta.N`) can be submitted the same way.

A listed version can't be swapped for another file. If you overwrite a release after it was reviewed, it drops out of the registry until you submit a new version.

## What reviewers check

- The source at the release tag does what the name and description say, and nothing else.
- No obfuscated or minified source, and no code downloaded and run at runtime.
- No network calls, tracking or telemetry the user did not ask for. Anything like that is off by default and explained in the docs.
- Capabilities and permissions are the fewest the plugin needs. See [capabilities](/develop/reference/capabilities).
- `package.json` scripts and dependencies don't fetch or run anything unexpected during install or build.
- Secrets and credentials are only used for what the plugin is for.
- The name and icon don't pretend to be an official plugin.

A plugin can be removed if it breaks these rules later, stops working, or its repo goes away. To remove your own, open a PR that deletes its file.
