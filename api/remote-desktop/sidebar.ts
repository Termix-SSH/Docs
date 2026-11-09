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
          id: "remote-desktop/list-my-open-remote-desktop-sessions",
          label: "List my open remote desktop sessions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/look-up-guacds-id-for-a-session",
          label: "Look up guacd's id for a session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/whether-a-session-can-be-recorded-and-is-recording",
          label: "Whether a session can be recorded and is recording",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/start-or-stop-recording-a-session",
          label: "Start or stop recording a session",
          className: "api-method post",
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
        {
          type: "doc",
          id: "remote-desktop/check-the-moonlight-web-server",
          label: "Check the Moonlight Web server",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/list-moonlight-web-p-cs",
          label: "List Moonlight Web PCs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/add-a-sunshine-pc-to-moonlight-web",
          label: "Add a Sunshine PC to Moonlight Web",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "remote-desktop/list-the-apps-of-a-moonlight-web-pc",
          label: "List the apps of a Moonlight Web PC",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/start-pairing-a-moonlight-web-pc",
          label: "Start pairing a Moonlight Web PC",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "remote-desktop/read-a-pairing-job",
          label: "Read a pairing job",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "remote-desktop/get-the-stream-address-for-a-host",
          label: "Get the stream address for a host",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
