---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/ai/v/1.1.0/reference"
custom_edit_url: null
plugin_id: "ai"
plugin_version: "1.1.0"
plugin_latest: false
---
## Settings

### Admin

Set by an admin in **Settings**, under the plugin's name. It applies to everyone.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| AI assistant | boolean | `false` | Let users turn on the AI assistant. While this is off, the assistant is hidden and blocked for everyone. |
| Allowed private AI hosts | textarea | `"localhost\n127.0.0.1\n::1\nhost.docker.internal"` | Hosts on your private network that users may point a provider at, such as a self-hosted Ollama. Put one host on each line. |
| AI assistant parallel hosts | number | `8` | How many hosts an assistant command runs on at the same time. |
| AI assistant command timeout (seconds) | number | `120` | How long a command may run on a host before it is stopped. The assistant can ask for up to 600. |
| AI assistant output per host (characters) | number | `4000` | How much of each host's output is kept. Longer output keeps its start and end. |
| Pause AI auto-ops | boolean | `false` | Stops every AI task and approved plan that is running and refuses new ones, until turned off again. |
| AI tasks per automation per hour | number | `6` | More triggers in the same hour are skipped. |
| Token budget per AI task | number | `200000` | A task that uses this many tokens is stopped and reports what it found. |
| Daily AI token budget per user | number | `2000000` | Once a user has used this many tokens today (UTC), their AI tasks are skipped or stopped. |

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
| `ai.ops.use` | admin | Let the assistant run any shell command on the hosts you select. Admins only by default. |
| `ai.usage.view_all` | admin | See the tokens every user's AI calls used, not only your own. Admins only by default. |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `process:spawn` | High | Run programs on this machine. Programs run on the Termix server itself, not on your hosts. |
| `hosts:write` | Medium | Create and change hosts. It can add hosts and edit the ones you already have. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:outbound` | Medium | Reach the internet. It can send requests to outside services. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `users:read` | Medium | See usernames and roles. Never password hashes, never two factor state. |
| `events:core` | Medium | Watch everything happening. Including activity from other users, not just yours. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `secrets:own` | Low | Store its own secrets. Encrypted by Termix. The plugin never holds the key. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Works better with: [workspaces](/plugins/workspaces) ^1.0.0, [network-topology](/plugins/network-topology) ^1.0.0, [snippets](/plugins/snippets) ^1.0.0, [fleets](/plugins/fleets) ^1.0.0, [ssh-terminal](/plugins/ssh-terminal) ^1.0.0, [automations](/plugins/automations) ^1.0.0, [homepage](/plugins/homepage) ^1.0.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Provides | Version | Permission |
| --- | --- | --- |
| `ai.tasks` | 1.0.0 | `ai.ops.use` |

| Uses | Version | Optional |
| --- | --- | --- |
| `workspaces.saved` | ^1.0.0 | yes |
| `network-topology.graph` | ^1.0.0 | yes |
| `snippets.access` | ^1.0.0 | yes |
| `fleets.access` | ^1.0.0 | yes |
| `terminal.history` | ^1.0.0 | yes |
| `automations.access` | ^1.0.0 | yes |
| `homepage.items` | ^1.0.0 | yes |

## Platforms

Linux, Windows, macOS

