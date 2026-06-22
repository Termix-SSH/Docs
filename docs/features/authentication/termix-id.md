# Termix ID

Termix ID gives you a public URL tied to a handle you pick. You add that URL to any server's `authorized_keys` file and it will always reflect your current set of public keys. When you rotate or add keys, all servers you provisioned pick up the change automatically on the next connection attempt.

## Claiming a handle

Open the Termix ID panel from the sidebar. Pick a handle (lowercase letters, numbers, `-` and `_`). Once you confirm it's available, click Create Termix ID.

Your resolver URL will be something like `https://your-termix/termix-id/u/yourhandle`.

## Provisioning a server

The panel shows a one-liner you can run on any server as root:

```bash
curl -fsSL https://your-termix/termix-id/u/yourhandle >> ~/.ssh/authorized_keys
```

This appends your currently published keys. The server will re-fetch nothing automatically after this - it's a one-time append. To keep a server continuously in sync, set up a cron job or trust the CA instead (see below).

## Publishing keys

You can add keys to your Termix ID a few different ways:

- Generate - Termix generates an Ed25519 keypair, publishes the public key, and downloads the private key to your device. You can optionally save it to your credentials vault at the same time.
- Paste - paste any existing public key directly.
- Import from credential - pull in a public key from a credential already stored in Termix.

Published keys can be toggled on or off without removing them.

## Certificate authority

Termix ID includes an optional per-user CA. Instead of appending keys directly, you trust the CA on your servers once and then any certificate you issue from that CA will be accepted.

To use it:

1. Enable the CA in the Termix ID panel.
2. Run the trust command shown on each server you want to use it with (run as root).
3. Use the Certificate button next to any key to issue a signed certificate for it.

Certificates expire on their own. To revoke everything at once, rotate the CA. Any previously issued certificates will stop working immediately.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
