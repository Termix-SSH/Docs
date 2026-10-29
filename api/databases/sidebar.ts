import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "databases/databases-api",
    },
    {
      type: "category",
      label: "Databases",
      items: [
        {
          type: "doc",
          id: "databases/database-clients-on-a-host",
          label: "Database clients on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/list-saved-connections",
          label: "List saved connections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/save-a-connection",
          label: "Save a connection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "databases/test-a-connection",
          label: "Test a connection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "databases/update-a-connection",
          label: "Update a connection",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "databases/delete-a-connection",
          label: "Delete a connection",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "databases/list-databases",
          label: "List databases",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/list-tables",
          label: "List tables",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/list-stored-procedures-and-functions",
          label: "List stored procedures and functions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/describe-a-table",
          label: "Describe a table",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/read-rows-of-a-table",
          label: "Read rows of a table",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "databases/insert-a-row",
          label: "Insert a row",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "databases/update-a-row",
          label: "Update a row",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "databases/delete-a-row",
          label: "Delete a row",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "databases/run-sql",
          label: "Run SQL",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
