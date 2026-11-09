import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "web-servers/web-servers-api",
    },
    {
      type: "category",
      label: "Web Servers",
      items: [
        {
          type: "doc",
          id: "web-servers/web-servers-on-every-host",
          label: "Web servers on every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "web-servers/web-servers-on-a-host",
          label: "Web servers on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "web-servers/every-site",
          label: "Every site",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "web-servers/add-a-site",
          label: "Add a site",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-servers/show-the-config-a-site-form-makes",
          label: "Show the config a site form makes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-servers/one-sites-file",
          label: "One site's file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "web-servers/change-a-site",
          label: "Change a site",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "web-servers/delete-a-site",
          label: "Delete a site",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "web-servers/turn-a-site-on",
          label: "Turn a site on",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-servers/turn-a-site-off",
          label: "Turn a site off",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-servers/get-a-lets-encrypt-certificate-for-a-site",
          label: "Get a Let's Encrypt certificate for a site",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-servers/config-files-of-a-server",
          label: "Config files of a server",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "web-servers/read-a-config-file",
          label: "Read a config file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "web-servers/save-a-config-file",
          label: "Save a config file",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "web-servers/test-a-servers-config",
          label: "Test a server's config",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-servers/start-stop-restart-or-reload-a-server",
          label: "Start, stop, restart or reload a server",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-servers/install-a-web-server",
          label: "Install a web server",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-servers/install-certbot",
          label: "Install certbot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "web-servers/log-files",
          label: "Log files",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "web-servers/the-end-of-a-log",
          label: "The end of a log",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "web-servers/get-alerts-when-a-web-server-on-this-host-stops",
          label: "Get alerts when a web server on this host stops",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
