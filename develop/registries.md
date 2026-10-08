---
title: Registries
description: How plugins reach Termix, and sharing your own.
---

# Registries

A registry is an index of plugins: a JSON file listing each plugin, its versions, where to download them and their signatures. Termix reads it to fill the **Browse** and **Updates** lists in the Plugins tab.

## The official registry

[Termix-Registry](https://github.com/Termix-SSH/Termix-Registry) holds the official plugins. Its index is made by a script, never by hand:

1. A plugin's release workflow publishes a signed `.tmxplug` on GitHub.
2. The registry's sync job reads every release of every plugin it lists, checks the signature, and reads the manifest and changelog out of the file.
3. It writes `official/index.json` with every version, its capabilities, its notes and its docs link.

Termix verifies every download against the signature and keys built into Termix before installing it.

A version in the index looks like this:

```json
{
  "version": "1.0.0",
  "api": "1",
  "url": "https://github.com/Termix-SSH/Plugin-Docker/releases/download/v1.0.0/docker-1.0.0.tmxplug",
  "sha256": "...",
  "signature": "...",
  "size": 778442,
  "capabilities": ["ssh:connect", "credentials:use"],
  "releaseNotesUrl": "https://github.com/Termix-SSH/Plugin-Docker/releases/tag/v1.0.0",
  "publishedAt": "2026-10-06T02:39:15.587Z"
}
```

The full format is in [`registry-index-schema.json`](https://github.com/Termix-SSH/Termix-Registry/blob/main/registry-index-schema.json).

## Community plugins

Right now the Plugins tab installs from the official registry only. Support for more registries is coming.

Until then, share your plugin as a `.tmxplug` on your GitHub releases. People install it from **Plugins**, **Install from file**, with developer mode on. It shows as unverified.

To make that easy for people:

- Put clear install steps and your capabilities in your README.
- Link your docs from the `docs` field in your manifest.
- Sign your releases and publish your public key.
- Keep a changelog.

## Pointing Termix at another registry

Set `TERMIX_PLUGIN_REGISTRY_URL` on a server to read a different index, for example a private one inside a company. Downloads still have to be signed by a key Termix trusts.
