---
title: Security
slug: /security
sidebar_label: Overview
description: What Termix protects, what it does not, and where to find the rest of the security docs.
---

# Security

Termix holds the logins to your servers. A hole in Termix can be a hole in every machine it manages, so this is the part we are most careful with.

| Page                                        | What is in it                                                       |
| ------------------------------------------- | ------------------------------------------------------------------- |
| [Secure your server](/security/your-server) | What to turn on, sessions, alerts and the audit log                 |
| [Data and keys](/security/data-and-keys)    | How secrets are stored, the server keys and how to rotate them      |
| [Plugin sandbox](/security/plugin-sandbox)  | How plugins are fenced in, and where the fence ends                 |
| [Verify your download](/security/verify)    | Check that a file or image is the one Termix built                  |
| [Signing keys](/security/signing-keys)      | The keys Termix trusts, and what happens when one leaks             |
| [Recovery](/security/recovery)              | Getting back in, and what to do after a takeover                    |
| [Advisories](/security/advisories)          | Report a problem, every past advisory and the people who found them |

## What Termix protects against

Termix keeps host logins, SSH keys, passwords and the sessions to your servers. Only the people you give access to should be able to use them, and only at the level you gave.

- Someone on the internet. They can reach the login page, a few public routes (health, SSO callbacks, share links, status pages) and whatever a plugin marks as public. Everything else needs a session.
- A signed in user with little access. Every route and socket checks who is asking and what they may do with that host, credential or folder. Sharing has four levels: connect, view, edit and manage. A connect share never sends the saved password or key to the browser.
- A bad or broken plugin. Each plugin runs in its own process and can only do what it was granted. See [Plugin sandbox](/security/plugin-sandbox).
- A tampered download or update. Plugins, desktop updates and release files are signed and checked before they install. See [Signing keys](/security/signing-keys).
- Someone between Termix and a host. SSH host keys are saved per host. A host with no saved key is refused when nobody is there to confirm it, unless an admin allows trusting the first key.

## What it does not protect against

- The server admin. Admins can see and change everything on their server.
- Anyone who can read the server's data folder. The database is encrypted, but by default its keys sit next to it. Keep the keys outside the data folder and guard your backups. See [Data and keys](/security/data-and-keys#keys).
- Root on the server, or your own user on a desktop. Anything running there can read Termix's memory and files.
- Your own servers. Termix runs the commands you and your users ask it to run.

## How the usual holes are closed

Most past advisories were one of a few kinds. Each kind now has a fix that covers all of it, not only the one bug.

- Missing permission checks. Every route and socket has a written answer for 17 kinds of caller: anonymous, expired, revoked, share guest, each share level, owner, admin, limited API keys and more. CI calls every route as each caller and fails on any difference. A new route with no entry fails the build.
- Command injection. Values sent to a host go through shared helpers that quote them as one shell word or send them as base64 on stdin. Passwords never go on a command line.
- Requests to private networks. Outbound requests built from user input go through one guard. It looks the name up once, refuses private addresses unless an admin allowed that exact one, and connects to the address it checked.
- Cross site scripting. The server sends a strict Content-Security-Policy, and plugin screens run in sandboxed frames.
- Cross site requests. Login cookies are `SameSite=Lax` and `__Host-` over HTTPS. A write that only carries a cookie is refused when it comes from another site.
- Sessions. Tokens are stored as hashes. Ending a session closes its open sockets at once.
- Guessing passwords and codes. Logins, second factor checks, resets and API keys are rate limited per address and per account.
- Leaking errors. Server errors never send error text to the client, and logs mask secrets.
- Dependencies. Known vulnerable packages fail CI, install scripts are off, new versions wait a few days before they are used, and every build ships an SBOM.

## How it is checked

- [OpenSSF Best Practices](https://www.bestpractices.dev/projects/16663): Termix holds the silver badge. Every answer and its evidence is public there.
- [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/Termix-SSH/Termix): a weekly automatic check of how the repos are run.
- CodeQL scans every push, zizmor checks every workflow, and Dependabot and osv-scanner watch the dependencies.
- Test coverage stays above 80%.
- Hostile plugin tests. Plugins built to attack the sandbox run on the Docker image and in the packaged desktop app, for every change to the sandbox and before every release. They try to read the database and keys, start programs, open sockets, reach private addresses, act as another user, break out of their frame and install tampered files. One attack that gets through fails the build.
- Release gate. Every core and official plugin release must pass the scans, the permission checks, a test for every fixed advisory and the lab's test run on the exact commit it ships.
- Releases can't be changed after they are published. A late fix is always a new version.
- Once a month every change since the last release is read again for the kinds of holes Termix has had before. Anything found is handled privately.

## Thanks {#thanks}

Many of the fixes here started with someone's report. Their names are on the [Advisories](/security/advisories#thanks) page.
