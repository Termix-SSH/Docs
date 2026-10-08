import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "wake-on-lan/wake-on-lan-api",
    },
    {
      type: "category",
      label: "Wake-on-LAN",
      items: [
        {
          type: "doc",
          id: "wake-on-lan/send-a-wake-on-lan-magic-packet-to-a-host",
          label: "Send a Wake-on-LAN magic packet to a host",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
