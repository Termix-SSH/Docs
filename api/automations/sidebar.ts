import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "automations/automations-api",
    },
    {
      type: "category",
      label: "Automations",
      items: [
        {
          type: "doc",
          id: "automations/trigger-an-automation-from-an-external-system",
          label: "Trigger an automation from an external system",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "automations/list-the-current-users-automations",
          label: "List the current user's automations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "automations/create-an-automation",
          label: "Create an automation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "automations/what-the-automation-editor-can-offer",
          label: "What the automation editor can offer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "automations/list-automation-runs",
          label: "List automation runs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "automations/step-by-step-results-for-a-run",
          label: "Step-by-step results for a run",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "automations/fetch-a-single-automation",
          label: "Fetch a single automation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "automations/update-an-automation",
          label: "Update an automation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "automations/delete-an-automation",
          label: "Delete an automation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "automations/run-an-automation-now",
          label: "Run an automation now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "automations/list-maintenance-windows-on-the-callers-hosts",
          label: "List maintenance windows on the caller's hosts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "automations/get-a-hosts-maintenance-state-and-schedule",
          label: "Get a host's maintenance state and schedule",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "automations/start-schedule-end-or-remove-maintenance-on-a-host",
          label: "Start, schedule, end or remove maintenance on a host",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
