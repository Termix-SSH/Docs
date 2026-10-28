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
          id: "docker/check-for-image-updates",
          label: "Check for image updates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/update-a-container",
          label: "Update a container",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/container-counts-on-every-docker-host",
          label: "Container counts on every Docker host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/whether-stack-management-is-on",
          label: "Whether stack management is on",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/list-stacks",
          label: "List stacks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/create-a-stack",
          label: "Create a stack",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/get-a-stack",
          label: "Get a stack",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docker/save-the-compose-file",
          label: "Save the compose file",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "docker/save-the-env-file",
          label: "Save the env file",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "docker/check-a-compose-file",
          label: "Check a compose file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/run-a-stack-action",
          label: "Run a stack action",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docker/get-stack-logs",
          label: "Get stack logs",
          className: "api-method get",
        },
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
