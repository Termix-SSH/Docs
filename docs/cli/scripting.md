# Scripting with the CLI

The CLI is built to be used from scripts. Output turns into JSON when piped, exit codes mean specific things, and messages go to stderr so they never end up in your data.

## Set it up without logging in

Use an API key so no script ever needs a password:

```bash
export TERMIX_URL=https://termix.example.com
export TERMIX_API_KEY=tmx_your_key_here
```

Every command picks these up. See [Authentication](/cli/authentication).

## Output

On a terminal you get a table. Piped anywhere else you get JSON, with no flag needed:

```bash
termix hosts | jq -r '.[] | "\(.id) \(.name)"'
```

Use `--json` to force JSON when you are still on a terminal, and `--no-json` to keep the table when piping.

`-q` prints just ids, one per line, which is handy for loops:

```bash
for id in $(termix hosts -q); do
  termix exec "$id" uptime
done
```

Warnings, prompts, and progress all go to stderr, so piping stdout only ever gives you real output.

## Exit codes

Every command exits with a code you can branch on. These will not change without a major version, so it is safe to rely on them.

| Code | Meaning                                                |
| ---- | ------------------------------------------------------ |
| 0    | It worked                                              |
| 1    | It failed                                              |
| 2    | Wrong usage, like a bad option                         |
| 3    | You need to log in, or your session expired            |
| 4    | You do not have permission                             |
| 5    | Not found                                              |
| 6    | The server could not be reached                        |
| 7    | Your data is locked and needs unlocking in the web app |
| 130  | You pressed Ctrl+C                                     |
| 255  | The CLI itself hit a problem                           |

```bash
if ! termix exec 3 "systemctl is-active nginx" >/dev/null; then
  echo "nginx is not running"
fi
```

## Remote exit codes come back to you

`exec`, `ssh`, and `snippets run` exit with whatever the command on the server exited with. So this does what it looks like:

```bash
termix exec 3 "test -f /etc/nginx/nginx.conf"
echo $?    # 0 if the file exists, 1 if not
```

This is why those three use 255 for their own failures. A 255 means the CLI could not run your command, while any other code came from the server.

## Handling different failures

```bash
termix exec 3 "systemctl restart nginx"
case $? in
  0) echo "restarted" ;;
  3) echo "log in again" ;;
  6) echo "server unreachable" ;;
  *) echo "command failed" ;;
esac
```

## In CI

```yaml
- name: Deploy
  env:
    TERMIX_URL: ${{ secrets.TERMIX_URL }}
    TERMIX_API_KEY: ${{ secrets.TERMIX_API_KEY }}
  run: |
    npm install -g @termix-cli/cli
    termix files put ./build.tar.gz 3:/tmp/build.tar.gz
    termix exec 3 "cd /opt/app && tar xzf /tmp/build.tar.gz && systemctl restart app"
```

Give the key only the access it needs, so a leaked CI key cannot touch everything.

## A whole fleet at once

```bash
termix fleets exec 2 "apt-get update && apt-get upgrade -y"
```

This exits non-zero if any host failed. Use `--json` to see which ones:

```bash
termix fleets exec 2 "uptime" --json | jq '.results[] | select(.success == false)'
```

## Things to watch out for

- `termix ssh` needs a real login and will not work with an API key. Use `termix exec`.
- `files` commands move text. Do not use them for binaries like images or archives.
- `hosts export` writes real passwords and keys into the file. Do not commit it.
- `hosts import` takes at most 100 hosts at a time.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
