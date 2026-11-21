---
title: "Databases"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/databases"
description: "Browse and edit MySQL, MariaDB, PostgreSQL, SQL Server, SQLite, Redis and MongoDB databases on your hosts from one tab."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Databases/edit/main/docs/index.md"
plugin_id: "databases"
plugin_version: "1.4.0"
plugin_latest: true
---
Databases lets you look at and edit MySQL, MariaDB, PostgreSQL, SQL Server, SQLite, Redis and MongoDB databases that run on your hosts, from one tab in Termix. Save a login, pick a table, then page through the rows, change them or run your own SQL.

It talks to your hosts over SSH, the same way the terminal does. It runs the database's own command line client on the host, so nothing is installed and no database port has to be opened to Termix.

## Set up a host

1. The host needs the client for your database: `mysql` (or `mariadb`), `psql`, `sqlcmd`, `sqlite3`, `redis-cli` or `mongosh`. The tab tells you when one is missing. For SQL Server, install `mssql-tools18`; Termix finds it in `/opt/mssql-tools18/bin`.
2. Open the host in Manage and turn on Databases.
3. Save. Open the host's menu and pick Databases.
4. Press Add login, fill in the details and press Test connection.

## Logins

A login is one way into one database server. It is saved for the host.

- MySQL / MariaDB and PostgreSQL: the address and port are where the server listens, as seen from the host. Leave the address empty to use the local socket. Leave the password empty for socket or peer logins.
- SQL Server: the address and port of the server. Termix trusts the server's certificate without checking it, like most self-hosted setups need.
- SQLite: enter the full path of the file on the host.
- Redis and Valkey: the address and port, the password, and an ACL user when you use one. The database number picks the database to open first.
- MongoDB: the address and port, a user and password. Users are looked up in the admin database first, then in the default database.
- Default database: the database to open first. Optional.
- Run as Linux user: runs the client as another user with `sudo -n -u`, for example `postgres` for peer login. This needs passwordless sudo for the SSH user.
- Read only: Termix blocks changes through this login. The database user's own rights still apply, so use a read only database user when you need a hard limit.

Passwords are sealed before they are stored. They are never sent back to the browser. They are given to the client in an environment variable, not on the command line.

## Browsing

Pick a table on the left. Data shows the rows, Structure shows the columns, types, keys and indexes.

- Click a column header to sort.
- The filter takes the part of a query after WHERE, for example `status = 'active' AND id > 10`. One condition only, no semicolons.
- Click a row to edit it. Press Add row to insert one. Only the fields you touch are sent. Use Set NULL to store NULL.
- Rows are found by the primary key. Tables without one, and views, are read only.
- Binary and generated columns cannot be edited here.
- CSV and JSON save the rows that are on screen.
- Drag the edge of the table list to make it wider. Right click a table, or press the copy button on its row, to copy its name.
- Row counts in the list are the database's own estimate for MySQL and PostgreSQL. Open a table to see the exact count.
- On Routines, Edit in SQL opens a procedure or function in the SQL console, ready to change and run. For MySQL it drops and creates it again.

## SQL console

Type SQL and press Run or Ctrl+Enter. Results show up to 1000 rows. Recent queries are kept in your browser, and Clear removes them.

The table list stays on the left. Click a table to add its name to the SQL.

Several SELECT, SHOW or EXPLAIN statements in one run each show their own result. Each one runs on its own connection, so this only happens when every statement just reads. Anything else runs as one script in one session.

Save keeps the script for this login. A new script is named by its first line, so start it with a `--` comment to name it. Open a saved script, change it and press Save to update it, or Save as new to keep both.

The console is read only for users who have connect access but not edit access to the host, and for read only logins. The read only mode is a safety guard that asks the database to refuse writes. A user who can run SQL can try to turn it off, so use a read only database user when it matters.

Client commands such as `\` lines in PostgreSQL, `.` lines in SQLite and `system` or `source` in MySQL are not allowed.

## Redis

Keys lists the keys of the chosen database with their type and time left before they expire. Type part of a name to filter, or a pattern like `user:*`, and press Enter. Load more fetches the next page.

Pick a key to see its value. Strings can be edited and saved. Hashes, lists, sets and sorted sets show up to 500 members, which can be added and removed. Streams are shown but not changed. Rename, Expiry and Delete work on any key.

Console runs one Redis command at a time, like `HGETALL user:1`. Use the arrow keys for earlier commands. Commands that block or take over the connection, like MONITOR and SUBSCRIBE, are refused. On a read only login, or without edit access, only commands that read can run.

## MongoDB

Pick a collection to see its documents, 50 at a time. The filter and sort take Extended JSON, for example `{"status": "active"}` and `{"_id": -1}`. Press Apply or Enter.

Insert document, and the edit and delete buttons on a document, change one document by its `_id`. Documents are Extended JSON, so an ObjectId is `{"$oid": "..."}` and a date is `{"$date": "..."}`. Numbers larger than 2^53 lose precision when shown and saved.

Shell runs mongosh code with `db` set to the chosen database and prints the last value. It needs edit access and a login that is not read only, because mongosh can do anything the host user can.

## Beside the terminal

The same view opens as a panel beside the host's SSH terminal, from the terminal edge or its tab menu. Turn it off for a host with Panel beside the terminal.

## Access

- Anyone with connect access to the host can list logins and read data.
- Adding, changing and deleting logins, editing rows and running SQL that can write need edit access to the host.
- Row changes, writing SQL, Redis changes and commands, and MongoDB changes and shell runs are recorded in the audit log.

## Limits

- Linux, macOS and other hosts with bash. The SSH user needs a normal shell.
- MySQL and SQL Server show a missing value as the word NULL, so a text value that is exactly NULL looks like a missing value in the console.
- Very large results are refused. Add a filter or a LIMIT.
- Only the first result of a script with several statements is shown.
- SQL Server console results show up to 8000 characters of a value.
- Users, grants, creating databases, dumps and imports are not managed here.
