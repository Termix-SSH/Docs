# termix hosts

Manage the SSH hosts saved in Termix.

Most commands take a host id, which you get from `termix hosts`.

## List hosts

```bash
termix hosts
termix hosts list
```

Both do the same thing. Filter the list:

| Option              | What it does              |
| ------------------- | ------------------------- |
| `--folder <folder>` | Only hosts in this folder |
| `--tag <tag>`       | Only hosts with this tag  |

```bash
termix hosts --tag production
termix hosts -q                 # just the ids
```

## Show one host

```bash
termix hosts get 3
```

Shows the host's settings. Passwords and keys are never printed.

## Create a host

```bash
termix hosts create --ip 10.0.0.5 --username root
```

You have to give `--ip`, `--username`, and a way to log in, which is a password, a key file, or a saved credential.

| Option                        | What it does                                                |
| ----------------------------- | ----------------------------------------------------------- |
| `--name <name>`               | Display name. Defaults to `user@ip`                         |
| `--ip <ip>`                   | Hostname or IP address                                      |
| `--port <port>`               | SSH port. Defaults to 22                                    |
| `--username <username>`       | SSH username                                                |
| `--auth-type <type>`          | `password` or `key`. Worked out for you if you leave it off |
| `--key-file <path>`           | Path to a private key file                                  |
| `--password <password>`       | Password. Prefer the environment variable below             |
| `--key-password <passphrase>` | Passphrase for the key                                      |
| `--credential-id <id>`        | Use a saved credential instead of entering secrets here     |
| `--folder <folder>`           | Folder to put it in                                         |
| `--tags <tags>`               | Comma separated tags                                        |
| `--enable-terminal`           | Turn on the terminal                                        |
| `--enable-file-manager`       | Turn on the file manager                                    |
| `--enable-docker`             | Turn on Docker                                              |
| `--enable-tunnel`             | Turn on tunnels                                             |

Pass secrets by environment variable so they stay out of your shell history and out of the process list:

```bash
TERMIX_HOST_PASSWORD='secret' termix hosts create --ip 10.0.0.5 --username root
```

With a key file:

```bash
termix hosts create --ip 10.0.0.5 --username deploy --key-file ~/.ssh/id_ed25519
```

Tags matter more than they look. A host tagged here can join a [fleet](/features/fleets/overview) on its own if a fleet has a matching tag rule.

## Update a host

```bash
termix hosts update 3 --name "web-1" --tags prod,web
```

Only the fields you pass change. Everything else is left alone. Takes the same options as create.

## Delete a host

```bash
termix hosts delete 3
```

There is no confirmation prompt, so check the id first.

## Export hosts

```bash
termix hosts export --output hosts.json
```

| Option            | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `--output <path>` | Write to a file instead of stdout               |
| `--share`         | Strip personal fields so the file can be shared |

:::warning
A normal export contains real passwords and private keys in readable form. Do not commit it to git or drop it in a shared folder. Use `--share` when handing the file to someone else.
:::

## Import hosts

```bash
termix hosts import hosts.json
termix hosts import hosts.json --overwrite
```

Without `--overwrite`, hosts that already exist are skipped. There is a limit of 100 hosts per file. Split a larger file and run it more than once.

The file format is the same one the web app uses. See [JSON Import Format](/features/files-and-hosts/json-import).

## Enroll a host

```bash
TERMIX_API_KEY=tmx_... termix hosts enroll --ip 10.0.0.9 --username deploy
```

Enrollment is for machines registering themselves, like a new server running a setup script. It needs an API key, not a normal login, and it needs `--ip`. It defaults to port 22 with the terminal on.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
