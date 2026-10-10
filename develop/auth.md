---
title: Auth and protocols
description: Login methods, second factors, SSH auth types and connection protocols.
---

# Auth and protocols

Sign in and the ways to connect to a host are pluggable too. Single sign-on, LDAP, TOTP, passkeys, Vault certificates and RDP are all plugins.

Everything here needs the `auth:provide` capability, which is high risk. Admins will look closely at it.

## Login methods

A login method is a way to sign in to Termix: a redirect to an identity provider, or a form.

```json
"contributes": { "auth": { "loginMethods": ["hello-login"] } }
```

```ts
ctx.auth.registerLoginMethod({
  id: "hello-login",
  labelKey: "login.label",
  kind: "redirect",
  external: true,
  async start(request) {
    return { redirectUrl: buildProviderUrl(request) };
  },
  async callback(request) {
    const profile = await checkWithProvider(request);
    return { subject: profile.id, username: profile.login };
  },
});
```

Your method only proves who someone is. Termix does the rest: finding or making the account, the session, a second factor if the user has one, and the audit log. Set `external: true` for methods that check against something outside Termix, so the admin's "second factor after external logins" setting applies.

On the frontend, `app.registerLoginMethod` adds the button or form to the sign in page. Plugins with login methods load before anyone signs in.

## Second factors

```json
"contributes": { "auth": { "secondFactors": ["hello-code"] } }
```

```ts
ctx.auth.registerSecondFactor({
  id: "hello-code",
  labelKey: "factor.label",
  isEnrolled: (userId) => hasCode(userId),
  verify: async (userId, body) => checkCode(userId, body.code),
  reset: (userId) => removeCode(userId),
});
```

Call `ctx.auth.recordEnrollment(userId, "hello-code")` when a user sets it up. Termix keeps that record even if your plugin is removed, so it refuses the sign in instead of quietly skipping the factor.

`app.registerSecondFactorUI` draws the challenge and the setup screen in **Settings**, **Security**.

## SSH auth types

An SSH auth type is a way to sign in to a host, like a Vault signed certificate.

```json
"contributes": { "auth": { "sshAuthTypes": ["hello-cert"] } }
```

```ts
ctx.auth.registerSshAuthProvider({
  type: "hello-cert",
  labelKey: "auth.label",
  fields: [{ key: "role", type: "string", labelKey: "auth.role" }],
  async prepare(host, config) {
    const cert = await signFor(host);
    // fill config with the key and certificate, never connect here
  },
});
```

The type shows up in the host editor's **Authentication Method** list. `fields` are drawn for you. Set `quickConnect`, `supportsBackground` and `needsUserInteraction` to say where it can be used. `@termix-ssh/plugin-sdk/ssh-certs` has `applyCertificateAuth()` for certificate based types.

Every plugin that connects through `ctx.ssh` gets your type for free.

## Connection protocols

A protocol is a way to connect next to SSH, like RDP or VNC. Declare it in `contributes.protocols` with its fields, and register it on the frontend with `app.registerHostProtocol`. It gets a switch in the host editor, a filter in the host list, a place in Quick Connect, and its login is stored, encrypted, shared and synced by Termix.

Read it back on the backend with `ctx.credentials.resolveHostProtocol(hostId, protocol)` (`credentials:read`). See [Plugin-Remote-Desktop](https://github.com/Termix-SSH/Plugin-Remote-Desktop) for a full example.

## Secret references

`ctx.credentials.registerSecretResolver(scheme, resolve)` lets users write `scheme://...` in a password field and have your plugin fetch the real secret when a host connects. [Secret Sources](/plugins/secret-sources) does this for 1Password with `op://`. List the scheme in `contributes.auth.secretSchemes`.
