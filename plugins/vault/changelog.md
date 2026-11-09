---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/vault/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "vault"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Added

- OpenBao support: pick HashiCorp Vault or OpenBao on each signer profile

### Changed

- Renamed to SSH Certificate Signer
- The page you land on after signing in now matches the Termix look and follows your theme and language
- Needs Termix 26.11.1 or newer

### Fixed

- Generated SSH keys always work. About 1 in 256 ed25519 keys used to come out unreadable

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Adds the Vault auth type to hosts
- Sign in to Vault with OIDC when you connect
- Never stores a Vault token or long-lived key
- Reusable signer profiles you can share with everyone
- A personal profile only reaches a private or internal Vault address when an admin allows that host
