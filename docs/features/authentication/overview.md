# Authentication

Termix supports a few different ways to sign in, and they can all be used at once.

- **Local accounts.** A username and password stored in Termix itself. The first account you create becomes the initial admin.
- **SSO providers.** OIDC, LDAP, GitHub, and Google can all be added as login options, any number of each, side by side. See [SSO Providers](./sso-providers).
- **Two factor auth.** Local accounts can turn on TOTP for an extra code at login. See [TOTP](./totp).
- **OPKSSH.** SSH certificate based login for connecting to servers using your identity provider instead of a password or key. See [OPKSSH](./opkssh).

On top of sign in, Termix has:

- **RBAC.** Share hosts and credentials with other users or roles instead of giving everyone full access. See [RBAC](./rbac).
- **Security notes.** General security practices and what Termix encrypts. See [Security](./security).

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
