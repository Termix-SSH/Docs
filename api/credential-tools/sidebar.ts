import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "credential-tools/credential-tools-api",
    },
    {
      type: "category",
      label: "Credential Tools",
      items: [
        {
          type: "doc",
          id: "credential-tools/detect-ssh-key-type",
          label: "Detect SSH key type",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "credential-tools/detect-ssh-public-key-type",
          label: "Detect SSH public key type",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "credential-tools/check-that-an-ssh-key-pair-matches",
          label: "Check that an SSH key pair matches",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "credential-tools/generate-an-ssh-key-pair",
          label: "Generate an SSH key pair",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "credential-tools/get-the-public-key-for-a-private-key",
          label: "Get the public key for a private key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "credential-tools/deploy-an-ssh-key-to-a-host",
          label: "Deploy an SSH key to a host",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
