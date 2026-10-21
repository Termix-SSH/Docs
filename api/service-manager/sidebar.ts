import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "service-manager/services-api",
    },
    {
      type: "category",
      label: "Services",
      items: [
        {
          type: "doc",
          id: "service-manager/services-status-on-a-host",
          label: "Services status on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/list-units",
          label: "List units",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/create-a-service",
          label: "Create a service",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "service-manager/unit-details",
          label: "Unit details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/run-a-unit-action",
          label: "Run a unit action",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "service-manager/read-a-unit-file",
          label: "Read a unit file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/save-a-unit-file",
          label: "Save a unit file",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "service-manager/delete-a-unit",
          label: "Delete a unit",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "service-manager/check-a-unit-file",
          label: "Check a unit file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "service-manager/list-timers",
          label: "List timers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/read-the-journal",
          label: "Read the journal",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/list-boots",
          label: "List boots",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/journal-disk-use",
          label: "Journal disk use",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/shrink-the-journal",
          label: "Shrink the journal",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "service-manager/list-log-files",
          label: "List log files",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/read-a-log-file",
          label: "Read a log file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/download-a-log-file",
          label: "Download a log file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/watched-units",
          label: "Watched units",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "service-manager/watch-a-unit",
          label: "Watch a unit",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "service-manager/stop-watching-a-unit",
          label: "Stop watching a unit",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
