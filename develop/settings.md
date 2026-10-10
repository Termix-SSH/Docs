---
title: Settings
description: Admin, user and host settings, drawn by Termix from your manifest.
---

# Settings

Declare settings in your manifest and Termix draws the form, stores the values, encrypts secrets and checks every save. You don't build settings UI.

```json
"contributes": {
  "settings": {
    "admin": [
      {
        "key": "apiUrl",
        "type": "string",
        "labelKey": "settings.apiUrl.label",
        "descriptionKey": "settings.apiUrl.description",
        "default": "https://api.example.com"
      },
      { "key": "apiToken", "type": "secret", "labelKey": "settings.apiToken.label" }
    ],
    "user": [
      { "key": "compact", "type": "boolean", "labelKey": "settings.compact.label", "default": false }
    ],
    "host": {
      "enableKey": "enabled",
      "enableLabelKey": "settings.host.enabled.label",
      "fields": [
        { "key": "port", "type": "number", "labelKey": "settings.host.port.label", "default": 8080, "min": 1, "max": 65535 }
      ]
    }
  }
}
```

## Scopes

| Scope   | Who sets it                  | Where it shows                                         |
| ------- | ---------------------------- | ------------------------------------------------------ |
| `admin` | Admins, for everyone.        | Your page in **Settings**, for admins.                 |
| `user`  | Each person, for themselves. | Your page in **Settings**.                             |
| `host`  | Per host.                    | A section in the host editor, named after your plugin. |

A host section's `enableKey` is a switch shown first. It gates the rest, and Termix uses it for the feature filter and bulk on and off in the host list.

## Field types

`boolean`, `string`, `number`, `select`, `multiselect`, `secret`, `textarea`, `json` and `custom`.

| Option                                         | What it does                                                                      |
| ---------------------------------------------- | --------------------------------------------------------------------------------- |
| `labelKey`, `descriptionKey`, `placeholderKey` | Strings from your `locales/en.json`.                                              |
| `default`                                      | The value before anyone saves one.                                                |
| `options`                                      | For `select` and `multiselect`: `[{ value, labelKey }]`.                          |
| `min`, `max`                                   | For `number`.                                                                     |
| `requires`                                     | A boolean in the same scope that has to be on.                                    |
| `group`                                        | A heading the field sits under.                                                   |
| `permission`                                   | Who may change it. Admin fields default to `admin.plugins.manage`.                |
| `hidden`                                       | Stored and checked, but left out of the form. For fields you edit in your own UI. |
| `component`                                    | For `custom`: a component you registered with `app.registerSettingsComponent`.    |

Host fields also take:

| Option          | What it does                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------- |
| `defaultable`   | `false` keeps it out of [host defaults](/guide/host-defaults), for values unique to one host. |
| `defaultLevels` | Which default levels it can be set at.                                                        |
| `personal`      | Look and feel. A shared host reads it from the viewer's defaults.                             |
| `shareRead`     | Hides it from people a host is shared with below this level.                                  |
| `ownerOnly`     | Only the host's owner can change it.                                                          |

Secrets are encrypted, never sent to the browser, and can't be host defaults.

## Read and write

```ts
const url = await ctx.settings.get<string>("apiUrl");
const compact = await ctx.settings.getUser<boolean>(userId, "compact");
const port = await ctx.settings.getHost<number>(hostId, "port");

await ctx.settings.setHost(hostId, "port", 9090);
ctx.settings.onChange((change) => reload(change));
```

Your own settings need no capability. `listHostValues(key)` lists every host with a value for a host field, for background jobs, and needs `hosts:read`.

On the frontend, `useSettings("user")` gives you values and a `save`.

## Check a save

```ts
ctx.settings.onValidate("admin", (values) => {
  if (!String(values.apiUrl).startsWith("https://")) {
    return { apiUrl: "Use an https address" };
  }
  return {};
});
```

Return field key to message. The form shows every problem at once and nothing is saved.

## Settings or environment variables

Use settings. They can be changed in the app and per user or host, and they sync. Use an [environment variable](/develop/manifest#environment-variables) only for something needed before Termix starts.
