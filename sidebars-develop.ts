import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  develop: [
    "index",
    "quick-start",
    "project-layout",
    "how-it-works",
    {
      type: "category",
      label: "Building",
      collapsed: false,
      items: [
        "manifest",
        "backend",
        "frontend",
        "ui",
        "database",
        "settings",
        "permissions",
        "http-and-websockets",
        "services",
        "auth",
        "more-extension-points",
        "i18n",
      ],
    },
    {
      type: "category",
      label: "Shipping",
      collapsed: false,
      items: ["testing", "docs", "releasing", "registries"],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        "reference/manifest",
        "reference/capabilities",
        "reference/cli",
        "reference/sdk-changelog",
      ],
    },
  ],
};

export default sidebars;
