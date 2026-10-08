import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "telemetry/usage-statistics-api",
    },
    {
      type: "category",
      label: "Usage Statistics",
      items: [
        {
          type: "doc",
          id: "telemetry/usage-statistics-status",
          label: "Usage statistics status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "telemetry/preview-the-next-report",
          label: "Preview the next report",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "telemetry/send-usage-statistics-now",
          label: "Send usage statistics now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "telemetry/reset-the-instance-id",
          label: "Reset the instance ID",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "telemetry/whether-to-count-this-users-feature-usage",
          label: "Whether to count this user's feature usage",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "telemetry/add-feature-usage-counts",
          label: "Add feature usage counts",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
