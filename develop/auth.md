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

No plugin code runs on the sign in page. Termix draws your method from what the backend registers:

- `kind: "redirect"`: one button per enabled instance from `describe()`.
- `kind: "form"` with `fields`: a form per instance. Each field has a `name`, a `type` (`text`, `password` or `code`), a `labelKey` and an optional `autocomplete`. The values go to `verify` by name.
- `kind: "webauthn"` with `options(request, instanceId)`: a passkey button. Return `{ publicKey, context }`. Termix runs the browser prompt and sends `{ ...context, response }` to `verify`. `placement: "inline"` puts it under the password form.

An instance can set `views` to `["password"]` or `["external"]` to show on only one page of the sign in screen.

On the frontend, `app.registerLoginMethod({ id, titleKey, enrollment })` adds only the setup screen in Settings, Security. It runs in a sandboxed frame like the rest of your plugin.

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

Set `prompt` so Termix can draw the step after the password:

- `{ kind: "code", field: "code", labelKey }`: one field, sent to `verify` under `field`.
- `{ kind: "fields", fields }`: the same fields as a form method.
- `{ kind: "webauthn" }`: a security key. `challenge()` returns the request options, and `verify` gets `{ response }`.

`app.registerSecondFactorUI({ id, titleKey, enrollment })` adds the setup screen in Settings, Security.

## Passkeys on your own screens

A frame can't reach the browser's passkey prompt, so Termix runs it for you. Register the step on the backend and start it from a click:

```ts
ctx.auth.registerWebAuthnCeremony({
  id: "add-key",
  type: "create",
  options: async ({ userId, origin, extra }) => ({
    publicKey: await makeOptions(userId, origin),
    context: { challengeId },
  }),
  finish: async ({ userId, context, response }) =>
    (await check(userId, context, response))
      ? { ok: true }
      : { ok: false, error: "Try again" },
});
```

```ts
const result = await app.auth.webauthn("add-key", { name: "Laptop" });
```

Termix asks your backend for the options, runs the prompt and sends the answer back. Your screen only gets what `finish` returned. A closed prompt answers `{ ok: false, closed: true }`.

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
  async prepare(config, host, env) {
    const cert = await signFor(host);
    await applyCertificateAuth(config, env.client, cert, host.username);
    return { status: "ready" };
  },
});
```

The type shows up in the host editor's Authentication Method list. `fields` are drawn for you. Set `quickConnect`, `supportsBackground` and `needsUserInteraction` to say where it can be used. `@termix-ssh/plugin-sdk/ssh-certs` has `applyCertificateAuth()` for certificate based types.

Every plugin that connects through `ctx.ssh` gets your type for free.

In a plugin process (plugin API 2) the SSH client stays in Termix. `prepare` gets a copy of the config without passwords or keys and may set only `username`, `password`, `privateKey`, `passphrase`, `tryKeyboard`, `readyTimeout`, `keepaliveInterval` and `keepaliveCountMax`. `env.client` is a stand-in that `applyCertificateAuth()` knows, and Termix applies the certificate for you. `onAuthFailed` and `connectOptions` answer with a Promise. `onBanner`, `onKeyboardInteractive`, keyboard-interactive handlers and login methods still need plugin API 1.

## Connection protocols

A protocol is a way to connect next to SSH, like RDP or VNC. Declare it in `contributes.protocols` with its fields, and register it on the frontend with `app.registerHostProtocol`. It gets a switch in the host editor, a filter in the host list, a place in Quick Connect, and its login is stored, encrypted, shared and synced by Termix.

Read it back on the backend with `ctx.credentials.resolveHostProtocol(hostId, protocol)` (`credentials:read`). See [Plugin-Remote-Desktop](https://github.com/Termix-SSH/Plugin-Remote-Desktop) for a full example.

## Secret references

`ctx.credentials.registerSecretResolver(scheme, resolve)` lets users write `scheme://...` in a password field and have your plugin fetch the real secret when a host connects. [Secret Sources](/plugins/secret-sources) does this for 1Password with `op://`. List the scheme in `contributes.auth.secretSchemes`.
