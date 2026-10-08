import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "step-ca/step-ca-api",
    },
    {
      type: "category",
      label: "Step CA",
      items: [
        {
          type: "doc",
          id: "step-ca/oidc-callback-for-a-step-ca-sign-in",
          label: "OIDC callback for a Step CA sign-in",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
