import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ldap/ldap-api",
    },
    {
      type: "category",
      label: "LDAP",
      items: [
        {
          type: "doc",
          id: "ldap/list-ldap-directories",
          label: "List LDAP directories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ldap/add-an-ldap-directory",
          label: "Add an LDAP directory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ldap/update-an-ldap-directory",
          label: "Update an LDAP directory",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "ldap/delete-an-ldap-directory",
          label: "Delete an LDAP directory",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
