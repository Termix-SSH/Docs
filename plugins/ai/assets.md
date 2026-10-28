---
title: "assets"
sidebar_position: 60
slug: "/ai/assets"
custom_edit_url: "https://github.com/Termix-SSH/Plugin-AI/edit/main/docs/assets.md"
plugin_id: "ai"
plugin_version: "1.3.0"
plugin_latest: true
---
# Asset inventory

Assets, in the AI tab next to Auto-ops, is an inventory of what runs where. It collects facts from your hosts with one read-only script, works out zones and relations from them, and shows the result as a table and as a graph. Every fact comes from a command, so a collection can be repeated and checked. A model only reads those facts afterwards, to say what each asset is for, how much depends on it and which business system it belongs to.

## What it collects

Once per host, one script over SSH with the same watchdog, timeout and parallel host limit as the assistant's commands (Settings, AI Assistant). Each part is optional; a host without `ip -j`, `ss`, systemd or Docker simply has less to show.

| Part           | Command                                                                                 |
| -------------- | --------------------------------------------------------------------------------------- |
| System         | `/etc/os-release`, `hostname`, `/proc/uptime`                                           |
| Network        | `ip -j addr`, `ip -j route`                                                             |
| Listening      | `ss -H -tulnp`                                                                          |
| Connections    | `ss -H -tnp state established`, grouped by peer and service port                        |
| Services       | `systemctl list-units --type=service --state=running`                                   |
| Containers     | `docker ps`                                                                             |
| Kubernetes     | `systemctl is-active k3s k3s-agent kubelet`                                             |
| Proxmox        | `pvesh get /cluster/resources --type vm`                                                |
| Cloud metadata | GETs with a 1 second limit to AWS, Alibaba Cloud, Tencent Cloud, Google Cloud and Azure |

What is kept is cut down on purpose: a process is only its executable name (never its arguments or environment), a container is its name, image, state, ports and networks (never its command, labels or mounts), and cloud metadata is only the provider, instance id and region. Google Cloud and Azure are asked for those single values, not the instance document, so tags, keys and user data never leave the host. Lists are capped at 300 entries per host.

## Assets

| Kind      | Key                         | What it is                                                                 |
| --------- | --------------------------- | -------------------------------------------------------------------------- |
| Host      | `host:<id>`                 | A Termix host. Every host is listed, also one that could not be collected. |
| Guest     | `guest:<node>/<vmid>`       | A Proxmox VM or LXC that is not a Termix host.                             |
| Container | `container:<hostId>/<name>` | A running Docker container.                                                |
| External  | `external:<ip>`             | An address outside the inventory that a host connects to.                  |

A host's addresses are the one Termix connects to, then those on its interfaces, without loopback, link-local and container or VM bridges (`docker0`, `br-*`, `veth*`, `cni*`, `virbr*` and similar). A guest or container that disappears, and a host deleted in Termix, is marked removed rather than deleted; Show removed lists them.

### Proxmox guests and Termix hosts

`pvesh` names guests but does not give their addresses, so a guest is matched to a Termix host by name: a guest whose name equals a host's Termix name or its collected hostname, ignoring case, is that host. It gets no asset of its own, and the host gets a `runs_on` edge to the Proxmox node. A name two hosts share matches neither. Nodes are found the same way. Every node of a cluster lists the whole cluster, so a guest reported twice is still one asset.

### Relations

| Edge          | From                                                                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `runs_on`     | A guest, or a host matched to a guest, to its Proxmox node; a container to its host.                                                         |
| `connects_to` | A host's outbound connections, to the asset that owns the peer address, with ports, processes and a count. Its evidence is the `ss` summary. |

Only outbound connections count: the local port is not one the host listens on and the peer's port is a service port (below 32768). Inbound clients appear from their own side once they are collected, and the public clients of a web server would otherwise flood the inventory. An address no asset owns becomes an external asset, at most 25 per host, busiest first. An address two assets claim is skipped. An edge not seen again keeps its last seen time and shows as stale; edges are never deleted.

## Zones

Built-in rules, in order:

| Addresses                                          | Zone                                     |
| -------------------------------------------------- | ---------------------------------------- |
| Loopback, link-local                               | None                                     |
| `100.64.0.0/10`, Tailscale's `fd7a:115c:a1e0::/48` | Overlay                                  |
| A host whose cloud metadata answered               | Cloud (provider and region in its facts) |
| RFC 1918, IPv6 ULA                                 | Internal                                 |
| Anything else                                      | External                                 |

Zone rules come first: a CIDR mapped to a named zone of kind internal, DMZ, external, cloud or overlay, such as `10.1.1.0/24` as "Data center LAN". The most specific prefix wins, then the higher priority. Saving a rule zones every asset again at once.

An asset's zone is that of its first address that has one, so a host's is decided by the address Termix connects to. An asset with addresses in more than one zone is marked multi-zone: it can reach both sides, which makes it a potential pivot. A container or guest without addresses takes the zone of what it runs on.

A manager can pin an asset's zone in its detail view. Collections and rule changes never overwrite a pinned zone; Decided by the rules hands it back.

## When it collects

- Every day at 03:00 UTC, or the time set under Zones and schedule (also in Settings, AI Assistant).
- When a host is added or changed in Termix, for that host only. Adding needs a Termix version that sends `host.created`; older ones pick new hosts up in the daily run.
- On Collect now.

One collection runs at a time. What arrives during one waits: a host change becomes a run for that host afterwards, or is part of the next full run. Automatic collections need the AI assistant turned on for the server.

Collection runs as one user, the collector, so it reaches exactly the hosts that user can connect to. The first manager to press Collect now becomes the collector; another manager can take over with Collect as me. Nobody can name another user. Automatic runs stop while the collector does not hold `ai.assets.manage`, and the run list says so.

## AI annotations

After each collection, a model annotates the assets that changed. For each host, Proxmox guest and container it writes:

| Field      | What it is                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Role       | What it does, in a short phrase: "k3s control plane + etcd", "DNS (AdGuard)".                        |
| Importance | Critical, high, medium or low, by blast radius, with one sentence on who or what depends on it.      |
| System     | The business system or product it belongs to, or nothing when it serves the infrastructure at large. |

Role and the reason are written in the collector's Termix language, falling back like auto-ops reports do: the language the AI tab saved, then English.

### What the model sees

One compact summary per asset, built the same way every time: Termix name, folder and tags; OS; listening ports with the process (marked when only on loopback); running systemd services without the units every machine has; containers with image, state and published ports; the Kubernetes agent; the Proxmox node and its guests, or the node a host runs on; zone; and its `connects_to` neighbours with ports and processes. A container or guest is listed after the host it runs on and annotated in that host's call, never on its own. External addresses are never sent, only how many a host talks to and on which ports, and there is no environment, command line, uptime or connection count in a summary.

Several hosts go in one call, as many as fit in 40% of what the model's context window leaves for a prompt (at most 24,000 tokens) and as many assets as the reply can hold (at most 40). The window is the one the assistant uses for that model.

### Only what changed

Each asset keeps a fingerprint, a hash of the summary its last annotation saw. A run sends the assets whose summary hash differs, the ones never annotated, and their neighbours one edge away, each with the rest of its host's unit. A collection where nothing changed sends nothing. Annotate everything again, under Zones and schedule, sends every asset.

### Relations the model suggests

The model may suggest `depends_on` between assets it knows, from an asset of the call. Each suggestion has to cite something the collector saw, and it is checked before anything is written:

| Evidence       | Holds when                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| `connects_to`  | The dependent asset, or the host it runs on, has a `connects_to` to the other one or its host, on the port given. |
| `port_mapping` | The other asset is a container publishing that port, and the dependent one connects to it on its host.            |
| `runs_on`      | The dependent asset runs on the other one.                                                                        |

A suggestion with an unknown key, an external address, no evidence or evidence that does not hold is rejected, and the model is told why. Accepted ones become `depends_on` edges with source AI. An asset annotated again loses the AI edges the model did not suggest again; edges a user made are never touched.

### Your edits win

Editing role, importance or system in the asset's panel locks that field: it shows Locked, and annotation runs leave it alone. Unlock hands it back; the value stays until the next run, which picks the asset up and fills it in. Fields the model wrote show AI.

### When and with what

- After each collection, unless Annotate after each collection is off (Zones and schedule, or Settings, AI Assistant). It is on by default.
- On Annotate now.

One run at a time; one asked for during a run waits. A run uses the collector, and needs the AI assistant on for the server, auto-ops not paused, the collector to hold `ai.assets.manage` and to have turned the assistant on. The model is the provider and model picked under Zones and schedule, by default the one the collector's auto-ops tasks use (their saved choice, else their first enabled provider with a default model). Without one, the run fails and says so.

Every call is counted in the usage view as Asset annotation. A run stops at its token budget (Settings, AI Assistant, 200,000 by default), when auto-ops is paused or when the assistant is turned off; what it wrote by then stays. A failed run tells the collector in Alerts. The run list shows each run's assets, errors and tokens.

## Graph

Graph, next to Table, draws the inventory as a force-directed graph. Each zone is a labelled area; a node's size and shade show its importance, grey when it has none. Containers are folded into their host, which shows how many it holds, until Show containers; external addresses appear with Show external addresses. Edge types can be turned off one by one: `runs_on` solid, `depends_on` with an arrow, `connects_to` dashed. Drag to pan, scroll to zoom.

Click a node for its panel: the annotations (editable for managers, with AI and Locked marks), a summary of its facts, and its edges, each peer one click away.

## Impact

Impact, in a node's panel, shows what fails when that asset does, worked out from the edges alone:

- **Directly** and **Through others**: whatever runs on it or depends on it, and on, transitively. A Proxmox node takes its guests, a guest the containers on it, and each of those what depends on them.
- **Only connect to them**: assets with just a `connects_to` to one of those, one hop. A connection is a hint, not proof.

Each comes with the chain of edges down to the failing asset, and the counts by importance. The graph dims everything else. The search stops at 6 hops and 300 assets per class and says when it did. `GET /plugin-api/ai/assets/{id}/impact` returns the same.

## Permissions

| Permission         | What it allows                                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ai.assets.view`   | See the inventory, zones, relations, annotations, the graph, impact and runs. Admins only by default.                                                                              |
| `ai.assets.manage` | Collect now, Annotate now, edit and unlock annotations, edit zone rules, pin zones, change the schedule and annotation settings, and become the collector. Admins only by default. |

Both also need the AI assistant turned on for the server and the user, like the rest of the AI tab.

## Not yet

Attack surface (exposed entry points, DNAT and reverse proxies, cross-zone paths) comes next, then cloud APIs. Adding or removing `depends_on` edges by hand is not in the UI yet.
