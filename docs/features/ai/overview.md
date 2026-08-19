# AI Assistant

The AI assistant is a chat panel that can read your Termix setup and suggest changes. You can ask it things like "which hosts have not been touched in a month" or "set up an automation that restarts nginx if it goes down".

It brings its own model. Termix does not run one for you and does not ship one. You point it at a provider you choose, whether that is a cloud service or a model running on your own hardware.

## It is off until you turn it on

The assistant is off by default and stays off after an upgrade. Nothing is sent anywhere until someone deliberately switches it on. There are three separate switches:

1. The instance switch. An admin turns the feature on for the whole Termix instance under Admin Settings. Until that happens the assistant does not exist for anyone.
2. Your own switch. Each user turns it on for themselves in their profile. Another user enabling it does not enable it for you.
3. Read-only commands. A separate opt-in that lets the assistant run a small set of harmless commands on your hosts. Off unless you turn it on.

All three are checked on the server, so turning one off actually stops the feature rather than just hiding the button.

## What it can and cannot do

This is the important part, so it is worth being blunt.

**It can read** your hosts, fleets, snippets, automations, workspaces, alert rules, notification channels, alert history, homepage items, command history, and network topology.

**It can never touch** credentials, passwords, SSH keys, vault entries, roles and permissions, user accounts, sessions, API keys, SSO and login settings, certificates, audit logs, or instance settings. Those are not "hidden from the model", they are absent from the list of things it is able to call at all.

**It cannot change anything on its own.** When the assistant wants to make a change it writes a proposal and shows it to you. Nothing happens until you press Approve. You see exactly what it wants to do before it happens.

Secrets are also stripped out before anything leaves your server. Anything that looks like a password, private key, token, or API key is removed or masked, even from data the assistant is allowed to read.

See [Tools and Proposals](./tools) for the full list of what it can call.

## Using it

Open the AI panel from the sidebar. Pick a provider at the top, type a question, and press send. The reply streams in as it is generated.

Type `@` to mention one of your hosts, snippets, or automations, which saves describing it in words.

As the assistant works you can see each tool it calls and what came back, so there is no mystery about where an answer came from.

## Everything is logged

Adding, changing, or removing a provider is written to the audit log, and so is every proposal created, approved, or rejected. If you run Termix for a team, the audit log shows who asked for what and who approved it. See [Audit Logs](/features/authentication/security).

## Next steps

- [Providers](./providers) covers connecting OpenAI, Anthropic, Gemini, Ollama, or anything OpenAI-compatible.
- [Tools and Proposals](./tools) covers exactly what the assistant can read and propose.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
