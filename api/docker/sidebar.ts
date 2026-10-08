import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "docker/docker-api",
    },
    {
      type: "category",
      label: "Docker",
      items: [
        {
          type: "doc",
          id: "docker/establish-ssh-session-for-docker",
          label: "Establish SSH session for Docker",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/answer-a-verification-prompt",
          label: "Answer a verification prompt",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/continue-after-a-browser-sign-in",
          label: "Continue after a browser sign-in",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/disconnect-ssh-session",
          label: "Disconnect SSH session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/keep-ssh-session-alive",
          label: "Keep SSH session alive",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/check-ssh-session-status",
          label: "Check SSH session status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/validate-docker-availability",
          label: "Validate Docker availability",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/list-all-containers",
          label: "List all containers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/get-container-details",
          label: "Get container details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/start-stop-restart-pause-or-unpause-a-container",
          label: "Start, stop, restart, pause or unpause a container",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/remove-container",
          label: "Remove container",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "docker/get-container-logs",
          label: "Get container logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/get-container-stats",
          label: "Get container stats",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
