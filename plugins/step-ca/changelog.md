---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/step-ca/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "step-ca"
plugin_version: "1.0.3"
plugin_latest: true
---
## 1.0.3

### Changed

- The page you land on after signing in now matches the Termix look and follows your theme and language
- Needs Termix 26.11.1 or newer

### Fixed

- Generated SSH keys always work. About 1 in 256 ed25519 keys used to come out unreadable

## 1.0.2

### Added

- Require the host username in the certificate, an admin setting that is on by default. Turn it off for a CA that puts other principals in the certificate and lets the server map them

### Changed

- The plugin name and description show in your language

## 1.0.1

### Changed

- Translated into every supported language

## 1.0.0

### Added

- First release
- Adds the Step CA auth type to hosts
- Sign in with your identity provider in the browser
- Certificates are kept until they expire
- No `step` binary needed
- Several Termix servers can share sign in state through Redis
