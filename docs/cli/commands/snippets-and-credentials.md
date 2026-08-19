# termix snippets and termix credentials

Manage saved commands and saved logins.

## termix snippets

Snippets are commands you saved so you do not have to retype them. See [Snippets](/features/terminal/snippets).

### List snippets

```bash
termix snippets
termix snippets list
```

### Create a snippet

```bash
termix snippets create --name "Restart nginx" --content "systemctl restart nginx"
termix snippets create --name "Deploy" --content-file ./deploy.sh
```

| Option                  | What it does                 |
| ----------------------- | ---------------------------- |
| `--name <name>`         | Name. Required               |
| `--content <content>`   | The command itself           |
| `--content-file <path>` | Read the command from a file |
| `--description <text>`  | Description                  |
| `--folder <folder>`     | Folder to file it under      |

Give either `--content` or `--content-file`, not both. `--content-file` is much easier for anything more than one line.

### Update a snippet

```bash
termix snippets update 5 --content "systemctl reload nginx"
```

Only what you pass changes. Same options as create.

### Delete a snippet

```bash
termix snippets delete 5
```

### Run a snippet

```bash
termix snippets run 5 --host 3
```

| Option                 | What it does                                      |
| ---------------------- | ------------------------------------------------- |
| `--host <hostId>`      | Host to run it on. Required                       |
| `--input <NAME=VALUE>` | Fill in a snippet input. Repeat for more than one |

```bash
termix snippets run 5 --host 3 --input ENVIRONMENT=production --input VERSION=1.4.0
```

Inputs must be written `NAME=VALUE`. The exit code is the one from the server, same as `termix exec`.

## termix credentials

Credentials are saved logins you can attach to several hosts, so a password lives in one place. See [Credentials](/features/files-and-hosts/credentials).

### List credentials

```bash
termix credentials
termix credentials list
```

### Show one credential

```bash
termix credentials get 4
```

### Create a credential

```bash
TERMIX_CREDENTIAL_PASSWORD='secret' termix credentials create \
  --name "Deploy user" --auth-type password --username deploy
```

| Option                        | What it does                              |
| ----------------------------- | ----------------------------------------- |
| `--name <name>`               | Name. Required                            |
| `--auth-type <type>`          | `password` or `key`. Required             |
| `--username <username>`       | Username. Required                        |
| `--description <text>`        | Description                               |
| `--folder <folder>`           | Folder                                    |
| `--tags <tags>`               | Comma separated tags                      |
| `--key-file <path>`           | Private key file, for `key` type          |
| `--password <password>`       | Password. Prefer the environment variable |
| `--key-password <passphrase>` | Passphrase for the key                    |

Pass secrets with `TERMIX_CREDENTIAL_PASSWORD` and `TERMIX_CREDENTIAL_KEY_PASSWORD` instead of flags, so they stay out of your shell history and the process list.

With a key:

```bash
termix credentials create --name "Deploy key" --auth-type key \
  --username deploy --key-file ~/.ssh/id_ed25519
```

### Update and delete

```bash
termix credentials update 4 --name "Deploy user (prod)"
termix credentials delete 4
```

Update changes only the fields you pass.

### Using a credential on a host

```bash
termix hosts create --ip 10.0.0.5 --username deploy --credential-id 4
```

Better than putting the password on each host, since changing it once updates every host that uses it.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
