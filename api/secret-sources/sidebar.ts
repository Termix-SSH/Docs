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
          id: "secret-sources/create-a-secret-source",
          label: "Create a secret source",
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
          id: "secret-sources/check-that-a-secret-reference-resolves-without-returning-the-secret",
          label: "Check that a secret reference resolves, without returning the secret",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "secret-sources/check-that-the-source-is-reachable-and-the-token-is-accepted",
          label: "Check that the source is reachable and the token is accepted",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "secret-sources/items-to-pick-from-a-secret-source",
          label: "Items to pick from a secret source",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "secret-sources/whether-the-callers-own-vault-for-this-source-is-unlocked",
          label: "Whether the caller's own vault for this source is unlocked",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "secret-sources/unlock-the-callers-own-vault-for-this-source",
          label: "Unlock the caller's own vault for this source",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "secret-sources/lock-the-callers-own-vault-for-this-source",
          label: "Lock the caller's own vault for this source",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "secret-sources/start-an-sso-sign-in-to-the-callers-own-vault",
          label: "Start an SSO sign in to the caller's own vault",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
