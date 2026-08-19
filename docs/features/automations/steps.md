# Automation Steps

Steps are what an automation actually does. They run in order, top to bottom.

## The step types

### Notify

Sends a message through one or more notification channels. You can set a title, a body, and a severity of info, warning, or critical.

### Run command

Runs a command on the hosts you pick. Tick elevated to run it with sudo.

### Run snippet

Runs one of your saved [snippets](/features/terminal/snippets). If the snippet takes inputs, you fill them in here. Better than pasting a long command into the step, because you only have to fix the snippet in one place.

### Docker

Starts, stops, or restarts a container by name.

### HTTP

Sends an HTTP request. Pick the method, URL, headers, and body. Use it to call an API that has no built-in step.

By default requests to private or LAN addresses are blocked, to stop an automation being used to poke around your internal network. Turn on allow private network for that step if you really are calling something on your own network.

### Tunnel

Connects or disconnects one of your saved tunnels by name.

### Wake on LAN

Sends a wake packet to a host. Pair it with a schedule to bring machines up in the morning. See [Wake on LAN](/features/networking/wake-on-lan).

### Wait

Pauses for a number of seconds. Useful after a restart, to give a service time to come up before the next step checks it.

### Set variable

Saves a value you can use later with `{{vars.name}}`.

### If

Runs one set of steps when a condition is true, and optionally another set when it is false. Conditions can be nested.

### Run automation

Runs another automation. Limited to 5 levels deep.

### Stop

Ends the run early. You can mark the run as a success or a failure.

## Picking hosts for a step

Steps that touch a host let you choose the same way triggers do: one host, several, a fleet, or all of them. There is one extra option:

The triggering host uses whichever host set the automation off. This is what you usually want. One automation that says "when any host runs out of disk, clean up that host" works for your whole fleet, because each run acts on the machine that actually had the problem.

## Using values from earlier steps

Steps can read values from the run using `{{ }}` templates.

| Template                | What it gives you                  |
| ----------------------- | ---------------------------------- |
| `{{host.name}}`         | Name of the host being acted on    |
| `{{host.ip}}`           | Its address                        |
| `{{host.username}}`     | The SSH user                       |
| `{{trigger.value}}`     | The value that set the trigger off |
| `{{steps.<id>.stdout}}` | Output of an earlier step          |
| `{{steps.<id>.stderr}}` | Its error output                   |
| `{{steps.<id>.code}}`   | Its exit code                      |
| `{{vars.name}}`         | A variable you set earlier         |
| `{{run.id}}`            | The current run id                 |

So a notify step body might read:

```
Disk on {{host.name}} hit {{trigger.value}} percent.
```

If a template name is wrong, Termix leaves the text as it is instead of replacing it with nothing. A message with a stray `{{host.nmae}}` in it tells you about the typo, where a silently empty message would not.

## Conditions

Conditions compare two values. Both sides can be templates.

Operators: `>`, `<`, `>=`, `<=`, `==`, `!=`, `contains`, `not contains`, `changed`.

When both sides look like numbers they are compared as numbers, so `10` is correctly greater than `9`.

## When a step fails

Each step has an on error setting:

- Stop ends the run. This is the default.
- Continue ignores the failure and moves to the next step.
- Branch follows the else path of the surrounding condition.

Each step also has its own timeout, 60 seconds by default. The whole automation stops after its maximum run time, 300 seconds by default.

## A worked example

Restart nginx when it stops responding, and only tell someone if the restart did not help:

1. **Run command** `systemctl is-active nginx` on the triggering host, with on error set to continue
2. **If** `{{steps.check.stdout}}` `!=` `active`
   - **Run command** `systemctl restart nginx`, elevated
   - **Wait** 10 seconds
   - **Run command** `systemctl is-active nginx`
   - **If** `{{steps.verify.stdout}}` `!=` `active`
     - **Notify** with a message like `nginx on {{host.name}} would not come back up`

The first check uses continue on error because a stopped service returns a non-zero exit code, and that is the case you are looking for rather than a problem with the automation.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
