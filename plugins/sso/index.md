---
title: "Single sign-on"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/sso"
description: "Sign in with any OpenID Connect provider, GitHub or Google."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-SSO/edit/main/docs/index.md"
plugin_id: "sso"
plugin_version: "1.0.0"
plugin_latest: true
---
Single sign-on lets people sign in to Termix through an identity provider: anything that speaks OpenID Connect, like Keycloak, Authentik, Authelia, Entra ID, Okta or Pocket ID, plus GitHub and Google.

You can add several providers. Each gets its own button on the sign in page.

## Add a provider

1. Install the plugin from the **Plugins** tab.
2. Open **Settings**, **Single sign-on** and press **Add Provider**.
3. Pick a **Provider Type**: OIDC, GitHub or Google.
4. Copy the **Redirect URI** shown in the form, like `https://termix.example.com/plugin-api/sso/callback`. Register it as the redirect or callback URL in your identity provider when you make the client there.
5. Fill in the fields below, turn on **Enabled** and press **Save Provider**.

GitHub and Google only need a **Client ID** and **Client Secret**. Termix knows their URLs.

## OIDC fields

| Field                                | What it is                                                                                         |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **Display Name**                     | The button label.                                                                                  |
| **Client ID**, **Client Secret**     | From the client you made in your identity provider.                                                |
| **Issuer URL**                       | The provider's issuer, like `https://auth.example.com/realms/main`.                                |
| **Authorization URL**, **Token URL** | The provider's endpoints. Most providers list them at `<issuer>/.well-known/openid-configuration`. |
| **Override Userinfo URL**            | Only if the provider's userinfo endpoint is somewhere unusual.                                     |
| **User Identifier Path**             | The claim that identifies a user. `sub` by default.                                                |
| **Display Name Path**                | The claim with their name. `name` by default.                                                      |
| **Scopes**                           | `openid email profile` by default. Add `groups` if your provider needs it for groups.              |
| **Group Claim**                      | The claim with the user's groups, if it isn't `groups`, `roles` or `group`.                        |
| **Allowed Users**                    | One email per line. Empty allows everyone the provider accepts.                                    |
| **Admin Group**                      | Members of this group are Termix admins. Checked on every sign in.                                 |
| **Custom CA Certificate**            | A PEM certificate, if your provider uses a private CA.                                             |

## How sign in works

The button sends people to the provider. After they sign in, the provider sends them back to the Redirect URI and Termix finds or makes their account.

- With **Auto-create external accounts** off in **Settings**, **General**, only people who already have an account can sign in.
- An admin can link an SSO account to an existing local one in **Settings**, **Users**. Then either way of signing in works.
- To ask for a second factor after SSO too, turn on **Ask for a second factor after external logins**.
- Use `$external.username` as a host's username to fill in the name someone signed in with.

## Groups to roles

Map provider groups to Termix [roles](/guide/roles) with `OIDC_ROLE_MAP`, as `group:role` pairs:

```
OIDC_ROLE_MAP=devops-interns:devops-intern,devops-seniors:devops-senior
```

Roles are updated on every sign in. Group names are compared without case.

## Sign in automatically

Turn on **Sign in with SSO automatically** to send visitors straight to the first provider instead of showing the sign in form. Keep another way in, since there is no form to fall back to if the provider is down. `OIDC_SILENT_LOGIN_DEFAULT` sets it from the environment and locks it.

## Sign out

Signing out of Termix doesn't sign you out of the provider. Providers that support back-channel logout can sign people out of Termix: point them at `https://termix.example.com/plugin-api/sso/backchannel-logout`.

## Setting it with environment variables

You can set one OIDC provider with [environment variables](/plugins/sso/reference#environment-variables) instead of the form, for config managed deployments. It is used when no providers are set up in the app. With `OIDC_ENV_OVERRIDE=true` it is the only one, even when others exist.

## Troubleshooting

- **Redirect URI mismatch.** Register the exact Redirect URI from the form. Behind a reverse proxy, make sure it sends `X-Forwarded-Proto`, or set `EXTERNAL_FORCE_HTTPS=true`.
- **"Not allowed".** Their email isn't in **Allowed Users**, or new accounts can't be made.
- **Admin rights don't stick.** Check **Group Claim** and that your provider sends groups in the token.
