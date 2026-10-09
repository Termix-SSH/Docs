---
title: Hosts
description: Add, organize and connect to hosts.
---

# Hosts

A host is a machine you connect to. It holds the address, how to sign in, and the settings for every plugin that can use it.

## Add a host

Open [Manage](/guide/manage), pick **Hosts** and press **+**. Or use **Add Host** in the Hosts panel.

The editor is grouped into sections:

| Section         | What is in it                                                                    |
| --------------- | -------------------------------------------------------------------------------- |
| **General**     | Name, address, folder or parent host, tags, notes, pin.                          |
| **SSH**         | Port, username, how to sign in, jump hosts, proxy, port knocking and more.       |
| Plugin sections | One for each plugin with host settings, like Terminal, Docker or Remote Desktop. |
| **Sharing**     | Who else can use the host. See [sharing](/guide/sharing).                        |

Each plugin section has its own on switch, so you only turn on what the host needs.

## How to sign in

Pick one method under **Authentication Method**. Termix uses only that one.

| Method            | Use it for                                                                      |
| ----------------- | ------------------------------------------------------------------------------- |
| Password          | A password typed in here.                                                       |
| Key               | An SSH private key pasted or uploaded here. Termix can make a key pair for you. |
| Stored Credential | A [credential](/guide/credentials) many hosts share.                            |
| SSH Agent         | Keys from an agent running on the Termix server, like 1Password or gpg-agent.   |
| None              | The server needs no sign in, or it asks interactively.                          |

Plugins add more, like short-lived certificates from [Vault](/plugins/vault), [Step CA](/plugins/step-ca) or [OPKSSH](/plugins/opkssh).

Other useful switches:

- **Force Keyboard Interactive** asks for the password every time.
- **Allow Legacy Algorithms** connects to old devices that only speak old SSH algorithms. It is less secure.
- **SSH Agent Forwarding** lets the remote host use your agent for the next hop.
- **Sudo Password** fills sudo prompts in the terminal and in plugins that run sudo.

## Folders and sub-hosts

Put a host in a folder, or under another host as a **sub-host**. A host is in one or the other, not both.

- Type `/` in a folder name to nest it, like `Production/Web`.
- A folder can have a color, an icon and a **credential**. Hosts in it that use **Stored Credential** without their own pick it up.
- Folders can have their own [host defaults](/guide/host-defaults).
- Drag hosts between folders. **Select multiple** moves, connects or changes many at once.

## Tags and pins

Tags filter and group the host list. Admins can set suggested tags in **Settings**, **Host defaults**, under **Predefined host tags**. **Pin to Top** keeps a host at the top.

## Jump hosts and proxies

- **Jump Host Chain** connects through one or more other hosts first.
- **Use SOCKS5 Proxy** goes through a SOCKS5 proxy or a chain of them.

## Port knocking {#port-knocking}

Some servers keep SSH closed until they see a knock on other ports. Add a **Port Knocking Sequence**: each knock is a port, a protocol (TCP or UDP) and a delay after it. Termix knocks in order before it connects.

## Status checks

The dot next to a host shows if it is reachable. Termix checks it every so often. Open sessions skip the check.

Checks over SSH can trip aggressive Fail2Ban rules. Turn **Enable Status Checks** off for those hosts. Admins set the default interval in **Settings**, **General**.

## Desktop only

In the linked desktop app:

- **Connection Origin** picks whether the host is reached from your computer or through the server.
- **Keep on this device only** keeps the host off the server.

See [desktop sync](/configure/desktop-sync).

## Connect

Click a host in the sidebar. What opens depends on its plugins, usually a terminal. The host's buttons and menu have every action, like the file manager or Docker. Change which actions show as buttons in the Hosts panel settings, under **Connect bar**.
