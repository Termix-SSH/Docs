---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/ups-manager/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "ups-manager"
plugin_version: "1.0.1"
plugin_latest: true
---
## 1.0.1

### Added

- Live NUT currents, real power and, when turned on, calculated DC power
- Battery and driver details, and a searchable list of every NUT value
- Output energy used, in Wh and kWh, with charts for 24 hours, 7 days and 30 days
- UPS load estimated from output watts and the UPS's real power rating when the device doesn't report it
- Overview refresh from 1 to 30 seconds

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- Its process stops when it has nothing to watch or run, and Termix starts it again when there is work, which saves memory on Termix 26.11.2 and later

### Fixed

- Source editor Test button now matches the Save button size

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
