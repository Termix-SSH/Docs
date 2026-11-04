---
title: Actions
description: Declare what your plugin can do once, and every part of Termix can use it.
---

# Actions

An action is something your plugin can do, like restarting a container or allowing a port. Declare it in the manifest and register a handler, and it shows up in:

- Operations Center: run it, roll it out across hundreds of hosts, see it in history, hold it for approval and watch hosts for drift.
- The host page and All hosts tables.
- Automations, as a Run an action step.
- The assistant and MCP, if you allow them.
- The CLI (`termix ops`), the phone app, the command palette and the API (`/operations`).

You write none of that. You also get dry runs, one run history, audit lines and approvals for free.

## Declare it

Actions go in `contributes.operations` in the manifest. They need the `operations:provide` capability and Termix 26.11.1 or newer.

```json
{
  "engine": { "termix": ">=26.11.1-0", "api": "^1.13" },
  "capabilities": ["operations:provide"],
  "contributes": {
    "permissions": [
      {
        "name": "use",
        "titleKey": "perm.use",
        "descriptionKey": "perm.useDesc"
      }
    ],
    "operations": {
      "actions": [
        {
          "id": "demo.restart-service",
          "titleKey": "ops.restart",
          "icon": "RotateCw",
          "scope": "resource",
          "resource": "demo.service",
          "risk": "change",
          "permission": "use",
          "hostAccess": "edit",
          "dryRun": "describe",
          "exclusive": true,
          "when": { "settings": { "enableDemo": true } },
          "surfaces": { "assistant": true, "mcp": true }
        },
        {
          "id": "demo.list-services",
          "titleKey": "ops.list",
          "scope": "host",
          "risk": "read",
          "permission": "use",
          "hostAccess": "connect"
        }
      ],
      "resources": [
        {
          "id": "demo.service",
          "titleKey": "ops.services",
          "list": "demo.list-services",
          "key": "name",
          "name": "name",
          "status": "state",
          "tab": "demo",
          "columns": [{ "key": "description", "titleKey": "ops.description" }]
        }
      ],
      "signals": [
        {
          "id": "demo.failed",
          "titleKey": "ops.failed",
          "read": "demo.count-failed",
          "scope": "host",
          "kind": "count",
          "fix": "demo.restart-service"
        }
      ],
      "events": [
        {
          "id": "demo.went-down",
          "titleKey": "ops.wentDown",
          "scope": "host",
          "severity": "warning"
        }
      ]
    }
  }
}
```

Keep `engine.api` as it was unless you import something new from `@termix-ssh/plugin-sdk/ui`. Raising it makes the phone app ask people to update before it shows your plugin.

### Action fields

| Field        | What it does                                                                                                                                        |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`         | `<pluginId>.<name>`, lowercase                                                                                                                      |
| `scope`      | `host` runs on one host, `resource` on one item on a host (the `resource` field names which kind), `server` on Termix itself                        |
| `risk`       | `read`, `change` or `destructive`. Destructive actions ask for a confirm                                                                            |
| `permission` | One of your own permissions                                                                                                                         |
| `hostAccess` | The share level a user needs on the host. Destructive actions need `edit` or `manage`                                                               |
| `inputs`     | Settings style fields, plus `required`, `pattern` (the whole value must match), `optionsFrom` (a read action fills the choices) and type `resource` |
| `outputs`    | Fields the result has. Mark private ones `sensitive` and they are dropped before anything is stored or shown                                        |
| `dryRun`     | `native`: your `run` gets `dryRun: true` and must change nothing. `describe`: core calls your `describe` instead                                    |
| `check`      | A read action that proves the result. Drift checks use it                                                                                           |
| `undo`       | The action that reverses this one. Return `undoInput` from `run` and history gets an Undo button                                                    |
| `idempotent` | Safe to run twice, so rollouts can retry it                                                                                                         |
| `exclusive`  | Only one at a time per host                                                                                                                         |
| `timeoutMs`  | Up to an hour. Reads default to a minute, changes to five                                                                                           |
| `when`       | Host settings that must match, and OS names, so the action only shows where it applies                                                              |
| `surfaces`   | `assistant` and `mcp` are off unless set true. `palette`, `automations`, `mobile` and `cli` are on unless set false                                 |

Inputs your declaration doesn't list are refused before your handler runs. `secret` inputs reach your handler but are never stored, logged or shown.

### Resources and signals

A resource is a kind of thing on a host, like a container. Its `list` action is a read action that returns `{ rows: [...] }` as `data`. Core uses it for the All hosts table, the counts on the host page and the target picker for resource actions.

A signal is a status tile. Its `read` action returns `{ value, status, label }` as `data`, with status `ok`, `warn`, `fail` or `unknown`. `fix` names the action offered when it isn't ok. Signals run on every host, so keep the read cheap.

Both are cached in memory for a minute per user and host, and the page polls while hosts answer.

## Register the handlers

```ts
export async function activate(ctx: PluginContext) {
  ctx.operations.register("demo.restart-service", {
    describe: (_input, { resourceKey }) => `Would restart ${resourceKey}`,
    run: async (_input, { hostId, resourceKey, signal }) => {
      await restart(hostId!, resourceKey!, signal);
      return { summary: `Restarted ${resourceKey}`, changed: true };
    },
  });
}
```

- Throw to fail. A failed run never counts against your plugin's error budget.
- Watch `signal`. It fires when the run is cancelled, times out or your plugin stops.
- Throw an error with `code = "NEEDS_INTERACTION"` when the host needs a person to sign in first, such as a TOTP prompt.
- There is no request and no session. Use `hostId`, `resourceKey` and the input.
- Registering an id you didn't declare throws. A declared id with no handler shows as unavailable.

Keep your REST routes for your own UI, and call `ctx.operations.run(id, { hostId, resourceKey, input })` inside them. Button presses then go through the same checks and land in the same history.

## Run another plugin's action

Add `operations:invoke`, list the ids in `contributes.operations.invokes` (exact ids, `<pluginId>.*` or `*`), and call:

```ts
const outcome = await ctx.operations.invoke("docker.restart-container", {
  hostId,
  resourceKey: "web",
  via: "automation",
});
```

It acts as the current user. `via` says what your plugin is doing, and approval rules match on it. `automation`, `rollout` and `fleet` go by the user's permissions when no rule matches. Anything else is refused for changes until a rule allows it.

## Events

Declare events, then emit them:

```ts
await ctx.operations.emit("demo.went-down", { name }, { hostId });
```

Automations can start on any declared event, and Operations Center keeps them in the timeline. Core also emits `operation.succeeded`, `operation.failed` and `operation.approval-requested` for every change. A plugin with `operations:invoke` can listen with `ctx.operations.onEvent`. Chains of events and actions stop after three steps.

## Approvals

A plugin with `operations:approve` can provide rules with `ctx.operations.approvals.provide`. Core asks every provider and the strictest answer wins: `allow`, `approve` (wait for a person) or `deny`. A provider that throws denies. Operations Center is the provider most servers use.

## Not a sandbox

Plugins run inside Termix, so `risk` is your plugin's own claim. Termix treats actions from plugins not signed as official as changes when rules decide what needs a person, and keeps them away from the assistant and MCP until an admin allows them. Declare honestly. The community review checks it.
