# Fleet Inventory

Inventory answers a simple question: what is actually running on these machines? It collects the basics from every host in a fleet so you can see them side by side instead of connecting to each one.

## Collecting inventory

Open a fleet, go to the **Inventory** tab, and press refresh. Termix connects to each host, reads a few facts, and stores them.

For each host it records:

| Field           | What it is                                          |
| --------------- | --------------------------------------------------- |
| OS              | The operating system name and version               |
| Kernel          | The running kernel version                          |
| Architecture    | The CPU architecture, like `x86_64` or `aarch64`    |
| Hostname        | The machine's own hostname                          |
| Uptime          | How long the machine has been running               |
| IP              | The address Termix connects to                      |
| Package manager | The package tool found on the host, like apt or dnf |

The check is quick and read only. It does not change anything on the host.

## Viewing inventory

The Inventory tab inside the fleet shows a card for each host. For a bigger view, open the inventory as its own tab, where you get a full table you can sort by any column and search through.

This is the fastest way to answer things like which machines are still on an old kernel, or which ones have been up for a suspiciously long time.

## How the data is stored

Inventory is a snapshot, not a history. Each refresh replaces the previous result for that host, so you always see the state from the last time you collected it. The tab shows when each snapshot was taken.

Opening the tab does not connect to anything. It reads what was stored last time, so it loads instantly and works even if a host is currently offline. Press refresh when you want fresh numbers.

Hosts that are offline or unreachable during a refresh keep their old snapshot, and the rest of the fleet still updates.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
