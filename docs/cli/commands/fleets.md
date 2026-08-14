# termix fleets

Work with [fleets](/features/fleets/overview), which are groups of hosts you act on together.

The reason to use this is `termix fleets exec`. One command, every server in the group, results for each one.

## List fleets

```bash
termix fleets
termix fleets list
```

## List the hosts in a fleet

```bash
termix fleets members 2
```

Shows every host in the fleet, including ones that joined through a tag rule rather than being added by hand.

## Create a fleet

```bash
termix fleets create --name "Web servers"
termix fleets create --name "Web servers" --description "Everything behind the load balancer"
```

| Option                 | What it does         |
| ---------------------- | -------------------- |
| `--name <name>`        | Fleet name. Required |
| `--description <text>` | Description          |

Tag rules are set in the web app. Once a fleet has one, hosts tagged to match join on their own.

## Add and remove hosts

```bash
termix fleets add-host 2 3
termix fleets remove-host 2 3
```

First number is the fleet, second is the host.

Removing only takes out a host you added by hand. A host that matches a tag rule stays in the fleet until you change the tag or the rule.

## Delete a fleet

```bash
termix fleets delete 2
```

This deletes the group, not the hosts in it.

## Run a command on every host

```bash
termix fleets exec 2 uptime
termix fleets exec 2 "apt-get update && apt-get upgrade -y"
```

Runs on all hosts at the same time. You get a section per host so you can see which worked:

```
=== web-1 ===
 14:22:01 up 42 days

=== web-2 ===
 14:22:01 up 12 days
```

One host failing does not stop the others.

### Exit code

Exits 0 only if every host succeeded. If any failed you get a non-zero code, which makes it usable in a script:

```bash
if ! termix fleets exec 2 "systemctl is-active --quiet nginx"; then
  echo "nginx is down somewhere"
fi
```

### Finding out which host failed

```bash
termix fleets exec 2 "uptime" --json | jq '.results[] | select(.success == false)'
```

JSON output gives you `count` and a `results` array, with `hostId`, `hostName`, `success`, and either output or an error for each host.

### Things worth knowing

- Each host gets 60 seconds.
- You need edit access to a host for it to be included, and hosts you cannot edit are skipped.
- Being in a fleet is not permission. Termix checks your access to every host separately.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
