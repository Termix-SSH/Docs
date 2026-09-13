# Proxmox

Termix is light. It idles at about 118 MB of RAM, and 1 core with 1 GB covers most setups. See [Benchmarks](/benchmarks) if you are picking container resources or running a larger fleet.

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
