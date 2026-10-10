# CLI Configuration

Most people never need this page. Log in once and everything is set. It is here for scripts, containers, and unusual setups.

## Where settings come from

Three places, and the first one that has a value wins:

1. Command line options, like `--url`
2. Environment variables, like `TERMIX_URL`
3. The saved config file from `termix login`

So you can be logged in normally and still point one command at another server without changing anything.

:::info
When you give an API key or token yourself, the CLI does not quietly fall back to your saved login. Running a command with a limited API key stays limited, instead of silently using your full session.
:::

## The config file

`termix login` writes a small file holding your server URL, your username, and a token if there is no keychain available.

| System  | Location                                           |
| ------- | -------------------------------------------------- |
| Linux   | `~/.config/termix/config.json`                     |
| macOS   | `~/Library/Application Support/termix/config.json` |
| Windows | `%APPDATA%\termix\config.json`                     |

Setting `XDG_CONFIG_HOME` overrides this on any system, and the file is written so only you can read it.

## Environment variables

### Connecting

| Variable                    | What it does                                    |
| --------------------------- | ----------------------------------------------- |
| `TERMIX_URL`                | Your Termix server address                      |
| `TERMIX_API_KEY`            | API key starting with `tmx_`                    |
| `TERMIX_TOKEN`              | A session token, if you have one already        |
| `TERMIX_REQUEST_TIMEOUT_MS` | How long to wait for a reply. Defaults to 60000 |
| `TERMIX_INSECURE_TLS`       | Set to `true` to skip TLS checks                |

### Passing secrets without typing them

Use these instead of `--password` so secrets stay out of your shell history:

| Variable                         | Used for                                        |
| -------------------------------- | ----------------------------------------------- |
| `TERMIX_HOST_PASSWORD`           | Password when creating or updating a host       |
| `TERMIX_HOST_KEY_PASSWORD`       | Passphrase for a host's SSH key                 |
| `TERMIX_CREDENTIAL_PASSWORD`     | Password when creating or updating a credential |
| `TERMIX_CREDENTIAL_KEY_PASSWORD` | Passphrase for a credential's SSH key           |

### Colour

Set `NO_COLOR` to anything, or `TERM=dumb`, to turn colour off. `--no-color` does the same for one command.

## Self-signed certificates

If your server uses a certificate your machine does not trust, use `--insecure` or set `TERMIX_INSECURE_TLS=true`. This turns off certificate checking, so only do it on a network you trust, and prefer fixing the certificate.

## One address for everything

Termix serves the web app, the API and every plugin from one address, with or without a reverse proxy, so `TERMIX_URL` is all the CLI needs.

Older CLI versions read `TERMIX_TERMINAL_URL`, `TERMIX_TUNNEL_URL`, `TERMIX_FILES_URL`, `TERMIX_METRICS_URL` and `TERMIX_DOCKER_URL` for Termix 2.8, where some parts listened on their own ports. They are ignored now, and the CLI prints a note if one is set.

## Global options

These work on every command:

| Option            | What it does                           |
| ----------------- | -------------------------------------- |
| `--url <url>`     | Server address for this command        |
| `--api-key <key>` | API key for this command               |
| `--json`          | Force JSON output                      |
| `--no-json`       | Force readable output, even when piped |
| `-q, --quiet`     | Print only ids, one per line           |
| `--no-color`      | Turn off colour                        |
| `--insecure`      | Skip TLS checks                        |
| `-V, --version`   | Print the CLI version                  |
| `-h, --help`      | Show help                              |
