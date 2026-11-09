import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "git/git-api",
    },
    {
      type: "category",
      label: "Git",
      items: [
        {
          type: "doc",
          id: "git/repos-on-every-host",
          label: "Repos on every host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/git-status-of-a-host",
          label: "Git status of a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/repos-added-to-a-host",
          label: "Repos added to a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/add-repos-to-a-host",
          label: "Add repos to a host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/remove-a-repo-from-the-list",
          label: "Remove a repo from the list",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "git/find-repos-on-the-host",
          label: "Find repos on the host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/clone-a-repo-onto-the-host",
          label: "Clone a repo onto the host",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/changed-files-in-a-repo",
          label: "Changed files in a repo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/commit-history",
          label: "Commit history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/one-commit",
          label: "One commit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/commit-staged-changes",
          label: "Commit staged changes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/diff-of-one-file",
          label: "Diff of one file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/branches",
          label: "Branches",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/remotes",
          label: "Remotes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/stashes",
          label: "Stashes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "git/fetch-all-remotes",
          label: "Fetch all remotes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/pull-the-current-branch",
          label: "Pull the current branch",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/push-the-current-branch",
          label: "Push the current branch",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/switch-branch",
          label: "Switch branch",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/create-a-branch",
          label: "Create a branch",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/delete-a-local-branch",
          label: "Delete a local branch",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "git/merge-a-branch-into-the-current-one",
          label: "Merge a branch into the current one",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/stage-files",
          label: "Stage files",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/unstage-files",
          label: "Unstage files",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/throw-away-changes",
          label: "Throw away changes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/stash-apply-pop-or-drop",
          label: "Stash, apply, pop or drop",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/reset-hard",
          label: "Reset hard",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "git/set-up-auto-pull",
          label: "Set up auto pull",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "git/run-auto-pull-now",
          label: "Run auto pull now",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
