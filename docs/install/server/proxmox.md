# Proxmox

## Proxmox VE Helper-Scripts

[Link](https://community-scripts.github.io/ProxmoxVE/scripts?id=termix)

**Install/Update:**

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/ct/termix.sh)"
```

## Database

The helper script sets Termix up with SQLite, which needs no configuration.

If you want the data in PostgreSQL or MySQL instead, set `DATABASE_DIALECT` and `DATABASE_URL` inside the container and restart Termix. This is handy on Proxmox if you already run a database server elsewhere on the host. See [Database](/setup/database).

## Environment Variables

See [docs](/setup/environment-variables).

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
