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

## Running against a server without a reverse proxy

Normally Termix sits behind nginx and everything is on one address, which is all the CLI needs.

If you run the backend directly with no proxy, its parts listen on separate ports and you have to say where each one is:

| Variable              | Used by  | Default port |
| --------------------- | -------- | ------------ |
| `TERMIX_TERMINAL_URL` | `ssh`    | 30002        |
| `TERMIX_TUNNEL_URL`   | `tunnel` | 30003        |
| `TERMIX_FILES_URL`    | `files`  | 30004        |
| `TERMIX_METRICS_URL`  | `status` | 30005        |
| `TERMIX_DOCKER_URL`   | `docker` | 30007        |

If a command fails with a not found error and mentions one of these, that is the fix. Commands you are not using need no variable.

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

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
