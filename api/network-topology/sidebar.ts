import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "network-topology/network-topology-api",
    },
    {
      type: "category",
      label: "Network Topology",
      items: [
        {
          type: "doc",
          id: "network-topology/get-network-topology-for-authenticated-user",
          label: "Get network topology for authenticated user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "network-topology/save-network-topology-for-authenticated-user",
          label: "Save network topology for authenticated user",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
