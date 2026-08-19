# Automations

An automation watches for something to happen, then runs a list of steps. Disk fills up, so send yourself a message. Every night at 3am, run a backup script. A container dies, so restart it.

Every automation is the same shape: one trigger, then a list of steps in order.

- The [trigger](./triggers) decides when it runs.
- The [steps](./steps) decide what it does.

## Creating an automation

Open the Automations panel from the sidebar and click **New Automation**. Give it a name, pick a trigger, and add your steps.

The editor has three views:

- Builder builds the automation with form fields. This is the normal way to work.
- JSON shows the raw definition. Handy for copying an automation somewhere else.
- Graph draws the steps so you can follow the flow, which helps once you start nesting conditions.

## Test it before you trust it

Every automation has a test run and a dry run setting. In a dry run, Termix walks through the whole automation and reports what each step would have done, but skips anything that reaches outside Termix.

These steps are skipped in a dry run:

`notify`, `http`, `run_snippet`, `run_command`, `docker`, `tunnel`, `wol`

Everything else, like conditions and variables, still runs properly. Dry runs are the safe way to check the logic before letting an automation restart a service on its own.

## Run history

The Runs tab lists every run with its status, how long it took, and what triggered it. Open a run to see each step, its output, and any error.

Runs are kept for 30 days. Output longer than 32 KB per step is cut short, so a very chatty command will not fill your database.

## Settings for each automation

| Setting      | What it does                                      | Default     |
| ------------ | ------------------------------------------------- | ----------- |
| Enabled      | Turn the automation off without deleting it       | On          |
| Concurrency  | What happens if it triggers while already running | Skip        |
| Max run time | Whole automation gives up after this              | 300 seconds |
| Dry run      | Skip anything with an outside effect              | Off         |

Concurrency has three choices:

- Skip ignores the new trigger while a run is in progress. This is usually what you want.
- Queue waits for the current run to finish, then runs again.
- Allow runs both at the same time.

## Notification channels

The Channels tab is where you set up where messages go. A channel can be:

- Webhook, which sends a POST to any URL you choose
- ntfy, for push notifications to your phone
- Discord, which posts an embed to a channel

You can send a test message to a channel to check it works before relying on it. Channels are shared with [Alerts](/features/networking/alerts), so anything you set up in one place works in the other.

## Chaining automations

A step can run another automation. This lets you write one automation that does a common job, like "notify everyone on call", and reuse it from several others.

Chains are limited to 5 levels deep, which stops an automation from calling itself forever.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
