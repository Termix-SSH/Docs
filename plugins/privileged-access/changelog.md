---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/privileged-access/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "privileged-access"
plugin_version: "1.0.0"
plugin_latest: true
---
## 1.0.0

### Added

- First release
- Mark a host as privileged, so SSH and remote desktop sessions to it need approved access
- Ask for access with a reason, a ticket and the hours you need, from the Access tab or the host menu
- Approvers decide in the Access tab or from the alert, never for their own request. A host can name the roles that may approve
- Access ends on its own, and the user's open sessions on the host close when it ends or is revoked
- Break glass access for emergencies, always audited and alerted
- Requests nobody decides expire
- History and a CSV report of every request
- Dashboard card with requests waiting on you and your open access
- Termix actions to ask for access, list requests to decide, and a status tile on the host page
