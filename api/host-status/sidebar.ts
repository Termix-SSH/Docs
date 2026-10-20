import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "host-status/host-status-api",
    },
    {
      type: "category",
      label: "Host Status",
      items: [
        {
          type: "doc",
          id: "host-status/get-host-statuses",
          label: "Get host statuses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-status/restart-status-checks",
          label: "Restart status checks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "host-status/get-status-check-settings",
          label: "Get status check settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "host-status/update-status-check-settings",
          label: "Update status check settings",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
