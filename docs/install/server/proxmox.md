---
title: Proxmox
description: Install Termix in a Proxmox LXC container.
---

# Proxmox

The [Proxmox VE Helper-Scripts](https://community-scripts.github.io/ProxmoxVE/scripts?id=termix) project has a script that makes an LXC container with Termix in it. It is run by the community, not by Termix.

Run this in the Proxmox host shell:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/ct/termix.sh)"
```

Run the same command again inside the container to update it.

The container uses SQLite, so there is nothing else to set up. Then do the [first run](/install/first-run).

## Settings

Set [environment variables](/configure/environment-variables) in the container the same way the script set up the service. To use a database server you already run, set `DATABASE_DIALECT` and `DATABASE_URL`. See [database](/configure/database).

If something in the script itself breaks, report it to the [helper scripts repo](https://github.com/community-scripts/ProxmoxVE).
