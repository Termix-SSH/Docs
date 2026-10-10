import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "proxmox/proxmox-api",
    },
    {
      type: "category",
      label: "Proxmox",
      items: [
        {
          type: "doc",
          id: "proxmox/get-cached-proxmox-node-stats-for-a-host",
          label: "Get cached Proxmox node stats for a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "proxmox/start-proxmox-stats-collection",
          label: "Start Proxmox stats collection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "proxmox/stop-proxmox-stats-collection",
          label: "Stop Proxmox stats collection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "proxmox/update-proxmox-stats-viewer-heartbeat",
          label: "Update Proxmox stats viewer heartbeat",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "proxmox/get-historical-proxmox-node-stats-for-a-host",
          label: "Get historical Proxmox node stats for a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "proxmox/sync-proxmox-guests-for-a-host",
          label: "Sync Proxmox guests for a host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "proxmox/discover-the-guests-on-a-proxmox-node-with-progress",
          label: "Discover the guests on a Proxmox node, with progress",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "proxmox/discover-the-guests-on-a-proxmox-node",
          label: "Discover the guests on a Proxmox node",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "proxmox/import-discovered-proxmox-guests-as-hosts",
          label: "Import discovered Proxmox guests as hosts",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
