import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "process-manager/process-manager-api",
    },
    {
      type: "category",
      label: "Process Manager",
      items: [
        {
          type: "doc",
          id: "process-manager/every-watch-of-the-signed-in-user",
          label: "Every watch of the signed in user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "process-manager/what-a-host-offers",
          label: "What a host offers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "process-manager/list-running-processes",
          label: "List running processes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "process-manager/one-process-in-detail",
          label: "One process in detail",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "process-manager/send-a-signal-to-a-process",
          label: "Send a signal to a process",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "process-manager/change-the-priority-of-a-process",
          label: "Change the priority of a process",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "process-manager/list-pm-2-and-supervisor-apps",
          label: "List pm2 and supervisor apps",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "process-manager/start-stop-restart-reload-delete-or-flush-logs-of-an-app",
          label: "Start, stop, restart, reload, delete or flush logs of an app",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "process-manager/read-the-supervisor-config-again",
          label: "Read the supervisor config again",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "process-manager/read-the-end-of-a-log",
          label: "Read the end of a log",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "process-manager/the-signed-in-users-watches-on-a-host",
          label: "The signed in user's watches on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "process-manager/add-a-watch",
          label: "Add a watch",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "process-manager/remove-a-watch",
          label: "Remove a watch",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
