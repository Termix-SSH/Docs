# AI Tools and Proposals

The assistant cannot do anything except call a tool from a fixed list. This page is that list.

The list is the security boundary. A tool that is not on it cannot be called, no matter what the model decides to try or what someone types into the chat.

## Reading

The assistant starts out knowing nothing about your setup. To answer anything it has to go and look, using one of these:

| Tool                         | What it reads              |
| ---------------------------- | -------------------------- |
| `list_hosts`                 | Your hosts                 |
| `get_host`                   | One host's settings        |
| `list_fleets`                | Your fleets                |
| `list_snippets`              | Your saved snippets        |
| `list_automations`           | Your automations           |
| `get_automation`             | One automation in full     |
| `list_workspaces`            | Your saved workspaces      |
| `list_alert_rules`           | Your alert rules           |
| `list_notification_channels` | Your notification channels |
| `get_alert_firings`          | Alert history              |
| `list_homepage_items`        | Homepage widgets           |
| `get_command_history`        | Your command history       |
| `get_network_topology`       | The network graph          |

Host settings never include passwords or keys. Secrets are stripped before anything is sent to the provider.

## Proposing changes

The assistant cannot create, edit, or delete anything directly. It can only propose:

| Tool                        | What it proposes        |
| --------------------------- | ----------------------- |
| `propose_create_host`       | Add a host              |
| `propose_update_host`       | Change a host           |
| `propose_delete_host`       | Delete a host           |
| `propose_create_snippet`    | Add a snippet           |
| `propose_update_snippet`    | Change a snippet        |
| `propose_delete_snippet`    | Delete a snippet        |
| `propose_create_automation` | Add an automation       |
| `propose_create_fleet`      | Add a fleet             |
| `propose_create_alert_rule` | Add an alert rule       |
| `propose_run_command`       | Run a command on a host |

A proposal shows up in the chat as a card listing exactly what would change. Nothing happens until you press **Approve**. Press **Reject** and it is discarded.

The assistant is limited to one proposal per request, so it cannot bury a second change underneath the one you were expecting.

## What it can never reach

These are not on the list and are not meant to be added:

credentials, passwords, SSH keys, vault entries, roles and permissions, user accounts, sessions, API keys, TOTP, passkeys, SSO, OIDC, LDAP, Termix ID, certificates, OPKSSH, SSL, audit logs, sync, and instance settings.

There is no tool that reads a credential, so no prompt can talk the assistant into handing one over.

## Read-only commands

If you turn on the read-only commands option, the assistant can run a small set of commands on your hosts to answer questions like "how much disk is left on this machine".

Allowed commands:

`df` `du` `free` `uptime` `uname` `whoami` `hostname` `id` `ps` `top` `systemctl` `journalctl` `docker` `ip` `ss` `netstat` `lsblk` `cat` `ls` `stat` `which` `date` `lscpu` `vmstat` `iostat`

The rules are strict:

- Commands that can do more than report get limited to safe subcommands. `systemctl` is allowed `status`, `list-units`, `list-unit-files`, `is-active`, `is-enabled`, and `show`. `docker` is allowed `ps`, `stats`, `images`, `logs`, `inspect`, `version`, and `info`. `ip` is allowed `a`, `addr`, `link`, `route`, and `neigh`.
- `cat` can only read under `/proc/`, `/sys/`, and `/etc/os-release`, so it cannot be pointed at a config file full of passwords.
- `sudo`, `su`, `doas`, and `env` are refused.
- Anything containing `;`, `&`, `|`, backticks, `$`, `>`, `<`, a newline, or a backslash is refused outright. That blocks chaining a second command onto an allowed one.

Anything that does not fit these rules has to go through `propose_run_command` instead, which means you approve it first.

:::info
This option is off unless you turn it on. With it off, the assistant can still read your Termix configuration, it just cannot run anything on your servers.
:::

## Audit trail

Every proposal created, approved, or rejected is written to the audit log, along with any change to a provider. You can see who asked for what, what was suggested, and who approved it.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
