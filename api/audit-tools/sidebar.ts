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
      ],
    },
  ],
};

export default sidebar.apisidebar;
