import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "firewall/firewall-api",
    },
    {
      type: "category",
      label: "Firewall",
      items: [
        {
          type: "doc",
          id: "firewall/your-rule-sets",
          label: "Your rule sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "firewall/create-a-rule-set",
          label: "Create a rule set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/change-a-rule-set",
          label: "Change a rule set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "firewall/delete-a-rule-set",
          label: "Delete a rule set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "firewall/rule-set-drift",
          label: "Rule set drift",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "firewall/apply-a-rule-set",
          label: "Apply a rule set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/fleets-to-apply-a-rule-set-to",
          label: "Fleets to apply a rule set to",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "firewall/firewall-state-of-every-host",
          label: "Firewall state of every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "firewall/firewall-on-a-host",
          label: "Firewall on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "firewall/the-firewalls-own-output",
          label: "The firewall's own output",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "firewall/add-a-rule",
          label: "Add a rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/change-a-rule",
          label: "Change a rule",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "firewall/delete-a-rule",
          label: "Delete a rule",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "firewall/set-the-default-policies",
          label: "Set the default policies",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/turn-the-firewall-on",
          label: "Turn the firewall on",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/turn-the-firewall-off",
          label: "Turn the firewall off",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/install-a-firewall-tool",
          label: "Install a firewall tool",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/set-a-firewalld-zone-target",
          label: "Set a firewalld zone target",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/set-the-firewalld-default-zone",
          label: "Set the firewalld default zone",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/the-change-waiting-for-keep",
          label: "The change waiting for Keep",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "firewall/keep-the-last-change",
          label: "Keep the last change",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/undo-the-last-change-now",
          label: "Undo the last change now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/fail-2-ban-on-a-host",
          label: "Fail2ban on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "firewall/ban-an-address-in-a-jail",
          label: "Ban an address in a jail",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/unban-an-address-in-a-jail",
          label: "Unban an address in a jail",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/start-fail-2-ban",
          label: "Start Fail2ban",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "firewall/whether-you-watch-this-host",
          label: "Whether you watch this host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "firewall/watch-a-host",
          label: "Watch a host",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
