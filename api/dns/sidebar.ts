import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "dns/dns-api",
    },
    {
      type: "category",
      label: "DNS",
      items: [
        {
          type: "doc",
          id: "dns/list-the-supported-providers-and-the-keys-each-one-needs",
          label: "List the supported providers and the keys each one needs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/counts-for-the-dashboard-card",
          label: "Counts for the dashboard card",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/list-the-dns-and-registrar-logins-without-their-keys",
          label: "List the DNS and registrar logins, without their keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/add-a-dns-or-registrar-login",
          label: "Add a DNS or registrar login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/change-an-account-keys-left-empty-keep-their-saved-value",
          label: "Change an account. Keys left empty keep their saved value.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "dns/remove-an-account-with-its-copies-links-and-domains",
          label: "Remove an account with its copies, links and domains",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "dns/check-the-saved-keys-by-listing-zones",
          label: "Check the saved keys by listing zones",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/list-every-zone-of-every-login",
          label: "List every zone of every login",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/list-the-records-of-a-zone",
          label: "List the records of a zone",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/add-a-record",
          label: "Add a record",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/change-a-record",
          label: "Change a record",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "dns/delete-a-record",
          label: "Delete a record",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "dns/list-the-saved-copies-of-a-zone",
          label: "List the saved copies of a zone",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/save-a-copy-of-a-zone-now",
          label: "Save a copy of a zone now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/what-restoring-a-copy-would-change",
          label: "What restoring a copy would change",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/put-a-zone-back-to-a-saved-copy",
          label: "Put a zone back to a saved copy",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/delete-a-saved-copy",
          label: "Delete a saved copy",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "dns/the-zone-as-a-bind-file",
          label: "The zone as a BIND file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/preview-or-apply-a-bind-file",
          label: "Preview or apply a BIND file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/the-last-health-report-of-a-zone",
          label: "The last health report of a zone",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/check-delegation-dnssec-mail-records-and-broken-names-now",
          label: "Check delegation, DNSSEC, mail records and broken names now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/ask-public-resolvers-whether-the-records-resolve",
          label: "Ask public resolvers whether the records resolve",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/list-registered-and-watched-domains-with-their-expiry",
          label: "List registered and watched domains with their expiry",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/watch-a-domain-through-rdap",
          label: "Watch a domain through RDAP",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/read-every-registrar-login-and-watched-domain-again",
          label: "Read every registrar login and watched domain again",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/stop-watching-a-domain",
          label: "Stop watching a domain",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "dns/hosts-the-user-can-link-a-record-to",
          label: "Hosts the user can link a record to",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/list-the-records-termix-keeps-up-to-date",
          label: "List the records Termix keeps up to date",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dns/keep-a-record-pointed-at-a-host-or-this-servers-public-address",
          label: "Keep a record pointed at a host or this server's public address",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dns/change-a-link",
          label: "Change a link",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "dns/remove-a-link-the-record-stays-where-it-is",
          label: "Remove a link. The record stays where it is.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "dns/update-a-linked-record-now",
          label: "Update a linked record now",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
