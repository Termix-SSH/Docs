---
title: Usage statistics
description: What the Termix app sends when you share anonymous usage statistics.
---

# Usage statistics

The Termix app can send a short anonymous report once a day. It is off until you answer the question the app asks on first start. You can change your answer any time in Settings, Privacy and usage statistics.

The reports show which parts of the app are used and where it breaks, so the next version can fix them.

## What is sent

Every report has a random install id. It is made on the phone, kept in the secure store and not linked to you, your devices or any account.

| Event          | Fields                                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| app_heartbeat  | app version, platform (ios or android), OS major version, mode (standalone or linked), hosts and open sessions as a range, a range per feature opened |
| connect_result | transport (this phone or the server), result class (ok, network, auth, host key and so on), a range for how often                                     |
| crash          | the class of the error, like TypeError, and whether it was fatal                                                                                      |

Counts are sent as ranges: 0, 1, 2 to 5, 6 to 20, 21 to 100, and over 100. The app sends at most one heartbeat a day. The other events ride along with it, except a crash, which is sent when it happens.

PostHog adds a few fields of its own, like its library name and version and a random session id. The app turns off session replay, autocapture, screen tracking, feature flags, surveys and person profiles. It also asks PostHog not to look up a location from the connection.

## What is never sent

- Host names, usernames, IP addresses, ports and paths
- Commands, terminal output and file names
- Passwords, keys and tokens
- Server addresses
- Names of community plugins
- Error messages and stack traces

The app builds each event from a fixed list of fields and drops any event that has anything else. A test checks this.

## Your IP address

Like any web request, the connection reaches PostHog with your IP address. The app does not put it in the report and asks PostHog not to use it for a location. The project settings on the PostHog side decide whether it is stored.

## See the next report

Settings, Privacy and usage statistics, Next report shows the exact events the app would send right now.

## Turn it off

Turn off Share anonymous usage statistics. The app stops sending, drops anything waiting and forgets the counts it kept. Reset install id makes a new random id, so later reports look like a new install.

## Use your own PostHog project

The app uses the Termix PostHog project by default. To send to your own project in a custom build, set these as build variables before you build the app:

| Variable                    | What it does                                     |
| --------------------------- | ------------------------------------------------ |
| EXPO_PUBLIC_POSTHOG_API_KEY | Your project API key                             |
| EXPO_PUBLIC_POSTHOG_HOST    | Your PostHog host, like https://eu.i.posthog.com |

On EAS Build, add them as environment variables for the build profile.

The Usage Statistics plugin does the same for a Termix server, with its own settings.
