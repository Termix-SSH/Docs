---
title: "IP-KVM"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/ip-kvm"
description: "See and control machines through PiKVM, NanoKVM and JetKVM devices."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-IP-KVM/edit/main/docs/index.md"
plugin_id: "ip-kvm"
plugin_version: "1.0.0"
plugin_latest: true
---
IP-KVM lets you see and control the machines behind your IP-KVM devices from Termix. You get the screen, keyboard and mouse in the browser, power control, virtual media and shortcuts, even when the machine's operating system is down.

## Supported KVMs

| Type                  | Screen and keys                            | Power                        | Virtual media                             |
| --------------------- | ------------------------------------------ | ---------------------------- | ----------------------------------------- |
| PiKVM                 | Through Termix (MJPEG video, HID socket)   | ATX on, off, hard off, reset | Mount images, download from a web address |
| GL.iNet Comet (GLKVM) | Through Termix (MJPEG video, HID socket)   | ATX on, off, hard off, reset | Mount images, download from a web address |
| NanoKVM               | Through Termix (MJPEG video, HID socket)   | Power button and reset       | Mount images already on the device        |
| JetKVM                | Direct WebRTC from your browser to the KVM | Through the screen toolbar   | Not yet                                   |

The GL.iNet Comet runs PiKVM's software with a fixed admin user, so it only asks for the password. The PiKVM, NanoKVM and JetKVM drivers were written from each project's public API and have only been tested against fake devices so far. If one does not work on your hardware, please open an issue with the model and software version.

## Add a KVM

1. Open the KVM tab from the sidebar and press Add KVM.
2. Pick the type, give it a name and enter the KVM address.
3. Optionally pick the Termix host the machine belongs to. The KVM then follows that host's sharing and shows in its host menu.
4. Enter the login and press Test connection. A KVM with its own self signed certificate needs Trust this certificate first: Termix shows the certificate's fingerprint, and once you trust it, only talks to the KVM while it shows that exact certificate.
5. Optionally fill in the MAC address of the machine to use Wake-on-LAN.
6. Save. Termix checks the KVM right away and then every minute, or whatever you set.

The login is stored encrypted on the server and is never shown again. To replace it, edit the KVM and fill in the fields. Leave them empty to keep the saved one.

## Certificates

Most KVMs use a self signed certificate. Paste the certificate (or the authority that signed it) in PEM form under Certificate. Termix then trusts it for this KVM only. Without it, https fails. You can also pick http for KVMs that offer it on a trusted network.

## Screen

Termix connects to the KVM, reads its video and passes it to your browser, so the screen works even when your browser cannot reach the KVM. Click the screen to type. Your keys go to the machine, so browser shortcuts do not work while the screen has focus. Click outside the screen to get them back.

The toolbar has shortcuts like Ctrl+Alt+Del, Paste text (PiKVM only), Screenshot, Full screen and Reconnect. A session ends after the time set by the admin (4 hours by default).

Your browser decodes the video, so a 1080p stream needs a decent connection. Frames are dropped when your browser falls behind.

### JetKVM

A JetKVM sends its video over WebRTC, which Termix cannot decode on the server. Termix only passes the offer and the answer, so the video then goes straight from the JetKVM to your browser. Your browser must be able to reach the JetKVM on the network. The power buttons are in the screen toolbar and need the power permission.

## Power

The Power tab has Power on, Shut down (asks the OS to stop), Reset and Power off (cuts the power). Reset and Power off do not shut the system down cleanly, so Termix asks first. Wake on LAN sends a magic packet from the Termix server, so the server must be on the same network as the machine. You need the power permission.

Termix does not alert you about a power change it made itself. It does alert you when the power changes any other way, and when a KVM goes offline or comes back.

## Virtual media

The Virtual media tab lists the images on the KVM and mounts one as a CD drive or a USB drive. PiKVM can also download an image from a web address. The KVM downloads it, so the address must be reachable from the KVM. Pair it with the boot menu of the machine to install an operating system.

## For other plugins

The `ip-kvm.power` service lets other plugins read and set the power of the machine behind a KVM linked to a host. It is not offered for JetKVM, which has no power control on the server side.

## Permissions

| Permission | Default roles | What it allows                    |
| ---------- | ------------- | --------------------------------- |
| view       | admin, user   | See KVMs and their state          |
| power      | admin         | Power changes and Wake-on-LAN     |
| console    | admin         | Screen, keyboard, mouse and paste |
| media      | admin         | Virtual media                     |
| manage     | admin         | Add, change and remove KVMs       |

A KVM linked to a host also needs the right access to that host: connect to see it and edit to use the screen or change anything.
