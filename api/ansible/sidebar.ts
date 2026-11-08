import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ansible/ansible-api",
    },
    {
      type: "category",
      label: "Ansible",
      items: [
        {
          type: "doc",
          id: "ansible/recent-ansible-runs-on-every-host",
          label: "Recent Ansible runs on every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ansible/ansible-status-on-a-control-host",
          label: "Ansible status on a control host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ansible/list-the-files-in-the-project-folder",
          label: "List the files in the project folder",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ansible/read-a-project-file",
          label: "Read a project file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ansible/save-a-project-file",
          label: "Save a project file",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "ansible/delete-a-project-file",
          label: "Delete a project file",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ansible/hosts-that-can-be-used-as-the-inventory",
          label: "Hosts that can be used as the inventory",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ansible/list-recent-runs",
          label: "List recent runs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ansible/start-a-run",
          label: "Start a run",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ansible/a-run-with-its-output",
          label: "A run with its output",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ansible/delete-a-finished-run",
          label: "Delete a finished run",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ansible/facts-from-a-finished-facts-run",
          label: "Facts from a finished facts run",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ansible/stop-a-running-run",
          label: "Stop a running run",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
