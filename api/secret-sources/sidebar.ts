import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "secret-sources/secret-sources-api",
    },
    {
      type: "category",
      label: "Secret Sources",
      items: [
        {
          type: "doc",
          id: "secret-sources/list-secret-sources-visible-to-the-caller-own-shared",
          label: "List secret sources visible to the caller (own + shared)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "secret-sources/create-a-secret-source-1-password-connect",
          label: "Create a secret source (1Password Connect)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "secret-sources/update-a-secret-source-owner-only-omit-token-to-keep-it",
          label: "Update a secret source (owner only; omit token to keep it)",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "secret-sources/delete-a-secret-source-owner-only",
          label: "Delete a secret source (owner only)",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "secret-sources/check-that-the-source-is-reachable-and-the-token-is-accepted",
          label: "Check that the source is reachable and the token is accepted",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
