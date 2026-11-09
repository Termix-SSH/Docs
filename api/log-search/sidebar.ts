import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "log-search/log-search-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "log-search/hosts-the-signed-in-user-can-search",
          label: "Hosts the signed in user can search",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "log-search/search-logs-on-many-hosts",
          label: "Search logs on many hosts",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
