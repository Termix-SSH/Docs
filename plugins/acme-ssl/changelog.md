---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/acme-ssl/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "acme-ssl"
plugin_version: "1.2.0"
plugin_latest: true
---
## 1.2.0

### Added

- A DNS plugin challenge type that answers the DNS challenge at any provider the DNS plugin supports
- How long the HTTPS certificate has left shows as a status tile, with Request a certificate now as its fix through Termix actions

### Changed

- Needs Termix 26.11.1 or newer
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

## 1.1.0

### Added

- HTTPS certificate dashboard card: days left on the certificate, the last error and a button to renew now

## 1.0.2

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Certificates from Let's Encrypt or any ACME directory
- HTTP challenge on port 80, or a Cloudflare DNS challenge when port 80 is closed
- Renews before the certificate expires and alerts admins when a renewal fails
- Swaps in the new certificate without a restart
