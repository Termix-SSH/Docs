import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "network-devices/network-devices-api",
    },
    {
      type: "category",
      label: "Network Devices",
      items: [
        {
          type: "doc",
          id: "network-devices/list-the-device-types-and-the-keys-each-one-needs",
          label: "List the device types and the keys each one needs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "network-devices/list-devices-with-their-last-reading",
          label: "List devices with their last reading",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "network-devices/add-a-device",
          label: "Add a device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "network-devices/try-a-devices-address-and-keys-without-saving-it",
          label: "Try a device's address and keys without saving it",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "network-devices/change-a-device-keys-are-replaced-only-when-sent",
          label: "Change a device. Keys are replaced only when sent.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "network-devices/remove-a-device",
          label: "Remove a device",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "network-devices/read-the-device-now",
          label: "Read the device now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "network-devices/clients-the-device-knows-about",
          label: "Clients the device knows about",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "network-devices/neighbors-the-device-sees-over-lldp-or-discovery",
          label: "Neighbors the device sees over LLDP or discovery",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "network-devices/turn-a-port-on-or-off",
          label: "Turn a port on or off",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "network-devices/turn-po-e-off-and-on-again-for-a-port",
          label: "Turn PoE off and on again for a port",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "network-devices/restart-the-device",
          label: "Restart the device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "network-devices/look-for-snmp-devices-in-an-address-range",
          label: "Look for SNMP devices in an address range",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
