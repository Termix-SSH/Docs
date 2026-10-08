import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "acme-ssl/acme-certificates-api",
    },
    {
      type: "category",
      label: "ACME Certificates",
      items: [
        {
          type: "doc",
          id: "acme-ssl/acme-certificate-status",
          label: "ACME certificate status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "acme-ssl/request-a-certificate-now",
          label: "Request a certificate now",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
