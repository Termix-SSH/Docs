---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/sso/v/1.0.1/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "sso"
plugin_version: "1.0.1"
plugin_latest: false
---
## 1.0.1

### Fixed

- Providers set up before 2.9 send the old redirect URI again, so identity providers stop rejecting sign in
- The old callback and back-channel logout URLs work again

## 1.0.0

### Added

- First release
- Sign in with any OpenID Connect provider, GitHub or Google
- More than one provider, each with its own login button
- Make members of an admin group Termix admins, and map groups to roles
- Limit sign in to certain users
- Back-channel logout
