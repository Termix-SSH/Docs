import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "vault/hashicorp-vault-api",
    },
    {
      type: "category",
      label: "Vault",
      items: [
        {
          type: "doc",
          id: "vault/vault-oidc-callback",
          label: "Vault OIDC callback",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "vault/list-vault-profiles",
          label: "List Vault profiles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "vault/create-a-vault-profile",
          label: "Create a Vault profile",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "vault/update-a-vault-profile",
          label: "Update a Vault profile",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "vault/delete-a-vault-profile",
          label: "Delete a Vault profile",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
