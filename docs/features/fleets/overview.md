# Fleets

A fleet is a group of hosts you treat as one thing. Instead of opening five servers and typing the same command five times, you put them in a fleet and run it once.

Fleets are useful for anything you manage as a set: all your web servers, everything in one rack, every machine that needs the same update.

## Creating a fleet

Open the Fleets panel from the sidebar and click **Create Fleet**. A fleet needs a name. You can also give it a description, a color, and tag rules.

## How membership works

A fleet gets its hosts from two places, and it adds them together:

- Hosts you add by hand. Open the fleet, click **Manage members**, and tick the hosts you want.
- Tag rules. Give the fleet a list of tags. Any host carrying one of those tags joins automatically.

Tag rules are the reason fleets stay useful over time. If your fleet matches the tag `web`, then every new host you tag `web` joins on its own. You never have to remember to add it.

Tags are matched exactly. A rule for `web` matches a host tagged `web`, but not one tagged `web-server` or `Web`.

A host only appears once even if it matches both ways. Fleets only ever contain hosts you own.

:::info
Removing a host from a fleet only removes it from the hand-picked list. If the host still matches a tag rule, it stays in the fleet. To take it out for good, remove the tag or change the rule.
:::

## Running a command on every host

Open a fleet and pick **Run command**. Type the command once and Termix runs it on every host in the fleet at the same time.

You get a result for each host separately, so you can see exactly which ones worked and which did not. One host failing does not stop the rest.

These variables get filled in per host, the same ones snippets use:

| Variable               | What it becomes                   |
| ---------------------- | --------------------------------- |
| `$HOST`                | The host address                  |
| `$USER`                | The SSH username                  |
| `$PORT`                | The SSH port                      |
| `$NAME`                | The host name in Termix           |
| `$INPUT_1`, `$INPUT_2` | Values you type in before running |

Each host gets 60 seconds to finish. You need edit access to a host for it to be included.

## Moving files to and from every host

The Transfer tab does two things:

- Push sends one file to the same path on every host in the fleet. Good for pushing out a config file or a script.
- Pull grabs the same path from every host and downloads them together as a zip. Inside the zip each host gets its own folder, so nothing overwrites anything.

Files are capped at 200 MB per transfer. You need edit access on a host for it to take part.

## Installing packages

The Packages tab installs, removes, or upgrades packages across the fleet. Termix works out which package manager each host uses, so a mixed fleet of apt and dnf machines is fine.

Package actions run with sudo using the host's stored sudo password, and they need manage access, which is a higher bar than running a normal command. Upgrades can take a while, so each host gets up to 10 minutes.

## Sharing a fleet

Share gives other users or roles access to the hosts that are in the fleet right now. You pick the access level and can set it to expire after a number of hours.

:::warning
Sharing a fleet is a one-time snapshot of its current hosts. Hosts that join the fleet later are not shared automatically. Share again if you want them included.
:::

## Access is always checked per host

Being in a fleet never grants access to anything. Termix checks your permission on every host separately, every time, and quietly skips the ones you are not allowed to touch. A fleet is a convenience for grouping, not a way around permissions.

## Inventory

Fleets also collect basic facts about each host, like the OS and kernel. See [Fleet Inventory](./inventory) for that.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
