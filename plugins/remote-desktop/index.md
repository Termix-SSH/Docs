---
title: "Remote Desktop"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/remote-desktop"
description: "RDP, VNC, Apple Remote Desktop, RustDesk and Telnet sessions in your browser, with clipboard, file transfer, sharing and recording."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Remote-Desktop/edit/main/docs/index.md"
plugin_id: "remote-desktop"
plugin_version: "1.4.0"
plugin_latest: true
---
Remote Desktop opens RDP, VNC, Apple Remote Desktop, RustDesk and Telnet sessions in your browser, in tabs and split screen like any other session. It has clipboard sync, file transfer through an RDP drive, audio, printing, jump hosts, sharing and recording.

It works out of the box. Termix speaks RDP, VNC, RustDesk and Telnet itself, so there is nothing else to install or run, on Docker, bare metal or the desktop app. Only Moonlight needs a server of its own.

## Add a host

1. Open a host in Manage, or make a new one.
2. In General, turn on RDP, VNC, Apple Remote Desktop, RustDesk, Moonlight or Telnet. A host can have SSH and these at once.
3. Open the protocol's section. Fill in the port, username and password, and for RDP the domain and security mode.
4. Save, then pick RDP, VNC, Apple Remote Desktop, RustDesk, Moonlight or Telnet from the host's menu.

The login is stored encrypted, like SSH logins, and can be [shared](/guide/sharing) with the host.

## RDP

- Security modes: Any (the server picks), NLA, TLS, NLA extended and Hyper-V console (VMConnect, with the VM id as the preconnection blob). Legacy RDP security is not supported and uses TLS instead.
- RD Gateway needs an [external guacd](#external-guacd-optional). Hosts with gateway settings use it automatically once one is set up.
- Ignore certificate errors accepts a self-signed certificate. With it off, the certificate must be trusted by the Termix server.
- Resize method: Display update resizes the remote screen as the window changes. Reconnect opens a fresh connection at the new size, for servers without display updates.
- Keyboard layout should match the layout set on the remote machine. Characters it can't type are sent as Unicode.
- The graphics pipeline works without H.264. A server that only allows H.264 (AVC420 or AVC444), like some KDE versions, needs an [external guacd](#external-guacd-optional) built with H.264.

## Kerberos and Protected Users

Accounts in the Active Directory Protected Users group can't use NTLM. For those, set Kerberos KDC Address on the host (under Connection settings) to a domain controller, like `dc1.example.com`. A port or `udp://` can be added, and the default is TCP port 88.

- Needs the built-in engine. An external guacd does not use this setting.
- Enter the host by its DNS name, not an IP address, and fill in the Domain.
- The Termix server must be able to reach the domain controller on port 88.
- Leave it empty to keep using NTLM.

## Toolbar

The toolbar sits along the top of the session, or the bottom if you pick that. It has the drive's files, zoom, Ctrl+Alt+Del, lock screen, the system key, sticky Ctrl, Alt, Shift and system keys, function keys, Esc, Tab, Home, End, Page Up, Page Down and the arrows, plus Share when Session Sharing is on.

Sign out (RDP) signs out of Windows after you confirm: it opens the Run box with the Windows key and R and runs
`logoff`. The session has to be open and showing the desktop, so it does not work at the lock screen.

In the host editor, under Toolbar, you can turn it off, move it, show icons only, and choose which buttons show and in what order. Buttons that don't fit go in the More menu. Like other host settings, these can come from your [host defaults](/guide/host-defaults).

## Display settings

RDP has settings for color depth, how the screen follows the window size, lossless images, wallpaper, font smoothing, desktop composition, audio and printing. Each can follow your [host defaults](/guide/host-defaults) or be set per host.

## Clipboard and files

- Copy and paste works both ways through the toolbar.
- Turn on Enable Drive Redirection to get a drive in the RDP session for moving files. Each user gets their own folder under `RDP_DRIVE_PATH` (default `/app/data/rdp-drive`).
- Files saved to the drive's Download folder are sent to your browser, then removed from the drive.
- With printing on, the session gets a printer. Print to it and you get the document as a PDF.

## VNC

VNC supports password logins, VeNCrypt (TLS and X509, with or without a username), UltraVNC MS-Logon II and Apple Remote Desktop logins for macOS Screen Sharing (fill in your macOS username and password). The cursor setting picks whether the server draws the mouse pointer or your browser does, and color depth 8 or 16 uses less bandwidth on slow links.

## Intel AMT

Intel AMT (vPRO) machines have a built-in VNC server, so they connect as a normal VNC host. It shows the real screen, including the BIOS and boot, even when the OS is off or crashed.

1. On the machine, turn on KVM and the VNC port (5900) in the Intel MEBx setup (Ctrl+P at boot) or with MeshCommander. Set the VNC password there. AMT only uses the first 8 characters, and asks for a strong one.
2. In Termix, turn on VNC for the host, use the machine's address and port 5900, and enter that password. Leave the username blank.
3. Open the VNC tab. If KVM is set to ask for user consent, the person at the machine has to accept first.

For power on, power off and reset, add the same machine to the Out-of-band plugin as an AMT device.

## Moonlight

Moonlight streams a PC with [Sunshine](https://docs.lizardbyte.dev/projects/sunshine/latest/) to your browser with very low delay, using the graphics card to encode. It suits games, CAD and video, where RDP and VNC feel slow. Termix connects to a [Moonlight Web](https://github.com/MrCreativ3001/moonlight-web-stream) server that you run yourself. The stream goes straight from that server to your browser, not through Termix.

### Set up the server

1. Install Sunshine on the PC and open its web UI on port 47990 to create a login.
2. Run Moonlight Web somewhere that can reach the PC. It can run on the same PC.

```yaml
services:
  moonlight-web:
    image: mrcreativ3001/moonlight-web-stream:v3.0.1
    restart: unless-stopped
    ports:
      - "8080:8080"
      - "40000-40100:40000-40100/udp"
    environment:
      - WEBRTC_NAT_1TO1_HOST=YOUR_LAN_IP
      - WEBRTC_PORT_RANGE=40000:40100
    volumes:
      - moonlight-server:/moonlight-web/server
volumes:
  moonlight-server:
```

If WebRTC fails and the stream falls back to WebSockets, check which addresses Moonlight Web offers. On Linux, `network_mode: host` (with `BIND_ADDRESS=0.0.0.0:8080` and no `ports`) lets it offer the PC's real LAN and VPN addresses instead of the Docker bridge address.

3. Open Moonlight Web and sign in once. The first login you use becomes its admin.
4. In Termix, open the Remote Desktop admin settings and fill in the Moonlight Web address, username and password. Use the admin login, since Termix adds and pairs PCs with it.

Set Moonlight Web public address when browsers reach it at a different address than the Termix server does.

### Add a PC

1. In the host editor, turn on Moonlight in General. The Sunshine port is 47989 unless you changed it.
2. Open the Moonlight section. Pick the PC, or press Add this host to Moonlight Web.
3. Press Pair and enter the PIN in the Sunshine web UI, under PIN. You only do this once per PC.
4. Pick an app and save. Bitrate and frame rate are optional, and 0 keeps the Moonlight Web default.

Termix adds PCs as global hosts, so every Moonlight Web user can stream them with that one pairing. Adding and pairing need the Set up Moonlight PCs permission, which admins have by default.

### Sign in and open a stream

Press Connect. The stream shows inside the Termix tab: Termix serves the Moonlight Web stream page through its own address and signs in with the saved admin login, so nobody signs in to Moonlight Web. Only someone who just opened that PC from Termix can stream it, and Moonlight Web admin pages stay out of reach.

On a linked desktop app server the stream opens in your default browser instead, and there Moonlight Web asks you to sign in the first time. If WebRTC cannot reach Moonlight Web, the page falls back to its WebSocket transport, which also goes through Termix.

Use HTTPS on Moonlight Web when you can. Browsers only allow gamepads, keyboard lock and the fastest video playback on secure pages, so over plain HTTP the stream works with more delay and no gamepads.

The stream page starts on the Auto codec, so it only asks for codecs your browser can decode. Sunshine always offers H.264, and with a GPU usually HEVC and AV1 too. With the software encoder it offers H.264 only, so a browser without H.264 (some Linux Chromium builds, embedded browsers like the one in JetBrains IDEs) can't play it. Termix shows a note above the stream in that case. Chrome, Edge, Safari and the Termix desktop app all play H.264.

Over the internet, forward the WebRTC UDP ports or add a TURN server. See the Moonlight Web docs. WebSockets also work on networks that block WebRTC, with more delay.

### Limits

- Termix checks access when you press Connect, including Privileged Access approvals. Moonlight Web is a separate server, so anyone with a Moonlight Web login can stream from it without Termix.
- When an admin makes recording required, Moonlight is refused on that host, since Termix can't record the stream.
- Streams don't show in the remote sessions card, and session sharing doesn't apply to them.
- The mobile app has no Moonlight tab yet.

## RustDesk

Termix connects to a [RustDesk](https://rustdesk.com) device the way the RustDesk app does, so the device needs nothing new. Turn on RustDesk in General and open its tab.

- Enter the device's RustDesk ID and its permanent or one time password. Leave the password empty to have someone click accept on the device. Termix asks for the password or the 2FA code when the device wants one, and does not save what you type there.
- By default Termix finds the device through the public RustDesk server. To use your own, set the ID server, relay server and key in the admin settings, under Remote Desktop. The key is the contents of `id_ed25519.pub` on your server. A host can also set its own server.
- The Termix server talks to the ID server on TCP 21116 and the relay on TCP 21117. It always goes through the relay, since a server can't hole punch.
- Direct IP access connects to the host address on port 21118 instead, with no ID server. Turn on Direct IP access in RustDesk on the device first. The connection is encrypted, but with no ID server nothing proves which device answered. Jump hosts work in this mode.
- Video stays in RustDesk's own format and your browser decodes it, so it needs a recent Chrome, Edge, Firefox or Safari. VP9, AV1 and VP8 are used, never H.264 or H.265.
- Clipboard text works both ways, and you hear the remote's audio. With more than one monitor, the toolbar has a button for each.
- Not supported yet: file transfer and recording.

## Telnet

Telnet logs in for you when the host has a username and password, by watching for the login and password prompts. The prompts, a success pattern and a failure pattern can be changed per host. Select text to copy it, and paste with Ctrl+Shift+V, Shift+Insert or a middle click.

## Jump hosts

A remote desktop host can sit behind SSH jump hosts. Termix opens a tunnel through them for the session.

## Recording

With [Session Recording](/plugins/session-recording) on, turn on recording for a host and every RDP, VNC and Telnet session is saved as a video you can play back in Termix. Recordings are kept in `/app/data/session_recordings/guacamole` unless `GUACD_RECORDING_BACKEND_PATH` says otherwise.

To record only part of a session, use Record in the toolbar. It starts a recording right away, beginning with what is
on the screen, and Stop recording saves it. Only the person who opened the session can use it, and it needs Session
Recording and the built-in engine (not an external guacd).

When an admin makes recording required in Session Recording, every session is recorded with the whole screen and keys, the Record button can't stop it, and VNC sessions use the built-in engine even with an external guacd, since guacd can't record VNC. A host with its own guacd keeps it.

With the `remote-desktop.monitor` permission (admins at first), Session Recording's auditors can watch everyone's sessions read only and end them.

## Wake on LAN

With [Wake-on-LAN](/plugins/wake-on-lan) on, a sleeping host can be woken from its connect screen.

## Native client

In the desktop app on Windows, an RDP host can open in the Windows Remote Desktop client instead of the browser. The password is never written to the `.rdp` file.

## Desktop app

In the desktop app, a host left on Default connects from your own computer, like SSH. Set a host to the linked server under Connection when only the server can reach it.

## Sharing

With [Session Sharing](/plugins/session-sharing) on, you can share a live session by link or present it in a meeting room. Read only viewers can watch but not type, click, paste or move files, and revoking a share disconnects the viewers who joined through it. The `remote-desktop.sessions` permission decides whose sessions can be shown to others.

## Privileged hosts

A host that [Privileged Access](/plugins/privileged-access) marks as privileged needs approved access before a session opens. Without it the connect screen says so and offers Request access.

## External guacd (optional)

Termix can still send sessions to an [Apache guacd](https://guacamole.apache.org/) you run yourself. Turn on Use an external guacd in Settings, Remote Desktop, or set `REMOTE_DESKTOP_ENGINE=guacd`. A host can also use its own guacd under guacd Proxy in the host editor; only admins can set it.

```yaml
termix:
  environment:
    REMOTE_DESKTOP_ENGINE: "guacd"
    GUACD_HOST: "guacd"
    GUACD_TUNNEL_HOST: "termix"
    GUACD_RECORDING_PATH: "/termix-data/session_recordings/guacamole"

guacd:
  image: guacamole/guacd:1.6.0
  volumes:
    - termix-data:/termix-data
```

These only apply to an external guacd:

- `GUACD_HOST`, `GUACD_PORT` or `GUACD_URL`: where guacd listens. Don't publish its port.
- `GUACD_TUNNEL_HOST`: the address guacd uses to reach Termix for jump hosts (the Termix container's name in Compose). In Kubernetes it defaults to the pod IP.
- `GUACD_RECORDING_PATH`: where guacd writes recordings, inside the guacd container. It must be the same folder Termix reads.
- `GUACD_DRIVE_PATH`: where guacd keeps RDP drive files.

## Troubleshooting

- RDP fails right away: Try a different security mode, or turn on Ignore certificate errors for a self-signed certificate.
- Wrong characters when typing: Set the keyboard layout to the one the remote machine uses.
- "Could not connect to guacd": Only with an external guacd. Check `GUACD_HOST` points at guacd and both are on the same Docker network.
- Recordings are empty with an external guacd: The two recording paths don't point at the same folder.
- RustDesk says the key does not match: Copy the key from `id_ed25519.pub` on your RustDesk server into the admin settings, or the host's own server settings.
- RustDesk shows a black screen on Linux: the device has to be logged in to an X11 desktop. RustDesk can't share a Wayland login screen.
- No sound in an RDP session: click or press a key inside the session once, since browsers keep audio off until you do. To see whether the server sends audio, set the log level to debug in admin settings (it overrides `LOG_LEVEL`) and look for `rdpsnd formats requested`, `rdpsnd first wave` and `rdpsnd audio sent`.

## Apple Remote Desktop

Apple Remote Desktop (ARD) is a Mac's Screen Sharing. It is its own host type, but it connects as VNC. Turn on Apple Remote Desktop in General and open its tab.

- Enter the macOS account name and password. With a username, Termix signs in with Apple's own login, which is the one Screen Sharing uses.
- Leave the username blank only for a Mac that has a VNC-only password. With an external guacd, Termix then connects through a small compatibility proxy.
- The port is 5900 unless you changed it.
- Recording works as it does for VNC.

## Environment variables

This plugin reads some environment variables on the Termix server. See the [reference](/plugins/remote-desktop/reference#environment-variables) for the list.
