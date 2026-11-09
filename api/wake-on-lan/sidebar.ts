import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "wake-on-lan/wake-on-lan-api",
    },
    {
      type: "category",
      label: "Wake-on-LAN",
      items: [
        {
          type: "doc",
          id: "wake-on-lan/list-devices-with-power-on-and-what-the-caller-may-do",
          label: "List devices with Power on and what the caller may do",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "wake-on-lan/add-a-new-host-with-power-on",
          label: "Add a new host with Power on",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wake-on-lan/current-status-of-every-device-the-caller-can-see",
          label: "Current status of every device the caller can see",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "wake-on-lan/one-devices-settings-without-its-passwords",
          label: "One device's settings, without its passwords",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "wake-on-lan/save-a-device-and-turn-power-on-for-its-host",
          label: "Save a device and turn Power on for its host",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "wake-on-lan/wake-a-device-with-its-saved-method",
          label: "Wake a device with its saved method",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wake-on-lan/shut-a-device-down-with-its-saved-method",
          label: "Shut a device down with its saved method",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wake-on-lan/put-a-device-to-sleep-through-sleep-on-lan",
          label: "Put a device to sleep through Sleep-On-LAN",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wake-on-lan/run-a-saved-command-once-and-return-its-output",
          label: "Run a saved command once and return its output",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wake-on-lan/find-machines-on-a-network-from-a-relay-host-or-the-server",
          label: "Find machines on a network, from a relay host or the server",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wake-on-lan/attach-a-scan-result-to-an-existing-host",
          label: "Attach a scan result to an existing host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "wake-on-lan/send-a-wake-on-lan-magic-packet-to-a-host",
          label: "Send a Wake-on-LAN magic packet to a host",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
