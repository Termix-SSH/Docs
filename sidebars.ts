import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Install",
      link: { type: "doc", id: "install/index" },
      items: [
        {
          type: "category",
          label: "Server",
          collapsed: false,
          items: [
            "install/server/docker",
            "install/server/kubernetes",
            "install/server/proxmox",
            "install/server/source",
            "install/ginernet",
          ],
        },
        {
          type: "category",
          label: "Apps",
          collapsed: false,
          items: [
            "install/apps/windows",
            "install/apps/macos",
            "install/apps/linux",
            "install/apps/ios",
            "install/apps/android",
          ],
        },
        "install/first-run",
        "install/updating",
        "install/backup",
      ],
    },
    {
      type: "category",
      label: "Configure",
      items: [
        "configure/environment-variables",
        "configure/reverse-proxy",
        "configure/https",
        "configure/database",
        "configure/desktop-sync",
        "configure/trusted-proxy-login",
        "configure/security",
        "configure/betas",
      ],
    },
    {
      type: "category",
      label: "Guide",
      items: [
        "guide/interface",
        "guide/dashboard",
        "guide/manage",
        "guide/hosts",
        "guide/credentials",
        "guide/host-defaults",
        "guide/sharing",
        "guide/import-export",
        "guide/command-palette",
        "guide/plugins",
        "guide/account",
        "guide/api-keys",
        "guide/settings",
      ],
    },
    {
      type: "category",
      label: "Admin",
      items: [
        "guide/admin-settings",
        "guide/users",
        "guide/roles",
        "guide/audit-log",
      ],
    },
    "contributing",
    "translations",
  ],
  cli: [
    "cli/overview",
    "cli/installation",
    "cli/authentication",
    "cli/configuration",
    "cli/scripting",
    {
      type: "category",
      label: "Commands",
      collapsed: false,
      items: [
        "cli/commands/hosts",
        "cli/commands/exec-and-ssh",
        "cli/commands/files",
        "cli/commands/fleets",
        "cli/commands/tunnels-and-docker",
        "cli/commands/snippets-and-credentials",
        "cli/commands/admin",
        "cli/commands/plugins-and-api",
      ],
    },
  ],
};

export default sidebars;
