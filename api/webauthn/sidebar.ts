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
          id: "webauthn/whether-the-sign-in-page-shows-the-passkeys-button",
          label: "Whether the sign in page shows the Passkeys button",
          className: "api-method get",
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
        {
          type: "doc",
          id: "webauthn/security-key-step-status",
          label: "Security key step status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "webauthn/ask-for-a-security-key-after-the-password",
          label: "Ask for a security key after the password",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "webauthn/stop-asking-for-a-security-key-after-the-password",
          label: "Stop asking for a security key after the password",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
