import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "user-manager/users-api",
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "user-manager/user-management-status-on-a-host",
          label: "User management status on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "user-manager/users-and-groups",
          label: "Users and groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "user-manager/create-a-user",
          label: "Create a user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "user-manager/last-login-and-ssh-keys-of-a-user",
          label: "Last login and SSH keys of a user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "user-manager/change-a-users-full-name-shell-or-groups",
          label: "Change a user's full name, shell or groups",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "user-manager/delete-a-user",
          label: "Delete a user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "user-manager/set-a-users-password",
          label: "Set a user's password",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "user-manager/lock-or-unlock-an-account",
          label: "Lock or unlock an account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "user-manager/make-a-user-pick-a-new-password-at-the-next-login",
          label: "Make a user pick a new password at the next login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "user-manager/give-or-take-sudo-rights",
          label: "Give or take sudo rights",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "user-manager/add-an-ssh-key-to-a-user",
          label: "Add an SSH key to a user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "user-manager/remove-an-ssh-key-from-a-user",
          label: "Remove an SSH key from a user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "user-manager/who-is-logged-in",
          label: "Who is logged in",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "user-manager/create-a-group",
          label: "Create a group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "user-manager/delete-a-group",
          label: "Delete a group",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "user-manager/add-a-user-to-a-group-or-remove-them",
          label: "Add a user to a group or remove them",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
