import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "remote-desktop/remote-desktop-api",
    },
    {
      type: "category",
      label: "Remote Desktop",
      items: [
        {
          type: "doc",
          id: "remote-desktop/look-up-guacds-id-for-a-session",
          label: "Look up guacd's id for a session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/mint-a-connection-token-for-an-address",
          label: "Mint a connection token for an address",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "remote-desktop/mint-a-connection-token-for-a-saved-host",
          label: "Mint a connection token for a saved host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "remote-desktop/read-a-hosts-guacd-address",
          label: "Read a host's guacd address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/set-a-hosts-guacd-address",
          label: "Set a host's guacd address",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "remote-desktop/remote-desktop-status",
          label: "Remote Desktop status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/whether-the-native-rdp-client-can-be-opened",
          label: "Whether the native RDP client can be opened",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/open-the-native-rdp-client",
          label: "Open the native RDP client",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
