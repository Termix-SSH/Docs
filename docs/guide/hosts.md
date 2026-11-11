---
title: Hosts
description: Add, organize and connect to hosts.
---

# Hosts

A host is a machine you connect to. It holds the address, how to sign in, and the settings for every plugin that can use it.

## Add a host

Open [Manage](/guide/manage), pick Hosts and press +. Or use Add Host in the Hosts panel.

The editor is grouped into sections:

| Section         | What is in it                                                                    |
| --------------- | -------------------------------------------------------------------------------- |
| General         | Name, address, folder or parent host, tags, notes, pin.                          |
| SSH             | Port, username, how to sign in, jump hosts, proxy, port knocking and more.       |
| Plugin sections | One for each plugin with host settings, like Terminal, Docker or Remote Desktop. |
| Sharing         | Who else can use the host. See [sharing](/guide/sharing).                        |

Each plugin section has its own on switch, so you only turn on what the host needs.

## How to sign in

Pick one method under Authentication Method. Termix uses only that one.

| Method            | Use it for                                                                        |
| ----------------- | --------------------------------------------------------------------------------- |
| Password          | A password typed in here.                                                         |
| Key               | An SSH private key pasted or uploaded here. Termix can make a key pair for you.   |
| Stored Credential | A [credential](/guide/credentials) many hosts share.                              |
| SSH Agent         | Keys from an agent available to the computer or server making the SSH connection. |
| None              | The server needs no sign in, or it asks interactively.                            |

Plugins add more, like short-lived certificates from [Vault](/plugins/vault), [Step CA](/plugins/step-ca) or [OPKSSH](/plugins/opkssh).

Other useful switches:

- Force Keyboard Interactive asks for the password every time.
- Allow Legacy Algorithms connects to old devices that only speak old SSH algorithms. It is less secure.
- FIDO2 security keys (ed25519-sk and ecdsa-sk) work with SSH Agent when the desktop app connects locally. Load the key with ssh-add, and your key asks for a touch or PIN on your own machine. A pasted security key file cannot be used, since it only holds a handle.
- SSH Agent Forwarding lets the remote host use your agent for the next hop. It is not needed to authenticate this connection with SSH Agent.
- Sudo Password fills sudo prompts in the terminal and in plugins that run sudo.

## SSH Agent authentication

The agent must be available to the Termix process making the SSH connection. In the desktop app, use a local Connection Origin to use an agent on your computer. If connections start from the server, the agent must be available there instead. A browser session uses the server's agent, not the browser computer's agent. See [where connections start](/configure/desktop-sync#where-connections-start).

### PuTTY Pageant on Windows

1. Start Pageant on the Windows computer running the Termix desktop app and load the key you want to use.
2. Edit the host and open its SSH section.
3. Set Authentication Method to SSH Agent.
4. Enter `pageant` in Agent Socket Path. Use this exact lowercase value, not a path to `pageant.exe`.
5. If the app is linked to a server, set Connection Origin to start from your computer.
6. Save and connect.

Termix passes `pageant` to its SSH library as a Windows agent identifier. Leaving the field empty only checks `SSH_AUTH_SOCK`; it does not automatically select Pageant.

### Other agents and socket paths

| Agent                 | Agent Socket Path                                                     |
| --------------------- | --------------------------------------------------------------------- |
| Windows OpenSSH agent | `\\.\pipe\openssh-ssh-agent`                                          |
| Linux or macOS agent  | Leave empty to use `SSH_AUTH_SOCK`, or enter the agent's socket path. |

Start the agent and load the key before connecting. An explicit path takes priority over `SSH_AUTH_SOCK`. If you leave it empty, that variable must be set in the environment of the Termix backend process, not just in an unrelated terminal window. For a container deployment, the socket must be accessible inside the container.

A Termix backend running in WSL uses Linux socket paths. It cannot use the Windows-only `pageant` identifier or a Windows named pipe directly. The Windows desktop app connecting locally uses the Windows agent instead; opening the server's web UI from Windows does not change where the backend runs.

If Termix reports that `SSH_AUTH_SOCK` is not set, supply the correct agent value or start Termix with that variable available. If it reports a missing socket, check the path in the environment where the connection starts. Agent authentication and SSH Agent Forwarding are separate settings; forwarding is only needed when the remote host must use your agent for another connection.

## Folders and sub-hosts

Put a host in a folder, or under another host as a sub-host. A host is in one or the other, not both.

- Type `/` in a folder name to nest it, like `Production/Web`.
- A folder can have a color, an icon and a credential. Hosts in it that use Stored Credential without their own pick it up.
- Folders can have their own [host defaults](/guide/host-defaults).
- Drag hosts between folders. Select multiple moves, connects or changes many at once.

## Tags and pins

Tags filter and group the host list. Admins can set suggested tags in Settings, Host defaults, under Predefined host tags. Pin to Top keeps a host at the top.

## Jump hosts and proxies

- Jump Host Chain connects through one or more other hosts first.
- Use SOCKS5 Proxy goes through a SOCKS5 proxy or a chain of them.

## Port knocking {#port-knocking}

Some servers keep SSH closed until they see a knock on other ports. Add a Port Knocking Sequence: each knock is a port, a protocol (TCP or UDP) and a delay after it. Termix knocks in order before it connects.

## Status checks

The dot next to a host shows if it is reachable. Termix checks it every so often. Open sessions skip the check.

Checks over SSH can trip aggressive Fail2Ban rules. Turn Enable Status Checks off for those hosts. Admins set the default interval in Settings, General.

## Desktop only

In the linked desktop app:

- Connection Origin picks whether the host is reached from your computer or through the server.
- Keep on this device only keeps the host off the server.

See [desktop sync](/configure/desktop-sync).

## Connect

Click a host in the sidebar. What opens depends on its plugins, usually a terminal. The host's buttons and menu have every action, like the file manager or Docker. Change which actions show as buttons in the Hosts panel settings, under Connect bar.

## Host keys {#host-keys}

The first time you open a terminal to a host, Termix shows its key and asks if you trust it. The key is saved on the host, and a later change is asked about again. Jump hosts are asked about the same way.

Plugins, schedules and the API connect with nobody there to ask. They refuse a host whose key was never trusted, and say to open a terminal to it once. An admin can turn on Trust new host keys without a prompt in [admin settings](/guide/admin-settings) to save the first key in that case instead. Each key saved that way is written to the audit log.
