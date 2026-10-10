import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "totp/totp-api",
    },
    {
      type: "category",
      label: "TOTP",
      items: [
        {
          type: "doc",
          id: "totp/totp-status-for-the-caller",
          label: "TOTP status for the caller",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "totp/start-totp-setup",
          label: "Start TOTP setup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "totp/turn-totp-on",
          label: "Turn TOTP on",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "totp/turn-totp-off",
          label: "Turn TOTP off",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "totp/replace-the-backup-codes",
          label: "Replace the backup codes",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
