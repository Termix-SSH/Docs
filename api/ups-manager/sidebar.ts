import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ups-manager/ups-manager-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "ups-manager/latest-reading-of-every-ups-the-user-can-see",
          label: "Latest reading of every UPS the user can see",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ups-manager/which-ups-tools-and-devices-the-host-has",
          label: "Which UPS tools and devices the host has",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ups-manager/the-ups-devices-set-up-on-a-host",
          label: "The UPS devices set up on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ups-manager/add-a-ups-to-a-host",
          label: "Add a UPS to a host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ups-manager/change-a-ups",
          label: "Change a UPS",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "ups-manager/remove-a-ups-and-its-history",
          label: "Remove a UPS and its history",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ups-manager/read-a-ups-with-the-given-settings-without-saving-it",
          label: "Read a UPS with the given settings without saving it",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ups-manager/read-a-ups-now",
          label: "Read a UPS now",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ups-manager/charge-runtime-load-and-voltage-over-time",
          label: "Charge, runtime, load and voltage over time",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ups-manager/power-events-for-a-ups-newest-first",
          label: "Power events for a UPS, newest first",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ups-manager/instant-commands-a-nut-ups-supports",
          label: "Instant commands a NUT UPS supports",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ups-manager/send-an-instant-command-to-a-nut-ups",
          label: "Send an instant command to a NUT UPS",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
