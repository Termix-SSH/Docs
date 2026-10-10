import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "fleets/fleets-api",
    },
    {
      type: "category",
      label: "Fleets",
      items: [
        {
          type: "doc",
          id: "fleets/list-the-current-users-fleets",
          label: "List the current user's fleets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "fleets/create-a-fleet",
          label: "Create a fleet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fleets/update-a-fleet",
          label: "Update a fleet",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "fleets/delete-a-fleet",
          label: "Delete a fleet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "fleets/list-the-resolved-effective-members-of-a-fleet",
          label: "List the resolved effective members of a fleet",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "fleets/add-a-host-to-a-fleets-static-membership",
          label: "Add a host to a fleet's static membership",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fleets/remove-a-host-from-a-fleets-static-membership",
          label: "Remove a host from a fleet's static membership",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "fleets/share-a-fleets-current-member-hosts-with-users-or-roles",
          label: "Share a fleet's current member hosts with users or roles",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fleets/users-the-caller-may-pick-as-a-fleet-share-target",
          label: "Users the caller may pick as a fleet share target",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "fleets/non-system-roles-the-caller-may-pick-as-a-fleet-share-target",
          label: "Non-system roles the caller may pick as a fleet share target",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "fleets/run-a-command-across-every-host-in-a-fleet",
          label: "Run a command across every host in a fleet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fleets/push-an-uploaded-file-to-the-same-remote-path-on-every-host-in-a-fleet",
          label: "Push an uploaded file to the same remote path on every host in a fleet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fleets/pull-the-same-remote-path-from-every-host-in-a-fleet",
          label: "Pull the same remote path from every host in a fleet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fleets/read-the-last-known-inventory-snapshot-for-a-fleets-members",
          label: "Read the last-known inventory snapshot for a fleet's members",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "fleets/refresh-the-inventory-snapshot-for-every-host-in-a-fleet",
          label: "Refresh the inventory snapshot for every host in a fleet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fleets/run-a-package-action-across-every-host-in-a-fleet",
          label: "Run a package action across every host in a fleet",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
