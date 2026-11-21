---
title: Advisories
description: How to report a security problem in Termix, every advisory so far, and the people who found them.
---

# Advisories

Every security problem that was found and fixed in Termix is listed here, with the people who found them.

## Report a problem

Please don't open a public issue for a security problem.

Use GitHub's Report a vulnerability button on the Security tab of the repo the problem is in. For the server, the desktop app or anything you are not sure about, use [Termix-SSH/Termix](https://github.com/Termix-SSH/Termix/security/advisories/new). Only you and the maintainers see the report.

Tell us what is affected, which version you tested and how to reproduce it. A short proof of concept helps a lot.

What is in scope and the safe harbor are in [SECURITY.md](https://github.com/Termix-SSH/.github/blob/main/SECURITY.md). The contact is also at [/.well-known/security.txt](https://termix.site/.well-known/security.txt), and every Termix server answers that path too.

## How fast we answer

| Step                                | Target                                    |
| ----------------------------------- | ----------------------------------------- |
| First reply                         | 3 days                                    |
| Confirmed or declined, with a score | 7 days                                    |
| Fix released for critical and high  | 30 days                                   |
| Fix released for medium and low     | 60 days                                   |
| Advisory published                  | When the fixed version is out             |
| Latest you may go public            | 90 days after the report, unless we agree |

Termix is run by a small team, so these are targets and not promises. If we are going to miss one, we say so in the advisory. We ask GitHub for a CVE for every confirmed problem.

## Published advisories

Update to at least the fixed version. The same list is on GitHub: [Termix-SSH/Termix advisories](https://github.com/Termix-SSH/Termix/security/advisories).

| Advisory                                                                 | CVE             | Severity | Fixed in           | What it was                                                                 |
| ------------------------------------------------------------------------ | --------------- | -------- | ------------------ | --------------------------------------------------------------------------- |
| [GHSA-h4fm-j6pg-g43x](https://github.com/advisories/GHSA-h4fm-j6pg-g43x) |                 | Low      | 26.11.3            | The SSH relay for linked servers did not ask connect policies               |
| [GHSA-v72h-7vx3-qqgr](https://github.com/advisories/GHSA-v72h-7vx3-qqgr) |                 | High     | 26.11.2            | A second factor setup session could manage plugins                          |
| [GHSA-2h7w-g8jj-275r](https://github.com/advisories/GHSA-2h7w-g8jj-275r) |                 | High     | 26.11.2            | A crafted username could write files anywhere through the database export   |
| [GHSA-g356-8j7f-gvx4](https://github.com/advisories/GHSA-g356-8j7f-gvx4) |                 | High     | SSH Terminal 1.4.1 | Opening a terminal in a folder could run commands hidden in the folder name |
| [GHSA-24pw-mffg-75q8](https://github.com/advisories/GHSA-24pw-mffg-75q8) |                 | Medium   | 26.11.2            | Removed admin rights kept working for a few minutes                         |
| [GHSA-8g3v-9q6f-mw88](https://github.com/advisories/GHSA-8g3v-9q6f-mw88) |                 | Medium   | 26.11.2            | Pages on the same site could act as a signed in user                        |
| [GHSA-fvgh-cfcg-rx3g](https://github.com/advisories/GHSA-fvgh-cfcg-rx3g) |                 | Medium   | 26.11.2            | The plugin SDK sudo helper put the sudo password in the remote command line |
| [GHSA-53h8-rg9m-4r6c](https://github.com/advisories/GHSA-53h8-rg9m-4r6c) |                 | Medium   | 26.11.2            | Desktop app login frame handed the session token to any parent page         |
| [GHSA-8q7r-m68w-rm3h](https://github.com/advisories/GHSA-8q7r-m68w-rm3h) |                 | Medium   | 26.11.2            | Known vulnerable dependencies in the 26.11.1 lockfile                       |
| [GHSA-w53f-cpmg-pxvx](https://github.com/advisories/GHSA-w53f-cpmg-pxvx) |                 | Medium   | 26.11.2            | Shared logins reached use level recipients in plain text                    |
| [GHSA-x332-vmg4-f8j6](https://github.com/advisories/GHSA-x332-vmg4-f8j6) |                 | Medium   | 26.11.2            | Host keys were accepted without pinning when nobody could confirm them      |
| [GHSA-64cc-43f9-c2v3](https://github.com/advisories/GHSA-64cc-43f9-c2v3) |                 | Medium   | 26.11.2            | DNS rebinding could reach private networks                                  |
| [GHSA-wvxx-mj5f-pxgm](https://github.com/advisories/GHSA-wvxx-mj5f-pxgm) |                 | Medium   | 26.11.2            | The host password endpoint skipped the hosts.view check                     |
| [GHSA-x6r3-r8pp-447v](https://github.com/advisories/GHSA-x6r3-r8pp-447v) |                 | Medium   | 26.11.2            | A revoked session kept control of an open terminal                          |
| [GHSA-q5v9-x2h3-7hv4](https://github.com/advisories/GHSA-q5v9-x2h3-7hv4) |                 | Medium   | SSH Terminal 1.4.1 | Startup snippet and host variables were typed again on every reattach       |
| [GHSA-892r-827c-jphx](https://github.com/advisories/GHSA-892r-827c-jphx) |                 | Low      | 26.11.2            | A second factor login token could finish more than one login                |
| [GHSA-vwmj-3m3c-h2r2](https://github.com/advisories/GHSA-vwmj-3m3c-h2r2) |                 | Low      | 26.11.2            | Usernames could be found through login and password reset                   |
| [GHSA-hh6h-r224-fpjh](https://github.com/advisories/GHSA-hh6h-r224-fpjh) |                 | Low      | Proxmox 1.3.1      | The stats stop route skipped the host and owner check                       |
| [GHSA-gxwg-9cqr-qj69](https://github.com/advisories/GHSA-gxwg-9cqr-qj69) | CVE-2026-129988 | Medium   | 26.11.1            | Second factor setup limits were not enforced on plugin WebSockets           |
| [GHSA-ccmp-2wpj-x458](https://github.com/advisories/GHSA-ccmp-2wpj-x458) |                 | High     | Web Endpoint 1.0.2 | Web Endpoint could expose internal services without a login                 |
| [GHSA-frx8-qqgg-7j7g](https://github.com/advisories/GHSA-frx8-qqgg-7j7g) |                 | High     | 26.10.0            | Desktop app: a website could get a session on the built in backend          |
| [GHSA-3q2m-5r5p-w45r](https://github.com/advisories/GHSA-3q2m-5r5p-w45r) |                 | High     | 26.10.0            | Automations could run another user's automation as that user                |
| [GHSA-fj9w-vcj9-66qh](https://github.com/advisories/GHSA-fj9w-vcj9-66qh) |                 | High     | 26.10.0            | Command injection in the automation run command step                        |
| [GHSA-hmv7-25x4-vp6w](https://github.com/advisories/GHSA-hmv7-25x4-vp6w) |                 | High     | 26.10.0            | A read only share guest could type into the shared session                  |
| [GHSA-rgf3-2q88-q4wp](https://github.com/advisories/GHSA-rgf3-2q88-q4wp) |                 | High     | 26.10.0            | File Manager sessions of other users could be ended or replaced             |
| [GHSA-v3vp-ffww-q7pw](https://github.com/advisories/GHSA-v3vp-ffww-q7pw) |                 | High     | 26.10.0            | Saved credentials could be read by the wrong user                           |
| [GHSA-6gr3-r7jx-wfmh](https://github.com/advisories/GHSA-6gr3-r7jx-wfmh) |                 | Low      | 26.10.0            | Second factor could be skipped with a forged device id                      |
| [GHSA-7j7m-85p4-2cpm](https://github.com/advisories/GHSA-7j7m-85p4-2cpm) |                 | Low      | 26.10.0            | Login rate limit could be dodged with a spoofed address                     |
| [GHSA-j7j4-82wh-3vj5](https://github.com/advisories/GHSA-j7j4-82wh-3vj5) |                 | Medium   | 26.10.0            | LDAPS did not check the server certificate                                  |
| [GHSA-r7x4-j6x8-jxrx](https://github.com/advisories/GHSA-r7x4-j6x8-jxrx) |                 | Medium   | 26.10.0            | Remote desktop tokens could be made for any target                          |
| [GHSA-wv2p-5jqw-9qf3](https://github.com/advisories/GHSA-wv2p-5jqw-9qf3) |                 | Medium   | 26.10.0            | Vault address was fetched without the private network check                 |
| [GHSA-8r8f-qh8q-5m4q](https://github.com/advisories/GHSA-8r8f-qh8q-5m4q) |                 | High     | 2.8.0              | Automation HTTP step could reach private networks                           |
| [GHSA-qchf-m33q-9gxv](https://github.com/advisories/GHSA-qchf-m33q-9gxv) |                 | Critical | 2.7.0              | A forged header could get an admin session                                  |
| [GHSA-773j-p4cp-q79p](https://github.com/advisories/GHSA-773j-p4cp-q79p) |                 | High     | 2.7.0              | Cross site scripting on the Vault login callback                            |
| [GHSA-9hjv-37ww-vqh9](https://github.com/advisories/GHSA-9hjv-37ww-vqh9) |                 | High     | 2.7.0              | Homepage ping and RSS could reach private networks                          |
| [GHSA-gv59-pvxw-mcqp](https://github.com/advisories/GHSA-gv59-pvxw-mcqp) |                 | Medium   | 2.7.0              | Tunnel status of other users could be read                                  |
| [GHSA-vx7c-4gxw-vr2h](https://github.com/advisories/GHSA-vx7c-4gxw-vr2h) | CVE-2026-79765  | Critical | 2.5.1              | Tunnels could use another user's saved host login                           |
| [GHSA-pr55-25gf-5f9v](https://github.com/advisories/GHSA-pr55-25gf-5f9v) | CVE-2026-79766  | Critical | 2.5.1              | Command injection in certificate requests                                   |
| [GHSA-mwr3-35ph-pjqg](https://github.com/advisories/GHSA-mwr3-35ph-pjqg) | CVE-2026-79764  | High     | 2.5.1              | Homepage proxy could reach private networks                                 |
| [GHSA-fmwq-x6v6-3q8w](https://github.com/advisories/GHSA-fmwq-x6v6-3q8w) |                 | High     | 2.5.1              | OIDC login could leak a session and trusted unchecked claims                |
| [GHSA-pcmm-36f6-36q6](https://github.com/advisories/GHSA-pcmm-36f6-36q6) |                 | High     | 2.5.1              | Docker sessions and share grants of other users could be touched            |
| [GHSA-685g-ccvv-6p8m](https://github.com/advisories/GHSA-685g-ccvv-6p8m) | CVE-2026-79762  | Medium   | 2.5.1              | A built in default key protected some users' saved logins                   |
| [GHSA-x9h9-f7jc-8jwj](https://github.com/advisories/GHSA-x9h9-f7jc-8jwj) | CVE-2026-79763  | Medium   | 2.5.1              | Second factor changes accepted the password alone                           |
| [GHSA-p2g3-2xq3-23gx](https://github.com/advisories/GHSA-p2g3-2xq3-23gx) | CVE-2026-79761  | Medium   | 2.5.1              | Command injection in the SSH key deploy check                               |
| [GHSA-6hx3-9mgq-h9fj](https://github.com/advisories/GHSA-6hx3-9mgq-h9fj) | CVE-2026-79760  | Medium   | 2.5.1              | Notification channel tests could reach private networks                     |
| [GHSA-w4cf-69fj-g96f](https://github.com/advisories/GHSA-w4cf-69fj-g96f) | CVE-2026-79759  | Medium   | 2.5.1              | Deploy to host showed other users' data                                     |
| [GHSA-372w-6f3h-vcm4](https://github.com/advisories/GHSA-372w-6f3h-vcm4) | CVE-2026-79758  | Medium   | 2.5.1              | Host status of other users could be read                                    |
| [GHSA-j6h8-mww6-pgw6](https://github.com/advisories/GHSA-j6h8-mww6-pgw6) | CVE-2026-53548  | Critical | 2.3.2              | SSH passwords of other users' hosts could be read                           |
| [GHSA-57gp-39c7-4g9r](https://github.com/advisories/GHSA-57gp-39c7-4g9r) | CVE-2026-53546  | Critical | 2.3.2              | Saved host logins could be read without access                              |
| [GHSA-5p86-jgr7-4hwx](https://github.com/advisories/GHSA-5p86-jgr7-4hwx) | CVE-2026-53545  | Critical | 2.3.2              | Command injection when stopping a tunnel                                    |
| [GHSA-xmjh-8cc2-qm49](https://github.com/advisories/GHSA-xmjh-8cc2-qm49) | CVE-2026-45748  | Critical | 2.3.2              | Command injection in tunnel forwarding                                      |
| [GHSA-37f4-wq95-pg33](https://github.com/advisories/GHSA-37f4-wq95-pg33) | CVE-2026-45744  | Critical | 2.3.2              | Command injection in File Manager paths                                     |
| [GHSA-v26q-rpv5-9m72](https://github.com/advisories/GHSA-v26q-rpv5-9m72) | CVE-2026-45750  | Critical | 2.3.2              | Command injection in File Manager                                           |
| [GHSA-cx2r-843c-vww8](https://github.com/advisories/GHSA-cx2r-843c-vww8) | CVE-2026-45746  | Critical | 2.3.2              | Sessions of other users could be taken over                                 |
| [GHSA-6r97-7wp3-2g3x](https://github.com/advisories/GHSA-6r97-7wp3-2g3x) | CVE-2026-53547  | High     | 2.3.2              | Global settings leaked data that allowed account takeover                   |
| [GHSA-rwj6-6vh7-45pv](https://github.com/advisories/GHSA-rwj6-6vh7-45pv) | CVE-2026-53542  | High     | 2.3.2              | Option injection when making archives in File Manager                       |
| [GHSA-x9pr-795g-rm5f](https://github.com/advisories/GHSA-x9pr-795g-rm5f) | CVE-2026-53549  | High     | 2.3.2              | Proxy test could reach private networks                                     |
| [GHSA-5fqh-77cr-jj5x](https://github.com/advisories/GHSA-5fqh-77cr-jj5x) | CVE-2026-45743  | High     | 2.3.2              | File Manager sessions of other users could be used                          |
| [GHSA-wqfw-rqj7-fv9m](https://github.com/advisories/GHSA-wqfw-rqj7-fv9m) | CVE-2026-45749  | High     | 2.3.2              | TOTP could be turned off with the password alone                            |
| [GHSA-ccm8-q457-6vjj](https://github.com/advisories/GHSA-ccm8-q457-6vjj) |                 | High     | 2.3.2              | The user list included password hashes                                      |
| [GHSA-96wf-qxcg-2822](https://github.com/advisories/GHSA-96wf-qxcg-2822) |                 | Medium   | 2.3.2              | Two first users could both become admin                                     |
| [GHSA-cf3r-q4jx-mj5x](https://github.com/advisories/GHSA-cf3r-q4jx-mj5x) |                 | Medium   | 2.3.2              | Shared host passwords could be sent to another server                       |
| [GHSA-r9gw-3w87-mhh7](https://github.com/advisories/GHSA-r9gw-3w87-mhh7) | CVE-2026-45745  | High     | 2.1.0              | Desktop app accepted bad certificates                                       |
| [GHSA-c2g2-hqgq-6w9v](https://github.com/advisories/GHSA-c2g2-hqgq-6w9v) | CVE-2026-42454  | Critical | 2.1.0              | Command injection in Docker container actions                               |
| [GHSA-vx59-rf9w-9jv8](https://github.com/advisories/GHSA-vx59-rf9w-9jv8) | CVE-2026-42452  | High     | 2.1.0              | A half finished TOTP login could reset backup codes                         |
| [GHSA-rvg4-7vvq-9c2w](https://github.com/advisories/GHSA-rvg4-7vvq-9c2w) | CVE-2026-42453  | High     | 2.1.0              | Command injection when packing or unpacking archives                        |
| [GHSA-m3cv-5hgp-hv35](https://github.com/advisories/GHSA-m3cv-5hgp-hv35) | CVE-2026-22804  | High     | 1.10.0             | Stored cross site scripting in File Manager                                 |
| [GHSA-92cw-877q-6r94](https://github.com/advisories/GHSA-92cw-877q-6r94) | CVE-2025-59951  | Critical | 1.7.0              | The Docker image let anyone skip the login                                  |

## Thanks {#thanks}

These people found and reported security problems in Termix. Thank you.

[0skater0](https://github.com/0skater0), [232-323](https://github.com/232-323), [456789TZ](https://github.com/456789TZ), [5ud0er](https://github.com/5ud0er), [avrlab233](https://github.com/avrlab233), [baradika](https://github.com/baradika), [CaptBoykin](https://github.com/CaptBoykin), [carfeii](https://github.com/carfeii), [CopilotSiS](https://github.com/CopilotSiS), [DavidCarliez](https://github.com/DavidCarliez), [Dedal0](https://github.com/Dedal0), [eduardomozart](https://github.com/eduardomozart), [EQSTLab](https://github.com/EQSTLab), [fearlessgrizzly](https://github.com/fearlessgrizzly), [fy0lai](https://github.com/fy0lai), [GabrielHA12](https://github.com/GabrielHA12), [geo-chen](https://github.com/geo-chen), [jxnnyo](https://github.com/jxnnyo), [KadirArslan](https://github.com/KadirArslan), [leediay153](https://github.com/leediay153), [Li-Lee](https://github.com/Li-Lee), [LTLTLXEY](https://github.com/LTLTLXEY), [MultieWarning](https://github.com/MultieWarning), [Neuro613](https://github.com/Neuro613), [peoplstar](https://github.com/peoplstar), [philodoxxx-jpg](https://github.com/philodoxxx-jpg), [pyroxenites](https://github.com/pyroxenites), [q1uf3ng](https://github.com/q1uf3ng), [raman325](https://github.com/raman325), [s0g3king](https://github.com/s0g3king), [sec-reex](https://github.com/sec-reex), [shapememory](https://github.com/shapememory), [sondt99](https://github.com/sondt99), [StephanSkai](https://github.com/StephanSkai), [Tzswz962](https://github.com/Tzswz962), [uforever](https://github.com/uforever), [vvbbnn00](https://github.com/vvbbnn00), [ya3raj](https://github.com/ya3raj), [zaara2004](https://github.com/zaara2004)

Want your name here? [Report a problem](#report-a-problem).
