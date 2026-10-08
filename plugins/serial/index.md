---
title: "Serial"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/serial"
description: "Open a serial console to a router, switch or other device plugged into your computer."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Serial/edit/main/docs/index.md"
plugin_id: "serial"
plugin_version: "1.0.0"
plugin_latest: true
---
Serial opens a console to a device plugged into your computer: a router, a switch, a Raspberry Pi, a UPS. It is a terminal over a serial cable or USB adapter, next to your SSH sessions.

The device has to be plugged into the computer you are using Termix on, not the server.

## Where it works

| Where           | How                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------- |
| The desktop app | Talks to the port directly. Works everywhere.                                               |
| A browser       | Uses the Web Serial API: Chrome, Edge, or Firefox 151 and newer. Safari doesn't support it. |

In the desktop app each computer decides for itself whether Serial is on, even when the app is linked to a server.

## Connect

1. Open **Serial** from the sidebar.
2. Pick the **Port**, like `/dev/ttyUSB0` on Linux, `/dev/tty.usbserial-*` on macOS or `COM3` on Windows. In a browser, press **Connect to Serial** and the browser asks you to pick the device.
3. Set the **Baud Rate**, **Data** bits, **Stop** bits and **Parity** to match the device. Most network gear uses 9600 baud, 8 data bits, no parity, 1 stop bit.
4. Press **Connect to Serial**.

**Refresh ports** looks again after you plug something in.

## Troubleshooting

- **No ports listed on Linux.** Your user needs to be in the `dialout` group (or `uucp` on some distros): `sudo usermod -aG dialout $USER`, then sign out and in.
- **Garbled text.** The baud rate is wrong. Try 115200 or 9600.
- **Nothing at all.** Press Enter once. Many consoles wait for input before they print anything.

Don't need it? Hide the **Serial** icon by right-clicking it in the sidebar.
