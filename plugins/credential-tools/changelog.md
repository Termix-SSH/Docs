---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/credential-tools/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "credential-tools"
plugin_version: "1.1.0"
plugin_latest: true
---
## 1.1.0

### Added

- Add an SSH key to a host's authorized_keys through Termix actions, so one key can go to many hosts in a rollout
- The assistant and MCP can list your SSH key names

### Changed

- Needs Termix 26.11.1 or newer

## 1.0.0

### Added

- Generate Ed25519, ECDSA and RSA key pairs in the credential editor
- Get the public key from a private key, detect key types and check that a key pair matches
- Deploy a key credential's public key to a host's authorized keys, written to the audit log
