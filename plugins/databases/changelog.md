---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/databases/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "databases"
plugin_version: "1.4.0"
plugin_latest: true
---
## 1.4.0

### Added

- SQL Server logins, through sqlcmd on the host. Tables, views, routines, rows and the SQL console work like the other SQL databases
- Redis and Valkey logins, through redis-cli on the host. Browse and filter keys, see and edit strings, hashes, lists, sets and sorted sets, read streams, set expiry, rename and delete keys, and run commands in a console
- MongoDB logins, through mongosh on the host. Browse collections, find documents with a filter and sort, insert, edit and delete documents, see indexes, and run mongosh code in a shell
- The table list can be made wider by dragging its edge
- Copy a table name from its row, or by right clicking it
- The table list shows in the SQL tab too, and clicking a table adds its name to the SQL
- Row counts from MySQL and Postgres are marked as estimates, and the exact count shows once a table is opened
- Edit in SQL opens a procedure or function in the SQL tab, ready to change and run
- Saved scripts can be opened, changed and saved again, or saved as a new script
- Clear the recent queries
- Several SELECT statements in one run show one result each

## 1.3.0

### Changed

- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it

## 1.2.0

### Added

- See saved database logins across hosts and check that one still works through Termix actions
- Other plugins, like Backups, can use the saved logins of a host

### Changed

- Needs Termix 26.11.1 or newer
- Pages use the Termix tile look, with lines between sections instead of separate boxes
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- The table structure view now shows a loading message instead of a blank space while it loads

## 1.1.1

### Added

- A Routines view lists stored procedures and functions with their code, for MySQL, MariaDB and PostgreSQL
- Save SQL scripts in the console and load them again with one click

### Fixed

- The table list and the data grid scroll again instead of cutting off after the first rows

## 1.1.0

### Added

- Databases panel beside an SSH terminal: the host's saved logins, tables and SQL console next to its shell

## 1.0.0

### Added

- A Databases tab for each host to browse and edit MySQL, MariaDB, PostgreSQL and SQLite over SSH
- Saved logins per host with sealed passwords, socket logins and running the client as another Linux user
- Table browser with paging, sorting, a filter and row add, edit and delete by primary key
- Structure view with columns, types, keys and indexes
- SQL console with history and CSV or JSON export
- Read only logins, and read only console sessions for users without edit access to the host
