---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/acme-ssl/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "acme-ssl"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- Certificates from Let's Encrypt or any ACME directory
- HTTP challenge on port 80, or a Cloudflare DNS challenge when port 80 is closed
- Renews before the certificate expires
- Swaps in the new certificate without a restart
