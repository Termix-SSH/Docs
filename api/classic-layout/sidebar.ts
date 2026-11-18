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
    {
      type: "category",
      label: "Interface defaults",
      items: [
        {
          type: "doc",
          id: "classic-layout/get-interface-defaults",
          label: "Get interface defaults",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "classic-layout/set-interface-defaults",
          label: "Set interface defaults",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
