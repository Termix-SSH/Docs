# CLI Authentication

There are two ways to sign in. Log in as yourself when you are working at a keyboard, or use an API key for scripts and CI.

## Logging in

```bash
termix login --url https://termix.example.com
```

It asks for your username and password, then a 2FA code if your account uses one. After that your session is saved and other commands just work.

You can pass details up front to skip some of the questions:

| Option              | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `--url <url>`       | Your Termix server address                     |
| `--username <name>` | Your username                                  |
| `--password-stdin`  | Read the password from stdin instead of asking |
| `--totp <code>`     | Your 2FA code                                  |

Check who you are signed in as:

```bash
termix whoami
```

That prints your username, your server, whether you are an admin, and how you authenticated.

Sign out and clear your saved details:

```bash
termix logout
```

## API keys for scripts

Do not put your password in a script. Use an API key instead.

Create one in the web app under **Admin Settings**, then set two environment variables:

```bash
export TERMIX_URL=https://termix.example.com
export TERMIX_API_KEY=tmx_your_key_here
termix hosts
```

With those set you never have to run `termix login`, which is what you want in CI or a cron job. See [API Keys](/features/api/api-keys).

You can also pass a key for one command:

```bash
termix --api-key tmx_... --url https://termix.example.com hosts
```

:::warning
A key passed on the command line can show up in your shell history and in the process list, where other users on the machine can see it. Prefer the environment variable.
:::

## One thing API keys cannot do

`termix ssh` needs a normal login. Interactive terminals use a websocket, and API keys cannot open one.

In a script use `termix exec` instead, which works fine with an API key:

```bash
termix exec 3 "systemctl restart nginx"
```

## Where your login is stored

If your system has a keychain, your token goes in there: Credential Manager on Windows, Keychain on macOS, or Secret Service on Linux. It is filed under the service name `termix-cli` and keyed by server address, so you can be logged into more than one server.

If no keychain is available, the token is written to the config file instead, with permissions that only let you read it. See [Configuration](/cli/configuration).

Your password is never stored. It is exchanged for a token when you log in.

## When your session expires

Tokens last 30 days. After that, or if someone revokes the session, commands fail with an authentication error and exit code 3. Run `termix login` again.

## Switching between servers

Run `termix login` again with the new address, or set `TERMIX_URL` for one command:

```bash
TERMIX_URL=https://other.example.com termix hosts
```

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
