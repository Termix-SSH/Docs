---
title: Plugin sandbox
description: How Termix fences in every plugin, on the server, in the desktop app and on the phone, and where the fence ends.
---

# Plugin sandbox

Almost every feature in Termix is a plugin, so plugins are most of the code. From 26.11.2 on, every plugin is fenced in. A plugin can only do what it was granted, and an admin sees that list before turning it on.

A plugin made for an older Termix (plugin API 1) can't run this way, so it does not run at all. It stays off until it is updated. The Plugins tab names each one.

## On the server

- Its own process. Each plugin's server code runs in a separate Node process with an empty environment. It never sees the server's keys, the database file or other plugins.
- Only checked calls. The plugin talks to Termix through a fixed set of calls, and Termix checks each one against what the plugin was granted and the user it acts for. Its database queries can only touch its own tables.
- Never your login. Termix removes your login cookies and tokens from every request before it reaches a plugin.
- Saved logins stay in Termix. SSH sessions are opened by Termix itself. Saved passwords and keys only reach a plugin that was granted `credentials:read`.
- No network or programs by default. Without the grant for it, the process can't open network connections or start programs.
- Its own secrets. What a plugin seals uses a key of its own, so another plugin can't open it.
- Limits. A plugin process that crashes, hangs or uses too much memory or CPU is restarted. If it keeps crashing it is turned off.

In the Docker image each plugin also runs as its own Linux user, so it can't read the database, the keys or other plugins' files. If you add the `NET_ADMIN` capability to the container, a firewall rule also blocks the network for plugins without the grant.

## Plugin screens

A plugin's screens run in sandboxed frames. A frame has no access to your login, the rest of the page or other plugins.

- It can only call its own plugin, with a short lived key that ends with your session.
- Anything else it needs from Termix goes through a fixed list of allowed requests.
- It loads nothing from other sites. Pictures come through the server.
- It can only cover the screen, open a link, start a download or revoke your API keys right after you clicked or typed in it.

## In the desktop app

The desktop app runs each plugin on its own copy of Node, the same version as the server image, with the same rules as on a server and inside the operating system's sandbox:

| System  | Sandbox                       |
| ------- | ----------------------------- |
| Windows | AppContainer and a job object |
| macOS   | Seatbelt profile              |
| Linux   | Landlock and seccomp          |

A plugin there can't read your files or the app's database, write outside its own folder, start programs or connect out without the grant. It is stopped when it goes over its memory limit.

## In the phone app

Plugins without a phone version show their screens in a sandboxed web view. Every request they make goes through the same list of checks as a frame on the web.

## Settings

| Variable                     | Default | What it does                                                                                      |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `TERMIX_PLUGIN_IDLE_MINUTES` | `10`    | A plugin that only serves pages stops after this long unused and starts again on the next request |
| `TERMIX_PLUGIN_ALWAYS_ON`    |         | Plugin ids that never stop when idle                                                              |
| `TERMIX_PLUGIN_MEMORY_MB`    | `256`   | Memory limit for each plugin process                                                              |
| `TERMIX_PLUGIN_CPU_LIMIT`    | `80`    | Percent of one CPU core a plugin may use for a minute straight                                    |

Official plugins are signed. Set `TERMIX_REQUIRE_SIGNED_PLUGINS=true` to only allow signed plugins. See [Signing keys](/security/signing-keys).

## Where the fence ends

No sandbox covers everything. These are the limits:

- A plugin can use what you granted it. A plugin you allow to open network connections can send what it sees to the network. Only turn on plugins you trust.
- A plugin screen can still send what it shows to another site in two ways no browser rule stops: by moving its own frame to that site, and through WebRTC. It can only send what that plugin could already see.
- A plugin with `network:outbound` may name private addresses it wants to reach. Cloud metadata addresses are refused for every plugin and for Termix itself.
- A plugin with `config:secrets` can read the server's environment variables and files, except Termix's own keys and data folder. Hosts Config uses this for the secrets a hosts file points at.
- The Sync plugin can make sessions and sees the session cookie on its own requests, because it links desktops and switches accounts. Only grant `sync:provide` to the official one.
- Official layouts, themes and Sync run their screens in the page, not in a frame. Layouts and themes draw the app itself, and Sync uses the desktop app's window. Sign in steps, passkeys, serial ports and embedded web views are drawn or handled by Termix itself, with the plugin only giving the data.

Desktop app only:

- Windows. A plugin granted `network:sockets` or `process:spawn` runs at low integrity in a job object, not in an AppContainer, because an AppContainer blocks the local connections and pipes those plugins need. It still can't write outside its folder or go over its memory limit, but only Node's rules stop it from reading your files. Serial runs in the job object only, so it can open serial ports.
- Linux. Files are fenced with Landlock, which needs Linux 5.13 or later. On an older kernel only Node's rules guard files. Seccomp still blocks sockets and new programs.
- Mac App Store version. Apple's app sandbox already holds the whole app and can't be nested. Plugins there get Node's rules, the app sandbox and the memory limit, but no profile of their own.
- The 32-bit Windows and 32-bit ARM Linux builds have no Node 26, so they don't run plugin backends.
