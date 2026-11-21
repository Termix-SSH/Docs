---
title: "Single sign-on"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/sso"
description: "Sign in with any OpenID Connect or SAML provider, GitHub or Google."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-SSO/edit/main/docs/index.md"
plugin_id: "sso"
plugin_version: "1.3.0"
plugin_latest: true
---
Single sign-on lets people sign in to Termix through an identity provider: anything that speaks OpenID Connect, like Keycloak, Authentik, Authelia, Entra ID, Okta or Pocket ID, anything that speaks SAML 2.0, like ADFS, Shibboleth, Okta or Entra ID, plus GitHub and Google.

You can add several providers. Each gets its own button on the sign in page.

## Add a provider

1. Install the plugin from the Plugins tab.
2. Open Settings, Single sign-on and press Add Provider.
3. Pick a Provider Type: OIDC, SAML, GitHub or Google.
4. Copy the Redirect URI shown in the form, like `https://termix.example.com/plugin-api/sso/callback`. Register it as the redirect or callback URL in your identity provider when you make the client there.
5. Fill in the fields below, turn on Enabled and press Save Provider.

GitHub and Google only need a Client ID and Client Secret. Termix knows their URLs.

For SAML, see [SAML fields](#saml-fields).

## Upgrading from before 2.9

Providers set up before Termix 2.9 keep the old redirect URI, `https://termix.example.com/users/oidc/callback`, so your identity provider needs no change. To move one to the new URI, add the new one in your identity provider first, then open the provider and turn off Keep the old redirect URI. A provider set through `OIDC_*` environment variables uses the old URI unless `OIDC_LEGACY_CALLBACK` is `false`.

## OIDC fields

| Field                        | What it is                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| Display Name                 | The button label.                                                                                       |
| Client ID, Client Secret     | From the client you made in your identity provider.                                                     |
| Issuer URL                   | The provider's issuer, like `https://auth.example.com/realms/main`.                                     |
| Authorization URL, Token URL | The provider's endpoints. Most providers list them at `<issuer>/.well-known/openid-configuration`.      |
| Override Userinfo URL        | Only if the provider's userinfo endpoint is somewhere unusual.                                          |
| User Identifier Path         | The claim that identifies a user. `sub` by default.                                                     |
| Username Path                | The claim used as their Termix username. `preferred_username` by default, then `name` if it is missing. |
| Scopes                       | `openid email profile` by default. Add `groups` if your provider needs it for groups.                   |
| Group Claim                  | The claim with the user's groups, if it isn't `groups`, `roles` or `group`.                             |
| Allowed Users                | One email per line. Empty allows everyone the provider accepts.                                         |
| Admin Group                  | Members of this group are Termix admins. Checked on every sign in.                                      |
| Custom CA Certificate        | A PEM certificate, if your provider uses a private CA.                                                  |

## SAML fields

A SAML provider shows an ACS URL, like `https://termix.example.com/plugin-api/sso/saml/acs`, instead of a Redirect URI. In your identity provider, make a SAML app (also called a relying party trust or service provider) with:

- ACS or reply URL: the ACS URL from the form, with the HTTP-POST binding.
- Entity ID, audience or identifier: the Entity ID from the form, `https://termix.example.com/plugin-api/sso/saml/metadata` by default.
- Signed assertions. Termix refuses an assertion that is not signed.

Once saved, the form also shows a Metadata URL. Identity providers that can read SP metadata, like ADFS, can take the setup from it.

| Field                             | What it is                                                                                                |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- |
| IdP Metadata URL                  | Optional. Press Fill from metadata to fill in the next three fields from it.                              |
| Sign In URL                       | The identity provider's SAML sign in URL for the HTTP-Redirect binding.                                   |
| IdP Entity ID                     | Optional. Answers from any other issuer are refused.                                                      |
| IdP Signing Certificate           | The PEM certificate the identity provider signs with. Paste the old and new one together during a change. |
| Entity ID                         | Termix's own entity ID. Leave empty for the default.                                                      |
| NameID Format                     | Optional, like `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`. Empty lets the provider pick.    |
| Need the whole answer signed      | Off by default: only the assertion has to be signed.                                                      |
| Request Signing Key, Certificate  | Optional. Only for providers that want signed sign in requests.                                           |
| User Identifier Attribute         | The attribute that identifies a user. Empty uses the NameID, or the email when the NameID is transient.   |
| Email, Username, Groups Attribute | Empty tries the usual names, like `email`, `mail`, `uid`, `groups`, `memberOf` and the ADFS claim URIs.   |

Allowed Users, Admin Group and [groups to roles](#groups-to-roles) work the same as for OIDC, with the groups from the Groups attribute.

Sign in has to start from Termix. Logins started from the identity provider's portal are refused. Signing out of Termix does not sign people out of the SAML provider.

## How sign in works

The button sends people to the provider. After they sign in, the provider sends them back to the Redirect URI and Termix finds or makes their account.

- With Auto-create external accounts off in Settings, General, only people who already have an account can sign in.
- An admin can link an SSO account to an existing local one in Settings, Users. Then either way of signing in works.
- To ask for a second factor after SSO too, turn on Ask for a second factor after external logins.
- Use `$external.username` as a host's username to fill in the name someone signed in with.

## Link an existing account

Already have a Termix account? Open Settings, Security and press Link next to a provider. Sign in at the provider and you land back in Termix with that sign in tied to your account, so your hosts and settings stay. You can unlink it in the same place, unless it is your only way to sign in. A provider account can only be linked to one Termix account.

Admins can turn this off with Let users link their account, or link an SSO account to a password account in the user list.

## Groups to roles

Map provider groups to Termix [roles](/guide/roles) with `OIDC_ROLE_MAP`, as `group:role` pairs:

```
OIDC_ROLE_MAP=devops-interns:devops-intern,devops-seniors:devops-senior
```

Roles are updated on every sign in. Group names are compared without case.

## Sign in automatically

Turn on Sign in with SSO automatically to send visitors straight to the first provider instead of showing the sign in form. Keep another way in, since there is no form to fall back to if the provider is down. `OIDC_SILENT_LOGIN_DEFAULT` sets it from the environment and locks it.

## Sign out

Turn on Sign out of the provider too on an OIDC provider to sign people out of the provider as well when they sign out of Termix. Termix sends the browser to the provider's sign out page with the client ID, and the provider sends it back to Termix after. Add your Termix address, like `https://termix.example.com/`, as an allowed sign out redirect at the provider. The sign out page comes from the provider's discovery document, or set Sign out URL yourself. This needs Termix 26.11.3 and works in the browser, not the desktop app. `OIDC_SIGN_OUT_AT_PROVIDER=true` and `OIDC_END_SESSION_URL` set it for a provider from environment variables.

With it off, signing out of Termix doesn't sign you out of the provider.

Providers that support back-channel logout can sign people out of Termix: point them at `https://termix.example.com/plugin-api/sso/backchannel-logout`.

## Setting it with environment variables

You can set one OIDC provider with [environment variables](/plugins/sso/reference#environment-variables) instead of the form, for config managed deployments. It is used when no providers are set up in the app. With `OIDC_ENV_OVERRIDE=true` it is the only one, even when others exist.

## Troubleshooting

- Redirect URI mismatch: Register the exact Redirect URI from the form. Behind a reverse proxy, make sure it sends `X-Forwarded-Proto`, or set `EXTERNAL_FORCE_HTTPS=true`.
- "Not allowed": Their email isn't in Allowed Users, or new accounts can't be made.
- "Login was started in another browser": A sign in from the web page has to finish in the same browser that started it. Start it again from the sign in page.
- Admin rights don't stick: Check Group Claim and that your provider sends groups in the token.
- SAML "authentication failed": The server log says why. Most often the certificate, the Entity ID (audience) or the server clock is off, or the assertion is not signed.
- SAML "No login is waiting for this answer": The sign in was started from the identity provider, or took more than 10 minutes. Start it from the Termix sign in page.
