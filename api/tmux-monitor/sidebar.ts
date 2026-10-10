import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "tmux-monitor/tmux-monitor-api",
    },
    {
      type: "category",
      label: "Tmux Monitor",
      items: [
        {
          type: "doc",
          id: "tmux-monitor/get-a-hosts-tmux-sessions-windows-and-panes",
          label: "Get a host's tmux sessions, windows and panes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tmux-monitor/focus-a-pane",
          label: "Focus a pane",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tmux-monitor/create-a-detached-tmux-session",
          label: "Create a detached tmux session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tmux-monitor/create-a-window-in-an-existing-session",
          label: "Create a window in an existing session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tmux-monitor/rename-a-session",
          label: "Rename a session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tmux-monitor/kill-a-session-and-drop-its-saved-tags",
          label: "Kill a session and drop its saved tags",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tmux-monitor/kill-a-window-and-every-pane-in-it",
          label: "Kill a window and every pane in it",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tmux-monitor/kill-a-single-pane",
          label: "Kill a single pane",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tmux-monitor/split-the-window-containing-a-pane",
          label: "Split the window containing a pane",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "tmux-monitor/search-pane-output-across-a-hosts-tmux-sessions",
          label: "Search pane output across a host's tmux sessions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tmux-monitor/per-pane-cpu-memory-and-gpu-usage",
          label: "Per-pane CPU, memory and GPU usage",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tmux-monitor/replace-the-acting-users-tags-on-a-session",
          label: "Replace the acting user's tags on a session",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
