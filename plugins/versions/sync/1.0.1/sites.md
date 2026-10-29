---
title: "sites"
sidebar_position: 60
slug: "/sync/v/1.0.1/sites"
custom_edit_url: null
plugin_id: "sync"
plugin_version: "1.0.1"
plugin_latest: false
---
A Termix server can manage other Termix servers as remote sites, for example one at home and one at work. The SSH hosts of each site become real hosts in your own host list, in a folder named after the site. You open them like any other host, and the terminal, files, Docker, tunnels and metrics all work. The remote server reaches the host. The master only passes the connection along.

## Set it up

1. On the remote server, go to your API key settings and make a key. Use a user that can see the hosts you want to manage.
2. On the master, open the Sync plugin's settings, find Remote sites and choose Add site.
3. Enter a name, the address of the remote server and the key. Pick the roles that should see the hosts, or leave it empty so only you do.

The hosts show up in the host list right away and are checked again every minute.

## How the hosts work

- Each site is a folder with a cloud icon. Folders on the remote are kept inside it. The folder is managed by the site, so it can't be renamed or deleted by hand.
- Removing a site removes its folder.
- They are read only here. Change a host on the site and the change arrives within a minute. A host removed there is removed here.
- A mirrored host shows the status the site reports, not a check from the master.
- Pins and order stay yours, like with any managed host.
- Only SSH hosts are mirrored. Remote desktop and other protocol hosts stay on their site.
- Renaming a site moves its folder. Changing the roles changes who can see the hosts.
- Removing a site removes its hosts here. The API key stays valid on the remote until you delete it there.

## Sessions and logins

Each mirrored host keeps its saved password or key, copied from the site and stored on the master encrypted with the owner's data key. The master then does the SSH login itself, but the connection is carried through the remote site, so the master never needs a route to the host. Jump hosts and port knocking are done by the remote.

Copying the logins needs the Import and export plugin on the remote, and the key's user needs its permission. Without it the hosts still show up, with no saved login, and Termix asks for the password when you open one. Hosts that were shared with the key's user have no readable login and are copied the same way.

If you remove a login on the site, it is replaced here within a minute.

## Permissions

What gets mirrored and opened comes from the API key's user on the remote. A host that user can't connect to doesn't show up. Only users with the sites permission can add and change sites. The hosts belong to the user who added the site.

The API key is saved encrypted on the master and is only ever sent to its own remote.

## Connecting sites that can't reach each other

Termix doesn't include a VPN. If the master can't reach a remote directly, connect them with the Tailscale or NetBird plugins, or any private network you already use, and use the private address as the site address.

## Requirements

The remote server must be on Termix 26.10.3 or newer, since that is the version that lets an API key open the relay socket.
