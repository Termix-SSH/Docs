---
title: "Steps"
sidebar_position: 12
slug: "/automations/steps"
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Automations/edit/main/docs/steps.md"
plugin_id: "automations"
plugin_version: "1.0.0"
plugin_latest: true
---
Steps are what an automation does. They run in order, top to bottom.

## Step types

| Step                       | What it does                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Send an alert**          | Puts an alert in your [Alerts](/plugins/alerts) inbox, with a title, message and severity. **Also send to** picks channels too.       |
| **Run a command**          | Runs a command on hosts. **Run with sudo** to elevate.                                                                                |
| **Run a snippet**          | Runs a saved [snippet](/plugins/snippets) and fills in its inputs. Better than pasting a long command, since you fix it in one place. |
| **Control a container**    | Starts, stops or restarts a container by name.                                                                                        |
| **Control a tunnel**       | Connects or disconnects a saved tunnel.                                                                                               |
| **Wake a host**            | Sends a Wake-on-LAN packet.                                                                                                           |
| **Call a URL**             | Sends an HTTP request with a method, headers and body.                                                                                |
| **Wait**                   | Pauses for some seconds, like after a restart.                                                                                        |
| **Set a variable**         | Saves a value for later steps, as `{{vars.name}}`.                                                                                    |
| **If / otherwise**         | Runs steps when a condition is true, and others when it isn't. Conditions can nest.                                                   |
| **Run another automation** | Runs another one. Up to 5 levels deep.                                                                                                |
| **Stop**                   | Ends the run as a success or a failure.                                                                                               |

**Call a URL** blocks addresses on your private network by default. Turn on **Allow local network addresses** for a step that calls something on your LAN, and an admin has to allow the host first.

## Picking hosts

Steps that touch hosts pick them like triggers do: one host, a fleet, or all hosts. They have one more choice:

**Triggering host** acts on whichever host set the automation off. It is usually what you want. One automation that says "when any host's disk fills, clean up that host" covers every host.

## Templates

Steps can use values from the run with `{{ }}`:

| Template                                                                | Gives you                               |
| ----------------------------------------------------------------------- | --------------------------------------- |
| `{{host.name}}`, `{{host.ip}}`, `{{host.username}}`                     | The host being acted on.                |
| `{{trigger.value}}`                                                     | The value that set the trigger off.     |
| `{{steps.<id>.stdout}}`, `{{steps.<id>.stderr}}`, `{{steps.<id>.code}}` | An earlier step's output and exit code. |
| `{{vars.name}}`                                                         | A variable you set.                     |
| `{{run.id}}`                                                            | This run's id.                          |

```
Disk on {{host.name}} hit {{trigger.value}} percent.
```

A template that doesn't match anything is left as it is, so a typo like `{{host.nmae}}` shows up in the message instead of disappearing.

## Conditions

A condition compares two values. Either side can be a template.

Operators: `>`, `<`, `>=`, `<=`, `==`, `!=`, `contains`, `not contains`, `changed`.

When both sides look like numbers they are compared as numbers, so `10` is more than `9`.

## When a step fails

Each step has an **on error** setting:

- **Stop** ends the run. The default.
- **Continue** moves on to the next step.
- **Branch** follows the otherwise path of the condition around it.

Each step has a timeout, 60 seconds by default, and the whole run stops after 300 seconds.

## Example

Restart nginx when it stops, and only tell someone if that didn't fix it:

1. **Run a command** `systemctl is-active nginx` on the triggering host, on error **Continue**. Id `check`.
2. **If** `{{steps.check.stdout}}` `!=` `active`
   - **Run a command** `systemctl restart nginx`, with sudo
   - **Wait** 10 seconds
   - **Run a command** `systemctl is-active nginx`. Id `verify`.
   - **If** `{{steps.verify.stdout}}` `!=` `active`
     - **Send an alert**: `nginx on {{host.name}} won't come back up`

The first step continues on error because a stopped service exits with a non-zero code, which is exactly the case you are looking for.
