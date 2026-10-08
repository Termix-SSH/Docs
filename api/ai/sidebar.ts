import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ai/ai-assistant-api",
    },
    {
      type: "category",
      label: "AI",
      items: [
        {
          type: "doc",
          id: "ai/whether-the-ai-assistant-is-available-to-this-user",
          label: "Whether the AI assistant is available to this user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/turn-the-assistant-on-or-off-for-the-current-user",
          label: "Turn the assistant on or off for the current user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "ai/list-the-users-configured-ai-providers",
          label: "List the user's configured AI providers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/add-an-ai-provider",
          label: "Add an AI provider",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/update-an-ai-provider",
          label: "Update an AI provider",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "ai/delete-an-ai-provider",
          label: "Delete an AI provider",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ai/list-models-for-a-provider-that-has-not-been-saved-yet",
          label: "List models for a provider that has not been saved yet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/list-models-available-from-a-provider",
          label: "List models available from a provider",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/list-the-users-ai-conversations",
          label: "List the user's AI conversations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/get-one-conversation-with-its-messages-and-proposals",
          label: "Get one conversation with its messages and proposals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/delete-a-conversation",
          label: "Delete a conversation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ai/send-a-message-and-stream-the-assistants-reply",
          label: "Send a message and stream the assistant's reply",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/apply-a-pending-proposal",
          label: "Apply a pending proposal",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/record-that-a-run-command-proposal-was-executed-in-an-open-terminal",
          label: "Record that a run_command proposal was executed in an open terminal",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/reject-a-pending-proposal",
          label: "Reject a pending proposal",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
