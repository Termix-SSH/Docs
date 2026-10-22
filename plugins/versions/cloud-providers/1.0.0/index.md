---
title: "Cloud Providers"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/cloud-providers/v/1.0.0"
description: "Add hosts from AWS, Azure, Google Cloud, DigitalOcean, Hetzner and other clouds, and keep them in sync."
hide_title: true
custom_edit_url: null
plugin_id: "cloud-providers"
plugin_version: "1.0.0"
plugin_latest: false
---
Cloud Providers turns the servers in your cloud accounts into Termix hosts. You can import the ones you pick, or sync a whole account on a timer.

## Supported clouds

AWS (EC2 and Lightsail), Microsoft Azure, Google Cloud, DigitalOcean, Hetzner Cloud, Linode (Akamai), Vultr, Oracle Cloud, Scaleway and UpCloud.

## Add an account

1. Open the Cloud tab from the sidebar and press Add account.
2. Pick the provider and give the account a name.
3. Fill in the keys for that cloud (see below). Use read only keys.
4. Choose how hosts are made, then save.
5. Press Test keys on the account to check them.

Keys are stored encrypted on the server and are never shown again. To replace them, edit the account and fill in the fields.

## Keys for each cloud

| Cloud        | What you need                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS          | An IAM access key with `ec2:DescribeInstances` and `ec2:DescribeRegions`, or `lightsail:GetInstances`. Leave regions empty for all of them. |
| Azure        | A service principal (tenant ID, client ID, client secret) with the Reader role on the subscription, and the subscription ID.                |
| Google Cloud | A service account JSON key with the Compute Viewer role.                                                                                    |
| DigitalOcean | A personal access token with read access.                                                                                                   |
| Hetzner      | A read only API token from the project.                                                                                                     |
| Linode       | A personal access token with read only access to Linodes.                                                                                   |
| Vultr        | An API key.                                                                                                                                 |
| Oracle Cloud | Tenancy and user OCIDs, the API key fingerprint and private key, and the regions to scan.                                                   |
| Scaleway     | A secret key. Zones are optional.                                                                                                           |
| UpCloud      | A user name and password for an API user.                                                                                                   |

## Import servers

Press Import servers on an account. Termix lists the servers it finds and which are already hosts. Tick the ones you want and press Import. Servers with no address are shown but cannot be chosen.

## Sync

Each account is either Manual or Automatic.

- Manual accounts only change when you press Import servers or Sync now.
- Automatic accounts sync on their own every few minutes. If a sync fails you get an alert.

A sync adds hosts for new servers and follows name and IP changes. Hosts are matched by the cloud's instance ID, so a host keeps its login, tags and settings when its IP changes. Sync never changes the SSH user, login, folder or port of a host after it is made. Tags that start with `cloud:` are managed by the plugin and your own tags are kept.

When a server is gone from the cloud, the account decides what happens to its host:

- Keep the host. This is the default.
- Tag the host as `cloud:missing`.
- Delete the host.

Deleting an account does not delete its hosts.

## Logins

New hosts use the account's default SSH user and default login. If the cloud knows the user (Azure and Lightsail do) that is used instead. To use another user for one server, add the tag `termix-user:name` to it in the cloud, or the label `termix-user` with the value `name` where the cloud uses key and value tags.

Hosts are made with the folder set on the account, or a folder named after the account.

## Address

Choose which address is used: public first then private, public only, or private only. Stopped servers often have no public address. The host keeps its last address until the server has one again.
