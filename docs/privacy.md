---
title: Privacy
description: What Termix sends about how it is used, and how to turn it off.
---

# Privacy

Termix can send short anonymous usage reports so we can see which parts are used and where things break. The server and desktop app send them through a plugin. The mobile app sends its own. Neither ever sends host names, usernames, commands or passwords.

The [privacy policy](/privacy-policy) covers the mobile app on the App Store and Google Play.

## Server and desktop app

The [Usage Statistics](/plugins/telemetry) plugin sends one report a day with the Termix version, platform info, how often each kind of tab was opened and which plugins are on. It ships with the standard Docker image and the desktop app and is on by default. Admins can turn it off during first-run setup, in Settings, Usage Statistics, or with `ENABLE_TELEMETRY=false`. Preview report shows exactly what the next one contains. See the [plugin page](/plugins/telemetry) for every field.

## Mobile app

The mobile app (2.0.0 and newer) sends a short report once a day. It is off until you answer the question the app asks on first start. You can change your answer any time in Settings, Privacy and usage statistics.

### What is sent

Every report has a random install id. It is made on the phone, kept in the secure store and not linked to you, your devices or any account.

| Event          | Fields                                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| app_heartbeat  | app version, platform (ios or android), OS major version, mode (standalone or linked), hosts and open sessions as a range, a range per feature opened |
| connect_result | transport (this phone or the server), result class (ok, network, auth, host key and so on), a range for how often                                     |
| crash          | the class of the error, like TypeError, and whether it was fatal                                                                                      |

Counts are sent as ranges: 0, 1, 2 to 5, 6 to 20, 21 to 100, and over 100. The app sends at most one heartbeat a day. The other events ride along with it, except a crash, which is sent when it happens.

PostHog adds a few fields of its own, like its library name and version and a random session id. The app turns off session replay, autocapture, screen tracking, feature flags, surveys and person profiles. It also asks PostHog not to look up a location from the connection.

### What is never sent

- Host names, usernames, IP addresses, ports and paths
- Commands, terminal output and file names
- Passwords, keys and tokens
- Server addresses
- Names of community plugins
- Error messages and stack traces

The app builds each event from a fixed list of fields and drops any event that has anything else. A test checks this.

### Your IP address

Like any web request, the connection reaches PostHog with your IP address. The app does not put it in the report and asks PostHog not to use it for a location. The project settings on the PostHog side decide whether it is stored.

### See the next report

Settings, Privacy and usage statistics, Next report shows the exact events the app would send right now.

### Turn it off

Turn off Share anonymous usage statistics. The app stops sending, drops anything waiting and forgets the counts it kept. Reset install id makes a new random id, so later reports look like a new install.

### Use your own PostHog project

The app uses the Termix PostHog project by default. To send to your own project in a custom build, set these as build variables before you build the app:

| Variable                    | What it does                                     |
| --------------------------- | ------------------------------------------------ |
| EXPO_PUBLIC_POSTHOG_API_KEY | Your project API key                             |
| EXPO_PUBLIC_POSTHOG_HOST    | Your PostHog host, like https://eu.i.posthog.com |

On EAS Build, add them as environment variables for the build profile.

The Usage Statistics plugin does the same for a Termix server, with its own settings.
