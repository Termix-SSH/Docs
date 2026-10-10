---
title: "Session Sharing"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/session-sharing"
description: "Share live sessions by link or with another user, and present sessions to a group in meeting rooms."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Session-Sharing/edit/main/docs/index.md"
plugin_id: "session-sharing"
plugin_version: "1.0.0"
plugin_latest: true
---
Session Sharing lets other people watch or join a session you have open: a terminal, or an RDP, VNC or Telnet session. Share it by link, with another Termix user, or present it in a meeting room.

Use it to get a second pair of eyes on a problem, or to show a group how something works, without screen sharing over a call.

## Share a session

Press the share button in the terminal toolbar, or **Share** in the tab's menu. Pick:

- **Link**: anyone with the link can join. No account needed.
- **User**: only that Termix user can join. They need access to the host already. [Share the host](/guide/sharing) with them first if they don't.

Then pick what they can do:

| Level          | They can                     |
| -------------- | ---------------------------- |
| **Read-only**  | Watch it live.               |
| **Read-write** | Type into it, just like you. |

Set an expiry and press **Create link** or share with the user.

Read-write means they type into your real session on your real server. Only give it to people you would give the password to. A link works for anyone who has it, so prefer sharing with a user when you can.

### While it is shared

You see who is watching. Revoke a share at any time without closing your own session. Closing the session ends every share.

## Meeting rooms

A meeting room is for showing sessions to a group. Open **Meetings** from the sidebar and press **New room**.

- Invite members. Anyone in the room can **Present** one of their sessions on the stage.
- Viewers can **Request control**. The presenter decides who gets it.
- Turn on **Guest link** to let people without an account watch the stage.
- **Persistent room** keeps the room around after the meeting ends, to reuse.
- **End meeting** disconnects everyone.

## Turning it off

Admins can turn sharing off for everyone with **Allow Session Sharing** in **Settings**, **Session Sharing**. Each host also has its own **Allow Session Sharing** switch. With the server setting off, nothing can be shared.

Share links only work for sessions that run on a Termix server, not for hosts the desktop app connects to on its own.

## More than one Termix server

Rooms keep live state in memory. If you run several Termix servers behind a load balancer, point them all at the same Redis with `REDIS_URL` so rooms work across them.

Who can share and join rooms is set by the `session-sharing.use` permission. Admins and users have it at first.
