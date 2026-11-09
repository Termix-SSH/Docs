import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "cron/cron-api",
    },
    {
      type: "category",
      label: "Cron",
      items: [
        {
          type: "doc",
          id: "cron/cron-state-on-every-host",
          label: "Cron state on every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cron/cron-status-on-a-host",
          label: "Cron status on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cron/list-the-jobs-in-a-crontab",
          label: "List the jobs in a crontab",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cron/add-a-job",
          label: "Add a job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cron/change-a-job",
          label: "Change a job",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "cron/delete-a-job",
          label: "Delete a job",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "cron/turn-a-job-on-or-off",
          label: "Turn a job on or off",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cron/run-a-job-now",
          label: "Run a job now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cron/replace-a-whole-crontab",
          label: "Replace a whole crontab",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "cron/system-cron-jobs",
          label: "System cron jobs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cron/create-or-replace-a-file-in-etc-cron-d",
          label: "Create or replace a file in /etc/cron.d",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "cron/delete-a-file-in-etc-cron-d",
          label: "Delete a file in /etc/cron.d",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "cron/recent-cron-log-lines",
          label: "Recent cron log lines",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
