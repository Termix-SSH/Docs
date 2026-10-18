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
          id: "ai/token-usage-for-the-current-user-or-everyone",
          label: "Token usage, for the current user or everyone",
          className: "api-method get",
        },
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
          id: "ai/the-context-window-of-a-providers-models-and-where-it-came-from",
          label: "The context window of a provider's models, and where it came from",
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
        {
          type: "doc",
          id: "ai/auto-ops-tasks-and-plans-waiting-for-a-decision",
          label: "Auto-ops tasks and plans waiting for a decision",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/the-provider-model-and-language-the-users-tasks-use",
          label: "The provider, model and language the user's tasks use",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/save-the-provider-model-and-language-for-the-users-tasks",
          label: "Save the provider, model and language for the user's tasks",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "ai/shipped-and-saved-auto-ops-presets-with-what-is-enabled",
          label: "Shipped and saved auto-ops presets, with what is enabled",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/create-an-automation-from-a-preset",
          label: "Create an automation from a preset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/save-an-auto-ops-configuration-as-a-preset",
          label: "Save an auto-ops configuration as a preset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/delete-a-preset-the-user-saved",
          label: "Delete a preset the user saved",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ai/one-auto-ops-task-with-its-report-and-plan",
          label: "One auto-ops task with its report and plan",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/approve-a-proposed-plan-and-run-it",
          label: "Approve a proposed plan and run it",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/reject-a-proposed-plan",
          label: "Reject a proposed plan",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/the-users-fleets-with-their-member-host-ids",
          label: "The user's fleets with their member host ids",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/the-assistants-conversations-newest-first",
          label: "The assistant's conversations, newest first",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/one-assistant-conversation-with-its-messages-and-targets",
          label: "One assistant conversation with its messages and targets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/delete-an-assistant-conversation-and-its-run-records",
          label: "Delete an assistant conversation and its run records",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ai/watch-the-run-going-on-in-an-assistant-conversation",
          label: "Watch the run going on in an assistant conversation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ai/stop-the-run-going-on-in-an-assistant-conversation",
          label: "Stop the run going on in an assistant conversation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/summarise-the-earlier-part-of-an-assistant-conversation",
          label: "Summarise the earlier part of an assistant conversation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ai/send-a-message-to-the-assistant-and-stream-its-run",
          label: "Send a message to the assistant and stream its run",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
