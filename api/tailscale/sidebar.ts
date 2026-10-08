import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "tailscale/tailscale-api",
    },
    {
      type: "category",
      label: "Tailscale",
      items: [
        {
          type: "doc",
          id: "tailscale/list-tailscale-devices",
          label: "List Tailscale devices",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tailscale/get-tailscale-status-and-i-ps-for-a-host",
          label: "Get Tailscale status and IPs for a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tailscale/connect-or-disconnect-tailscale-on-a-host",
          label: "Connect or disconnect Tailscale on a host",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
