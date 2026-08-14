# Remote Sync

The Termix desktop app can run entirely on its own, keeping everything in a local database. Remote sync connects that standalone app to a Termix server so your hosts and settings match in both places.

Set it up once and you can add a host on your laptop, then find it waiting on the web app on another machine.

## When you need it

You do not need remote sync if the desktop app just connects to your server, since in that case there is only one copy of the data. This is for running the desktop app standalone, with its own local database, and wanting it to line up with a server.

The usual reason is working offline. Standalone means your hosts still open on a plane or a bad connection, and sync catches everything up afterwards.

## Setting it up

In the desktop app, open your settings and find the remote sync panel. Enter the address of your Termix server and sign in. Once connected, syncing runs in the background.

## What syncs

| Synced                       | Not synced         |
| ---------------------------- | ------------------ |
| Hosts                        | Terminal sessions  |
| Credentials                  | Command history    |
| Vault profiles               | Session recordings |
| Host folders                 | Audit logs         |
| Snippets and snippet folders | Metrics history    |
| Dashboard service links      | Automations        |
| Homepage items               | Fleets             |
| User preferences             |                    |

The idea is that your setup follows you, while things tied to one machine or one session stay where they happened.

## How changes are merged

Sync goes both ways. A change on either side reaches the other.

Items are matched by a shared id rather than by name, so renaming a host on one machine renames it on the other instead of creating a duplicate.

Deletes sync too. Delete a host on your laptop and it goes from the server as well, so a deleted host does not come back on the next sync.

If the same item changes in both places between syncs, the most recent change wins.

## Credentials stay encrypted

Credentials keep their encryption while syncing. Passwords and keys are not sent in the clear between the desktop app and the server. Use HTTPS on your server, as you should anyway.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
