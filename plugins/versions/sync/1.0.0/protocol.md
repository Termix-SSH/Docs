---
title: "protocol"
sidebar_position: 60
slug: "/sync/v/1.0.0/protocol"
custom_edit_url: null
plugin_id: "sync"
plugin_version: "1.0.0"
plugin_latest: false
---
Any client can sync with a Termix server through the sync endpoints. The desktop app uses them, and the same endpoints are open to other clients. The reference for each endpoint is in the API reference under Sync.

## The flow

1. `GET /sync/v2/info` is public. It says the server is Termix and gives its `protocol` number. Stop if you don't support that number.
2. Sign in with any normal login method to get a short session.
3. `POST /sync/v2/link` trades that session for a long lived device session. Send a `deviceName`, a `clientType` and a `deviceId`. The login session is ended.
4. Pull with `GET /sync/v2/changes`, push with `POST /sync/v2/push`, and listen on `GET /sync/v2/events` to know when to pull.
5. `POST /sync/v2/session/refresh` renews the device session when it ends within 60 days. `POST /sync/v2/unlink` ends it.

Send the device session as the `jwt` cookie.

## Client type and device id

| Field      | Values                                              | Default   |
| ---------- | --------------------------------------------------- | --------- |
| clientType | `desktop`, `mobile`, `web`, `cli`, `master`         | `desktop` |
| deviceId   | 8 to 100 letters, digits, dots, dashes, underscores | none      |

Both are optional, so older clients keep working. A client with a `deviceId` shows up in `GET /sync/v2/devices`, which lists the clients linked to the account. Keep the `deviceId` the same for an install.

## Revisions and the cursor

Every synced record has a `revision` and a position in the change feed called `seq`.

- Pull with a `cursor`. Start at 0. Each page returns `nextCursor` and `hasMore`. Save `nextCursor` and use it next time.
- Push ops with the `baseRevision` you last saw. If the server moved on, the answer is a conflict with the server's version. The server's version wins and you decide what to do with yours.
- To start pulling a kind of data you never pulled, pull it from cursor 0 with `types`, then continue from the feed cursor.
- Process changes in `order` of the entity types the page lists, so records that point at others arrive after their targets.

## Rows

Secrets travel inside the rows in plain text and are encrypted again at rest on each side, so only sync over HTTPS. Records that point at other records use the other record's `syncId`, never a local id.
