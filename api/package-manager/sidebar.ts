import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "package-manager/packages-api",
    },
    {
      type: "category",
      label: "Packages",
      items: [
        {
          type: "doc",
          id: "package-manager/pending-updates-on-every-host",
          label: "Pending updates on every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "package-manager/package-manager-status-on-a-host",
          label: "Package manager status on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "package-manager/packages-with-an-update",
          label: "Packages with an update",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "package-manager/installed-packages",
          label: "Installed packages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "package-manager/search-available-packages",
          label: "Search available packages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "package-manager/recent-package-changes",
          label: "Recent package changes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "package-manager/package-repositories",
          label: "Package repositories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "package-manager/change-packages",
          label: "Change packages",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
