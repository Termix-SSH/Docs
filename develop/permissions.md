---
title: Permissions
description: Decide which users can use your plugin.
---

# Permissions

Permissions decide which users can do what. Admins give them to [roles](/guide/roles).

## Declare them

```json
"contributes": {
  "permissions": [
    {
      "name": "use",
      "titleKey": "permissions.use.title",
      "descriptionKey": "permissions.use.description",
      "defaultRoles": ["admin", "user"]
    },
    {
      "name": "manage",
      "titleKey": "permissions.manage.title",
      "descriptionKey": "permissions.manage.description",
      "defaultRoles": ["admin"]
    }
  ]
}
```

You write the short name. Termix registers it as `<your id>.<name>`, like `hello.use`. You can't claim a core group (`hosts`, `credentials`, `admin`) or another plugin's.

`defaultRoles` gives the permission to the built in `admin` and `user` roles the first time your plugin is installed. If an admin takes it away later, it stays away.

## Check them

On the backend:

```ts
const router = ctx.http.router();
router.use(ctx.rbac.require("use"));
router.post("/settings", ctx.rbac.require("manage"), save);

if (await ctx.rbac.has("manage")) {
  /* ... */
}
```

`require` answers 401 or 403 the same way core does. A short name is your own permission. A full id like `hosts.edit` checks a core or another plugin's permission.

On the frontend:

```tsx
const canManage = usePermission("manage");
```

and `app.registerRailItem({ ..., permission: "use" })` hides a rail item from people without it.

Frontend checks only hide UI. Always check on the backend too.

## Host access

To check a user's access to a host, use `ctx.hosts.checkAccess(hostId, level)` with `connect`, `view`, `edit` or `manage`. See [sharing](/guide/sharing) for what each level allows.
