import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "uptime/uptime-api",
    },
    {
      type: "category",
      label: "Uptime",
      items: [
        {
          type: "doc",
          id: "uptime/report-that-a-job-ran-for-a-push-monitor",
          label: "Report that a job ran, for a push monitor",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/report-that-a-job-ran-for-a-push-monitor",
          label: "Report that a job ran, for a push monitor",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/a-published-status-page-as-html",
          label: "A published status page as HTML",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/a-published-status-page-as-json",
          label: "A published status page as JSON",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/totals-for-the-monitors-the-user-can-see",
          label: "Totals for the monitors the user can see",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/what-the-user-may-do-here-and-the-server-limits",
          label: "What the user may do here, and the server limits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/list-the-monitors-the-user-owns-or-was-shared",
          label: "List the monitors the user owns or was shared",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/add-a-monitor",
          label: "Add a monitor",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/add-a-host-monitor-for-each-host-in-a-list",
          label: "Add a host monitor for each host in a list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/run-a-check-once-without-saving-it",
          label: "Run a check once without saving it",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/one-monitor-with-its-recent-checks",
          label: "One monitor with its recent checks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/change-a-monitor",
          label: "Change a monitor",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "uptime/delete-a-monitor-and-its-history",
          label: "Delete a monitor and its history",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "uptime/check-a-monitor-now",
          label: "Check a monitor now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/pause-or-resume-a-monitor",
          label: "Pause or resume a monitor",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/turn-alerts-for-a-monitor-on-or-off-for-the-user",
          label: "Turn alerts for a monitor on or off for the user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/make-a-new-push-url-which-stops-the-old-one-working",
          label: "Make a new push URL, which stops the old one working",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/uptime-and-response-time-over-a-range",
          label: "Uptime and response time over a range",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/who-a-monitor-is-shared-with",
          label: "Who a monitor is shared with",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/replace-who-a-monitor-is-shared-with",
          label: "Replace who a monitor is shared with",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "uptime/users-and-roles-a-monitor-can-be-shared-with",
          label: "Users and roles a monitor can be shared with",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/monitors-tied-to-a-host",
          label: "Monitors tied to a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/outages-of-the-monitors-the-user-can-see-newest-first",
          label: "Outages of the monitors the user can see, newest first",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/mark-an-incident-as-seen-and-add-a-note",
          label: "Mark an incident as seen and add a note",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/the-users-maintenance-windows",
          label: "The user's maintenance windows",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/add-a-maintenance-window",
          label: "Add a maintenance window",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/change-a-maintenance-window",
          label: "Change a maintenance window",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "uptime/delete-a-maintenance-window",
          label: "Delete a maintenance window",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "uptime/the-users-status-pages",
          label: "The user's status pages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/add-a-status-page",
          label: "Add a status page",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/change-a-status-page",
          label: "Change a status page",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "uptime/delete-a-status-page-and-its-notes",
          label: "Delete a status page and its notes",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "uptime/notes-on-a-status-page-newest-first",
          label: "Notes on a status page, newest first",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "uptime/post-a-note-on-a-status-page",
          label: "Post a note on a status page",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/mark-a-note-as-resolved",
          label: "Mark a note as resolved",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "uptime/delete-a-note",
          label: "Delete a note",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
