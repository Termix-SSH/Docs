---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/firewall/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "firewall"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- Allow or remove a port, check a port is allowed and delete rules through Termix actions, so a port can roll out across hosts and be watched for drift in Operations Center
- Firewall rules show in the All hosts table, and whether the firewall is on shows as a status tile
- A Firewall tab for each host to manage UFW, firewalld, nftables and iptables over SSH
- Add, edit and delete rules, set the default policies and firewalld zones
- Turn the firewall on or off, and install UFW, firewalld, nftables or Fail2ban
- An SSH lockout check before changes that could cut off Termix
- Risky changes undo themselves on the host unless you press Keep
- Rule sets to add the same rules to many hosts or a fleet, with a drift check
- Fail2ban jails, banned addresses, ban and unban
- Alerts when a firewall turns off or its rules change outside Termix
- A firewall panel beside SSH terminals and a dashboard card for every host
