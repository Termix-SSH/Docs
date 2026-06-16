# Credentials

Credentials let you save a username and password or SSH key once, then reuse it across as many hosts as you want, instead of typing the same login into every host you add.

## Creating a credential

Open the Credentials panel from the sidebar and add a new one. Give it a name, then choose password or key auth and fill in the details. You can also organize credentials into folders and tag them.

## Using a credential on a host

In the Host Editor, set the auth method to **Credential** and pick one from the list. The host will use whatever username and secret that credential holds, and if you update the credential later, every host using it picks up the change automatically.

## Deploying a key to a server

For key based credentials, Termix can copy the public key to a server for you instead of doing it by hand. It connects over SSH, creates `~/.ssh` if it's missing, and appends the key to `authorized_keys` if it isn't already there.

## Sharing credentials

Credentials use the same sharing system as hosts. You can share one with a specific user or a role, which is how [RBAC](../authentication/rbac) sharing for hosts without exposed passwords works, since the shared user gets to use the credential without ever seeing the secret behind it.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
