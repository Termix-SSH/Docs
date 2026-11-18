import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "audit-tools/audit-tools-api",
    },
    {
      type: "category",
      label: "Audit Tools",
      items: [
        {
          type: "doc",
          id: "audit-tools/export-the-audit-log",
          label: "Export the audit log",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "audit-tools/last-audit-log-check",
          label: "Last audit log check",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "audit-tools/check-the-audit-log-now",
          label: "Check the audit log now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "audit-tools/compare-a-saved-head",
          label: "Compare a saved head",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
