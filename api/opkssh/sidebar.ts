import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "opkssh/opkssh-api",
    },
    {
      type: "category",
      label: "OPKSSH",
      items: [
        {
          type: "doc",
          id: "opkssh/get-the-cached-opkssh-certificate-status-for-a-host",
          label: "Get the cached OPKSSH certificate status for a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opkssh/forget-the-cached-opkssh-certificate-for-a-host",
          label: "Forget the cached OPKSSH certificate for a host",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "opkssh/proxy-the-opkssh-provider-chooser-page-and-its-resources",
          label: "Proxy the OPKSSH provider chooser page and its resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opkssh/o-auth-callback-from-the-identity-provider-for-an-opkssh-sign-in",
          label: "OAuth callback from the identity provider for an OPKSSH sign-in",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opkssh/proxy-opkss-hs-local-callback-listener-for-one-sign-in",
          label: "Proxy OPKSSH's local callback listener for one sign-in",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
