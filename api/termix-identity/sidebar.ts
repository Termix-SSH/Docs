import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "termix-identity/termix-identity-api",
    },
    {
      type: "category",
      label: "Termix ID",
      items: [
        {
          type: "doc",
          id: "termix-identity/public-ca-key-for-a-handle",
          label: "Public CA key for a handle",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "termix-identity/published-keys-for-a-handle",
          label: "Published keys for a handle",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "termix-identity/published-keys-of-one-algorithm-for-a-handle",
          label: "Published keys of one algorithm for a handle",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "termix-identity/get-the-current-users-termix-id-and-keys",
          label: "Get the current user's Termix ID and keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "termix-identity/check-if-a-handle-is-available",
          label: "Check if a handle is available",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "termix-identity/create-a-termix-id",
          label: "Create a Termix ID",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "termix-identity/update-termix-id-handle-or-description",
          label: "Update Termix ID handle or description",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "termix-identity/delete-termix-id-with-its-keys-and-ca",
          label: "Delete Termix ID with its keys and CA",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "termix-identity/publish-a-public-key",
          label: "Publish a public key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "termix-identity/generate-a-new-key-pair-and-publish-the-public-key",
          label: "Generate a new key pair and publish the public key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "termix-identity/update-key-metadata-enabled-state-or-label",
          label: "Update key metadata (enabled state or label)",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "termix-identity/revoke-and-delete-a-published-key",
          label: "Revoke and delete a published key",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "termix-identity/get-the-current-users-certificate-authority",
          label: "Get the current user's certificate authority",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "termix-identity/create-a-certificate-authority",
          label: "Create a certificate authority",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "termix-identity/delete-the-certificate-authority",
          label: "Delete the certificate authority",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "termix-identity/rotate-the-certificate-authority-revokes-all-issued-certificates",
          label: "Rotate the certificate authority (revokes all issued certificates)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "termix-identity/issue-an-ssh-certificate-for-a-key-ed-25519-only",
          label: "Issue an SSH certificate for a key (Ed25519 only)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "termix-identity/credential-ids-with-at-least-one-enabled-published-key",
          label: "Credential ids with at least one enabled published key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "termix-identity/the-users-ssh-key-credentials-that-can-be-published",
          label: "The user's SSH key credentials that can be published",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
