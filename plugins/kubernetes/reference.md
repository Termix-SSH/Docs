---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/kubernetes/reference"
custom_edit_url: null
plugin_id: "kubernetes"
plugin_version: "1.1.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the Kubernetes panel with new terminals | boolean | `false` | Show the Kubernetes panel beside every SSH terminal that has Kubernetes on. You can still open and close it from the button on the right edge. |
| Kubernetes panel side | select | `"right"` | Where the Kubernetes panel sits next to a terminal. |
| Kubernetes panel size | number | `380` | Width in pixels, or height when it is at the bottom. You can also drag its edge. |
| Show the panel button | boolean | `true` | Show a small button on the right edge of a terminal that opens the Kubernetes panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable Kubernetes | boolean | `false` | Run kubectl on this host over SSH to manage the cluster it can reach. |
| Kubernetes flavor | select | `"kubectl"` | Which command runs kubectl on this host. |
| Kubeconfig path | string |  | Leave empty to use the default for the SSH user (~/.kube/config or KUBECONFIG). |
| Default context | string |  | Leave empty to use the current context in the kubeconfig. You can switch contexts in the Kubernetes tab. |
| Default namespace | string |  | The namespace the Kubernetes tab opens with. |
| Run with sudo | boolean | `false` | Run kubectl with sudo -n, for k3s and MicroK8s setups where only root can read the cluster config. The SSH user needs passwordless sudo. |
| Alert on cluster problems | boolean | `false` | Send an alert when a node is not ready or a pod is failing. |
| Read only | boolean | `false` | Only look. Blocks scaling, restarts, deletes, YAML changes, Helm changes and pod shells for everyone on this host. |
| Show Kubernetes panel in terminals | boolean | `true` | Allow the Kubernetes panel to open beside SSH terminals on this host. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `kubernetes.use` | admin, user | Open the Kubernetes view and pod shells on hosts with Kubernetes turned on. |
| `kubernetes.secrets` | admin | Show the decoded values of Kubernetes secrets. Every reveal is written to the audit log. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `kubernetes.list-pods`<br />List pods | A host | Read only |  |
| `kubernetes.list-workloads`<br />List workloads | A host | Read only |  |
| `kubernetes.summary`<br />Failing pods | A host | Read only |  |
| `kubernetes.restart-workload`<br />Restart workload | One item on a host | Changes |  |
| `kubernetes.scale-workload`<br />Scale workload | One item on a host | Changes | `replicas` |
| `kubernetes.delete-pod`<br />Delete pod | One item on a host | Destructive |  |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |
| `kv:own` | Low | Remember small settings. Kept separate from other plugins. |

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `kubernetes.workloads` | 1.0.0 | `kubernetes.use` |
| `kubernetes.events` | 1.0.0 | `kubernetes.use` |

## API

The plugin's HTTP routes are in the [API reference](/api/kubernetes/kubernetes-api).

## Platforms

Linux, Windows, macOS

