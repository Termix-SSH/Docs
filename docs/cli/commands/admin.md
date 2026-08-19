# Admin and Other Commands

Alerts, sessions, user administration, API keys, and a couple of commands for checking things are working.

## termix alerts

Your alerts. See [Alerts](/features/networking/alerts).

```bash
termix alerts                  # list active alerts
termix alerts dismiss <id>
termix alerts undismiss <id>
```

## termix sessions

Your own logged-in sessions across every device.

```bash
termix sessions                 # list
termix sessions revoke <id>
termix sessions revoke-all
```

:::warning
`revoke-all` signs out every session including the one you are using, so your next command will ask you to log in again. Use it if you think an account is compromised.
:::

## termix status

Host metrics from the shell.

```bash
termix status          # every host
termix status 3        # one host
```

Shows CPU, memory, disk, and whether the host is up. Good for a quick look without opening the dashboard.

## termix version

```bash
termix version
```

Prints the CLI version, the server you are pointed at, and whether that server is reachable. This is the first thing to run when something is not working.

## termix whoami

```bash
termix whoami
```

Shows who you are signed in as, your server, whether you are an admin, and whether you authenticated with a login or an API key.

## Admin commands

These need an admin account.

### List users

```bash
termix users
termix users list
```

### Audit logs

```bash
termix audit-logs
termix audit-logs --limit 50
termix audit-logs --action login
termix audit-logs --user <userId>
```

| Option              | What it does               |
| ------------------- | -------------------------- |
| `--limit <n>`       | How many entries to return |
| `--action <action>` | Only this kind of action   |
| `--user <userId>`   | Only actions by this user  |

### API keys

```bash
termix api-keys                 # list
termix api-keys create --name "CI deploy" --user <userId>
termix api-keys create --name "CI deploy" --user <userId> --expires-at 2027-01-01
termix api-keys revoke <keyId>
```

| Option                | What it does                         |
| --------------------- | ------------------------------------ |
| `--name <name>`       | Name for the key. Required           |
| `--user <userId>`     | The user the key acts as. Required   |
| `--expires-at <date>` | Expiry date. Leave off for no expiry |

:::warning
The key is printed once when you create it and cannot be shown again. Copy it straight away. If you lose it, revoke it and make another.
:::

Give a key an expiry date where you can, and one per system rather than one shared everywhere, so you can revoke a single one without breaking everything else.

See [API Keys](/features/api/api-keys).

## When a command does not work

| Exit code | What to try                                                |
| --------- | ---------------------------------------------------------- |
| 3         | Run `termix login` again                                   |
| 4         | Your account cannot do this, or the command needs an admin |
| 5         | Check the id is right                                      |
| 6         | Check the server address with `termix version`             |
| 7         | Unlock your data in the web app                            |

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
