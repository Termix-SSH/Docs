import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "out-of-band/out-of-band-api",
    },
    {
      type: "category",
      label: "Out-of-band",
      items: [
        {
          type: "doc",
          id: "out-of-band/list-the-bmc-types-and-the-login-each-one-needs",
          label: "List the BMC types and the login each one needs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "out-of-band/list-bm-cs-with-their-last-reading",
          label: "List BMCs with their last reading",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "out-of-band/add-a-bmc",
          label: "Add a BMC",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "out-of-band/get-the-bmc-linked-to-a-host",
          label: "Get the BMC linked to a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "out-of-band/try-a-bm-cs-address-and-login-without-saving-it",
          label: "Try a BMC's address and login without saving it",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "out-of-band/change-a-bmc-the-login-is-replaced-only-when-sent",
          label: "Change a BMC. The login is replaced only when sent.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "out-of-band/remove-a-bmc",
          label: "Remove a BMC",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "out-of-band/read-the-bmc-now",
          label: "Read the BMC now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "out-of-band/change-the-power-of-the-machine-behind-a-bmc",
          label: "Change the power of the machine behind a BMC",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "out-of-band/read-the-hardware-event-log",
          label: "Read the hardware event log",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "out-of-band/clear-the-hardware-event-log",
          label: "Clear the hardware event log",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "out-of-band/choose-what-the-machine-boots-from-next-time",
          label: "Choose what the machine boots from next time",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "out-of-band/list-virtual-media-slots",
          label: "List virtual media slots",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "out-of-band/mount-an-iso-from-a-web-address",
          label: "Mount an ISO from a web address",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "out-of-band/eject-virtual-media",
          label: "Eject virtual media",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
