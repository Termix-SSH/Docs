import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "workspaces/workspaces-api",
    },
    {
      type: "category",
      label: "Workspaces",
      items: [
        {
          type: "doc",
          id: "workspaces/list-the-current-users-saved-workspaces",
          label: "List the current user's saved workspaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workspaces/save-the-current-tab-arrangement-as-a-new-named-workspace",
          label: "Save the current tab arrangement as a new named workspace",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workspaces/fetch-the-auto-maintained-last-session-workspace",
          label: "Fetch the auto-maintained 'Last Session' workspace",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "workspaces/upsert-the-auto-maintained-last-session-workspace",
          label: "Upsert the auto-maintained 'Last Session' workspace",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "workspaces/rename-or-recolor-a-workspace",
          label: "Rename or recolor a workspace",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "workspaces/delete-a-workspace",
          label: "Delete a workspace",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "workspaces/overwrite-a-workspaces-saved-tab-arrangement-with-a-new-payload",
          label: "Overwrite a workspace's saved tab arrangement with a new payload",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "workspaces/duplicate-a-workspaces-content-and-color-icon-under-a-new-name",
          label: "Duplicate a workspace's content and color/icon under a new name",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workspaces/mark-a-workspace-as-the-restore-on-login-default",
          label: "Mark a workspace as the restore-on-login default",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workspaces/remove-a-workspace-as-the-restore-on-login-default",
          label: "Remove a workspace as the restore-on-login default",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "workspaces/fetch-a-workspace-to-apply-and-mark-it-as-just-used",
          label: "Fetch a workspace to apply and mark it as just used",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
