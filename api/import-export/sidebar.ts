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
          id: "import-export/your-hosts-backup-to-object-storage",
          label: "Your hosts backup to object storage",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "import-export/save-the-hosts-backup-setup",
          label: "Save the hosts backup setup",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "import-export/stop-backing-up-to-object-storage",
          label: "Stop backing up to object storage",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "import-export/buckets-of-an-object-storage-login",
          label: "Buckets of an object storage login",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "import-export/back-up-your-hosts-now",
          label: "Back up your hosts now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "import-export/your-backups-in-the-bucket",
          label: "Your backups in the bucket",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "import-export/restore-hosts-from-a-backup",
          label: "Restore hosts from a backup",
          className: "api-method post",
        },
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
          id: "import-export/import-hosts-from-another-app",
          label: "Import hosts from another app",
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
