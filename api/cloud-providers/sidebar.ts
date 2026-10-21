import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "cloud-providers/cloud-providers-api",
    },
    {
      type: "category",
      label: "Cloud Providers",
      items: [
        {
          type: "doc",
          id: "cloud-providers/list-the-supported-clouds-and-the-keys-each-one-needs",
          label: "List the supported clouds and the keys each one needs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cloud-providers/list-the-signed-in-users-saved-logins-for-choosing-a-default",
          label: "List the signed-in user's saved logins, for choosing a default",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cloud-providers/list-the-signed-in-users-cloud-accounts",
          label: "List the signed-in user's cloud accounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cloud-providers/add-a-cloud-account",
          label: "Add a cloud account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cloud-providers/change-a-cloud-account-keys-are-replaced-only-when-sent",
          label: "Change a cloud account; keys are replaced only when sent",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "cloud-providers/delete-a-cloud-account-and-forget-its-instances-hosts-stay",
          label: "Delete a cloud account and forget its instances; hosts stay",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "cloud-providers/check-the-saved-keys-by-listing-the-clouds-instances",
          label: "Check the saved keys by listing the cloud's instances",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cloud-providers/list-the-clouds-instances-and-which-ones-are-already-hosts",
          label: "List the cloud's instances and which ones are already hosts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cloud-providers/make-hosts-from-the-chosen-instances",
          label: "Make hosts from the chosen instances",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cloud-providers/sync-every-instance-now-applying-the-accounts-removal-rule",
          label: "Sync every instance now, applying the account's removal rule",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
