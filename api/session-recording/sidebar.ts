import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "session-recording/session-recording-api",
    },
    {
      type: "category",
      label: "Session Recording",
      items: [
        {
          type: "doc",
          id: "session-recording/list-session-recordings",
          label: "List session recordings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-recording/get-session-recording-metadata",
          label: "Get session recording metadata",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-recording/delete-session-recording",
          label: "Delete session recording",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "session-recording/get-session-recording-content",
          label: "Get session recording content",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
