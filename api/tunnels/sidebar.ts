import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "tunnels/tunnels-api",
    },
    {
      type: "category",
      label: "Tunnels",
      items: [
        {
          type: "doc",
          id: "tunnels/get-tunnel-statuses",
          label: "Get tunnel statuses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/stream-tunnel-statuses",
          label: "Stream tunnel statuses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/get-one-tunnels-status",
          label: "Get one tunnel's status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/connect-a-tunnel",
          label: "Connect a tunnel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/disconnect-a-tunnel",
          label: "Disconnect a tunnel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/cancel-a-tunnels-connect-or-retry",
          label: "Cancel a tunnel's connect or retry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/list-client-tunnel-presets",
          label: "List client tunnel presets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/create-a-client-tunnel-preset",
          label: "Create a client tunnel preset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/update-a-client-tunnel-preset",
          label: "Update a client tunnel preset",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "tunnels/delete-a-client-tunnel-preset",
          label: "Delete a client tunnel preset",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
