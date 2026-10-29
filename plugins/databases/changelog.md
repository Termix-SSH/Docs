---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/databases/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "databases"
plugin_version: "1.1.1"
plugin_latest: true
---
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
