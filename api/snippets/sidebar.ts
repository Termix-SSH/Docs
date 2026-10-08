import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "snippets/snippets-api",
    },
    {
      type: "category",
      label: "Snippets",
      items: [
        {
          type: "doc",
          id: "snippets/list-the-current-users-snippet-folders",
          label: "List the current user's snippet folders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "snippets/create-a-snippet-folder",
          label: "Create a snippet folder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "snippets/update-a-snippet-folders-color-or-icon",
          label: "Update a snippet folder's color or icon",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "snippets/rename-a-snippet-folder",
          label: "Rename a snippet folder",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "snippets/delete-a-snippet-folder",
          label: "Delete a snippet folder",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "snippets/bulk-update-the-order-and-folder-of-snippets",
          label: "Bulk update the order and folder of snippets",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "snippets/run-a-snippet-on-a-host-over-ssh",
          label: "Run a snippet on a host over SSH",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "snippets/export-every-snippet-and-folder-as-json",
          label: "Export every snippet and folder as JSON",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "snippets/import-snippets-and-folders-from-json",
          label: "Import snippets and folders from JSON",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "snippets/list-the-current-users-visible-snippets",
          label: "List the current user's visible snippets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "snippets/create-a-snippet",
          label: "Create a snippet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "snippets/list-snippets-shared-with-the-current-user",
          label: "List snippets shared with the current user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "snippets/get-one-snippet",
          label: "Get one snippet",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "snippets/update-a-snippet",
          label: "Update a snippet",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "snippets/delete-a-snippet",
          label: "Delete a snippet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "snippets/users-the-caller-may-share-snippets-with",
          label: "Users the caller may share snippets with",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "snippets/non-system-roles-the-caller-may-share-snippets-with",
          label: "Non-system roles the caller may share snippets with",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "snippets/share-a-snippet-with-a-user-or-role",
          label: "Share a snippet with a user or role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "snippets/share-every-owned-snippet-in-a-folder",
          label: "Share every owned snippet in a folder",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "snippets/revoke-a-snippet-share",
          label: "Revoke a snippet share",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "snippets/list-who-a-snippet-is-shared-with",
          label: "List who a snippet is shared with",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
