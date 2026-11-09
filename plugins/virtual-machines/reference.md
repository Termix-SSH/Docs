---
title: "Reference"
sidebar_label: "Reference"
sidebar_position: 90
slug: "/virtual-machines/reference"
custom_edit_url: null
plugin_id: "virtual-machines"
plugin_version: "1.0.0"
plugin_latest: true
---
## Settings

### User

Each person sets these for themselves in **Settings**.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Open the VM panel by itself | boolean | `false` | Open the panel when a terminal opens. |
| VM panel side | select | `"right"` | Where the panel sits beside a terminal. |
| VM panel size | number | `360` | Width or height in pixels. |
| Show the edge button | boolean | `true` | A small button on the terminal's edge opens the panel. |

### Host

Set per host in the host editor, on the plugin's tab. Host defaults can set them for many hosts at once.

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| Enable Virtual Machines | boolean | `false` | Manage KVM virtual machines on this host with libvirt. |
| Use sudo | boolean | `true` | Run libvirt commands with sudo. Turn off for a root login. |
| Read only | boolean | `false` | Show VMs but block every change from Termix. |
| Libvirt connection | string | `"qemu:///system"` | The libvirt URI to use. Most hosts want qemu:///system. |
| Show the VM panel beside terminals | boolean | `true` | Adds a VM list to this host's terminal tabs. |

## Permissions

Give these to roles in **Settings**, **Roles**.

| Permission | Who has it at first | What it allows |
| --- | --- | --- |
| `virtual-machines.use` | admin, user | See VMs on hosts you can connect to, and change them on hosts you can edit. |
| `virtual-machines.console` | admin | Open the graphical and serial console of a VM on hosts you can edit. |

## Actions

Run these from Operations Center, Automations, the CLI (`termix ops`), the phone app or the API. See [actions](/develop/operations).

| Action | Runs on | Risk | Inputs |
| --- | --- | --- | --- |
| `virtual-machines.list-vms`<br />List VMs | A host | Read only |  |
| `virtual-machines.vm-state`<br />VM state | One item on a host | Read only |  |
| `virtual-machines.running-count`<br />VMs running | A host | Read only |  |
| `virtual-machines.crashed-count`<br />Crashed VMs | A host | Read only |  |
| `virtual-machines.pool-usage`<br />Storage pool use | A host | Read only |  |
| `virtual-machines.list-snapshots`<br />VM snapshots | A host | Read only |  |
| `virtual-machines.list-pools`<br />List storage pools | A host | Read only |  |
| `virtual-machines.list-networks`<br />List virtual networks | A host | Read only |  |
| `virtual-machines.start`<br />Start VM | One item on a host | Changes |  |
| `virtual-machines.reboot`<br />Reboot VM | One item on a host | Changes |  |
| `virtual-machines.suspend`<br />Pause VM | One item on a host | Changes |  |
| `virtual-machines.resume`<br />Resume VM | One item on a host | Changes |  |
| `virtual-machines.set-autostart`<br />Set VM autostart | One item on a host | Changes | `enabled` |
| `virtual-machines.snapshot`<br />Take VM snapshot | One item on a host | Changes | `name`, `description` |
| `virtual-machines.clone`<br />Clone VM | One item on a host | Changes | `name` |
| `virtual-machines.shutdown`<br />Shut down VM | One item on a host | Destructive |  |
| `virtual-machines.force-stop`<br />Force stop VM | One item on a host | Destructive |  |
| `virtual-machines.delete-vm`<br />Delete VM | One item on a host | Destructive | `deleteDisks` |
| `virtual-machines.revert-snapshot`<br />Revert to snapshot | One item on a host | Destructive |  |
| `virtual-machines.delete-snapshot`<br />Delete snapshot | One item on a host | Destructive |  |

## Events

Automations can start when one of these happens.

| Event | What it means |
| --- | --- |
| `virtual-machines.vm-started` | VM started |
| `virtual-machines.vm-stopped` | VM stopped |
| `virtual-machines.vm-crashed` | VM crashed |
| `virtual-machines.job-finished` | VM job finished |

## Capabilities

What the plugin's code is allowed to do. Termix shows this list before you install it. See [capabilities](/develop/reference/capabilities) for all of them.

| Capability | Risk | What it means |
| --- | --- | --- |
| `credentials:read` | Critical | See your passwords and keys. It can read the stored secret for any host you can reach. |
| `ssh:connect` | High | Run commands on your servers. Any command, on hosts you connect it to, with your access. |
| `users:impersonate` | High | Act as other users. Runs background work with another user's access, such as scheduled jobs. Every use is written to the audit log. |
| `credentials:use` | Medium | Connect to your servers. It cannot see your passwords or keys. |
| `network:serve` | Medium | Accept connections. It opens a port on the Termix server. |
| `notify:send` | Medium | Send alerts. To you or other users, and through the channels they set up. |
| `operations:provide` | Medium | Offer actions. Its actions can be run from Automations, the CLI, the phone app and other places, by people allowed to use them. |
| `hosts:read` | Low | See your host list. Names and addresses for hosts you can already see. |
| `db:own` | Low | Store its own data. Kept in its own tables, separate from other plugins. |
| `ui:surface` | Low | Add its own screens. Tabs, panels and settings you can hide later. |

## Works with other plugins

Works better with: [remote-desktop](/plugins/remote-desktop) ^1.4.0.

## Services

Services are how plugins call each other. Plugin authors can use these.

| Uses | Version | Optional |
| --- | --- | --- |
| `remote-desktop.console` | ^1.0.0 | yes |

## API

The plugin's HTTP routes are in the [API reference](/api/virtual-machines/virtual-machines-api).

## Platforms

Linux, Windows, macOS

