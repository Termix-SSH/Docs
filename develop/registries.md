---
title: Registries
description: How plugins reach Termix, and hosting your own registry.
---

# Registries

A registry is an index of plugins: a JSON file listing each plugin, its versions, where to download them and their signatures. Termix reads it to fill the Browse and Updates lists in the Plugins tab.

Termix reads up to three kinds:

| Registry  | On by default | Signed with                               |
| --------- | ------------- | ----------------------------------------- |
| Official  | Always        | The official key, built into Termix       |
| Community | No            | The community key, built into Termix      |
| Custom    | No            | The registry's own key, pinned when added |

Admins turn them on and off in Plugins, Registries. See [managing plugins](/guide/plugins#registries).

Some rules hold for every registry:

- Every download is checked against the `sha256` and signature in the index before anything is installed.
- A plugin installed from a registry only ever updates from that same registry.
- Only the official registry can offer an official plugin id or the id of a plugin that ships with Termix. Other registries that list one are ignored for that plugin.
- Only an official signature can replace a plugin that ships with Termix.

## The official registry

[Termix-Registry](https://github.com/Termix-SSH/Termix-Registry) holds the official plugins. Its index is made by a script, never by hand:

1. A plugin's release workflow publishes a signed `.tmxplug` on GitHub.
2. The registry's sync job reads every release of every plugin it lists, checks the signature, and reads the manifest and changelog out of the file.
3. It writes `official/index.json` with every version, its capabilities, its notes and its docs link.

Set `TERMIX_PLUGIN_REGISTRY_URL` on a server to read the official list from somewhere else, for example a mirror. Downloads still have to be signed with the official key.

## The community registry

`community/index.json` in the same repo lists plugins made by anyone. Each version is pinned by its `sha256` in a submission file and reviewed by a person before it is listed. The registry then signs it with a separate community key. To get your plugin in, see [community registry](/develop/community-registry).

## Host your own registry

A custom registry is a JSON file on any https URL, for example a private list inside a company or a set of plugins you maintain yourself. An admin adds it by its URL. Termix shows the fingerprint of your signing key, the admin confirms it, and from then on every download from your registry must be signed with that key.

### 1. Make a signing key

```bash
npx termix-plugin keygen --out ./keys
```

It writes the private key to `keys/termix-plugin-signing.key` and prints the public key and its key id. The key id is the fingerprint admins see when they add your registry, so share it where people can check it, like your README.

Keep the private key secret, for example as a CI secret. Anyone with it can sign plugins your registry's users will trust. Delete the file once it is stored.

### 2. Build and sign each release

From the plugin's folder:

```bash
npm run build
npx termix-plugin pack
TERMIX_PLUGIN_SIGNING_KEY="$(cat ../keys/termix-plugin-signing.key)" npx termix-plugin sign my-plugin-1.0.0.tmxplug
```

`sign` writes `my-plugin-1.0.0.tmxplug.sig` and prints the `sha256` and `signature` you need for the index. Upload the `.tmxplug` somewhere with an https link, for example a GitHub release.

Check a file before you list it:

```bash
npx termix-plugin verify my-plugin-1.0.0.tmxplug --key <your public key>
```

### 3. Write the index

```json
{
  "$schema": "https://raw.githubusercontent.com/Termix-SSH/Termix-Registry/main/registry-index-schema.json",
  "registry": "acme",
  "name": "Acme Plugins",
  "apiVersion": 1,
  "publicKey": "<your public key>",
  "updatedAt": "2026-10-11T00:00:00.000Z",
  "plugins": [
    {
      "id": "acme-inventory",
      "name": "Acme Inventory",
      "description": "Shows Acme asset tags next to each host.",
      "author": "Acme IT",
      "category": "Productivity",
      "repository": "https://github.com/acme/termix-acme-inventory",
      "icon": "Tag",
      "versions": [
        {
          "version": "1.0.0",
          "api": "1",
          "url": "https://github.com/acme/termix-acme-inventory/releases/download/v1.0.0/acme-inventory-1.0.0.tmxplug",
          "sha256": "<from termix-plugin sign>",
          "signature": "<from termix-plugin sign>",
          "size": 81234,
          "capabilities": ["hosts:read", "kv:own"],
          "releaseNotesUrl": "https://github.com/acme/termix-acme-inventory/releases/tag/v1.0.0",
          "publishedAt": "2026-10-11T00:00:00.000Z"
        }
      ]
    }
  ]
}
```

| Field          | What it is                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `registry`     | A short id like `acme`. Termix uses it as the registry's id, with a number added if it is taken. |
| `name`         | What admins see in the Registries tab and on plugin badges.                                      |
| `publicKey`    | Your public key from `keygen`. Required: Termix will not add a registry without one.             |
| `plugins[].id` | Must match the `id` in the plugin's manifest. Official plugin ids are ignored.                   |
| `api`          | The plugin's `engine.api` major. Termix hides versions it can't run.                             |
| `size`         | The `.tmxplug` size in bytes.                                                                    |
| `capabilities` | Exactly the manifest's `capabilities`. A file that asks for different ones is refused.           |

The same file also takes `features`, `docs`, `video`, `notes` (the version's changelog section as Markdown) and `prereleases` for betas. The full format is in [`registry-index-schema.json`](https://github.com/Termix-SSH/Termix-Registry/blob/main/registry-index-schema.json).

Keep versions newest first. The `.tmxplug` must contain the same `id`, `version` and `capabilities` as its entry, or Termix refuses it after the download.

### 4. Host it

Put `index.json` on any https URL that serves it as plain JSON, like a raw file in a GitHub repo, GitHub Pages or your own web server. Termix caches it for 15 minutes and keeps using the last copy if your server is briefly down.

Then in Termix: Plugins, Registries, Add registry, paste the URL, Check, compare the key id with yours, and Trust and add.

### Changing your key

Termix never follows a key change on its own. If your index starts listing a different `publicKey`, Termix stops installing and updating from it and shows that the key changed. Admins remove the registry and add it again to trust the new key. Plugins already installed from it have to be uninstalled first, since the old key is what lets them load.

### A linked desktop

A desktop app linked to a server uses the server's plugins and also trusts the keys of the server's custom registries, so plugins from them load there too.
