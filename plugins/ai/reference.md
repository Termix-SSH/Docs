---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/ai/reference"
custom_edit_url: null
plugin_id: "ai"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| AI assistant | boolean | `false` | Let users turn on the AI assistant. While this is off, the assistant is hidden and blocked for everyone. |
| Allowed private AI hosts | textarea | `"localhost\n127.0.0.1\n::1\nhost.docker.internal"` | Hosts on your private network that users may point a provider at, such as a self-hosted Ollama. Put one host on each line. |

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable the AI assistant | boolean | `false` | Let the assistant read your setup and suggest changes for you to approve. |
| Allow read-only diagnostic commands | boolean | `false` | The assistant may run a short list of safe commands like df and uptime without asking each time. Anything that changes a server is always proposed first. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable AI Assistant | boolean | `false` | Allow the AI assistant to help in this host's terminal. Off by default, and still needs AI enabled for your account. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `ai.use` | user | Open the assistant and ask it things. |
| `ai.manage_providers` | user | Add, edit and remove the AI providers and their API keys. |
| `ai.apply_proposals` | user | Let the assistant carry out the changes it suggests. |
| `ai.services.use` | user |  |
| `ai.secrets.share` | user |  |
| `ai.agents` | admin | Start coding agents on SSH hosts using configured AI providers. Agents can execute commands and change files as the SSH user. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Works better with: [workspaces](/plugins/workspaces) ^1.0.0, [network-topology](/plugins/network-topology) ^1.0.0, [snippets](/plugins/snippets) ^1.0.0, [fleets](/plugins/fleets) ^1.0.0, [ssh-terminal](/plugins/ssh-terminal) ^1.0.0, [automations](/plugins/automations) ^1.0.0, [homepage](/plugins/homepage) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Uses | Version | Optional |
| --- | --- | --- |
| `workspaces.saved` | ^1.0.0 | yes |
| `network-topology.graph` | ^1.0.0 | yes |
| `snippets.access` | ^1.0.0 | yes |
| `fleets.access` | ^1.0.0 | yes |
| `terminal.history` | ^1.0.0 | yes |
| `automations.access` | ^1.0.0 | yes |
| `homepage.items` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/ai/ai-assistant-api).

## Platforms

Linux, Windows, macOS

