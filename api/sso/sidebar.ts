import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "sso/single-sign-on-api",
    },
    {
      type: "category",
      label: "SSO",
      items: [
        {
          type: "doc",
          id: "sso/start-an-sso-login-in-the-browser",
          label: "Start an SSO login in the browser",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/sso-callback",
          label: "SSO callback",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/sso-callback-form-post",
          label: "SSO callback (form post)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/oidc-back-channel-logout",
          label: "OIDC back-channel logout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/default-providers-public-configuration",
          label: "Default provider's public configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/list-sso-providers",
          label: "List SSO providers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/add-an-sso-provider",
          label: "Add an SSO provider",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/update-an-sso-provider",
          label: "Update an SSO provider",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "sso/delete-an-sso-provider",
          label: "Delete an SSO provider",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
