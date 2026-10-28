---
title: "Kubernetes"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/kubernetes"
description: "Manage Kubernetes clusters from your hosts over SSH, with logs, metrics, YAML and a shell."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Kubernetes/edit/main/docs/index.md"
plugin_id: "kubernetes"
plugin_version: "1.0.1"
plugin_latest: true
---
Kubernetes lets you manage your clusters from Termix: browse workloads, read logs, open a shell in a pod, scale and restart deployments, edit YAML, drain nodes and roll back Helm releases.

It talks to a host over SSH, the same way the terminal does, and runs `kubectl` there. Pick a host that can already reach the cluster, like a control plane node, a bastion or a k3s box. The cluster API never needs to be exposed to Termix, and nothing new is stored in Termix.

## Set up a host

1. Make sure `kubectl get nodes` works as the SSH user in a terminal on the host.
2. Open the host in Manage and turn on Enable Kubernetes in the Kubernetes section.
3. Pick the Kubernetes flavor: kubectl, k3s, MicroK8s or OpenShift.
4. Save. Open the host's menu and pick Kubernetes.

Optional settings:

- Kubeconfig path: a kubeconfig other than the SSH user's default.
- Default context: the context to open with. You can switch contexts in the tab when the kubeconfig has more than one.
- Default namespace: the namespace the tab opens with.
- Run with sudo: runs `sudo -n kubectl`. Use it when only root can read the cluster config, which is the default on k3s and MicroK8s. The SSH user needs passwordless sudo for it.
- Read only: blocks every change on this host for everyone, including pod shells.

## What you can do

- Workloads: Pods, Deployments, StatefulSets, DaemonSets, ReplicaSets, Jobs and CronJobs with their state, readiness and restarts.
- Actions: Scale, restart, roll back, change the image of a workload, suspend or resume a CronJob or Job, run a CronJob now, and delete anything.
- Logs: Read a pod's logs, pick a container, see the previous run after a crash, follow them live and download them. A workload's logs show every pod at once.
- Shell: Open a shell inside a running pod.
- Metrics: CPU and memory per pod, node and container, with a live chart for a pod.
- YAML: View and edit any resource's YAML, or apply new manifests. Check runs a server side dry run and Diff shows what would change before you save.
- Network and config: Services, Ingresses, ConfigMaps, Secrets and volume claims.
- Cluster: Nodes, Namespaces, persistent volumes and Events. Cordon, uncordon and drain nodes.
- Helm: Releases with their history, values and manifest. Roll back to a revision or uninstall.

## Secrets

The list shows a secret's keys, never its values. People with the `kubernetes.secrets` permission can reveal the values on the Data tab. Only admins have it at first, and every reveal is written to the audit log.

## Metrics

CPU and memory come from `kubectl top`, so the cluster needs [metrics-server](https://github.com/kubernetes-sigs/metrics-server). Without it, everything else still works and the metrics columns stay hidden.

## Helm

The Helm section shows up when `helm` is installed on the host. On MicroK8s it uses `microk8s helm`. On k3s it reads `/etc/rancher/k3s/k3s.yaml` unless you set a kubeconfig path.

## Kubernetes panel beside a terminal

Open the Kubernetes button on the right edge of an SSH terminal, or Kubernetes panel in the tab's menu, to see the host's pods next to your shell. Click a pod to open its logs, metrics and shell.

In Settings, Kubernetes you can open the panel with every new terminal, pick its side and size, and hide the edge button. Turn off Show Kubernetes panel in terminals on a host to keep it from opening there.

## Kubernetes clusters card

Add the Kubernetes clusters card in the dashboard's edit mode. It shows ready nodes and running and failing pods on each host with Kubernetes on. Termix checks a few clusters at a time with read only kubectl calls and keeps the result for a minute while the card is on screen. Use the refresh button to check again now.

## With other plugins

Other plugins can list pods, restart and scale workloads through the `kubernetes.workloads` service, and follow pod changes (started, restarted, crash looping, failed, removed) through `kubernetes.events`.

## Troubleshooting

- kubectl is not installed: Run `kubectl version --client` as the SSH user. For k3s and MicroK8s pick the matching flavor.
- Permission denied: The SSH user can't read the kubeconfig. Turn on Run with sudo, or copy the config to `~/.kube/config` and fix its owner.
- Unable to connect to the server: The host can't reach the cluster API, or the kubeconfig points at the wrong address.
- Forbidden: The cluster's own RBAC refused the request. Termix can only do what the kubeconfig's user may do.
- Diff fails: `kubectl diff` needs the `diff` program on the host.

Who can use it is set by the `kubernetes.use` permission. Admins and users have it at first.
