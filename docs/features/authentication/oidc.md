# OIDC (OpenID Connect)

This page covers setting up a generic OIDC provider in Termix. Use this for any OpenID Connect identity provider that isn't GitHub or Google, like Keycloak, Authelia, Auth0, Okta, or Azure AD. For how the provider system works as a whole, see [SSO Providers](./sso-providers). For GitHub or Google specifically, see [GitHub and Google](./github-google).

## Prerequisites

- An admin account in Termix
- An account with an OIDC compliant identity provider
- A registered application/client in that provider

## Adding a provider

1. Sign in as an admin and open **Admin Settings**.
2. Go to the SSO providers section and add a new provider.
3. Set the type to **OIDC**.
4. Fill in the fields below.
5. Save, then enable the provider.

## Required fields

| Field | What it is |
|---|---|
| Client ID | The ID your provider issued when you registered the application |
| Client Secret | The secret your provider issued alongside the client ID |
| Issuer URL | The base URL that identifies your provider |
| Authorization URL | Where users are sent to log in |
| Token URL | Where Termix exchanges the login code for tokens |
| Identifier Path | The path in the token to the user's unique ID. Defaults to `sub` |
| Name Path | The path in the token to the user's display name. Defaults to `name` |
| Scopes | Space separated scopes to request. Defaults to `openid email profile` |

## Optional fields

| Field | What it is |
|---|---|
| Userinfo URL | Override this if Termix can't fetch user info automatically and you see "Failed to get user information" |
| Allowed Users | A comma separated list of usernames or email patterns allowed to sign in. Leave empty to allow anyone who can log in to the provider |
| Admin Group | If set, users in this group are made admins. This is checked on login, using the value of Group Claim |
| Group Claim | The path in the token where group membership lives. Your provider must include this in the token, which usually means requesting a `groups` scope |
| CA Certificate | Optional. A PEM-encoded CA certificate, for providers using a private or self-signed CA. Leave empty to use the system trust store |

## Mapping groups to roles

Beyond the single Admin Group, you can map multiple provider groups to specific Termix roles. This isn't yet exposed as an Admin Settings field, so set it through the `OIDC_ROLE_MAP` environment variable, or by adding `role_map` directly to the provider's config.

The value is a comma or newline separated list of `group:role` pairs, for example:

```
devops-interns:devops-intern,devops-seniors:devops-senior
```

On every login, Termix compares the user's provider groups (from Group Claim) against this map and syncs matching role assignments. Only roles named in the map are touched, so this doesn't affect the Admin Group sync or any roles assigned by hand. Role names must match an existing Termix role's name exactly. Malformed pairs are skipped rather than blocking login.

## Registering Termix with your provider

The callback URL to register with your provider is:

```
https://your-termix-domain/users/oidc/callback
```

## Provider examples

These are starting points. Check your provider's docs for the exact URLs, since some details (like tenant IDs or realm names) are specific to your setup.

### Microsoft (Azure AD)

- Authorization URL: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize`
- Token URL: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token`
- Issuer URL: `https://login.microsoftonline.com/{tenant-id}/v2.0`
- Scopes: `openid email profile`

### Auth0

- Authorization URL: `https://{your-domain}.auth0.com/authorize`
- Token URL: `https://{your-domain}.auth0.com/oauth/token`
- Issuer URL: `https://{your-domain}.auth0.com/`
- Scopes: `openid email profile`

### Okta

- Authorization URL: `https://{your-domain}.okta.com/oauth2/v1/authorize`
- Token URL: `https://{your-domain}.okta.com/oauth2/v1/token`
- Issuer URL: `https://{your-domain}.okta.com/oauth2/default`
- Scopes: `openid email profile`

### Keycloak

- Authorization URL: `https://{your-keycloak-domain}/realms/{your-realm}/protocol/openid-connect/auth`
- Token URL: `https://{your-keycloak-domain}/realms/{your-realm}/protocol/openid-connect/token`
- Issuer URL: `https://{your-keycloak-domain}/realms/{your-realm}`
- Scopes: `openid email profile`

### Authelia

- Authorization URL: `https://authelia.{your-domain}/api/oidc/authorization`
- Token URL: `https://authelia.{your-domain}/api/oidc/token`
- Issuer URL: `https://authelia.{your-domain}`
- Scopes: `openid email profile`

Authelia config example:

```yaml
identity_providers:
  oidc:
    claims_policies:
      legacy:
        id_token: ['email', 'email_verified', 'preferred_username', 'name']

    authorization_policies:
      termix:
        default_policy: deny
        rules:
          - policy: one_factor
            subject: group:termix

    clients:
      - client_id: termix
        client_secret: client_secret_here
        public: false
        authorization_policy: termix
        consent_mode: implicit
        claims_policy: legacy
        grant_types:
          - authorization_code
        response_types:
          - code
        scopes:
          - openid
          - profile
          - email
        redirect_uris:
          - https://termix.{your-domain}/users/oidc/callback
        token_endpoint_auth_method: client_secret_post
```

## Setting up OIDC with environment variables

Admin Settings is the normal way to add a provider, but Termix also supports configuring one generic OIDC provider through environment variables, as a fallback for setups that prefer config files over a UI. This only covers a single OIDC provider, not GitHub, Google, or LDAP, and it's only used when no OIDC provider has been added in Admin Settings yet.

| Variable | Required | What it is |
|---|---|---|
| `OIDC_CLIENT_ID` | Yes | Same as Client ID above |
| `OIDC_CLIENT_SECRET` | Yes | Same as Client Secret above |
| `OIDC_ISSUER_URL` | Yes | Same as Issuer URL above |
| `OIDC_AUTHORIZATION_URL` | Yes | Same as Authorization URL above |
| `OIDC_TOKEN_URL` | Yes | Same as Token URL above |
| `OIDC_USERINFO_URL` | No | Same as Userinfo URL above |
| `OIDC_IDENTIFIER_PATH` | No | Defaults to `sub` |
| `OIDC_NAME_PATH` | No | Defaults to `name` |
| `OIDC_SCOPES` | No | Defaults to `openid email profile` |
| `OIDC_ALLOWED_USERS` | No | Same as Allowed Users above |
| `OIDC_ADMIN_GROUP` | No | Same as Admin Group above |
| `OIDC_GROUP_CLAIM` | No | Same as Group Claim above |
| `OIDC_ROLE_MAP` | No | Same as the group-to-role mapping described above |

Two more environment variables apply no matter how a provider was set up:

- `OIDC_ALLOW_REGISTRATION`, when set to `true`, lets new accounts be created through OIDC, GitHub, or LDAP sign in even when general registration is turned off, while still respecting each provider's Allowed Users list.
- `OIDC_FORCE_HTTPS`, when set to `true`, forces the callback URL Termix builds to use `https://`, which is useful if Termix sits behind a reverse proxy that terminates SSL before traffic reaches it.

## Linking a local account

An admin can link an existing local account to an OIDC identity from Admin Settings, using the chain icon next to a user. Once linked, that user can sign in either way. The link can be removed the same way.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
