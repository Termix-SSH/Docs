import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "login-security/login-security-api",
    },
    {
      type: "category",
      label: "Login Security",
      items: [
        {
          type: "doc",
          id: "login-security/idle-timeout-for-the-signed-in-user",
          label: "Idle timeout for the signed in user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "login-security/mark-the-session-as-active",
          label: "Mark the session as active",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "login-security/second-factors-available",
          label: "Second factors available",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
