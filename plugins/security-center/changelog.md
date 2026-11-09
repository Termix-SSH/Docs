---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/security-center/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "security-center"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- A Security tab for each host that audits SSH keys and scans packages for known vulnerabilities over SSH
- Inventory of authorized keys, host keys and private keys, with type, size, fingerprint and options
- Findings for DSA and small RSA keys, keys without a passphrase, loose permissions, unknown keys and risky sshd settings, with a score for each host
- Rotate the login key Termix uses for a host, with a login check before the old key is removed
- Remove a key from a host by fingerprint, and make new host keys
- Vulnerability scan with OSV for Debian, Ubuntu, Alpine, Rocky Linux and AlmaLinux, with severity, fixed versions and the CISA known exploited flag
- Ignore an advisory for a host
- Alerts for new critical findings, critical vulnerabilities with a fix and known exploited vulnerabilities
- A dashboard card, signals and events for Operations and Automations

### Changed

- Needs Termix 26.11.1 or newer
