---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/kubernetes/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "kubernetes"
plugin_version: "1.0.1"
plugin_latest: true
---
## 1.0.1

### Added

- Kubernetes clusters dashboard card: ready nodes and running and failing pods on each cluster

### Changed

- The resource and Helm grids fit as many cards as the tab has room for, or pick how many per row next to the grid and list switch

## 1.0.0

### Added

- Browse pods, deployments, statefulsets, daemonsets, replicasets, jobs and cronjobs on a host's cluster over SSH
- Services, ingresses, configmaps, secrets, volume claims, persistent volumes, nodes, namespaces and events
- Scale, restart, roll back and change the image of workloads, with their rollout history
- Suspend, resume and run cronjobs now
- Cordon, uncordon and drain nodes
- Pod logs with a container picker, the previous run, follow mode and download, plus logs for a whole workload
- A shell inside a running pod
- CPU and memory per pod, node and container from metrics-server
- View, edit and apply YAML with a server side dry run and a diff first
- Reveal secret values with the new Reveal Kubernetes secrets permission, written to the audit log
- Helm releases with history, values, manifest, rollback and uninstall
- kubectl, k3s, MicroK8s and OpenShift, with a kubeconfig path, context, namespace and sudo per host
- A read only switch per host that blocks every change
- A Kubernetes panel beside any SSH terminal and a homepage widget
- kubernetes.workloads and kubernetes.events services for other plugins
