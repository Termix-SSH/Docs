---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/vault/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "vault"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- Adds the Vault auth type to hosts
- Sign in to Vault with OIDC when you connect
- Never stores a Vault token or long-lived key
- Reusable signer profiles you can share with everyone

### Fixed

- A personal Vault profile can no longer point the server at private or internal addresses unless an admin allows that host
