---
title: Authorization table
description: Say who may call each route and socket, and let CI check it.
---

# Authorization table

Every plugin keeps an `authz.json` at the root of its repo. It says who may call each HTTP route and socket the plugin serves. The shared plugin CI checks it on every push and pull request, and core checks its own table the same way.

## What the check does

The check builds the newest core and your plugin, starts a server on a throwaway database and makes a set of callers:

| Caller                                                      | What it is                                                    |
| ----------------------------------------------------------- | ------------------------------------------------------------- |
| `anon`                                                      | No login at all                                               |
| `expired`, `revoked`                                        | A login that timed out, or was signed out                     |
| `pending`                                                   | A login still waiting for its second factor                   |
| `setup`                                                     | A login that must set up a second factor before anything else |
| `guest`                                                     | A read only session share link, with no login                 |
| `noperm`                                                    | A user with no permissions at all                             |
| `other`                                                     | Another user, with nothing shared                             |
| `share-connect`, `share-view`, `share-edit`, `share-manage` | One user per host share level                                 |
| `owner`                                                     | The user who owns the hosts, credentials and plugin rows      |
| `admin`                                                     | An admin                                                      |
| `key-ops-read`, `key-ops-run`                               | The owner's API keys, scoped to operations                    |

Then it calls every entry as each of them and compares the answer with what the table says.

- Refused means 401, 403 or 404. A socket counts as refused when the upgrade fails, when it closes with a refusal code, or when its reply to the first message matches `refuseReply`.
- A refused caller that gets 400 fails the run: the request never got far enough to be checked, so the entry needs a valid `body`.
- Allowed callers are called on reads. Writes are only checked for refusals, unless the entry sets `callAllowed`.
- A route the plugin serves with no entry fails the run. So does an entry for a route that is gone.

## Writing entries

Write what a route should allow, not what it happens to do today.

```json
{
  "seed": [
    {
      "as": "owner",
      "method": "POST",
      "path": "/plugin-api/hello/notes",
      "body": { "title": "authz-own-note" },
      "capture": { "hello.note": "note.id" }
    }
  ],
  "routes": {
    "GET /plugin-api/hello/notes/:id": {
      "access": "user",
      "permission": "hello.use",
      "resource": { "kind": "own", "fixture": "hello.note" },
      "params": { "id": "hello.note" }
    }
  }
}
```

| Field                      | Meaning                                                                                                                                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                   | `public`, `user` or `admin`                                                                                                                                                                                                        |
| `permission`               | The permission or permissions the route needs. One the plain user role does not have means only admins.                                                                                                                            |
| `resource`                 | Whose thing the route acts on. `host` and `folder` follow share levels from `min`, `credential` is `use` or `manage`, any other kind belongs to the owner alone. `key` names a body or query field when the id is not in the path. |
| `params`                   | Path params, by fixture name or `=literal`                                                                                                                                                                                         |
| `body`, `query`, `headers` | What to send                                                                                                                                                                                                                       |
| `allow`                    | Session states let through: `pending`, `setup` or `guest`                                                                                                                                                                          |
| `expect`                   | Override the worked out answer for one caller                                                                                                                                                                                      |
| `filtered`                 | Other callers may get 200, as long as nothing of the owner's is in the reply                                                                                                                                                       |
| `scoped`                   | Other callers may get a no-op 200; the run then checks the owner's copy is still there                                                                                                                                             |
| `refuse400`                | Why a 400 is a real refusal here, for a body that names something of the owner's                                                                                                                                                   |
| `destructive`              | Never call this as an allowed caller                                                                                                                                                                                               |
| `allowed: "any"`           | Skip the allowed side when the test data can't have it (a real device, desktop only). Refusals are still checked.                                                                                                                  |
| `send`, `refuseReply`      | For sockets that check the caller on the first message                                                                                                                                                                             |
| `unlisted`, `skip`, `note` | Why a route is not served on a server, why it is not called, or anything a reader needs                                                                                                                                            |

`seed` steps run before the check to make the owner's rows. `capture` reads a value from the reply (a dotted path, `-1` picks the last item of a list) for use in `params` and as `{{name}}` in bodies. The fixtures `host`, `host2`, `credential`, `folder` and `user:<caller>` always exist. Name the owner's rows with `authz-own-` at the start, so filtered replies can be checked for them.

The full list of fields is in [`authz.schema.json`](https://github.com/Termix-SSH/Termix/blob/main/scripts/authz/authz.schema.json).

## Running it yourself

From a core checkout next to your plugin, after `npm run build:backend:core` in core and `npm run build` in the plugin:

```bash
node ../Termix/scripts/authz/run.mjs --no-core --plugin . --local-plugin . --local-plugins ../Plugins
```

`--local-plugins` should hold built copies of TOTP and Login Security (the run uses them to make the pending, setup and expired logins) and of any plugin yours depends on. `node ../Termix/scripts/authz/stage-deps.mjs . deps` clones and builds them into `deps`. `--only <text>` runs just the entries whose key contains the text, and `--keep` keeps the server log.
