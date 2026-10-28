---
title: "Databases"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/databases"
description: "Browse and edit MySQL, MariaDB, PostgreSQL and SQLite databases on your hosts from one tab."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Databases/edit/main/docs/index.md"
plugin_id: "databases"
plugin_version: "1.1.0"
plugin_latest: true
---
Databases lets you look at and edit MySQL, MariaDB, PostgreSQL and SQLite databases that run on your hosts, from one tab in Termix. Save a login, pick a table, then page through the rows, change them or run your own SQL.

It talks to your hosts over SSH, the same way the terminal does. It runs the database's own command line client on the host, so nothing is installed and no database port has to be opened to Termix.

## Set up a host

1. The host needs the client for your database: `mysql` (or `mariadb`), `psql` or `sqlite3`. The tab tells you when one is missing.
2. Open the host in Manage and turn on Databases.
3. Save. Open the host's menu and pick Databases.
4. Press Add login, fill in the details and press Test connection.

## Logins

A login is one way into one database server. It is saved for the host.

- MySQL / MariaDB and PostgreSQL: the address and port are where the server listens, as seen from the host. Leave the address empty to use the local socket. Leave the password empty for socket or peer logins.
- SQLite: enter the full path of the file on the host.
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

## SQL console

Type SQL and press Run or Ctrl+Enter. Results show up to 1000 rows. Recent queries are kept in your browser.

The console is read only for users who have connect access but not edit access to the host, and for read only logins. The read only mode is a safety guard that asks the database to refuse writes. A user who can run SQL can try to turn it off, so use a read only database user when it matters.

Client commands such as `\` lines in PostgreSQL, `.` lines in SQLite and `system` or `source` in MySQL are not allowed.

## Beside the terminal

The same view opens as a panel beside the host's SSH terminal, from the terminal edge or its tab menu. Turn it off for a host with Panel beside the terminal.

## Access

- Anyone with connect access to the host can list logins and read data.
- Adding, changing and deleting logins, editing rows and running SQL that can write need edit access to the host.
- Row changes and writing SQL are recorded in the audit log.

## Limits

- Linux, macOS and other hosts with bash. The SSH user needs a normal shell.
- MySQL shows a missing value as the word NULL, so a text value that is exactly NULL looks like a missing value in the console.
- Very large results are refused. Add a filter or a LIMIT.
- Only the first result of a script with several statements is shown.
- Users, grants, creating databases, dumps and imports are not managed here.
