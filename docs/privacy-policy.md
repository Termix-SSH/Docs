---
title: Privacy policy
description: Privacy policy for the Termix mobile app on the App Store and Google Play.
---

# Privacy policy

This policy covers the Termix mobile app for iOS and Android ("the app"). The app is free and open source, made by Luke Gustafson. The source code is on [GitHub](https://github.com/Termix-SSH/Mobile).

In short: your hosts, logins and sessions stay on your phone or go to servers you choose. The app only sends anonymous usage statistics to us if you say yes, and you can turn that off any time.

## Your data stays with you

- Hosts, logins, keys, passwords, snippets and settings are saved on your phone in an encrypted database. The key is kept in the phone's secure storage.
- If you link the app to a Termix server, this data is synced with that server. You run that server or someone you trust does. We never see it.
- When you connect to a host, the app talks to that host directly or through your Termix server. Commands, terminal output and files go only there.
- We do not run any server that stores your data, and we have no user accounts.
- Android backups of app data are turned off.

## Anonymous usage statistics

The app can send a short anonymous report once a day so we can see which parts are used and where things break. It is off until you answer the question the app asks on first start. You can change your answer any time in Settings, Privacy and usage statistics.

If you say yes, the app sends:

- A random install id made on your phone. It is not linked to you, your device or any account. You can reset it in Settings.
- App version, platform (iOS or Android) and OS major version
- Whether the app is used alone or linked to a server
- Rough counts, like how many hosts you have and how often each built in feature was opened, sent as ranges (0, 1, 2 to 5 and so on)
- The result class of connections, like ok, network or auth failure
- The type of an error when the app crashes, like TypeError, and whether it was fatal

It never sends host names, usernames, IP addresses of your hosts, ports, paths, commands, terminal output, file names, passwords, keys, tokens, server addresses, error messages or stack traces.

Reports go to [PostHog](https://posthog.com/privacy), hosted in the United States. Like any web request, PostHog sees your IP address when the report arrives. The app asks PostHog not to use it for a location and turns off session replay, screen tracking and person profiles.

If you turn it off, the app stops sending and deletes anything it had waiting.

## Permissions

The app only asks for a permission when you use the feature that needs it.

- Camera: to scan a host QR code. Images are read on your phone and never saved or sent.
- Face ID or fingerprint: to unlock the app. Your phone checks it. The app never gets your biometric data.
- Local network (iOS): to check if your hosts are online and to wake them on your network.
- Notifications (Android): to show that sessions are running in the background.

The app does not use your location, contacts, microphone or photos, and it does not track you across other apps or websites.

## Other connections

- To check for a new version, the app asks GitHub for the latest release. Only the normal request reaches GitHub, like your IP address. See the [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- Plugin pages from your Termix server open inside the app and talk only to that server.

## Ads and selling data

The app has no ads. We do not sell or share data, and we do not use it for marketing.

## Deleting your data

Data on your phone is deleted when you remove the app. Data synced to a Termix server is controlled by whoever runs that server. Usage statistics have no link to you, so we cannot find your reports. Reset the install id in Settings if you want later reports to look like a new install.

## Children

The app is not made for children under 13 and does not knowingly collect information from them.

## Changes

We may update this policy when the app changes. The newest version is always on this page.

This policy is effective as of 2026-10-27.

## Contact

Questions about privacy: mail@termix.site
