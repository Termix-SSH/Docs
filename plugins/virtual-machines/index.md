---
title: "Virtual Machines"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/virtual-machines"
description: "Create and manage KVM virtual machines on your Linux hosts over SSH with libvirt."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Virtual-Machines/edit/main/docs/index.md"
plugin_id: "virtual-machines"
plugin_version: "1.0.0"
plugin_latest: true
---
Virtual Machines lets you make and run KVM virtual machines on your Linux hosts from Termix. It talks to libvirt over SSH, the same way the terminal connects, so there is nothing to install on the host except libvirt itself.

Proxmox nodes have their own plugin, which also shows guests and can start and stop them. Use this one for plain Linux hosts.

## Set up a host

1. The SSH user needs a root login, passwordless sudo, a saved Sudo Password on the host, or membership of the `libvirt` group. With the group alone you can read and use VMs, but installing libvirt needs root.
2. Open the host in Manage and turn on Virtual Machines.
3. Save. Open the host's menu and pick Virtual Machines.
4. If the host has no libvirt, press Install. It works with apt, dnf, yum, pacman and zypper. It installs QEMU and libvirt, starts the service and sets up the default network and storage pool.

The host needs `/dev/kvm` for VMs to run at a normal speed. Turn on virtualization in the BIOS. If the host is itself a VM, turn on nested virtualization for it.

## Host settings

- Use sudo: run libvirt commands with sudo. Turn it off for a root login or a `libvirt` group user.
- Read only: show VMs, but block every change made through Termix.
- Libvirt connection: the libvirt URI. Most hosts want `qemu:///system`.
- Show the VM panel beside terminals: adds a VM list next to this host's terminal tabs.

## Make a VM

Press New VM. Pick a name, size, storage pool and network, then how to install it.

- Cloud image: picks a ready made Debian, Ubuntu or AlmaLinux image, or any image URL. Termix sets up a login with cloud-init. Give a password, an SSH key, or both. The password is stored only as a hash, in a small ISO beside the disk. The image is downloaded once and kept in the pool, so the next VM from it is quick. The new disk is a thin copy that needs that image, so keep the `termix-image-` file while VMs use it.
- ISO: boots an installer from an ISO in the pool. Download one under Storage. Watch the install in the Graphical console.
- Empty disk: makes a VM with a blank disk, for network boot or to add an ISO later.

Pick BIOS unless the guest needs UEFI. UEFI VMs can only take snapshots while they are shut down.

The host does the work in a job, shown under Jobs. It keeps going with Termix closed or restarting.

## Use a VM

Press a VM to open it.

- Overview: live CPU, disk and network use while the page is open, plus autostart.
- Console: the VM's screen and its serial port. See Consoles.
- Snapshots: take, revert and delete. A snapshot of a running VM saves its memory too. Every writable disk must be qcow2.
- Hardware: CPUs and memory apply at the next start. Disks and network cards apply right away on a running VM when the guest supports it. Detaching a disk keeps its volume in the pool.
- XML: the VM's full config. The host checks it before saving and keeps the old copy in `/var/lib/termix-vms/backups`.

Clone needs the VM shut down. It copies every disk to a new standalone file beside the old one.

Delete keeps disks unless you ask for them to go too. Termix then removes the VM's own disks and its cloud-init ISO, but never a disk another VM uses, and never an ISO or base image.

## Consoles

The Graphical console shows the VM's VNC display through the Remote Desktop plugin, so Remote Desktop 1.4.0 or later must be on. Termix tunnels the display over SSH, so VNC can stay bound to the host's loopback. SPICE displays can't be shown. Press Switch to VNC, then shut the VM down and start it.

The Serial console works with no other plugin, but the guest must run a login on its serial port. Most cloud images do. With a saved Sudo Password and no passwordless sudo, the SSH user must be in the `libvirt` group for this console.

Opening a console needs the Open VM consoles permission and edit access to the host.

## Storage and networks

Storage lists libvirt's pools and their volumes. You can add a folder as a pool, make empty volumes, and download a file such as an installer ISO to a pool. Forget removes a pool from libvirt and leaves its files on the disk. A volume a VM uses can't be deleted.

Networks lists virtual networks and their DHCP leases. You can add NAT, isolated and host bridge networks. For a host bridge, the bridge must already exist on the host.

## Alerts

Press the bell on a VM to get an alert when it crashes or stops without Termix doing it, and when a storage pool on that host passes 90 percent. Termix checks watched hosts once a minute.

## Across Termix

- All VMs in the rail lists every VM on every host, with search.
- A dashboard card and a homepage widget show how many VMs are running.
- The VM panel sits beside SSH terminals, and a tile on the host page does the same.
- Actions such as start, shut down, snapshot and clone work in Operations Center, Automations, Fleets, the CLI and the phone app.
- The assistant and MCP can read VMs and pools, start a VM and take a snapshot. They can't stop or delete anything.
- Automations can react to a VM starting, stopping or crashing, and to a job finishing. These fire when Termix reads the host, so watch a VM or keep it open to catch them quickly.

## Good to know

- Virtual Machines reads libvirt on the host. VMs made by other tools, such as virt-manager, show up too.
- Long jobs live in `/var/lib/termix-vms/jobs` on the host until they finish.
- Live migration and importing VMware disks are not supported yet.
