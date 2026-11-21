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
          id: "databases/database-logins-and-reachability-on-every-host",
          label: "Database logins and reachability on every host",
          className: "api-method get",
        },
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
        {
          type: "doc",
          id: "databases/scan-redis-keys",
          label: "Scan Redis keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/read-a-redis-key",
          label: "Read a Redis key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/change-a-redis-key",
          label: "Change a Redis key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "databases/run-a-redis-command",
          label: "Run a Redis command",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "databases/list-mongo-db-collections",
          label: "List MongoDB collections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/find-mongo-db-documents",
          label: "Find MongoDB documents",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "databases/list-a-collections-indexes",
          label: "List a collection's indexes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "databases/insert-replace-or-delete-a-mongo-db-document",
          label: "Insert, replace or delete a MongoDB document",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "databases/run-mongosh-code",
          label: "Run mongosh code",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
