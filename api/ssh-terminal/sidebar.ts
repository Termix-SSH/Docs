import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ssh-terminal/ssh-terminal-api",
    },
    {
      type: "category",
      label: "Terminal",
      items: [
        {
          type: "doc",
          id: "ssh-terminal/upload-an-image-into-a-terminal-session",
          label: "Upload an image into a terminal session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ssh-terminal/test-image-storage-visibility-admin-only",
          label: "Test image storage visibility (admin only)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ssh-terminal/terminal-settings-every-users-terminal-needs",
          label: "Terminal settings every user's terminal needs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ssh-terminal/save-some-of-the-callers-terminal-settings",
          label: "Save some of the caller's terminal settings",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "ssh-terminal/turn-auto-tmux-on-or-off-for-a-host",
          label: "Turn auto tmux on or off for a host",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "ssh-terminal/save-command-to-history",
          label: "Save command to history",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ssh-terminal/get-command-history",
          label: "Get command history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ssh-terminal/clear-command-history",
          label: "Clear command history",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ssh-terminal/get-recent-command-history",
          label: "Get recent command history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ssh-terminal/delete-a-specific-command-from-history",
          label: "Delete a specific command from history",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
