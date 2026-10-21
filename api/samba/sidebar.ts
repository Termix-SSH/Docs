import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "samba/samba-shares-api",
    },
    {
      type: "category",
      label: "Samba",
      items: [
        {
          type: "doc",
          id: "samba/samba-status-on-a-host",
          label: "Samba status on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "samba/install-samba",
          label: "Install Samba",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/control-the-samba-service",
          label: "Control the Samba service",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/list-shares",
          label: "List shares",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "samba/create-a-share",
          label: "Create a share",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/update-a-share",
          label: "Update a share",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "samba/delete-a-share",
          label: "Delete a share",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "samba/folder-permissions-of-a-share",
          label: "Folder permissions of a share",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "samba/change-folder-permissions-of-a-share",
          label: "Change folder permissions of a share",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "samba/list-samba-users-and-groups",
          label: "List Samba users and groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "samba/add-a-samba-user",
          label: "Add a Samba user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/set-a-samba-password",
          label: "Set a Samba password",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/enable-or-disable-a-samba-user",
          label: "Enable or disable a Samba user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/remove-a-samba-user",
          label: "Remove a Samba user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "samba/create-a-linux-group",
          label: "Create a Linux group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/add-or-remove-a-group-member",
          label: "Add or remove a group member",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/connected-users-and-open-files",
          label: "Connected users and open files",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "samba/disconnect-a-session",
          label: "Disconnect a session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/read-the-config",
          label: "Read the config",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "samba/replace-the-managed-config",
          label: "Replace the managed config",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "samba/test-the-config",
          label: "Test the config",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "samba/samba-logs",
          label: "Samba logs",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
