import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "kubernetes/kubernetes-api",
    },
    {
      type: "category",
      label: "Kubernetes",
      items: [
        {
          type: "doc",
          id: "kubernetes/health-of-every-cluster",
          label: "Health of every cluster",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/establish-ssh-session-for-kubernetes",
          label: "Establish SSH session for Kubernetes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/answer-a-verification-prompt",
          label: "Answer a verification prompt",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/continue-after-a-browser-sign-in",
          label: "Continue after a browser sign-in",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/disconnect-ssh-session",
          label: "Disconnect SSH session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/keep-ssh-session-alive",
          label: "Keep SSH session alive",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/check-ssh-session-status",
          label: "Check SSH session status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/validate-kubectl-and-the-cluster",
          label: "Validate kubectl and the cluster",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/list-kubeconfig-contexts",
          label: "List kubeconfig contexts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/list-namespaces",
          label: "List namespaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/list-resources-of-a-kind",
          label: "List resources of a kind",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/get-one-resource",
          label: "Get one resource",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/delete-a-resource",
          label: "Delete a resource",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "kubernetes/get-a-resource-as-yaml",
          label: "Get a resource as YAML",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/events-for-a-resource",
          label: "Events for a resource",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/pods-of-a-workload-service-or-node",
          label: "Pods of a workload, service or node",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/rollout-history",
          label: "Rollout history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/run-an-action-on-a-resource",
          label: "Run an action on a resource",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/pod-cpu-and-memory",
          label: "Pod CPU and memory",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/node-cpu-and-memory",
          label: "Node CPU and memory",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/container-cpu-and-memory-of-a-pod",
          label: "Container CPU and memory of a pod",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/check-a-manifest",
          label: "Check a manifest",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/diff-a-manifest",
          label: "Diff a manifest",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/apply-a-manifest",
          label: "Apply a manifest",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/reveal-a-secret",
          label: "Reveal a secret",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/read-logs",
          label: "Read logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/list-helm-releases",
          label: "List Helm releases",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/helm-release-history",
          label: "Helm release history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/helm-release-values",
          label: "Helm release values",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/helm-release-manifest",
          label: "Helm release manifest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "kubernetes/roll-back-a-helm-release",
          label: "Roll back a Helm release",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "kubernetes/uninstall-a-helm-release",
          label: "Uninstall a Helm release",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
