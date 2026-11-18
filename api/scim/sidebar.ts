import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "scim/scim-provisioning-api",
    },
    {
      type: "category",
      label: "SCIM",
      items: [
        {
          type: "doc",
          id: "scim/scim-service-provider-config",
          label: "SCIM service provider config",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/scim-resource-types",
          label: "SCIM resource types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/one-scim-resource-type",
          label: "One SCIM resource type",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/scim-schemas",
          label: "SCIM schemas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/one-scim-schema",
          label: "One SCIM schema",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/list-scim-users",
          label: "List SCIM users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/create-a-scim-user",
          label: "Create a SCIM user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "scim/get-a-scim-user",
          label: "Get a SCIM user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/replace-a-scim-user",
          label: "Replace a SCIM user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "scim/change-a-scim-user",
          label: "Change a SCIM user",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "scim/delete-a-scim-user",
          label: "Delete a SCIM user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "scim/list-scim-groups",
          label: "List SCIM groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/create-a-scim-group",
          label: "Create a SCIM group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "scim/get-a-scim-group",
          label: "Get a SCIM group",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/replace-a-scim-group",
          label: "Replace a SCIM group",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "scim/change-a-scim-group",
          label: "Change a SCIM group",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "scim/delete-a-scim-group",
          label: "Delete a SCIM group",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "scim/list-scim-connections",
          label: "List SCIM connections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/add-a-scim-connection",
          label: "Add a SCIM connection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "scim/change-a-scim-connection",
          label: "Change a SCIM connection",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "scim/remove-a-scim-connection",
          label: "Remove a SCIM connection",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "scim/make-a-new-scim-token",
          label: "Make a new SCIM token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "scim/list-a-connections-groups",
          label: "List a connection's groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/map-a-group-to-a-role",
          label: "Map a group to a role",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "scim/recent-scim-requests",
          label: "Recent SCIM requests",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scim/roles-a-group-can-map-to",
          label: "Roles a group can map to",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
