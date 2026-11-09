---
title: "Wake-on-LAN"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/wake-on-lan"
description: "Wake, shut down and track your machines from one power dashboard."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Wake-On-LAN/edit/main/docs/index.md"
plugin_id: "wake-on-lan"
plugin_version: "1.2.0"
plugin_latest: true
---
Wake-on-LAN is a power dashboard for your machines. The Power tab lists every machine with its status and a power button. You can wake machines, shut them down, put them to sleep, run all of that on a schedule, and find machines with a network scan.

## Add a machine

Open Power from the rail. There are three ways to add a machine.

- Host editor: Turn on Power for a host and fill in its MAC address.
- Add: Pick an existing host, or make a new one with SSH off. New ones go in a `Power` folder.
- Scan: See [Find machines with a scan](#find-machines-with-a-scan).

The machine needs Wake-on-LAN turned on in its BIOS or UEFI, and often in its network card settings too. Use the MAC of the wired port that is set to wake.

Hosts that had a MAC address before this version are on the Power tab already.

## When Termix is not on the same network

A wake packet has to start on the machine's own network. Most routers drop it otherwise, and it never gets past the internet. If Termix runs somewhere else, or in Docker on a bridge network, use a relay. A relay is any SSH host on that network, like a Raspberry Pi, that is on when the machine is off.

1. Add the relay as a normal SSH host in Termix. It needs `python3` or `perl`.
2. Open the machine's settings on the Power tab.
3. Set Send from to the relay.
4. Set LAN IP to the machine's address on that network, and Netmask so Termix can work out the broadcast address.

Here is a server that Termix reaches over Tailscale and a Raspberry Pi next to it:

| Setting      | Value                       |
| ------------ | --------------------------- |
| Host address | Its Tailscale IP, unchanged |
| MAC address  | The server's ethernet MAC   |
| LAN IP       | `192.168.1.2`               |
| Netmask      | `255.255.255.0`             |
| Send from    | The Raspberry Pi            |
| Check from   | Termix server               |

You don't need a second host for the LAN address. The host keeps its Tailscale address for SSH and the plugin keeps the LAN IP for waking.

Without a relay, Termix in Docker needs `network_mode: host` or a macvlan network, since broadcast packets don't leave Docker's default bridge network.

## Find machines with a scan

Press Scan and pick where to scan from.

- An SSH host on that network: This is the one to use in most setups. It uses `nmap` if the host has it, or else a ping sweep and its neighbour table. `nmap` only reports MAC addresses as root, so give it passwordless sudo if you want vendor names. Leave Range blank to scan that host's own private networks. Public ranges are only scanned if you type one in, so check your provider allows it.
- The Termix server: Admins only, and you need to give a range. On a Docker bridge network it can't see your LAN.

A range can be at most a /22. Each result shows if it looks like a host you already have, by MAC, IP or name. Attach adds the MAC and LAN IP to that host and leaves its address alone. Add makes a new host. A scan finds machines on the network, but it can't tell if Wake-on-LAN is turned on for them.

## Status

By default the Termix server checks the host's own port. It only checks TCP ports, so a machine with no SSH needs a port it answers on in Ports. Open ports show on the card.

Set Check from to an SSH host if Termix can't reach the machine. That host also uses ping. Each check from a relay runs over one kept connection, so it doesn't fill up the audit log.

Custom check runs your own command instead. Exit code 0 means the machine is on, and anything else means it is off. Admins set how often checks run in the plugin settings. The default is 60 seconds.

## Wake, shut down and sleep

The power button wakes a machine that is off and shuts down one that is on. The same button is on the dashboard card, the homepage widget and the host's row. Folders on the Power tab have Wake all.

Wake with a Wake-on-LAN packet or a custom command. SecureON passwords work for network cards that ask for one. Use 4 or 6 characters, or a value written like a MAC address.

Shut down with one of these:

- This host's SSH login: Termix logs in and runs `poweroff`, or `shutdown /s` on Windows. Linux and macOS need root or passwordless sudo.
- Custom command: See below.

Sleep-On-LAN needs the [Sleep-On-LAN](https://github.com/SR-G/sleep-on-lan) tool on the machine, with an HTTP listener like `HTTP:8009`. When a relay is set, the request comes from the relay. Termix blocks requests to private addresses from the server, so without a relay an admin has to allow the address.

Use the BMC when there is one is off by default. Turn it on for a device that has a BMC linked in the Out-of-band plugin. Wake then powers the machine on through the BMC instead of a packet, which also works when Wake-on-LAN is off in the BIOS. Shut down uses the BMC to ask the machine to shut down, but only when no other shutdown method is set. If the host has no BMC, or Out-of-band is off, the other methods are used. You need edit access to the host, and the power permission in Out-of-band.

After a wake or a shutdown the card shows Waking or Shutting down until the status changes or the timeout runs out. Link makes the name clickable, and Open link after waking opens it once the machine is up, if your browser allows it.

## Custom commands

`{{ DEVICE_IP }}` and `{{ DEVICE_MAC }}` are filled in. Pick where commands run:

- This host, over SSH
- Another host, over SSH
- The Termix server

```bash
# A Windows machine, from a Linux relay with Samba
net rpc shutdown -I {{ DEVICE_IP }} -U "user%password"

# A smart plug
curl -X POST http://plug.lan/relay/0?turn=on
```

The Termix image has no `ping`, `sshpass` or `net`, so commands usually belong on a relay that has them. Commands on the Termix server are off until an admin turns on Allow commands on the Termix server. Only users with the Use the Termix server permission can save them, since they can run anything the server can.

A command runs with the login of the person who saved it, not the person who pressed the button. Saved commands are encrypted. Test runs a saved command once and shows its output. Testing a shutdown command is real, so it asks first.

## Schedules

Wake and shutdown each take a five field cron schedule, in the server's time zone. `0 8 * * 1-5` wakes at 8:00 on weekdays. A wake is skipped if the machine is already on, and a shutdown is skipped if it is already off. You get an alert if a scheduled run fails or the machine doesn't respond in time.

Ask before running only applies to buttons, not schedules.

[Automations](/plugins/automations) has a Wake a host step for anything more involved. It uses the machine's saved wake method.

## Remote desktop

With [Remote Desktop](/plugins/remote-desktop), you can wake a host from its connect screen. That packet is always sent from the Termix server, so it doesn't use a relay yet.

## It doesn't wake

- Wrong MAC: Use the MAC of the wired port that is set to wake.
- No relay: Check that the packet starts on the machine's network.
- Another subnet from the server: Set the broadcast address of that subnet. Your router may need to forward it.
- The relay says it needs python3 or perl: Install one of them on the relay.

## Permissions

| Permission                    | Lets you                                          | Given to      |
| ----------------------------- | ------------------------------------------------- | ------------- |
| `wake-on-lan.send`            | Wake machines                                     | Admins, users |
| `wake-on-lan.shutdown`        | Shut down and sleep                               | Admins, users |
| `wake-on-lan.scan`            | Scan from an SSH host                             | Admins, users |
| `wake-on-lan.server-commands` | Save commands for the Termix server, scan from it | Admins        |

Host access applies too. Wake and shut down need connect access to the host, and changing its Power settings needs edit access.

Power settings are saved on each server, so a desktop linked to a server starts with the defaults for its hosts.
