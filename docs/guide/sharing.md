---
title: Sharing
description: Give other users access to your hosts and credentials.
---

# Sharing

Share a host with a person or a whole role. They can use it without getting their own copy, and you can take it back any time.

## Share a host

Open the host's menu and pick **Share Host**, or use the **Sharing** section in the editor.

1. Pick users or roles under **Share with**.
2. Pick a **Permission level**.
3. Pick when it expires: never, 1 hour, 24 hours, 7 days, 30 days, or a custom number of hours.
4. Press **Share**.

## Levels

| Level       | What they can do                                                                                            |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| **Connect** | Open sessions: terminal, remote desktop, file manager, tunnels, Docker. They can't see the host's settings. |
| **View**    | Connect, and see the settings. Secrets are never shown.                                                     |
| **Edit**    | View, and change settings other than sign in. Changes apply to the real host.                               |
| **Manage**  | Edit, and share it with others, change levels and revoke access.                                            |

Only the owner can delete the host or change how it signs in.

## How they sign in

By default the people you share with use your login for the host. Each gets an encrypted copy, which updates when you change it and is removed when you revoke.

Turn off **Share SSH Authentication** on the host to keep your login private. Then each person picks their own with **Set personal SSH authentication** from the host's menu. A personal login always wins over yours.

## Share a folder

**Share Folder** shares every host in it. The share also stays on the folder: a host you add to it later, or move into it, gets the same access. **Stop inheriting** removes that rule for future hosts.

## Credentials

Credentials have their own sharing. See [credentials](/guide/credentials#share).

## Roles

Admins make roles and put users in them. See [roles](/guide/roles).
