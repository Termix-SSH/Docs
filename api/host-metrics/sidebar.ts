import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "host-metrics/host-metrics-api",
    },
    {
      type: "category",
      label: "Host Metrics",
      items: [
        {
          type: "doc",
          id: "host-metrics/export-layouts-health-checks-templates-and-history",
          label: "Export layouts, health checks, templates and history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/import-layouts-health-checks-templates-and-history",
          label: "Import layouts, health checks, templates and history",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/latest-cpu-memory-and-disk-for-every-host",
          label: "Latest CPU, memory and disk for every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/latest-dashboard-health-check-results-for-every-host",
          label: "Latest dashboard health check results for every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/get-host-metrics",
          label: "Get host metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/start-metrics-collection",
          label: "Start metrics collection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/stop-metrics-collection",
          label: "Stop metrics collection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/submit-a-totp-code",
          label: "Submit a TOTP code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/keep-a-metrics-viewer-alive",
          label: "Keep a metrics viewer alive",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/register-a-metrics-viewer",
          label: "Register a metrics viewer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/unregister-a-metrics-viewer",
          label: "Unregister a metrics viewer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/get-metrics-history",
          label: "Get metrics history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/get-the-host-metrics-layout-for-a-host",
          label: "Get the Host Metrics layout for a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/save-the-host-metrics-layout-for-a-host",
          label: "Save the Host Metrics layout for a host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/list-the-acting-users-dashboard-layout-templates",
          label: "List the acting user's dashboard layout templates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/save-a-personal-named-dashboard-layout-template",
          label: "Save a personal named dashboard layout template",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/delete-a-personal-template-without-changing-host-layouts",
          label: "Delete a personal template without changing host layouts",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "host-metrics/list-accessible-hosts-by-name-and-folder-without-credentials",
          label: "List accessible hosts by name and folder, without credentials",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/replace-the-acting-users-layouts-on-selected-accessible-hosts",
          label: "Replace the acting user's layouts on selected accessible hosts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/list-the-processes-using-the-most-memory",
          label: "List the processes using the most memory",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/list-mounted-filesystems-and-their-usage",
          label: "List mounted filesystems and their usage",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/lightweight-live-cpu-memory-network-process-and-gpu-sample-linux",
          label: "Lightweight live CPU, memory, network, process and GPU sample (Linux)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/detect-available-management-tooling-on-a-host",
          label: "Detect available management tooling on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/get-the-hosts-health-checks-and-their-last-results",
          label: "Get the host's health checks and their last results",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-metrics/save-the-hosts-health-checks",
          label: "Save the host's health checks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-metrics/run-the-hosts-health-checks-now",
          label: "Run the host's health checks now",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
