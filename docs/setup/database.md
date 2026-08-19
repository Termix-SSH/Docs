# Database

Termix stores its data in SQLite by default. You do not have to set anything up, and for most installs it is the simplest/the best choice.

PostgreSQL and MySQL are also supported. Use one of those if you want the data to live on a database server you already run, or if you want to run more than one copy of Termix against the same data.

## Which one should you pick

Stay on SQLite if you run one Termix container, which is the usual case. It is the default, needs no extra service, and supports encryption of the whole database file.

Move to PostgreSQL or MySQL if you want to back up Termix with the rest of your databases, or you need several Termix processes reading the same data.

## Setting the engine

Environment variables do it. The first two are all most setups need. See [Environment Variables](/setup/environment-variables) for where they go.

| Variable            | Default  | What it does                                                          |
| ------------------- | -------- | --------------------------------------------------------------------- |
| `DATABASE_DIALECT`  | `sqlite` | Which engine to use: `sqlite`, `postgres`, or `mysql`                 |
| `DATABASE_URL`      | -        | Connection string. Required for postgres and mysql, unused for sqlite |
| `DATABASE_POOL_MAX` | `10`     | Most connections Termix opens at once                                 |
| `DATABASE_SSL`      | off      | TLS mode: `require`, `no-verify`, or `disable`                        |

### Connection strings

PostgreSQL accepts `postgres://` or `postgresql://`:

```env
DATABASE_DIALECT=postgres
DATABASE_URL=postgres://termix:yourpassword@db:5432/termix
```

MySQL accepts `mysql://` or `mariadb://`, so MariaDB works too:

```env
DATABASE_DIALECT=mysql
DATABASE_URL=mysql://termix:yourpassword@db:3306/termix
```

The scheme has to match the dialect you set. A `postgres://` URL with `DATABASE_DIALECT=mysql` is refused at startup with a message saying so, rather than failing somewhere deep in a driver later.

### TLS

`DATABASE_SSL` is off by default, which keeps existing installs working as they always have.

| Value       | What it does                                                                          |
| ----------- | ------------------------------------------------------------------------------------- |
| `require`   | Encrypt and check the server certificate                                              |
| `no-verify` | Encrypt but do not check the certificate. For a self-signed cert on a private network |
| `disable`   | No TLS. Same as leaving it unset                                                      |

`true` also works in place of `require`, and `false` in place of `disable`. Any other value stops Termix at startup rather than quietly falling back to no encryption.

Use `require` when the database is reachable over a network you do not fully control.

### Connection pool

`DATABASE_POOL_MAX` defaults to 10. Raise or lower it if you run several Termix instances against one database server and need to keep the total connection count under that server's own limit.

## Setting up PostgreSQL

Create a database and a user for Termix:

```sql
CREATE DATABASE termix;
CREATE USER termix WITH PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE termix TO termix;
```

Then point Termix at it. A Docker Compose setup looks like this:

```yaml
services:
  termix:
    image: ghcr.io/lukegus/termix:latest
    container_name: termix
    restart: unless-stopped
    ports:
      - '8080:8080'
    volumes:
      - termix-data:/app/data
    environment:
      PORT: '8080'
      DATABASE_DIALECT: postgres
      DATABASE_URL: postgres://termix:yourpassword@db:5432/termix
    depends_on:
      - db
    networks:
      - termix-net

  db:
    image: postgres:17
    container_name: termix-db
    restart: unless-stopped
    environment:
      POSTGRES_DB: termix
      POSTGRES_USER: termix
      POSTGRES_PASSWORD: yourpassword
    volumes:
      - termix-db:/var/lib/postgresql/data
    networks:
      - termix-net

volumes:
  termix-data:
  termix-db:

networks:
  termix-net:
    driver: bridge
```

Keep the `termix-data` volume even on Postgres. Termix still uses that directory for its encryption keys, SSL certificates, and session recordings.

## Setting up MySQL

Same idea:

```sql
CREATE DATABASE termix;
CREATE USER 'termix'@'%' IDENTIFIED BY 'yourpassword';
GRANT ALL PRIVILEGES ON termix.* TO 'termix'@'%';
FLUSH PRIVILEGES;
```

```env
DATABASE_DIALECT=mysql
DATABASE_URL=mysql://termix:yourpassword@db:3306/termix
```

## Tables are created for you

Termix creates and updates its own tables when it starts. You do not run any migration commands by hand, and upgrading Termix applies whatever schema changes the new version needs.

The database user does need permission to create and change tables, which is why the examples above grant full rights on the Termix database.

## Switching an existing install

:::warning
There is no built-in way to copy your data from SQLite into PostgreSQL or MySQL. Pointing an existing install at a new engine gives you an empty Termix, not your current one. Your SQLite data is still there, but Termix will not read it while another engine is configured.
:::

If you are already running on SQLite and want to move, the practical options are:

- Export your hosts, credentials, and snippets from the web app first, switch the engine, then import them into the fresh database. This carries the things most people care about, but not history like metrics, audit logs, or session recordings.
- Or use a third party tool such as pgloader to copy the SQLite file into PostgreSQL yourself.

Try it on a copy before doing it for real, and take a backup of your `db/data` directory first.

## Encryption

Your credentials, passwords, and SSH keys are encrypted before they are written, on every engine. Moving to PostgreSQL or MySQL does not put secrets in the clear.

`DB_FILE_ENCRYPTION` is different. That encrypts the whole SQLite database file and only applies to SQLite, because it works on a file. On PostgreSQL or MySQL, securing the server itself is your job: keep it on a private network, give Termix its own user, and turn on `DATABASE_SSL` if it is reachable over an untrusted network.

## The desktop app

The desktop app always uses SQLite. It runs its own backend and cannot ship a database server, so these settings do not apply to it. It can still sync with a server that uses PostgreSQL or MySQL, see [Remote Sync](/setup/remote-sync).

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
