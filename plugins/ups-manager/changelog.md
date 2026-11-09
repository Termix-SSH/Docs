---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/ups-manager/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "ups-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- A UPS tab for each host that reads UPS devices through NUT, apcupsd or an SNMP card
- Battery charge, runtime, load, input and output voltage, temperature and last self test
- Charts for the last 24 hours, 7 days and 30 days
- A power event log for every UPS
- Alerts when power is lost, the battery is low or needs replacing, the UPS is overloaded, a self test fails or the UPS stops answering
- Start a battery self test, mute the beeper and send other NUT commands, with a check before anything that can cut power
- UPS devices show in the All hosts table, and power status, charge and runtime show as status tiles
- A dashboard card with every UPS on your hosts, worst first

### Changed

- Needs Termix 26.11.1 or newer
