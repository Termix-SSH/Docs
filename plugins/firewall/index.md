---
title: "Firewall"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/firewall"
description: "Manage UFW, firewalld, nftables and iptables rules on your hosts over SSH, with lockout protection."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Firewall/edit/main/docs/index.md"
plugin_id: "firewall"
plugin_version: "1.0.0"
plugin_latest: true
---
Firewall lets you see and change the firewall on your hosts from Termix. It works with UFW, firewalld, nftables and iptables, and talks to the host over SSH, the same way the terminal does.

Before a change that could cut Termix off, it stops and tells you why. Risky changes also undo themselves on the host if you don't press Keep in time, so a bad rule can't lock you out for good.

## Set up a host

1. The SSH user must be root, or have passwordless sudo. Check by running `sudo -n true` in a terminal on the host. If it asks for a password, add a sudoers rule for the user.
2. Open the host in Manage and turn on Firewall.
3. Save. Open the host's menu and pick Firewall.
4. If the host has no firewall yet, press Install UFW (or firewalld or nftables). It works with apt, dnf, yum, pacman, apk and zypper. Installing never turns the firewall on.

## Which firewall Termix uses

Termix picks the firewall that is in charge of the host, in this order: UFW when it is on, firewalld when it runs, the Termix rules from an earlier session, UFW or firewalld when installed but off, then plain nftables, then iptables.

- UFW: Termix runs the `ufw` command for every change and reads the rules from `/etc/ufw/user.rules` and `user6.rules`. IPv4 and IPv6 copies of a rule show as one rule. Routed rules and rules with a source port show but can't be changed here. Rules with an app profile or logging can be deleted but not edited.
- firewalld: Rules live in zones. Termix shows the default zone and every active zone, with their services, ports and rich rules. Each change goes to the running config and the permanent one, so it stays after a reboot. Zone targets are set in the permanent config, then firewalld reloads. firewalld zones only filter incoming traffic.
- nftables and iptables: Termix never edits other tools' rules here. It keeps its own rules in a table `inet termix` (nftables) or in the chains `TERMIX-IN` and `TERMIX-OUT` (iptables), saved in `/etc/termix-firewall`. A small `termix-firewall` service loads them at boot. Rules from other tools, like Docker, show in the Raw view. A Termix deny always works, but a Termix allow can't open a port that another tool drops.

## Rules

Add a rule with Add rule. Pick allow, deny or reject, the direction, the protocol and the port. A port can be a single port, a list like `80,443` or a range like `8000-8100`. Lists and ranges need TCP or UDP. Leave From empty for anywhere, or give an address or a range like `10.0.0.0/8`. Limit (UFW only) allows a port but blocks an address that connects too often, which is handy for SSH.

The quick picks fill in common services like SSH, HTTPS, PostgreSQL and WireGuard.

The order matters on UFW, nftables and iptables: the first rule that matches wins. New rules go at the end. Editing a rule keeps its place where the firewall allows it.

## Defaults

Defaults decide what happens to traffic no rule matches. A common setup is to deny incoming, allow outgoing and allow only the ports you need. On firewalld this is the zone target. You can also change the default zone there.

## Turning the firewall on

When the firewall is off, the Rules view has a Turn on button. Allow SSH first is on by default and adds an allow rule for every SSH port Termix knows of: the host's SSH port in Termix and every port sshd listens on.

## The lockout check and the undo timer

Termix knows which port it uses for SSH and which address it connects from. Before each change it works out whether a new SSH connection from Termix would still get through. If not, it stops and shows the reason. You can still go ahead.

Some changes are risky even when the check passes: turning the firewall on, denying by default, changing or removing a rule for SSH, zone changes and rule sets. For these Termix first saves a copy of the firewall on the host and starts a timer there (60 seconds by default, Undo timer in the host settings). Then it makes the change and opens a new SSH connection to see if it still gets in. Press Keep to make the change stay, or Undo now to put it back. If you do nothing, the host puts the old firewall back by itself when the timer runs out. This runs on the host, so it still works when the change cut the connection.

While a change waits for Keep, other changes on that host wait too.

Undoing puts back the whole firewall config as it was before the change. Changes someone else made in the meantime are undone as well. On firewalld, runtime only changes from other tools are dropped too, since the undo reloads the permanent config.

Turn on Timer on every change in the host settings to use the timer for every change.

## Fail2ban

The Fail2ban view shows each jail with its failed and banned counts and the banned addresses. Unban an address, or ban one in a jail. Termix stops you from banning the address it connects from. If Fail2ban is missing you can install it from there.

## Rule sets

Open Firewall rule sets from the command palette. A rule set is a named list of rules, like Web server with 80 and 443. Pick the hosts it is for, then:

- Check hosts shows which rules each host is missing.
- Apply adds the missing rules to each host. It never removes rules. Each host gets the lockout check and the undo timer. When Termix can open a new SSH connection afterwards, the change is kept by itself. If it can't, the host undoes it.

With the Fleets plugin you can also apply a rule set to all hosts of a fleet.

## Alerts

The bell in the Firewall tab sends you an alert when the firewall on that host turns off, or when its rules change outside Termix. Termix checks every 5 minutes. Changes made through Termix don't alert.

## Panel and dashboard card

The firewall panel sits beside SSH terminals and shows the rules, any change waiting for Keep, and a box to allow a TCP port. Turn it off per host with Firewall panel, and pick its side and size in your settings.

The Firewalls dashboard card lists every host with Firewall on, whether its firewall is on, the rule count and Fail2ban bans.

With Host Metrics installed, this plugin also fills its Firewall manager card, so you can change rules from the metrics tab too.

## Access

Seeing the firewall needs connect access to the host. Changes need edit access. Read only in the host settings blocks every change from Termix.

## Limits

- Linux hosts only.
- UFW routed rules, firewalld policies, ipsets and direct rules are shown but not managed.
- The lockout check is a best guess. It can't see rules from other tools on nftables and iptables hosts, or which zone firewalld puts an interface in. The undo timer is the real safety net.
