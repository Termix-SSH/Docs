---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/secret-sources/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "secret-sources"
plugin_version: "1.2.0"
plugin_latest: true
---
## 1.2.0

### Added

- Bitwarden or Vaultwarden where each user signs in: everyone unlocks their own vault with SSO, email or a personal API key plus their master password, and `bw://` references read only what their own account can see. No `bw serve` needed
- Connecting to a host whose vault is locked shows Verify to open the unlock page (needs Termix 26.11.3 and SSH Terminal 1.5.0)
- KeePass: read entries from a .kdbx file served over HTTP(S), like a WebDAV share, with the master password and key file
- AWS Secrets Manager, Azure Key Vault and Google Cloud Secret Manager sources, with whole secrets or one key of a JSON secret on AWS
- Pick from a vault works for KeePass, AWS, Azure and Google Cloud sources too
- Pick from a vault: browse a Bitwarden or Vaultwarden (bw serve) source by name or folder and fill the username and password with its references in one click (needs Classic Layout 1.2.0)

## 1.1.3

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it

### Fixed

- The API docs list the path parameters and answers of every route

## 1.1.2

### Fixed

- Vault KV v1 references work with a token that can only read the v1 path

## 1.1.1

### Added

- Test a secret reference in the sources panel. It says if the secret was found, is missing, is refused or the source cannot be reached, and never shows the secret

### Fixed

- Saving a new source no longer fails with error 500 on a server first set up before 26.10

## 1.1.0

### Added

- Infisical, Bitwarden Secrets Manager and HashiCorp Vault sources, with `infisical://`, `bws://` and `vault://` references
- Bitwarden and Vaultwarden vaults through `bw serve`, with `bw://item/field` references
- Pick the type of a new source, and Test shows what it found for each type

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Works with a self-hosted 1Password Connect server
- Use `op://vault/item/field` references in a host's password or key fields
- Secrets are fetched each time you connect and never stored in Termix
