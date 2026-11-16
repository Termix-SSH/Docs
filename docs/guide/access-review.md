---
title: Access review
description: See every share on the server in one list and export it.
---

# Access review

Settings, Access review lists every host, folder and credential share on the server. Use it to check who can reach what, for a yearly review or when someone leaves. Admins see it, and so does any [role](/guide/roles) with `admin.users.view`.

Each row shows:

- What is shared: a host, a folder or a credential.
- Who has it: a user or a role.
- The level, like `connect`, `view`, `edit`, `manage` or `use`.
- Who owns it and who shared it.
- When it ends and, for hosts, when it was last used.

## Filter

Pick a kind, a user or a role. Filtering by a user shows what is shared with them and what they own and shared. A user's own page in Settings, Users has the same list on its Access tab.

## Export

Export CSV downloads the whole filtered list as a spreadsheet file. Cells that start like a formula are made plain text, so opening the file in a spreadsheet runs nothing.

## Remove a share

Remove shares where they were made: in the host, folder or credential's share settings. See [sharing](/guide/sharing). Shares with an end date are removed on their own once they run out.

## From the API

`GET /rbac/access-review` returns the same list. It takes `kind`, `userId`, `roleId`, `limit` and `offset`, and `format=csv` for the file. See the [API reference](/api).
