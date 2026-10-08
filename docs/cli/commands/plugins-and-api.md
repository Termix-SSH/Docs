# termix plugins and termix api

See what your server has, and reach any part of it from the shell.

## termix plugins

Termix is built from plugins. The terminal, file manager, Docker, tunnels, fleets, snippets and alerts are all plugins, and an admin can install, remove or turn off any of them. `termix plugins` shows what your server has.

```bash
termix plugins
termix plugins list
```

| Column   | What it shows                                 |
| -------- | --------------------------------------------- |
| id       | The plugin id                                 |
| name     | Its name                                      |
| version  | The installed version                         |
| state    | `active` when it is running                   |
| commands | The CLI commands it enables, if there are any |

Any signed-in user or API key can run it.

### When a plugin is missing

A command that needs a plugin the server does not have, or has turned off, says so and exits with code 8:

```
termix: Docker is not installed on this server (plugin "docker").
  An admin can install it in Settings > Plugins. Run `termix plugins` to see what this server has.
```

| Command            | Plugin                                |
| ------------------ | ------------------------------------- |
| `ssh`              | [SSH Terminal](/plugins/ssh-terminal) |
| `files`            | [File Manager](/plugins/file-manager) |
| `docker`           | [Docker](/plugins/docker)             |
| `tunnel`           | [Tunnels](/plugins/tunnels)           |
| `fleets`           | [Fleets](/plugins/fleets)             |
| `snippets`, `exec` | [Snippets](/plugins/snippets)         |
| `alerts`           | [Alerts](/plugins/alerts)             |

`exec`, `ssh`, `snippets run` and `fleets exec` pass the remote exit code through, so they still use 255 for this, like any other CLI problem.

## termix api

Send a request to any Termix route with your login or API key. It is handy for plugins the CLI has no command for yet, and for trying a route before you script it.

```bash
termix api GET /plugins
termix api GET /plugin-api/host-metrics/metrics/3
termix api POST /plugin-api/wake-on-lan/host/3/wake
termix api GET /audit-logs --query limit=10
```

| Option                 | What it does                                     |
| ---------------------- | ------------------------------------------------ |
| `-d, --data <json>`    | JSON request body                                |
| `--data-file <path>`   | Read the JSON body from a file, or `-` for stdin |
| `--query <NAME=VALUE>` | Add a query string parameter. Repeat for more    |
| `--raw`                | Print the body as the server sent it             |

The method can be `GET`, `POST`, `PUT`, `PATCH` or `DELETE`, in any case. The leading `/` on the path is optional. In Git Bash on Windows, leave it off (`termix api GET plugins`), because Git Bash turns `/plugins` into a Windows file path. Plugin routes live under `/plugin-api/<plugin id>/`, and the [API reference](/api) lists every route.

The response is printed as JSON, and errors exit with the same codes as every other command. See [Scripting](/cli/scripting#exit-codes).
