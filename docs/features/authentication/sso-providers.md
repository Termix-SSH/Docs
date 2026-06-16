# SSO Providers

Termix can sign users in through outside identity providers instead of, or alongside, local accounts. This page explains how the provider system works. For the setup steps of a specific provider type, see [OIDC](./oidc), [GitHub and Google](./github-google), or [LDAP](./ldap).

## How it works

All SSO setup happens in the Termix admin settings, not in environment variables. An admin can add as many providers as they want, of any type, mixed together. For example you could have a generic OIDC provider for Authelia, a Google provider, and an LDAP provider all enabled at the same time.

Each provider has:

- A **type**: OIDC, LDAP, GitHub, or Google
- An **enabled** toggle, so you can turn a provider off without deleting its config
- A **display order**, which controls the order its button shows up in on the login page

All secrets (client secrets, LDAP bind passwords) are encrypted before they're stored.

## Provider types

- **OIDC** is the generic option. Use it for any OpenID Connect provider, like Keycloak, Authelia, Auth0, Okta, or Azure AD. You fill in all the endpoint URLs yourself.
- **GitHub** and **Google** are presets. Termix already knows their authorization, token, and issuer URLs, so you only need to enter a client ID and client secret.
- **LDAP** connects to an LDAP or Active Directory server directly. It works differently from the other three, since it's a username and password login, not a redirect.

## Setting up a provider

1. Sign in as an admin and open **Admin Settings**.
2. Go to the SSO providers section.
3. Click to add a new provider and pick a type.
4. Fill in the fields for that type (see the provider specific pages for what each field means).
5. Save, then enable the provider.

The provider's button now shows up on the login page, in the position set by its display order.

## How sign in works

OIDC, GitHub, and Google all use the same flow: clicking the button sends the user to the provider to log in, then back to Termix at a callback URL in the form `/users/oidc/callback?provider={id}`, where `{id}` is that provider's ID in Termix.

LDAP works differently. Instead of a redirect, the login page shows a username and password form under the LDAP button. Termix sends those credentials straight to your LDAP server with a POST request to `/users/ldap/login`.

## Allowed users and admin groups

OIDC and LDAP both support an allowed users list, so you can restrict sign in to specific usernames or email patterns. They also support syncing admin status from a group: if a user belongs to the configured admin group, Termix marks them as an admin. For LDAP, this check runs on every login, so removing someone from the group revokes their admin access the next time they sign in.

## Linking accounts

If a user already has a local account, an admin can link it to their SSO identity from Admin Settings. Once linked, the user can sign in with either method.
