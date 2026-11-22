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
          id: "log-search/the-signed-in-users-saved-searches",
          label: "The signed in user's saved searches",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "log-search/save-a-search",
          label: "Save a search",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "log-search/change-a-saved-search",
          label: "Change a saved search",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "log-search/delete-a-saved-search",
          label: "Delete a saved search",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "log-search/run-a-saved-search-now",
          label: "Run a saved search now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "log-search/the-signed-in-users-alert-channels",
          label: "The signed in user's alert channels",
          className: "api-method get",
        },
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
        {
          type: "doc",
          id: "log-search/stop-a-running-search",
          label: "Stop a running search",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
