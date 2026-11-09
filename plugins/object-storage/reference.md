---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/object-storage/reference"
custom_edit_url: null
plugin_id: "object-storage"
plugin_version: "1.0.0"
plugin_latest: true
---
## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `object-storage.view` | admin, user | Open the Buckets tab, browse objects and download them. |
| `object-storage.edit` | admin | Upload, copy, move, rename and delete objects and make temporary links. |
| `object-storage.manage` | admin | Add storage logins, create and delete buckets, and change bucket settings. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `object-storage.list-accounts`<br />List storage logins | The server | Read only |  |
| `object-storage.list-buckets`<br />List buckets | The server | Read only | `account` |
| `object-storage.usage`<br />Check bucket limits | The server | Read only |  |
| `object-storage.list-objects`<br />List objects | The server | Read only | `account`, `bucket`, `prefix` |
| `object-storage.create-bucket`<br />Create a bucket | The server | Changes | `account`, `name` |
| `object-storage.delete-object`<br />Delete an object | The server | Destructive | `account`, `bucket`, `key` |
| `object-storage.share`<br />Make a temporary link | The server | Changes | `account`, `bucket`, `key`, `seconds` |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## API

The plugin's HTTP routes are in the [API reference](/api/object-storage/object-storage-api).

## Platforms

Linux, Windows, macOS

