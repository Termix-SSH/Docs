import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "classic-layout/classic-layout-api",
    },
    {
      type: "category",
      label: "Branding",
      items: [
        {
          type: "doc",
          id: "classic-layout/get-branding",
          label: "Get branding",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "classic-layout/update-branding",
          label: "Update branding",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
