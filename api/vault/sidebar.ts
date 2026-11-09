import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "vault/ssh-certificate-signer-api",
    },
    {
      type: "category",
      label: "SSH Certificate Signer",
      items: [
        {
          type: "doc",
          id: "vault/oidc-callback",
          label: "OIDC callback",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "vault/list-signer-profiles",
          label: "List signer profiles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "vault/create-a-signer-profile",
          label: "Create a signer profile",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "vault/update-a-signer-profile",
          label: "Update a signer profile",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "vault/delete-a-signer-profile",
          label: "Delete a signer profile",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
