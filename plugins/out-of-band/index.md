---
title: "Out-of-band"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/out-of-band"
description: "Power, sensors, event logs and consoles for server BMCs over Redfish, IPMI and Intel AMT."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Out-Of-Band/edit/main/docs/index.md"
plugin_id: "out-of-band"
plugin_version: "1.0.0"
plugin_latest: true
---
Out-of-band lets you manage the BMC (baseboard management controller) of a server from Termix. A BMC keeps working when the operating system is down or the machine is off, so you can power it on, read its sensors and logs, and boot it from an ISO.

## Supported BMCs

| Type                                      | How Termix talks to it                   | What it can do                                                           |
| ----------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------ |
| Redfish (iDRAC, iLO, Supermicro, OpenBMC) | The Redfish web API                      | Power, sensors, event log, boot once, virtual media                      |
| IPMI over LAN                             | `ipmitool` on the server or a relay host | Power, sensors, event log, boot once, serial console (with a relay host) |
| Intel AMT                                 | WS-Man over http or https                | Power only                                                               |

Termix reaches the BMC from the server, or for IPMI from a relay host you pick. Turning on the feature on the BMC (IPMI over LAN, Redfish) is up to you.

## Add a BMC

1. Open the Out-of-band tab from the sidebar and press Add BMC.
2. Pick the type, give it a name and enter the BMC address.
3. Optionally pick the Termix host the machine belongs to. The BMC then follows that host's sharing and shows in its host menu.
4. Enter the username and password and press Test connection.
5. Save. Termix reads the BMC right away and then every two minutes, or whatever you set.

The login is stored encrypted on the server and is never shown again. To replace it, edit the BMC and fill in the fields. Leave them empty to keep the saved one.

Make a separate BMC user for Termix. It needs the Administrator role to change power and boot, and Read only is enough to watch.

## Certificates

BMCs usually have a self signed certificate. Paste the certificate authority that signed it in CA certificate, in PEM form. Termix then trusts that one authority for this BMC only. Without it, Redfish over https fails. You can also pick http for BMCs that offer it on a trusted network.

## IPMI and ipmitool

IPMI needs the `ipmitool` program. Install it on the Termix server, or pick a relay host (any SSH host in Termix that has `ipmitool` and can reach the BMC). With a relay host the BMC does not need to be reachable from the Termix server at all.

An admin can turn off running `ipmitool` on the Termix server in the plugin settings. IPMI BMCs then need a relay host.

The password is never put in a command line. On the server it is passed in an environment variable, and on a relay host it travels in the script Termix sends over SSH.

If the BMC refuses the login, try another cipher suite. 3 is the default, and 17 works on newer BMCs.

## Power

Power on, Shut down (asks the OS to stop), Reset, Power cycle and Power off (cuts the power) are on the overview. Reset, Power cycle and Power off do not shut the system down cleanly, so Termix asks before it does them. You need the power permission.

Termix does not alert you about a power change it made itself. It does alert you when the power changes any other way.

## Sensors and alerts

Sensors show temperatures, fans, voltages and power supplies with the state the BMC gives them. The BMC health is the worst state among them. You get an alert when:

- the BMC stops answering (and when it comes back)
- the health goes to warning or critical (and when it is ok again)
- the machine changes power on its own

## Event log

The Event log tab shows the hardware log of the BMC, newest first. Clearing it needs the manage permission and cannot be undone.

## Boot once

Boot picks the device the machine boots from the next time it starts, then it goes back to its normal order. Choose UEFI or Legacy to match the machine. Restart the machine after setting it.

## Virtual media

With Redfish BMCs you can mount an ISO from a web address (http, https, nfs or smb). The BMC downloads it, so the address must be reachable from the BMC, not from Termix. Pair it with Boot once set to CD to install an operating system.

## Serial console

The Console tab opens the serial over LAN console of an IPMI BMC. It needs a relay host. Type `~.` to leave. The serial console only shows output when the machine sends its console to the serial port.

## Permissions

| Permission | Default roles | What it allows                             |
| ---------- | ------------- | ------------------------------------------ |
| view       | admin, user   | See BMCs, sensors and logs                 |
| power      | admin         | Power changes and boot once                |
| console    | admin         | Serial console                             |
| media      | admin         | Virtual media                              |
| manage     | admin         | Add, change and remove BMCs, clear the log |

A BMC linked to a host also needs the right access to that host: connect to see it and edit to change anything.

## Use from other plugins

Other plugins can call the `out-of-band.power` service with a Termix host id to check whether the host has a BMC, read its power state and change it. They need the power permission and edit access to the host.

## Operations

The same actions run from the Operations tab, the CLI and the assistant: list BMCs, read a BMC, get the power state, power on, shut down, power off, power cycle, reset, boot once and clear the log.
