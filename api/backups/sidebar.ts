import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "backups/backups-api",
    },
    {
      type: "category",
      label: "Backups",
      items: [
        {
          type: "doc",
          id: "backups/backup-tools-on-a-host",
          label: "Backup tools on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/install-restic",
          label: "Install restic",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "backups/install-rclone",
          label: "Install rclone",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "backups/docker-volumes-and-stacks",
          label: "Docker volumes and stacks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/saved-database-logins",
          label: "Saved database logins",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/jobs-on-a-host",
          label: "Jobs on a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/add-a-job",
          label: "Add a job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "backups/all-jobs",
          label: "All jobs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/one-job",
          label: "One job",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/change-a-job",
          label: "Change a job",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "backups/delete-a-job",
          label: "Delete a job",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "backups/run-a-job-now",
          label: "Run a job now",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "backups/snapshots-of-a-job",
          label: "Snapshots of a job",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/files-in-a-snapshot",
          label: "Files in a snapshot",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/download-from-a-snapshot",
          label: "Download from a snapshot",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/restore-a-snapshot",
          label: "Restore a snapshot",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "backups/delete-a-snapshot",
          label: "Delete a snapshot",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "backups/run-history",
          label: "Run history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/one-run-with-its-log",
          label: "One run with its log",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/stop-a-run",
          label: "Stop a run",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "backups/your-repositories",
          label: "Your repositories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "backups/add-a-repository",
          label: "Add a repository",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "backups/change-a-repository",
          label: "Change a repository",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "backups/delete-a-repository",
          label: "Delete a repository",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "backups/show-the-restic-password",
          label: "Show the restic password",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "backups/check-a-repository",
          label: "Check a repository",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
