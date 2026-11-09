---
title: "Network Devices"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/network-devices"
description: "See and manage routers, switches and access points over SNMP and router APIs."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Network-Devices/edit/main/docs/index.md"
plugin_id: "network-devices"
plugin_version: "1.0.0"
plugin_latest: true
---
Network Devices lets you see and manage routers, switches and access points from Termix. It reads them on a timer, shows their ports and clients, and tells you when one goes down.

## Supported devices

| Type              | How Termix talks to it        | What it can do                                                                        |
| ----------------- | ----------------------------- | ------------------------------------------------------------------------------------- |
| SNMP device       | SNMP v1, v2c or v3            | Ports, traffic, VLANs, PoE, MAC table, ARP, LLDP. Turn ports off or on, cycle PoE     |
| MikroTik RouterOS | The v7 REST API               | Ports, PoE, DHCP leases, ARP, Wi-Fi clients, neighbors. Turn ports off or on, restart |
| OPNsense          | The API with a key and secret | Interfaces, ARP, DHCP leases. Restart                                                 |
| OpenWrt           | ubus over the web interface   | Interfaces, DHCP leases, Wi-Fi clients. Restart                                       |

Termix reaches the device from the server, so the server must be able to connect to it. Turning on a feature on the device is up to you: SNMP, the REST API and so on.

## Add a device

1. Open the Network tab from the sidebar and press Add device.
2. Pick the type, give it a name and enter its address.
3. Enter the keys (see below) and press Test.
4. Save. Termix reads the device right away and then every minute, or whatever you set.

Keys are stored encrypted on the server and are never shown again. To replace them, edit the device and fill in the fields. Leave them empty to keep the saved ones.

## Keys for each type

- SNMP v1 and v2c: the read community. Add a write community only if you want to turn ports off or cycle PoE.
- SNMP v3: the user name, and the authentication and privacy protocols and keys the device is set up with.
- RouterOS: a user with the REST API allowed. A read only group is enough to watch. Changing a port or restarting needs a group that can write. Turn on the `www-ssl` service, or `www` and pick http.
- OPNsense: an API key and secret made under System, Access, Users.
- OpenWrt: a user that can log in to LuCI, with `rpcd` and, for Wi-Fi clients, `rpcd-mod-iwinfo` installed.

Devices on a private network are fine. If the web page uses a certificate from your own CA, paste the CA (or the device certificate) in the device form, and Termix will trust it for that device only.

## Find devices

On the Network tab, press Find devices. Enter a range like `192.168.1.0/24` (up to 256 addresses) and a community. Devices that answer are listed, and Add fills in the form for you.

## Ports, clients and neighbors

Open a device to see:

- Ports with link state, speed, VLAN, traffic in and out, errors and PoE. Traffic needs two readings to show.
- Clients with their IP, MAC and where they are. This comes from DHCP, ARP, Wi-Fi and the switch MAC table, depending on the type.
- Neighbors the device sees over LLDP, or MikroTik discovery.

PoE on SNMP devices is matched to ports by number, which is how most switches number them. If a switch numbers PoE differently, the PoE column may not line up.

## Alerts

Termix alerts the person who added the device when it stops answering (after two failed reads) and when it comes back. Use the bell on a port to get an alert when that port's link goes up or down. Alerts go through the Alerts plugin like any other.

## Changing things

Turning a port off, cycling PoE and restarting a device need the Manage network devices permission, which admins have by default. Each one asks you to confirm. They are also available as actions, so rules, the CLI, the assistant and Operations Center can run them.

## Limits

- Termix only reads and changes ports, PoE and restarts. It does not edit VLANs, DHCP or firewall rules.
- OPNsense and OpenWrt were written from their API docs and have not been tried on real hardware yet.
