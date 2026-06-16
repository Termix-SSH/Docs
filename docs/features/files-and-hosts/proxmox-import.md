# Proxmox Import

If you run a Proxmox server, Termix can discover its VMs and LXC containers and import them as hosts, so you don't have to add each one by hand.

This page is about pulling guests out of a Proxmox server you already manage. If you're looking to install Termix itself on a Proxmox host, see [Proxmox](/install/server/proxmox) instead.

## How it works

Termix doesn't talk to the Proxmox API directly. Instead, it connects over SSH to a host you've already added (your Proxmox node) and runs `pvesh` to list every VM and container in the cluster. No separate API token is needed, just SSH access to the node.

## Setting it up

1. Add your Proxmox node as a regular SSH host in Termix, if you haven't already.
2. Open that host's settings and turn on **Enable Proxmox**.
3. Pick a default credential to use for the guests you import.

## Importing guests

1. From the Host Manager, choose to discover Proxmox guests, and pick your Proxmox node.
2. Termix connects over SSH and lists every VM and container it finds, with its status and IP if one is available.
3. Select the guests you want, then import them.

Imported guests are grouped into a folder named after the Proxmox node they came from. Termix tries to guess whether each guest should connect over SSH or RDP based on its name, looking for things like "windows" or "docker," and you can adjust this for any guest before importing.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
