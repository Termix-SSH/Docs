import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "hosts-config/hosts-config-api",
    },
    {
      type: "category",
      label: "Hosts Config",
      items: [
        {
          type: "doc",
          id: "hosts-config/hosts-file-status",
          label: "Hosts file status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "hosts-config/reload-the-hosts-file-now",
          label: "Reload the hosts file now",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
