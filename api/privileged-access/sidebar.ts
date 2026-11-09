import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "privileged-access/privileged-access-api",
    },
    {
      type: "category",
      label: "Privileged Access",
      items: [
        {
          type: "doc",
          id: "privileged-access/privileged-hosts-the-caller-can-reach",
          label: "Privileged hosts the caller can reach",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "privileged-access/list-access-requests",
          label: "List access requests",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "privileged-access/ask-for-access-to-a-privileged-host",
          label: "Ask for access to a privileged host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "privileged-access/approve-an-access-request",
          label: "Approve an access request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "privileged-access/deny-an-access-request",
          label: "Deny an access request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "privileged-access/withdraw-a-request-or-end-access-early",
          label: "Withdraw a request or end access early",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "privileged-access/every-request-as-csv",
          label: "Every request as CSV",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "privileged-access/counts-for-the-dashboard-card",
          label: "Counts for the dashboard card",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
