---
title: "Secret Sources"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/secret-sources"
description: "Pull host passwords and keys from 1Password, Bitwarden, Infisical or HashiCorp Vault when you connect instead of storing them in Termix."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Secret-Sources/edit/main/docs/index.md"
plugin_id: "secret-sources"
plugin_version: "1.1.0"
plugin_latest: true
---
Secret Sources lets a host's password or key live in a password manager instead of Termix. You write a reference like `op://Servers/web-1/password` in the host's password field, and Termix fetches the real secret each time you connect. It is never stored in Termix.

It works with:

| Source                              | Reference                                      |
| ----------------------------------- | ---------------------------------------------- |
| 1Password Connect                   | `op://<vault>/<item>/<field>`                  |
| Infisical, cloud or self-hosted     | `infisical://<project id>/<env>/<path>/<NAME>` |
| Bitwarden Secrets Manager           | `bws://<secret id>`                            |
| HashiCorp Vault or OpenBao, KV v1/2 | `vault://<mount>/<path>#<key>`                 |
| Bitwarden or Vaultwarden vault      | `bw://<item name or id>/<field>`               |

## Before you start

Make a login that can read the secrets you need:

- 1Password: run a [1Password Connect](https://developer.1password.com/docs/connect/get-started/) server and make an access token with read access to the vaults.
- Infisical: make a machine identity with Universal Auth and give it access to the project. You need its client ID and client secret.
- Bitwarden Secrets Manager: make a machine account with access to the projects and create an access token for it.
- Vault: a token, or an AppRole role ID and secret ID, with a policy that can read the paths. Add a namespace on Vault Enterprise or HCP.
- Bitwarden or Vaultwarden vault: run the Bitwarden CLI as `bw serve` somewhere Termix can reach, log in and unlock the vault. Termix talks to `bw serve`, which does the decryption, so keep it on a private network.

If the server runs on your own network, an admin adds its address to Private endpoint allowlist in Settings, Secret Sources, one host per line. `localhost` and `host.docker.internal` are allowed already.

## Add a source

1. Install the plugin from the Plugins tab.
2. Open a host or credential in Manage. Next to the password and key fields is a Secret sources section.
3. Press New source, pick its type, and fill in a name, the server URL and the login details.
4. Press Test to check that Termix can sign in.
5. Save.

Login details are stored encrypted on the server and are never shown again. Admins can turn on Share with all users to let everyone use a source.

## Use it

In a host's or credential's password or key field, type a reference instead of the secret, like:

```
op://Servers/web-1/password
infisical://6630c5e1/prod/databases/POSTGRES_PASSWORD
bws://be8e0ad8-d545-4017-a55a-b02f014d4158
vault://secret/servers/web-1#password
bw://web-1/password
```

When you connect, Termix asks the source for the value and uses it. Results are cached for a minute.

For `bw://`, the field is `username`, `password`, `totp`, `notes`, `uri` or the name of a custom field. The item is its ID or its exact name.

Each reference uses a source of its own type. Your own source is used first. If you don't have one, a shared one is.

## Troubleshooting

- No secret source is configured: Add one of that type, or ask an admin to share one.
- No token is stored for this secret source: The owner opens the source, enters the login details again and saves.
- Blocked address: Add the server to the private endpoint allowlist.
- The vault is locked: Unlock it again in `bw serve`.
