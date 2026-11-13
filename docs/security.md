---
title: Security
slug: /security
description: How Termix is built to keep your servers safe, how to report a problem, and every advisory so far.
---

# Security

Termix holds the keys to your servers, so a hole in Termix can be a hole in every machine it manages. This page says what Termix protects, what it does not, how plugins are fenced in, how releases are signed, and how to tell us about a problem.

For what to do on your own install (HTTPS, second factor, keys, backups), see [Configure security](/configure/security).

## Report a problem

Please do not open a public issue for a security problem.

Report it privately with GitHub's Report a vulnerability button on the Security tab of the repo the problem is in. For the server, desktop app and anything you are not sure about, use [Termix-SSH/Termix](https://github.com/Termix-SSH/Termix/security/advisories/new). Only you and the maintainers can see the report.

Tell us what is affected, the version you tested, and how to reproduce it. A short proof of concept helps a lot.

The full policy, with what is in scope and the safe harbor, is in [SECURITY.md](https://github.com/Termix-SSH/.github/blob/main/SECURITY.md). Machines can find the contact at [/.well-known/security.txt](https://termix.site/.well-known/security.txt), and every Termix server answers the same path.

### Response times

| Step                                | Target                                    |
| ----------------------------------- | ----------------------------------------- |
| First reply                         | 3 days                                    |
| Confirmed or declined, with a score | 7 days                                    |
| Fix released for critical and high  | 30 days                                   |
| Fix released for medium and low     | 60 days                                   |
| Advisory published                  | When the fixed version is out             |
| Latest you may go public            | 90 days after the report, unless we agree |

Termix is run by a small team, so these are targets, not promises. If we are going to miss one, we say so in the advisory. We ask for a CVE through GitHub for every confirmed problem.

## What Termix protects

Termix keeps host logins, SSH keys, passwords and the sessions to your servers. The goal is that only the people you give access to can use them, and only at the level you gave.

What it guards against:

- Someone on the internet: they only reach the login page, a few public routes (health, SSO callbacks, share links, status pages) and anything a plugin marks as public. Everything else needs a session.
- A signed in user with little access: every route and socket checks who is asking and what they may do with that host, credential or folder. Sharing has four levels (connect, view, edit, manage). A `connect` share never sends the saved password or key to the browser.
- A bad or broken plugin: plugins made for plugin API 2 run in their own process with only what they were granted. See [Plugin sandbox](#plugin-sandbox).
- A tampered download or update: plugins, desktop updates and release files are signed and checked before they install. See [Signed releases](#signed-releases).
- Someone between Termix and a host: SSH host keys are pinned per host, and a host with no saved key is refused when nobody can confirm it, unless an admin allows trust on first use.

What it does not guard against:

- The server admin: admins can see and change everything on their server. That is the job.
- Anyone who can read the server's data folder: the database is encrypted, but by default the keys sit next to it in `DATA_DIR/.env`. Keep the keys outside the data folder (`TERMIX_REQUIRE_EXTERNAL_SECRETS`) and guard your backups. See [Keys](/configure/security#keys).
- Root on the server or the desktop machine: anything running as root, or as your own user on a desktop, can read Termix's memory and files.
- Plugins you choose to run without isolation: an older official plugin runs inside the server only if an admin turns on Run without isolation for it.
- Your own servers: Termix runs the commands you and your users ask it to run.

Every secret is encrypted with AES-256-GCM under a key per user, and the SQLite file is encrypted as a whole. [How data is stored](/configure/security#how-data-is-stored) has the details.

## Plugin sandbox

Almost every feature in Termix is a plugin, so plugins are the biggest part of the code. From 26.11.2 on, each plugin made for plugin API 2 is fenced in.

How it works:

- Its own process: each plugin's server code runs in a separate Node process with an empty environment. It never sees the server's keys, the database file or other plugins.
- Only checked calls: the plugin reaches Termix through a fixed set of calls that core checks one by one. Its database queries can only touch its own tables. SSH sessions are opened by core, and saved logins only reach a plugin that was granted `credentials:read`.
- Only what it was granted: a plugin lists what it needs (for example `network:sockets` or `credentials:read`), and an admin sees that list before turning it on. Without a grant, the process can't open network connections or run programs.
- In Docker, its own Linux user: each plugin runs as its own user, so it can't read the database, keys or other plugins' files. With `NET_ADMIN`, a firewall rule also blocks network access for plugins without the grant.
- Sandboxed screens: a plugin's screens run in sandboxed frames with no access to your login, the rest of the page or other plugins. Each frame can only call its own plugin, with a short key that ends with your session.
- Limits: a plugin process that crashes, hangs or uses too much memory or CPU is restarted, and marked failed if it keeps crashing.

Limits you should know:

- Desktop app: plugins run in their own process with none of the app's settings or keys, but the desktop app can't limit which files they read.
- Older plugins: a plugin made for plugin API 1 can only run inside the server, and only official ones, only when an admin turns on Run without isolation. Community plugins made for API 1 do not run.
- Not every hook is fenced yet: a few things still run inside the server for the plugins that provide them: host lock and host status providers, the sync provider, desktop local files and terminals, and some SSH and login hooks.
- Official layouts, themes and login plugins stay in the page, because they draw the app itself.
- A granted plugin can use its grants: a plugin you allow to open network connections can send what it sees to the network. Only turn on plugins you trust.

## How common weaknesses are handled

Most past advisories fell into a few groups. Each one now has a fix that covers the whole group, not only the one bug.

- Broken access control: every route and socket has a written expected answer for 17 kinds of caller (anonymous, expired, revoked, share guest, each share level, owner, admin, scoped API keys and more). CI calls every route as each caller and fails on any difference. A new route with no entry fails the build.
- Command injection: values sent to a host go through shared helpers that quote them as single shell words or send them as base64 on stdin. Passwords never go on a command line. The quoting has property tests that try thousands of random inputs.
- Requests to private networks: outbound requests from users' input go through one guard that looks the name up once, refuses private and reserved addresses unless an admin allowed that exact address, and connects to the address it checked.
- Cross site scripting: the server sends a strict Content-Security-Policy, and plugin screens run in sandboxed frames.
- Cross site requests: login cookies are `SameSite=Lax` and `__Host-` over HTTPS. A write that carries only a cookie is refused when it comes from another site.
- Sessions: tokens are stored as hashes. Ending a session closes its open sockets at once, and sockets get the same login and second factor checks as normal requests.
- Guessing passwords and codes: logins, second factor checks, resets and API keys have rate limits per address and per account.
- Leaking errors: server errors never send error text to the client, and logs mask secrets.
- Dependencies: lockfiles are checked, known vulnerable packages fail CI, install scripts are off, new versions wait a few days before they are used, and every build ships an SBOM.

## Checks and badges

- [OpenSSF Best Practices](https://www.bestpractices.dev/projects/16663): Termix holds the silver badge. Every answer and its evidence is public on that page.
- [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/Termix-SSH/Termix): an automatic check of how the repos are run (branch rules, pinned dependencies, token permissions, code review), refreshed every week.
- CodeQL scans every push, zizmor checks every workflow, and Dependabot and osv-scanner watch the dependencies.
- Test coverage is measured every week across the unit tests and the authorization matrix, and stays above 80%.
- Docker images and plugin builds are reproducible, so anyone can rebuild them and get the same bytes.
- Every core and official plugin release must first pass a release gate on the exact commit it ships: workflow and dependency scans, the authorization matrix, a regression test for every fixed advisory, and no new high or critical CodeQL alert.
- Once a month, every change since the last release is read again for the kinds of holes Termix has had before. Anything found is handled privately as a draft advisory.

## Signed releases

- Every official plugin is signed with a key that an offline Termix root key vouches for. Termix checks the signature, the key's certificate and a signed revocation list before it installs or updates a plugin. See [Signing keys](/install/signing-keys).
- New plugin releases are rebuilt from their tag on a clean machine, and only a byte for byte match is listed in the registry.
- Docker images are reproducible: anyone can rebuild a release and get the same files. See [Rebuild the image yourself](/install/verify#rebuild-the-image-yourself).
- Each core release has a signed `SHA256SUMS` file and build provenance for every file. Docker images are signed with cosign and carry provenance and an SBOM.
- The desktop app installs an update only after both the Sigstore signature and the release key signature check out.
- Releases can't be changed once published. A late fix is always a new version.

To check a download yourself, see [Verify your download](/install/verify).

## Published advisories

Every advisory is also on GitHub: [Termix-SSH/Termix advisories](https://github.com/Termix-SSH/Termix/security/advisories). Update to at least the fixed version.

| Advisory                                                                 | CVE            | Severity | Fixed in           | What it was                                                        |
| ------------------------------------------------------------------------ | -------------- | -------- | ------------------ | ------------------------------------------------------------------ |
| [GHSA-ccmp-2wpj-x458](https://github.com/advisories/GHSA-ccmp-2wpj-x458) |                | High     | Web Endpoint 1.0.2 | Web Endpoint could expose internal services without a login        |
| [GHSA-frx8-qqgg-7j7g](https://github.com/advisories/GHSA-frx8-qqgg-7j7g) |                | High     | 26.10.0            | Desktop app: a website could get a session on the built in backend |
| [GHSA-3q2m-5r5p-w45r](https://github.com/advisories/GHSA-3q2m-5r5p-w45r) |                | High     | 26.10.0            | Automations could run another user's automation as that user       |
| [GHSA-fj9w-vcj9-66qh](https://github.com/advisories/GHSA-fj9w-vcj9-66qh) |                | High     | 26.10.0            | Command injection in the automation run command step               |
| [GHSA-hmv7-25x4-vp6w](https://github.com/advisories/GHSA-hmv7-25x4-vp6w) |                | High     | 26.10.0            | A read only share guest could type into the shared session         |
| [GHSA-rgf3-2q88-q4wp](https://github.com/advisories/GHSA-rgf3-2q88-q4wp) |                | High     | 26.10.0            | File Manager sessions of other users could be ended or replaced    |
| [GHSA-v3vp-ffww-q7pw](https://github.com/advisories/GHSA-v3vp-ffww-q7pw) |                | High     | 26.10.0            | Saved credentials could be read by the wrong user                  |
| [GHSA-6gr3-r7jx-wfmh](https://github.com/advisories/GHSA-6gr3-r7jx-wfmh) |                | Low      | 26.10.0            | Second factor could be skipped with a forged device id             |
| [GHSA-7j7m-85p4-2cpm](https://github.com/advisories/GHSA-7j7m-85p4-2cpm) |                | Low      | 26.10.0            | Login rate limit could be dodged with a spoofed address            |
| [GHSA-j7j4-82wh-3vj5](https://github.com/advisories/GHSA-j7j4-82wh-3vj5) |                | Medium   | 26.10.0            | LDAPS did not check the server certificate                         |
| [GHSA-r7x4-j6x8-jxrx](https://github.com/advisories/GHSA-r7x4-j6x8-jxrx) |                | Medium   | 26.10.0            | Remote desktop tokens could be made for any target                 |
| [GHSA-wv2p-5jqw-9qf3](https://github.com/advisories/GHSA-wv2p-5jqw-9qf3) |                | Medium   | 26.10.0            | Vault address was fetched without the private network check        |
| [GHSA-8r8f-qh8q-5m4q](https://github.com/advisories/GHSA-8r8f-qh8q-5m4q) |                | High     | 2.8.0              | Automation HTTP step could reach private networks                  |
| [GHSA-qchf-m33q-9gxv](https://github.com/advisories/GHSA-qchf-m33q-9gxv) |                | Critical | 2.7.0              | A forged header could get an admin session                         |
| [GHSA-773j-p4cp-q79p](https://github.com/advisories/GHSA-773j-p4cp-q79p) |                | High     | 2.7.0              | Cross site scripting on the Vault login callback                   |
| [GHSA-9hjv-37ww-vqh9](https://github.com/advisories/GHSA-9hjv-37ww-vqh9) |                | High     | 2.7.0              | Homepage ping and RSS could reach private networks                 |
| [GHSA-gv59-pvxw-mcqp](https://github.com/advisories/GHSA-gv59-pvxw-mcqp) |                | Medium   | 2.7.0              | Tunnel status of other users could be read                         |
| [GHSA-vx7c-4gxw-vr2h](https://github.com/advisories/GHSA-vx7c-4gxw-vr2h) | CVE-2026-79765 | Critical | 2.5.1              | Tunnels could use another user's saved host login                  |
| [GHSA-pr55-25gf-5f9v](https://github.com/advisories/GHSA-pr55-25gf-5f9v) | CVE-2026-79766 | Critical | 2.5.1              | Command injection in certificate requests                          |
| [GHSA-mwr3-35ph-pjqg](https://github.com/advisories/GHSA-mwr3-35ph-pjqg) | CVE-2026-79764 | High     | 2.5.1              | Homepage proxy could reach private networks                        |
| [GHSA-fmwq-x6v6-3q8w](https://github.com/advisories/GHSA-fmwq-x6v6-3q8w) |                | High     | 2.5.1              | OIDC login could leak a session and trusted unchecked claims       |
| [GHSA-pcmm-36f6-36q6](https://github.com/advisories/GHSA-pcmm-36f6-36q6) |                | High     | 2.5.1              | Docker sessions and share grants of other users could be touched   |
| [GHSA-685g-ccvv-6p8m](https://github.com/advisories/GHSA-685g-ccvv-6p8m) | CVE-2026-79762 | Medium   | 2.5.1              | A built in default key protected some users' saved logins          |
| [GHSA-x9h9-f7jc-8jwj](https://github.com/advisories/GHSA-x9h9-f7jc-8jwj) | CVE-2026-79763 | Medium   | 2.5.1              | Second factor changes accepted the password alone                  |
| [GHSA-p2g3-2xq3-23gx](https://github.com/advisories/GHSA-p2g3-2xq3-23gx) | CVE-2026-79761 | Medium   | 2.5.1              | Command injection in the SSH key deploy check                      |
| [GHSA-6hx3-9mgq-h9fj](https://github.com/advisories/GHSA-6hx3-9mgq-h9fj) | CVE-2026-79760 | Medium   | 2.5.1              | Notification channel tests could reach private networks            |
| [GHSA-w4cf-69fj-g96f](https://github.com/advisories/GHSA-w4cf-69fj-g96f) | CVE-2026-79759 | Medium   | 2.5.1              | Deploy to host showed other users' data                            |
| [GHSA-372w-6f3h-vcm4](https://github.com/advisories/GHSA-372w-6f3h-vcm4) | CVE-2026-79758 | Medium   | 2.5.1              | Host status of other users could be read                           |
| [GHSA-j6h8-mww6-pgw6](https://github.com/advisories/GHSA-j6h8-mww6-pgw6) | CVE-2026-53548 | Critical | 2.3.2              | SSH passwords of other users' hosts could be read                  |
| [GHSA-57gp-39c7-4g9r](https://github.com/advisories/GHSA-57gp-39c7-4g9r) | CVE-2026-53546 | Critical | 2.3.2              | Saved host logins could be read without access                     |
| [GHSA-5p86-jgr7-4hwx](https://github.com/advisories/GHSA-5p86-jgr7-4hwx) | CVE-2026-53545 | Critical | 2.3.2              | Command injection when stopping a tunnel                           |
| [GHSA-xmjh-8cc2-qm49](https://github.com/advisories/GHSA-xmjh-8cc2-qm49) | CVE-2026-45748 | Critical | 2.3.2              | Command injection in tunnel forwarding                             |
| [GHSA-37f4-wq95-pg33](https://github.com/advisories/GHSA-37f4-wq95-pg33) | CVE-2026-45744 | Critical | 2.3.2              | Command injection in File Manager paths                            |
| [GHSA-v26q-rpv5-9m72](https://github.com/advisories/GHSA-v26q-rpv5-9m72) | CVE-2026-45750 | Critical | 2.3.2              | Command injection in File Manager                                  |
| [GHSA-cx2r-843c-vww8](https://github.com/advisories/GHSA-cx2r-843c-vww8) | CVE-2026-45746 | Critical | 2.3.2              | Sessions of other users could be taken over                        |
| [GHSA-6r97-7wp3-2g3x](https://github.com/advisories/GHSA-6r97-7wp3-2g3x) | CVE-2026-53547 | High     | 2.3.2              | Global settings leaked data that allowed account takeover          |
| [GHSA-rwj6-6vh7-45pv](https://github.com/advisories/GHSA-rwj6-6vh7-45pv) | CVE-2026-53542 | High     | 2.3.2              | Option injection when making archives in File Manager              |
| [GHSA-x9pr-795g-rm5f](https://github.com/advisories/GHSA-x9pr-795g-rm5f) | CVE-2026-53549 | High     | 2.3.2              | Proxy test could reach private networks                            |
| [GHSA-5fqh-77cr-jj5x](https://github.com/advisories/GHSA-5fqh-77cr-jj5x) | CVE-2026-45743 | High     | 2.3.2              | File Manager sessions of other users could be used                 |
| [GHSA-wqfw-rqj7-fv9m](https://github.com/advisories/GHSA-wqfw-rqj7-fv9m) | CVE-2026-45749 | High     | 2.3.2              | TOTP could be turned off with the password alone                   |
| [GHSA-ccm8-q457-6vjj](https://github.com/advisories/GHSA-ccm8-q457-6vjj) |                | High     | 2.3.2              | The user list included password hashes                             |
| [GHSA-96wf-qxcg-2822](https://github.com/advisories/GHSA-96wf-qxcg-2822) |                | Medium   | 2.3.2              | Two first users could both become admin                            |
| [GHSA-cf3r-q4jx-mj5x](https://github.com/advisories/GHSA-cf3r-q4jx-mj5x) |                | Medium   | 2.3.2              | Shared host passwords could be sent to another server              |
| [GHSA-r9gw-3w87-mhh7](https://github.com/advisories/GHSA-r9gw-3w87-mhh7) | CVE-2026-45745 | High     | 2.1.0              | Desktop app accepted bad certificates                              |
| [GHSA-c2g2-hqgq-6w9v](https://github.com/advisories/GHSA-c2g2-hqgq-6w9v) | CVE-2026-42454 | Critical | 2.1.0              | Command injection in Docker container actions                      |
| [GHSA-vx59-rf9w-9jv8](https://github.com/advisories/GHSA-vx59-rf9w-9jv8) | CVE-2026-42452 | High     | 2.1.0              | A half finished TOTP login could reset backup codes                |
| [GHSA-rvg4-7vvq-9c2w](https://github.com/advisories/GHSA-rvg4-7vvq-9c2w) | CVE-2026-42453 | High     | 2.1.0              | Command injection when packing or unpacking archives               |
| [GHSA-m3cv-5hgp-hv35](https://github.com/advisories/GHSA-m3cv-5hgp-hv35) | CVE-2026-22804 | High     | 1.10.0             | Stored cross site scripting in File Manager                        |
| [GHSA-92cw-877q-6r94](https://github.com/advisories/GHSA-92cw-877q-6r94) | CVE-2025-59951 | Critical | 1.7.0              | The Docker image let anyone skip the login                         |

## Thanks {#thanks}

These people found and reported security problems in Termix. Thank you.

[232-323](https://github.com/232-323), [456789TZ](https://github.com/456789TZ), [5ud0er](https://github.com/5ud0er), [avrlab233](https://github.com/avrlab233), [baradika](https://github.com/baradika), [CaptBoykin](https://github.com/CaptBoykin), [carfeii](https://github.com/carfeii), [DavidCarliez](https://github.com/DavidCarliez), [Dedal0](https://github.com/Dedal0), [eduardomozart](https://github.com/eduardomozart), [EQSTLab](https://github.com/EQSTLab), [fearlessgrizzly](https://github.com/fearlessgrizzly), [fy0lai](https://github.com/fy0lai), [GabrielHA12](https://github.com/GabrielHA12), [geo-chen](https://github.com/geo-chen), [jxnnyo](https://github.com/jxnnyo), [KadirArslan](https://github.com/KadirArslan), [LTLTLXEY](https://github.com/LTLTLXEY), [MultieWarning](https://github.com/MultieWarning), [peoplstar](https://github.com/peoplstar), [pyroxenites](https://github.com/pyroxenites), [q1uf3ng](https://github.com/q1uf3ng), [raman325](https://github.com/raman325), [s0g3king](https://github.com/s0g3king), [sec-reex](https://github.com/sec-reex), [sondt99](https://github.com/sondt99), [StephanSkai](https://github.com/StephanSkai), [Tzswz962](https://github.com/Tzswz962), [uforever](https://github.com/uforever), [vvbbnn00](https://github.com/vvbbnn00), [ya3raj](https://github.com/ya3raj), [zaara2004](https://github.com/zaara2004)

Want your name here? See [Report a problem](#report-a-problem).
