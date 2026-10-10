import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "webauthn/passkeys-api",
    },
    {
      type: "category",
      label: "Passkeys",
      items: [
        {
          type: "doc",
          id: "webauthn/list-passkeys",
          label: "List passkeys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "webauthn/start-passkey-registration",
          label: "Start passkey registration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "webauthn/finish-passkey-registration",
          label: "Finish passkey registration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "webauthn/start-passkey-login",
          label: "Start passkey login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "webauthn/delete-a-passkey",
          label: "Delete a passkey",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
