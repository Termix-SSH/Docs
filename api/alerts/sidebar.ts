import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "alerts/alerts-api",
    },
    {
      type: "category",
      label: "Alerts",
      items: [
        {
          type: "doc",
          id: "alerts/list-the-callers-alerts",
          label: "List the caller's alerts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "alerts/clear-the-callers-alerts",
          label: "Clear the caller's alerts",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "alerts/count-the-callers-unread-alerts",
          label: "Count the caller's unread alerts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "alerts/stream-new-alerts",
          label: "Stream new alerts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "alerts/mark-alerts-read-or-unread",
          label: "Mark alerts read or unread",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "alerts/delete-an-alert",
          label: "Delete an alert",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "alerts/list-the-sources-and-categories-of-the-callers-alerts",
          label: "List the sources and categories of the caller's alerts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "alerts/what-channel-types-this-server-can-use",
          label: "What channel types this server can use",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "alerts/list-the-callers-channels",
          label: "List the caller's channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "alerts/create-a-channel",
          label: "Create a channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "alerts/get-one-of-the-callers-channels-with-its-config",
          label: "Get one of the caller's channels with its config",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "alerts/update-a-channel",
          label: "Update a channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "alerts/delete-a-channel",
          label: "Delete a channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "alerts/send-a-test-alert-to-a-channel",
          label: "Send a test alert to a channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "alerts/list-the-callers-delivery-rules",
          label: "List the caller's delivery rules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "alerts/create-a-delivery-rule",
          label: "Create a delivery rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "alerts/update-a-delivery-rule",
          label: "Update a delivery rule",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "alerts/delete-a-delivery-rule",
          label: "Delete a delivery rule",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
