---
title: Signing in on the phone
description: Proxies, client certificates, certificate pins, passkeys, Face ID and links into the Termix app.
---

# Signing in on the phone

How the Termix app (2.0.0 and newer) signs in to a server, and what to set up when a proxy or a client certificate sits in front of it.

## Login proxies

The app works behind proxies that ask you to sign in first, like Authelia, Authentik, Cloudflare Access or Pangolin. When you link the server, the app opens the proxy's page. Sign in there and then sign in to Termix.

The app keeps the proxy's cookie for that server, also after a restart. When the proxy session runs out, the app opens the proxy sign in again the next time you come back to it. The server and your Termix session stay as they are. If the proxy remembers you through its own SSO, that sign in is one tap.

To change it later, open Settings, Sync, then Proxy. There you can also clear the proxy sign in.

### Cloudflare Access

Two ways work:

- Sign in to Access in the app, like any proxy above. Access asks again when its session ends, after the time you set in the Access application.
- Use a service token, so the app never has to sign in to Access. In Cloudflare Zero Trust, make a service token and add a Service Auth policy for it to the Termix application. In the app, open Proxy and add two headers: `CF-Access-Client-Id` and `CF-Access-Client-Secret` with the token's values.

### Headers and basic auth

Proxy also takes any extra headers and a basic auth username and password. The app sends them on every request and socket, the terminal relay and remote desktop through the server included.

## Client certificates (mTLS)

If your proxy asks for a client certificate, import it in the app as a `.p12` or `.pfx` file under Proxy, Client certificate. You can do this on the address step before you sign in.

The key goes into the iOS Keychain or the Android Keystore and never leaves the phone. The app sends the certificate on every request, socket, the terminal relay, file uploads and downloads, and remote desktop through the server. Images inside plugin pages load straight from the server, so they may not show behind mTLS.

## Certificate pin

Use a pin when your server has a self-signed certificate, or when you want the app to refuse any other certificate. Open Proxy and client certificate (on the address step or in Settings, Sync and proxy) and go to Certificate pin.

- Read the key from the server shows the key the server sends. Check it against your server, then pin it.
- Or paste a pin. It is the base64 SHA-256 of the server's public key, the same value as `pin-sha256`. To get it on the server:

```bash
openssl x509 -in cert.pem -pubkey -noout \
  | openssl pkey -pubin -outform der \
  | openssl dgst -sha256 -binary | base64
```

A pinned server is trusted by its key alone, for API calls, sockets, the terminal relay and sign in pages. If the server shows another key, sync stops and says the server key changed. Before you change the server's certificate, pin the new key too, then remove the old one.

On iPhone, sign in pages and remote desktop through the server also refuse another key. On Android they use a pin to accept a self-signed certificate, and the app's own requests refuse another key.

## RDP certificates

When the phone opens an RDP host itself, it shows the computer's certificate fingerprint the first time and asks you to trust it. Your password is only sent after that. If the certificate changes later, the app warns you first. Windows makes a new self-signed certificate now and then, so a change after a long time is normal.

## Passkeys and security keys

When the server has the [Passkeys](/plugins/webauthn) plugin on, the sign in screen shows Sign in with a passkey or security key. It opens your server's own sign in page in the phone's browser, where Face ID, a fingerprint, or a YubiKey over NFC or USB all work. The app picks up once you are in. This needs Termix 26.10.6 or newer.

The app can't use passkeys in its own screens. A passkey belongs to your server's address, and iOS and Android only allow that inside an app when the address is built into the app, which a self-hosted server can't have.

A security key asked for after the password works the same way through the browser.

## Password managers and Face ID

The address, username, password and one time code fields work with Apple Passwords, Bitwarden, 1Password and other password managers.

After you sign in with a password, the app asks once whether to keep it behind Face ID, Touch ID or your fingerprint. If the server signs you out later, tap Sign in with Face ID instead of typing the password. The password stays on the phone, locked to your biometrics. Adding a new fingerprint removes it. Turn it off under Settings, Sync.

App Lock (Settings, Security) is separate: it locks the whole app.

## SSO

SSO sign in uses the phone's browser, so a provider you are already signed in to does not ask again. After you sign out of a server on iPhone, the next sign in to that server starts clean so you can pick another account. On Android, the browser keeps the provider's login, so sign out at the provider if you want to switch.

## Links into the app

A link like this opens a host in the app:

```
termix-mobile://open?server=https://termix.example.com&view=terminal&hostId=12
```

- `server` is the address of a server linked in the app. Leave it out for a host on This device.
- `view` is `terminal`, `file-manager` or `server-stats`. Leave it out to run the host's first action.
- `hostId` is the host's id on the server, the same one Termix web links use.

You can also wrap a Termix web link:

```
termix-mobile://open?url=https%3A%2F%2Ftermix.example.com%2F%3Fview%3Dterminal%26hostId%3D12
```

Use these in ntfy, Home Assistant or anything else that can open a link from a notification. If the server isn't linked yet, the app asks you to link it first. If you are signed out, it signs you in and then opens the host.

Plain `https://` links to your server always open in the browser. Android App Links and iOS universal links only work for addresses built into the app, so they can't cover self-hosted servers.
