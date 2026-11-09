import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "certificates/certificates-api",
    },
    {
      type: "category",
      label: "Certificates",
      items: [
        {
          type: "doc",
          id: "certificates/certificates-on-every-host",
          label: "Certificates on every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "certificates/certificate-tools-on-a-host",
          label: "Certificate tools on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "certificates/certificates-from-certbot-and-acme-sh",
          label: "Certificates from certbot and acme.sh",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "certificates/read-a-certificate-file-or-a-tls-servers-chain",
          label: "Read a certificate file or a TLS server's chain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "certificates/get-a-new-certificate",
          label: "Get a new certificate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "certificates/renew-one-certificate-or-all-of-them",
          label: "Renew one certificate or all of them",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "certificates/revoke-and-remove-a-certificate",
          label: "Revoke and remove a certificate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "certificates/stop-managing-a-certificate-without-revoking-it",
          label: "Stop managing a certificate without revoking it",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "certificates/install-certbot",
          label: "Install certbot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "certificates/get-alerts-before-certificates-on-this-host-expire",
          label: "Get alerts before certificates on this host expire",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
