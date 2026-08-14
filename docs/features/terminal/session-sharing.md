# Session Sharing

Session sharing lets someone else watch, or join, a terminal session you already have open. Both of you see the same screen at the same time.

It is meant for helping each other. Showing a colleague what a server is doing, or getting a second pair of eyes on a problem, without screen sharing over a call.

## Sharing a session

From an open terminal, start a share and choose how it works.

Who can join:

- A link. Termix gives you a URL. Anyone with that link can join, and they do not need a Termix account.
- A specific user. Only the Termix user you pick can join.

What they can do:

- Read only. They watch. They cannot type.
- Read and write. They can type into the session too.

You can also set the share to expire after a number of hours.

:::warning
A share link works for anyone who has it, with no login. Only use link shares for people you would hand the password to, and prefer sharing with a specific user when you can.
:::

## While a session is shared

You can see who has joined. Ending the share disconnects everyone at once, and you can revoke a share at any point without closing your own session.

Read and write means exactly that. The other person is typing into your real session on your real server, so give it out carefully.

## Turning it off

Sharing can be switched off for the whole instance in **Admin Settings**, and per host in the host's settings. The instance setting wins, so with it off nobody can share anything regardless of individual host settings.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
