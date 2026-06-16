# GitHub and Google

GitHub and Google are their own provider types in Termix, separate from generic OIDC. Termix already knows their authorization, token, and issuer URLs, so setup only needs a client ID and client secret. For how the provider system works as a whole, see [SSO Providers](./sso-providers).

## GitHub

1. Go to your GitHub account or organization settings and create a new OAuth app.
2. Set the callback URL to:

```
https://your-termix-domain/users/oidc/callback
```

3. Copy the client ID and generate a client secret.
4. In Termix, open **Admin Settings**, go to the SSO providers section, and add a new provider with type **GitHub**.
5. Paste in the client ID and client secret, save, and enable the provider.

## Google

1. Go to the Google Cloud Console and create OAuth credentials for a web application.
2. Set the authorized redirect URI to:

```
https://your-termix-domain/users/oidc/callback
```

3. Copy the client ID and client secret.
4. In Termix, open **Admin Settings**, go to the SSO providers section, and add a new provider with type **Google**.
5. Paste in the client ID and client secret, save, and enable the provider.

## Allowed users and admin group

Both provider types support the same Allowed Users and Admin Group options as generic OIDC. See [OIDC](./oidc#optional-fields) for what those fields do.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
