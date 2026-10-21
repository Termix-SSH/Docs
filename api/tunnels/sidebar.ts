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
          id: "tunnels/list-saved-tunnels",
          label: "List saved tunnels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/save-the-tunnels-of-a-host",
          label: "Save the tunnels of a host",
          className: "api-method put",
        },
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
        {
          type: "doc",
          id: "tunnels/list-gateways",
          label: "List gateways",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/create-a-gateway",
          label: "Create a gateway",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/check-a-host-for-gateway-use",
          label: "Check a host for gateway use",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/install-wire-guard-and-nftables-on-a-host",
          label: "Install WireGuard and nftables on a host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/get-a-gateway",
          label: "Get a gateway",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/change-gateway-settings",
          label: "Change gateway settings",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "tunnels/remove-a-gateway",
          label: "Remove a gateway",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "tunnels/apply-a-gateway-again",
          label: "Apply a gateway again",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/check-a-gateway-now",
          label: "Check a gateway now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/scan-for-listening-ports",
          label: "Scan for listening ports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/add-a-forwarded-port",
          label: "Add a forwarded port",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/change-a-forwarded-port",
          label: "Change a forwarded port",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "tunnels/remove-a-forwarded-port",
          label: "Remove a forwarded port",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "tunnels/get-this-computers-client-tunnels",
          label: "Get this computer's client tunnels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/save-this-computers-client-tunnels",
          label: "Save this computer's client tunnels",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "tunnels/check-a-local-port",
          label: "Check a local port",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/get-client-tunnel-statuses",
          label: "Get client tunnel statuses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/suggest-a-preset-name",
          label: "Suggest a preset name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tunnels/start-a-client-tunnel",
          label: "Start a client tunnel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/test-a-client-tunnel",
          label: "Test a client tunnel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/stop-a-client-tunnel",
          label: "Stop a client tunnel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/start-the-auto-start-client-tunnels",
          label: "Start the auto-start client tunnels",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tunnels/answer-a-sign-in-prompt",
          label: "Answer a sign-in prompt",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
