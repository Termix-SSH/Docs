---
title: "Security Center"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/security-center"
description: "Audit SSH keys, rotate them and scan hosts for known vulnerabilities over SSH."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Security-Center/edit/main/docs/index.md"
plugin_id: "security-center"
plugin_version: "1.0.0"
plugin_latest: true
---
Security Center audits the SSH keys on your hosts, helps you rotate them, and scans installed packages for known vulnerabilities.

Termix reads each host over SSH, the same way the terminal does. Nothing is installed on the host by this plugin.

## Set up a host

1. Open the host in Manage and turn on Security Center.
2. Make sure the SSH user can run `sudo` without a password, or log in as root. Without root, Security Center only sees what the login user can read, and tells you so.
3. Save. Open the host's menu and pick Security.

## Keys

The Keys view lists three kinds of keys.

- Authorized keys: every key in the `authorized_keys` files of every user on the host, with its type, size, fingerprint and any options like `from=` or `command=`. Keys that match a key credential you saved in Termix, or the key Termix logs in with, are marked as known. Other keys show as not in Termix.
- Host keys: the keys sshd shows to clients.
- Private keys: private key files in users' `.ssh` folders. Termix only checks whether a passphrase protects each file. The private key itself is never sent anywhere.

If a key is also accepted on other watched hosts, the list says so.

## Findings

The Overview shows a score from 0 to 100 and every finding, worst first.

- DSA keys, RSA keys smaller than your limit (3072 bits by default)
- Private keys without a passphrase, or readable by other users
- `authorized_keys` files or `.ssh` folders that other users can write to
- Keys files not changed in a number of days you choose (off by default)
- Keys not saved in Termix
- A key for root with no `from=` or `command=` limit
- sshd settings: root login with a password, password logins, empty passwords and weak ciphers, key exchange or MACs

Findings come from `sshd -T`, which needs root. Without root, Security Center reads `sshd_config` instead, which may miss settings from included files.

## Rotate and remove keys

These need the Rotate and remove keys permission, manage access to the host and a host that is not set to read only.

Rotate login key replaces the key Termix uses to log in to the host. Termix makes a new Ed25519 key, adds it next to the old one, checks that it can log in, saves it as a new credential, points the host at it, checks the normal login again and only then removes the old key from the host. If any step fails, the old key stays in place. Only the owner of the host can rotate its login key. If other hosts use the same old credential, they keep working.

Remove key deletes every line with that fingerprint from one `authorized_keys` file. A backup is kept next to the file as `authorized_keys.termix.bak`. Termix will not remove the key it logs in with. Rotate it instead.

New host keys copies the current host keys to `/var/lib/termix-security`, makes new ones, checks them with `sshd -t` and reloads sshd. If sshd does not accept the new keys, the old ones are put back. Every client, Termix included, sees a changed host key the next time it connects.

Every rotation and removal is written to the audit log.

## Vulnerabilities

Security Center lists the installed packages on the host and looks them up in [OSV](https://osv.dev). It supports Debian, Ubuntu, Alpine, Rocky Linux and AlmaLinux. Other systems show a note.

Each result shows the advisory, the package, the version that fixes it, a severity and a flag when the vulnerability is on the CISA known exploited list. Use the filters to show only exploited, fixable or critical ones. Ignore an advisory to hide it for that host. The ignore is kept, and you can show it again.

Some notes:

- Severity comes from the CVSS 3 score or the distribution's own rating. Advisories with no rating show as unrated.
- The first scan looks up many advisories and may take a few minutes to finish. Termix continues in the background until every advisory has a severity.
- A vulnerability with no fix yet counts much less toward the score than one you can fix by updating.
- Scans run every 24 hours by default. You can change that per host, or scan now.

### What leaves your server

A scan sends package names and versions to OSV (`api.osv.dev`), and once a day downloads the CISA known exploited list. Nothing else about the host is sent, and no host names or addresses. An admin can turn scanning off, or point the plugin at their own OSV mirror, in the plugin settings.

## Alerts

Alerts go to the user who first opened the host's Security tab, through the Alerts plugin and the channels they set up.

- New critical and high findings, and critical findings that clear
- One alert per scan for new critical vulnerabilities with a fix, and for any known exploited vulnerability

Medium and low findings are shown but do not alert. Turn alerts off per host in Settings.

## Host settings

- Security Center: turns the plugin on for the host.
- Use sudo: run the checks with passwordless sudo. On by default.
- Read only: blocks rotation and removal from Termix.

## Admin settings

- Scan for vulnerabilities: on by default.
- OSV address: `https://api.osv.dev` by default.
- Check known exploited list: on by default.

## Permissions

- Use Security Center: see keys, findings and vulnerabilities on hosts you can access.
- Scan for vulnerabilities: start a scan from Termix. Scheduled scans run either way.
- Rotate and remove keys: admins only by default.

## For other plugins

Security Center sends the events `security-center.vuln-found`, `security-center.key-weak` and `security-center.rotated` with the host id. Automations can start a flow from them. Operations Center shows a Security status, critical vulnerability count and key problem count for each host. Other plugins can ask the `security-center.access` service for the latest status of a host.
