---
title: Signing keys
description: How Termix signs plugins and desktop updates, and what happens when a key leaks.
---

# Signing keys

Termix checks every plugin and desktop update against keys it trusts before it installs anything. From 26.11.2 on, those keys form a small chain:

- **Root keys.** Two per source, one for official plugins and core releases and one for community plugins. They are kept offline and never touch a server or a build machine. Either key of a pair can sign. Termix has only these public keys built in.
- **Online keys.** The keys the release workflows sign with. Each one has a certificate signed by a root key that says what it may sign (plugins or core releases) and until when. Certificates last a year.
- **Revocation list.** A file signed by a root key that names keys, plugins or plugin versions that must not be used any more.

Termix installs or updates an official or community plugin only when an online key signed it, a root key signed that key's certificate, the certificate is in date, and nothing on the revocation list covers the key or the plugin. The desktop app does the same for its own updates, next to the [Sigstore check](verify.md).

A plugin from a custom registry is checked against the key you pinned when you added the registry, as before.

## Root key fingerprints

| Key              | Fingerprint                                          |
| ---------------- | ---------------------------------------------------- |
| Official root A  | `SHA256:a549NEiGOOvwpBvYPZno6/bgGsdTarnF+ExL9UmPQRk` |
| Official root B  | `SHA256:CtQKKIHB6UaIt2pSOAXwAPpkczI1Bqbual66doeqeoc` |
| Community root A | `SHA256:SF4INojl+/wyBBec06AfBx6Y5QC+Rl8H0r+WfCrVeuI` |
| Community root B | `SHA256:XVcMEf9p+KYrPeK96DWNM1MBibXS+1IMc9eSlzcq8bw` |

The public keys are in [Termix-Registry](https://github.com/Termix-SSH/Termix-Registry/tree/main/trust) under `trust/official/root.pub` and `trust/community/root.pub`.

## What your server does

- **On start and once a day** it fetches the revocation list from the registry. It keeps the newest one it has, and refuses an older one.
- **A revoked plugin is turned off** and every admin gets an alert. Update it or remove it in Plugins. If a later list lifts the revocation, the plugin starts again.
- **When a plugin update is signed by a different key** than the version before, every admin gets an alert. Termix moves to new online keys about once a year, so one alert then is normal. An alert that a plugin moved to a key from another source (for example from official to a custom registry) is worth a closer look.
- **Without internet** the server keeps working with the last list it fetched. Installed plugins keep loading, even after their certificate expires, because they were checked when they were installed.

## Plugins signed with the old key

Before 26.11.2 every official plugin was signed with one key. Installed plugins signed that way keep loading until 2027-05-01. Your server moves them over to the new signatures on its own, without downloading them again, as long as it can reach the registry once before then. New installs and updates already need the new chain.

Termix versions older than 26.11.2 only know the old key. They keep getting plugin updates until 2027-05-01, then stop.

## Reproducible plugin builds

Every official plugin release is built twice: once by the release workflow, and again from its git tag on a separate, clean machine with no keys. The registry lists a release only when both builds give the same file, byte for byte. Records are in [`official/reproduced`](https://github.com/Termix-SSH/Termix-Registry/tree/main/official/reproduced).

## Check a certificate by hand

Certificates are in `trust/official/certs.json` and `trust/community/certs.json` in Termix-Registry. Root signatures are normal SSH signatures, so `ssh-keygen` can check them. With [jq](https://jqlang.org/) and OpenSSH 8.1 or newer:

```bash
grep -v '^#' root.pub | cut -d' ' -f1,2 | sed 's/^/termix-root /' > allowed_signers
jq -cjS '.[0].signed' certs.json > signed.json
jq -r '.[0].signatures[0].sig' certs.json > signed.json.sig
ssh-keygen -Y verify -f allowed_signers -I termix-root -n termix-root -s signed.json.sig < signed.json
```

It prints `Good "termix-root" signature`. Change `.[0]` to check another certificate.

## If a key leaks

Termix adds the key to the revocation list. Your server picks the list up at its next daily check (or at its next start) and stops trusting that key. If a plugin release itself is bad, the list names that version instead, and your server turns it off and tells every admin.

You don't need to do anything, unless you get an alert that a plugin was turned off. Then update the plugin in Plugins, or remove it. If a root key is ever replaced, the new one comes with a Termix update, and this page lists its fingerprint.
