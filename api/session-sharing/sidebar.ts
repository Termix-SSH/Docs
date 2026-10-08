import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "session-sharing/session-sharing-api",
    },
    {
      type: "category",
      label: "Session Sharing",
      items: [
        {
          type: "doc",
          id: "session-sharing/resolve-a-guest-share-link",
          label: "Resolve a guest share link",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/create-a-session-share-link-or-targeted-user",
          label: "Create a session share (link or targeted user)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-sharing/list-active-session-shares-for-a-host",
          label: "List active session shares for a host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/list-live-ssh-sessions-other-users-shared-with-the-caller",
          label: "List live SSH sessions other users shared with the caller",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/users-and-roles-to-share-with-or-invite",
          label: "Users and roles to share with or invite",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/revoke-a-session-share",
          label: "Revoke a session share",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "session-sharing/end-a-shared-session-for-all-participants",
          label: "End a shared session for all participants",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Collab",
      items: [
        {
          type: "doc",
          id: "session-sharing/find-this-servers-id-for-a-synced-host",
          label: "Find this server's id for a synced host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/create-a-collaboration-room",
          label: "Create a collaboration room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-sharing/list-rooms-the-caller-belongs-to",
          label: "List rooms the caller belongs to",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/get-a-room-with-members-online-users-and-stage-state",
          label: "Get a room with members, online users and stage state",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/permanently-delete-a-room-host-only",
          label: "Permanently delete a room (host only)",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "session-sharing/invite-users-to-a-room-host-only",
          label: "Invite users to a room (host only)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-sharing/remove-a-member-host-or-leave-the-room-self",
          label: "Remove a member (host), or leave the room (self)",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "session-sharing/take-the-stage-with-one-of-your-live-sessions",
          label: "Take the stage with one of your live sessions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-sharing/stop-presenting-presenter-or-host",
          label: "Stop presenting (presenter or host)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-sharing/get-connect-info-for-the-current-stage-members-only",
          label: "Get connect info for the current stage (members only)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/grant-or-revoke-stage-control-presenter-or-host",
          label: "Grant or revoke stage control (presenter or host)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-sharing/ask-the-presenter-for-stage-control-hand-raise",
          label: "Ask the presenter for stage control (hand raise)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-sharing/list-pending-control-requests-presenter-or-host",
          label: "List pending control requests (presenter or host)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/dismiss-a-control-request-presenter-or-host-or-cancel-your-own",
          label: "Dismiss a control request (presenter or host), or cancel your own",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "session-sharing/disconnect-every-anonymous-guest-watching-the-stage-host-only",
          label: "Disconnect every anonymous guest watching the stage (host only)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-sharing/enable-rotate-or-disable-the-rooms-anonymous-guest-link-host-only",
          label: "Enable, rotate or disable the room's anonymous guest link (host only)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "session-sharing/resolve-a-rooms-current-stage-for-an-anonymous-guest",
          label: "Resolve a room's current stage for an anonymous guest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "session-sharing/end-the-meeting-host-only",
          label: "End the meeting (host only)",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
