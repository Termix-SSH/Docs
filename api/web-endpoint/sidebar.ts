import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "web-endpoint/web-endpoint-api",
    },
    {
      type: "category",
      label: "Web Endpoint",
      items: [
        {
          type: "doc",
          id: "web-endpoint/open-a-tunnel-to-a-hosts-web-endpoint",
          label: "Open a tunnel to a host's web endpoint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-endpoint/open-a-hosts-web-endpoint-in-a-desktop-window",
          label: "Open a host's web endpoint in a desktop window",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
