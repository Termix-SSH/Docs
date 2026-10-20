import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "import-export/import-and-export-api",
    },
    {
      type: "category",
      label: "Import and Export",
      items: [
        {
          type: "doc",
          id: "import-export/import-hosts-from-termix-json-rows",
          label: "Import hosts from Termix JSON rows",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "import-export/import-hosts-from-an-open-ssh-config-file",
          label: "Import hosts from an OpenSSH config file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "import-export/export-all-of-the-signed-in-users-hosts",
          label: "Export all of the signed-in user's hosts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "import-export/export-one-host-with-its-passwords-and-keys",
          label: "Export one host with its passwords and keys",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
