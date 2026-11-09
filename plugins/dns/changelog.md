---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/dns/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "dns"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- A DNS tab to manage records at Cloudflare, Amazon Route 53, DigitalOcean, Hetzner, Namecheap, GoDaddy, Porkbun and Gandi
- A domain list with expiry dates, auto renew, transfer lock and name servers from Route 53, Namecheap, GoDaddy, Porkbun and Gandi
- Watch any domain by name through RDAP
- Alerts when a domain is about to expire
- Links that keep a record pointed at a host or at this server's public address
- Health checks for name servers, DNSSEC, mail records and broken CNAMEs, and a check against public resolvers
- Zone copies before each change, with compare and restore, and an alert when a zone changes outside Termix
- BIND zone file import and export
- A dns.records service for other plugins, and actions for the assistant, rules and the CLI
- A dashboard card with domains close to expiry
