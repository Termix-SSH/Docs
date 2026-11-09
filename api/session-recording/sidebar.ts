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
          id: "session-recording/list-live-sessions-of-every-user",
          label: "List live sessions of every user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-recording/end-someones-live-session",
          label: "End someone's live session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-recording/a-read-only-viewer-token-for-a-live-remote-desktop-session",
          label: "A read only viewer token for a live remote desktop session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-recording/list-command-alert-rules",
          label: "List command alert rules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-recording/add-a-command-alert-rule",
          label: "Add a command alert rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-recording/change-a-command-alert-rule",
          label: "Change a command alert rule",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "session-recording/delete-a-command-alert-rule",
          label: "Delete a command alert rule",
          className: "api-method delete",
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
        {
          type: "doc",
          id: "session-recording/who-watched-downloaded-or-checked-a-recording",
          label: "Who watched, downloaded or checked a recording",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-recording/check-a-recording-was-not-changed",
          label: "Check a recording was not changed",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-recording/put-a-recording-on-hold-or-take-it-off",
          label: "Put a recording on hold or take it off",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
