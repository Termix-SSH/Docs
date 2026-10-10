---
title: Import and export
description: Move hosts in and out of Termix.
---

# Import and export

Open **Import / Export** in the Hosts panel.

## Export

**Export...** opens a window where you pick:

- **Scope**: all hosts or only the ones you selected.
- **Include**: connection, credentials, notes, tags and pin, proxy, jump hosts, feature flags and advanced settings.

You get a JSON file. If you include credentials, it has passwords and keys in it, decrypted. Keep it safe.

## Import

Import a JSON file in the same format. **Import (skip existing)** leaves hosts you already have alone. **Import (overwrite)** replaces them. **Download Sample** gives you an example file.

**Import from SSH config** reads hosts from an OpenSSH `~/.ssh/config` file.

## The JSON format

```json
{
  "hosts": [
    {
      "name": "Web server",
      "ip": "192.168.1.100",
      "port": 22,
      "username": "admin",
      "authType": "password",
      "password": "your-password",
      "folder": "Production/Web",
      "tags": ["web", "nginx"],
      "pin": true,
      "notes": "Main web server"
    },
    {
      "name": "Database",
      "ip": "192.168.1.101",
      "username": "dbadmin",
      "authType": "key",
      "key": "-----BEGIN OPENSSH PRIVATE KEY-----\n...\n-----END OPENSSH PRIVATE KEY-----",
      "keyPassword": "optional-passphrase",
      "folder": "Production"
    },
    {
      "name": "Uses a saved credential",
      "ip": "10.0.0.5",
      "username": "ops",
      "credentialName": "Ops key"
    }
  ]
}
```

| Field                | What it is                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`               | What the host is called.                                                                                 |
| `ip`                 | Address or hostname. `address`, `host` and `hostname` work too.                                          |
| `port`               | Port. Defaults to 22 for SSH.                                                                            |
| `username`           | Username. `user` works too.                                                                              |
| `authType`           | `password`, `key`, `credential`, `agent` or `none`. Left out, Termix guesses from the other fields.      |
| `password`           | For `password`.                                                                                          |
| `key`, `keyPassword` | For `key`.                                                                                               |
| `credentialName`     | Use a saved credential by name.                                                                          |
| `credentialId`       | Use a saved credential by id.                                                                            |
| `folder`             | Folder path. Use `/` to nest. `group` works too.                                                         |
| `tags`               | A list of tags.                                                                                          |
| `pin`                | `true` to pin it.                                                                                        |
| `notes`              | Private notes.                                                                                           |
| `connectionType`     | The protocol, like `ssh`, `rdp`, `vnc` or `telnet`. Defaults to `ssh`. The protocol's plugin must be on. |

An export has many more fields, for jump hosts, proxies and every plugin's settings. Export a host that is set up the way you want to see them.

## Whole account

To move everything, not just hosts, use the exports in **Settings**. See [backup and restore](/install/backup#export-from-the-app).
