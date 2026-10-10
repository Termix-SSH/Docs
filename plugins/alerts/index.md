---
title: "Alerts"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/alerts"
description: "One inbox for every alert in Termix, with delivery to webhooks, ntfy, Discord and email."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Alerts/edit/main/docs/index.md"
plugin_id: "alerts"
plugin_version: "1.0.0"
plugin_latest: true
---
Alerts is the one inbox for everything in Termix that wants your attention: an automation that failed, a certificate that didn't renew, a new Termix release. It can also send alerts on to Discord, ntfy, email or any webhook.

Other plugins send alerts. Alerts is where they land.

## The inbox

Open **Alerts** from the sidebar. Each alert has a severity (info, success, warning or critical), where it came from and when. Filter by unread, severity or source, and search.

New alerts also pop up while you use Termix. Pick which ones under **Alert popups** in **Settings**, **Alerts**: all, warnings and critical (the default), critical only, or none. They always land in the inbox either way.

Add the **Alert Feed** widget to your homepage to see the latest ones there.

## Channels

A channel is somewhere outside Termix an alert can go. Add them under **Channels**:

| Type        | You need                                                                            |
| ----------- | ----------------------------------------------------------------------------------- |
| **Webhook** | A URL. Termix sends a JSON body for each alert. You can set the method and headers. |
| **ntfy**    | A server URL and topic, plus a token if the topic is protected.                     |
| **Discord** | A webhook URL, from the Discord channel's settings under **Integrations**.          |
| **Email**   | One or more addresses. An admin has to set up SMTP first.                           |

**Send a test** checks a channel works.

Termix blocks sending to private network addresses by default. To send to something on your own network, like a self-hosted ntfy, an admin adds the host to **Allowed private notification hosts** in **Settings**, **General**, and you turn on **Allow a private network address** on the channel.

## Delivery rules

A rule picks which alerts go to which channels. Under **Delivery rules**, set:

- **Alerts to send**: `*` for everything, `automations.*` for everything from Automations, or one exact kind.
- **At least**: the lowest severity to send.
- **Send to**: one or more of your channels.

Without rules, alerts only show in the inbox.

## Email

An admin sets up the mail server in **Settings**, **Alerts**:

| Setting                              |                                                                |
| ------------------------------------ | -------------------------------------------------------------- |
| **SMTP server**                      | Leave it empty to turn email off.                              |
| **SMTP port**                        | 587 for STARTTLS, 465 for TLS.                                 |
| **Use TLS from the start**           | On for 465, off for 587.                                       |
| **SMTP username**, **SMTP password** | If the server needs a login. The password is stored encrypted. |
| **From address**                     | Who alerts come from.                                          |

## Termix announcements

With **Termix announcements** on, news from the Termix team, like security notices and new releases, shows up in the inbox. You only get news from after you joined, so a new account starts with a clean inbox. Some come with buttons, and an important one can also show as a card on screen until you close it. Delete one and it won't come back. Admins can turn announcements off.

## Keeping alerts

Alerts older than **Keep alerts for (days)**, 90 by default, are removed from every inbox.

## For plugin authors

Send an alert with `ctx.notify.send()` and the `notify:send` capability. Pick an audience, a severity and a kind, like `hello.thing_failed`. You never talk to this plugin directly, and your alerts work with or without it installed. See [backend](/develop/backend).
