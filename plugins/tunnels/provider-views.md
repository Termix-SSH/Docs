---
title: "provider views"
sidebar_position: 60
slug: "/tunnels/provider-views"
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Tunnels/edit/main/docs/provider-views.md"
plugin_id: "tunnels"
plugin_version: "1.5.0"
plugin_latest: true
---
# Provider sections in Tunnels

Independent plugins can add a section to the Tunnels tab through the existing
SDK extension registry. Tunnels owns the navigation; each provider keeps its own
frontend context, API, permissions and connection lifecycle.

## Register a section

Declare `ui:surface` and the extension points you consume in your manifest:

```json
{
  "contributes": {
    "uses": ["tunnels.views", "tunnels.containers", "tunnels.openView"]
  }
}
```

Register your view only while the current user has permission to use it:

```tsx
app.registerExtension("tunnels.views", {
  id: "example-network.main",
  title: app.t("nav.title"),
  order: 100,
  components: { view: NetworkView },
});
```

The section id must start with the registering plugin's id and a dot. Core
assigns `pluginId`; the provider does not set it. `title` is a nonempty,
already-translated label. `order` defaults to 100; ties sort by id. A provider
can remove and register its contribution again when its translated label changes.

The `view` receives `host?: PluginHostRecord | null`. Core scopes it to its
registering plugin, so SDK hooks use that plugin's own API, settings, translations
and permission namespace. Tunnels keeps the section selector outside the provider
body and gives the content a full-height, bounded region. The provider supplies
its own scrolling content.

A missing or disabled selected provider falls back to SSH. Existing `ssh` and
`gateways` choices keep their stored values. A requested provider id remains
remembered while plugins are loading.

## Detect a usable container

Read `useExtensions("tunnels.containers")` and look for:

```ts
entry.pluginId === "tunnels" &&
  entry.id === "tunnels.views" &&
  entry.version === 1;
```

The marker is reactive. Tunnels registers it only while its frontend container
is mounted and its current user has `tunnels.use`. Disabling Tunnels or losing
that permission removes the marker. Providers can remove their own navigation
entry while this container is usable and retain a fallback when it is absent.
They still enforce their own permissions and remove their own contributions
when access is revoked.

## Open a section

```ts
const opened = await app.invokeAction("tunnels.openView", {
  viewId: "example-network.main",
  hostId: host.id,
});
```

Omit `hostId` to open the hostless Tunnels tab. A supplied host must be in the
current shell's visible host list. The action requires `tunnels.use` and returns
`false` for an invalid request, missing provider or missing host. The caller
can then use its own fallback.

The tab stores `data.tunnelView` for restoration. Invoking the action again
reveals that section even when a matching tab is already open and its user has
switched to a different section.

This API controls navigation only. A successful open does not establish a tunnel
or confirm network reachability. Each provider owns its connection behavior.
