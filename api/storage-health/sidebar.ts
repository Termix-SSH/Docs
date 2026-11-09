import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "storage-health/storage-health-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "storage-health/health-of-every-host-the-user-can-see",
          label: "Health of every host the user can see",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "storage-health/drives-pools-arrays-and-volumes-on-a-host",
          label: "Drives, pools, arrays and volumes on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "storage-health/read-the-host-now",
          label: "Read the host now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "storage-health/change-alerts-interval-and-thresholds-for-a-host",
          label: "Change alerts, interval and thresholds for a host",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "storage-health/temperature-wear-and-hours-for-one-drive-over-time",
          label: "Temperature, wear and hours for one drive over time",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "storage-health/problems-found-and-cleared-self-tests-and-scrubs",
          label: "Problems found and cleared, self tests and scrubs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "storage-health/start-or-stop-a-smart-self-test",
          label: "Start or stop a SMART self test",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "storage-health/start-or-stop-a-scrub-or-an-array-check",
          label: "Start or stop a scrub, or an array check",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
