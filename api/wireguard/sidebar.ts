import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "wireguard/wireguard-api",
    },
    {
      type: "category",
      label: "WireGuard",
      items: [
        {
          type: "doc",
          id: "wireguard/wire-guard-state-on-every-host",
          label: "WireGuard state on every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "wireguard/wire-guard-status-on-a-host",
          label: "WireGuard status on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "wireguard/install-wire-guard",
          label: "Install WireGuard",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wireguard/wire-guard-logs",
          label: "WireGuard logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "wireguard/list-interfaces",
          label: "List interfaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "wireguard/create-an-interface",
          label: "Create an interface",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wireguard/update-an-interface",
          label: "Update an interface",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "wireguard/delete-an-interface",
          label: "Delete an interface",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "wireguard/control-an-interface",
          label: "Control an interface",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wireguard/read-an-interface-config",
          label: "Read an interface config",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "wireguard/save-an-interface-config",
          label: "Save an interface config",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "wireguard/list-clients",
          label: "List clients",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "wireguard/add-a-client",
          label: "Add a client",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wireguard/remove-a-client",
          label: "Remove a client",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "wireguard/turn-a-client-on-or-off",
          label: "Turn a client on or off",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wireguard/give-a-client-new-keys",
          label: "Give a client new keys",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wireguard/get-a-client-config",
          label: "Get a client config",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
