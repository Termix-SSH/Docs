---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/secret-sources/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "secret-sources"
plugin_version: "1.1.1"
plugin_latest: true
---
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
