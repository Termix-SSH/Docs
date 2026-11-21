---
title: "Secret Sources"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/secret-sources"
description: "Pull host passwords and keys from 1Password, Bitwarden, Infisical, HashiCorp Vault, KeePass, AWS, Azure or Google Cloud when you connect instead of storing them in Termix."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Secret-Sources/edit/main/docs/index.md"
plugin_id: "secret-sources"
plugin_version: "1.2.0"
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
| KeePass file (.kdbx)                | `kdbx://<group>/<entry>#<field>`               |
| AWS Secrets Manager                 | `aws-sm://<name or ARN>#<json key>`            |
| Azure Key Vault                     | `azkv://<secret name>/<version>`               |
| Google Cloud Secret Manager         | `gcpsm://<project>/<secret>/<version>`         |

## Before you start

Make a login that can read the secrets you need:

- 1Password: run a [1Password Connect](https://developer.1password.com/docs/connect/get-started/) server and make an access token with read access to the vaults.
- Infisical: make a machine identity with Universal Auth and give it access to the project. You need its client ID and client secret.
- Bitwarden Secrets Manager: make a machine account with access to the projects and create an access token for it.
- Vault: a token, or an AppRole role ID and secret ID, with a policy that can read the paths. Add a namespace on Vault Enterprise or HCP.
- Bitwarden or Vaultwarden, each user signs in: nothing to set up beyond the server address. Each Termix user unlocks their own vault, so they only get what their own account can see, and the server's event log shows who used it. See [Each user's own vault](#each-users-own-vault).
- Bitwarden or Vaultwarden through `bw serve`: run the Bitwarden CLI as `bw serve` somewhere Termix can reach, log in and unlock the vault. Termix talks to `bw serve`, which does the decryption, so keep it on a private network. Everyone who uses a shared `bw serve` source reads that one account's vault.

- KeePass: put the .kdbx file where Termix can download it over HTTP(S), like a WebDAV share or a Nextcloud link. Add the web login if the address needs one, and the master password, a key file or both. KDBX 3 and 4 work. Termix keeps the opened file in memory for 5 minutes, so a change shows up after that.
- AWS: an access key of an IAM user or role that may call `secretsmanager:GetSecretValue` and `secretsmanager:ListSecrets`. The URL is the endpoint of your region, like `https://secretsmanager.eu-west-1.amazonaws.com`. Add a session token for temporary keys.
- Azure: an app registration with a client secret, given Get and List on secrets in the vault (or the Key Vault Secrets User role). The URL is the vault, like `https://my-vault.vault.azure.net`.
- Google Cloud: a service account with the Secret Manager Secret Accessor role, and its JSON key file. The picker lists secrets in the key's project.

Each reference leaves out the parts you don't need: KeePass reads Password unless you add `#UserName`, `#URL`, `#Notes` or a custom field, AWS gives the whole secret unless you add `#key` for a JSON secret, and Azure and Google read the latest version unless you add one.

If the server runs on your own network, an admin adds its address to Private endpoint allowlist in Settings, Secret Sources, one host per line. `localhost` and `host.docker.internal` are allowed already.

## Add a source

1. Install the plugin from the Plugins tab.
2. Open a host or credential in Manage. Next to the password and key fields is a Secret sources section.
3. Press New source, pick its type, and fill in a name, the server URL and the login details.
4. Press Test to check that Termix can sign in.
5. Save.

Login details are stored encrypted on the server and are never shown again. Admins can turn on Share with all users to let everyone use a source.

## Use it

In a host's or credential's username, password or key field, type a reference instead of the value, like:

```
op://Servers/web-1/password
infisical://6630c5e1/prod/databases/POSTGRES_PASSWORD
bws://be8e0ad8-d545-4017-a55a-b02f014d4158
vault://secret/servers/web-1#password
bw://web-1/password
```

When you connect, Termix asks the source for the value and uses it. Results are cached for a minute. References in the username field need Termix 26.11.2 or later.

For `bw://`, the field is `username`, `password`, `totp`, `notes`, `uri`, `privatekey` (SSH key items, each user sign in only) or the name of a custom field. The item is its ID or its exact name.

With a Bitwarden or Vaultwarden source, press Pick from a vault under the password field of a host or credential. Search the vault, pick an item, and Termix fills the username and password with `bw://<item id>/username` and `bw://<item id>/password`. Items are listed by name and folder, and no secret leaves the vault for the list. This needs Classic Layout 1.2.0.

Each reference uses a source of its own type. Your own source is used first. If you don't have one, a shared one is. Both Bitwarden kinds answer `bw://`.

## Each user's own vault

An admin adds a source of type Bitwarden or Vaultwarden (each user signs in) with the server address, like `https://vault.example.com` or `https://vault.bitwarden.com`, and turns on Share with all users. Unlock lasts sets how many hours a user stays unlocked (8 if empty). SSO identifier is your organization identifier, if your server asks for one.

Each user then unlocks their own vault once per session. Press the unlock button next to the source in Secret sources, or connect to a host that uses a `bw://` reference and press Verify. Pick one way to sign in, and always add your master password:

- SSO: press Open sign in and log in with your identity provider in the new window. The window ends on a `localhost:8065` page that can't load. Copy its address, paste it in, and unlock. Vaultwarden needs SSO turned on (`SSO_ENABLED`).
- Email: your account email and master password. If two-step login is on, Termix asks for the code.
- API key: your personal API key (`client_id` and `client_secret`) from Account settings, Security, Keys. This skips two-step login.

Your vault key is kept encrypted for you only until the session ends, then Termix asks again. Lock ends it early. Other users never see your vault, and a host shared with you still uses its owner's vault, unless you add your own login to it.

## Troubleshooting

- No secret source is configured: Add one of that type, or ask an admin to share one.
- No token is stored for this secret source: The owner opens the source, enters the login details again and saves.
- Blocked address: Add the server to the private endpoint allowlist.
- The vault is locked: With `bw serve`, unlock it again there. With each user sign in, unlock your own vault in Secret sources.
- Too many failed attempts: wait 15 minutes, then try again.
