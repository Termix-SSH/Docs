import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "security-center/security-center-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "security-center/security-score-of-every-host-the-user-can-see",
          label: "Security score of every host the user can see",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "security-center/keys-findings-and-scan-summary-for-a-host",
          label: "Keys, findings and scan summary for a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "security-center/read-the-keys-on-the-host-now",
          label: "Read the keys on the host now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "security-center/change-alerts-intervals-and-key-limits-for-a-host",
          label: "Change alerts, intervals and key limits for a host",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "security-center/known-vulnerabilities-in-the-installed-packages",
          label: "Known vulnerabilities in the installed packages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "security-center/scan-the-installed-packages-now",
          label: "Scan the installed packages now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "security-center/hide-an-advisory-on-a-host",
          label: "Hide an advisory on a host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "security-center/show-a-hidden-advisory-again",
          label: "Show a hidden advisory again",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "security-center/problems-found-and-cleared-scans-and-rotations",
          label: "Problems found and cleared, scans and rotations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "security-center/replace-the-key-termix-logs-in-to-the-host-with",
          label: "Replace the key Termix logs in to the host with",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "security-center/remove-a-key-from-an-authorized-keys-file",
          label: "Remove a key from an authorized keys file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "security-center/make-new-ssh-host-keys-on-the-host",
          label: "Make new SSH host keys on the host",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
