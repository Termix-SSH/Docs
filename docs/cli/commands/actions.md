# termix ops

Run the actions plugins offer, such as restarting a container or a service, waking a machine or listing what runs on a host. Any plugin that declares an action shows up here with no extra setup. `termix actions` is the same command.

## List and describe

```bash
termix ops list
termix ops list --search docker
termix ops describe docker.restart-container
```

`describe` shows what an action needs: whether it runs on a host, on one item on a host (a resource, like a container) or on the server, how risky it is, and its inputs.

## Run

```bash
# One host
termix ops run service-manager.restart --host 9 --target nginx.service

# Several hosts
termix ops run docker.restart-container --host 3,4,9 --target web

# Inputs
termix ops run kubernetes.scale-workload --host 9 --target deployments/demo/web --input replicas=3
termix ops run fleets.run-command --host 9 --data '{"command":"uptime"}'

# See what would happen first
termix ops run docker.remove-container --host 9 --target old --dry-run
```

- `--input KEY=VALUE` can be given more than once. Numbers, `true`, `false` and JSON values are parsed.
- `--data` or `--data-file` takes all inputs as one JSON object. `--data-file -` reads stdin.
- Destructive actions need `--yes`.

Every run goes through the same checks as the web app: your permissions, your access to the host, the inputs and the approval rules. A change a rule holds for approval exits with code 9 and runs once someone approves it.

## Runs and approvals

```bash
termix ops runs --host 9
termix ops status <runId> --wait
termix ops cancel <runId>
termix ops approvals
termix ops approve <approvalId> --comment "looks fine"
termix ops reject <approvalId>
```

Approving needs a signed in session. An API key can't approve.

## API keys for scripts

An API key can be limited to actions only. A key limited to Read actions can list and run read only actions. A key limited to Run actions can run any action the owner may run. Neither can reach any other route.
