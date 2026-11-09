---
title: "UPS Manager"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/ups-manager"
description: "Watch your UPS devices over NUT, apcupsd or SNMP, with history, alerts and self tests."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-UPS-Manager/edit/main/docs/index.md"
plugin_id: "ups-manager"
plugin_version: "1.0.0"
plugin_latest: true
---
UPS Manager shows the state of your UPS devices from Termix. It reads the battery charge, runtime left, load, voltage and temperature, keeps a history, and alerts you when something goes wrong with your power.

It works with three kinds of UPS: a UPS managed by NUT, a UPS managed by apcupsd, and a network card that speaks SNMP. Termix reads them over SSH, the same way the terminal does. Nothing is installed by this plugin.

## Set up a host

1. Pick the host that can reach the UPS. This is the machine running NUT or apcupsd, or any host on the same network as an SNMP card.
2. Open the host in Manage and turn on UPS Manager.
3. Save. Open the host's menu and pick UPS.
4. In Devices, press Add UPS and pick how to read it.

Reading never needs root. The SSH user only needs the UPS tools in its path.

## NUT

Install the NUT client (`nut-client` on Debian and Ubuntu) on the host. Add the device name that `upsc -l` lists, like `ups`. For a NUT server on another machine, use `ups@192.168.1.5:3493`.

To send commands, add a NUT user and password from `upsd.users` with the `instcmds` right. Termix passes them to `upscmd` on the host. They are visible in the process list there for a moment while the command runs. Reading never needs a login.

## apcupsd

Install apcupsd on the host. Leave the address empty to read the daemon on the host, or use `host` or `host:3551` for another machine. Termix runs `apcaccess status`. apcupsd has no commands, so the Commands view is hidden.

## SNMP cards

Install the net-snmp tools (`snmp` on Debian and Ubuntu) on the host, which then polls the card. Enter the card address and its community, or the v3 user and passwords.

Termix reads the standard UPS-MIB, and the APC PowerNet values when the card does not answer the standard ones. The login is saved sealed and goes to the host in a temporary config file, never on the command line. SNMP cards are read only.

## What you see

- Overview: power state, battery charge, runtime left, load, input, output and battery voltage, temperature, model, serial number and the last self test.
- History: charge, load, runtime and voltage for 24 hours, 7 days and 30 days. Termix reads every UPS every 30 seconds. The last day is kept as it was read, older days as hourly averages.
- Events: every power event, newest first. The last 300 are kept per UPS.
- Commands: the instant commands a NUT UPS supports. Beeper and test commands run after one click. Anything that can cut power asks first.
- Devices: add, edit and remove UPS devices.

## Alerts

Alerts go to the user who added the UPS, through the Alerts plugin and the channels they set up. You get one alert when a problem starts, and the event log shows when it clears.

- On battery: power was lost
- Battery low: the UPS says the battery is low
- Replace battery: the UPS says the battery is worn out
- Overload: the UPS is overloaded
- Low charge and low runtime: under the limits you set while on battery
- Self test problem: the last test did not pass
- Unreachable: the UPS did not answer three times in a row

You can set the charge and runtime limits per UPS, and turn alerts off for one UPS.

## Self tests and the beeper

The actions Start battery self test and Set the UPS beeper work for NUT devices that support them. They can be run from Operations Center, the assistant and the CLI. Calibrate runtime drains the battery, so it is marked destructive and asks first.

## Host settings

- UPS Manager: turns the tab on for the host
- UPS read only: blocks changes and commands on the host's UPS devices

## Permissions

Everyone with the use permission can see the UPS devices on hosts they can connect to. Adding, changing and removing a UPS and sending commands needs edit access to the host.

## Dashboard card

The dashboard card lists every UPS on your hosts, worst first, with the power state, charge, runtime and load. It uses the readings Termix already took, so it opens no new connections.
