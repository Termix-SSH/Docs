# Wake on LAN

Wake on LAN lets you power on a server from Termix without walking over and pressing the button, as long as the hardware and network support it.

## Setting it up

1. Open the Host Editor for a host that has SSH enabled.
2. Fill in the MAC Address field with the server's network adapter MAC, like `AA:BB:CC:DD:EE:FF`.
3. Save the host.

Wake on LAN itself needs to be enabled in the server's BIOS/UEFI settings and supported by its network card. Termix can't turn that on for you, it just sends the signal.

## Waking a host

Once a host has a MAC address set, a power/wake button shows up next to it in the sidebar. Click it and Termix sends a magic packet telling the machine to power on.

This only works if Termix and the target machine are on the same local network, since the wake packet is a broadcast that doesn't cross most routers or VPNs.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
