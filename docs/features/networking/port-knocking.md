# Port Knocking

Port knocking is a way to keep a port closed to the world until a specific sequence of connection attempts "knocks" it open. If your server's firewall uses port knocking to guard SSH, Termix can send that knock sequence automatically before it connects.

## Setting it up

1. Open the Host Editor for the host.
2. Scroll to Port Knocking Sequence and click **Add Knock**.
3. For each step, set the port, the protocol (TCP or UDP), and how long to wait afterward in milliseconds.
4. Add as many steps as your firewall rule expects, in order.
5. Save the host.

## How it works

When you connect to a host with a knock sequence configured, Termix sends each knock in order, waiting the configured delay between them, before opening the actual SSH connection. If the knock sequence fails for some reason, Termix logs a warning and tries to connect anyway, in case the port was already open.

This only sends the knock sequence. Setting up the actual port knocking daemon or firewall rules on your server is up to you.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
