import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "operations-center/operations-center-api",
    },
    {
      type: "category",
      label: "Operations Center",
      items: [
        {
          type: "doc",
          id: "operations-center/list-approval-rules",
          label: "List approval rules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "operations-center/add-or-change-an-approval-rule",
          label: "Add or change an approval rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "operations-center/delete-an-approval-rule",
          label: "Delete an approval rule",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "operations-center/list-your-rollouts",
          label: "List your rollouts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "operations-center/create-a-rollout",
          label: "Create a rollout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "operations-center/a-rollout-and-each-hosts-result",
          label: "A rollout and each host's result",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "operations-center/delete-a-rollout",
          label: "Delete a rollout",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "operations-center/start-pause-stop-or-retry-a-rollout",
          label: "Start, pause, stop or retry a rollout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "operations-center/list-your-drift-baselines",
          label: "List your drift baselines",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "operations-center/add-or-change-a-drift-baseline",
          label: "Add or change a drift baseline",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "operations-center/each-hosts-state-for-a-baseline",
          label: "Each host's state for a baseline",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "operations-center/check-a-baseline-now",
          label: "Check a baseline now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "operations-center/delete-a-baseline",
          label: "Delete a baseline",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "operations-center/what-needs-a-look-from-this-plugin",
          label: "What needs a look from this plugin",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "operations-center/mcp-server",
          label: "MCP server",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "operations-center/mcp-event-stream",
          label: "MCP event stream",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
