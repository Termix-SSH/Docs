---
title: Database
description: Your own tables, on SQLite, PostgreSQL and MySQL.
---

# Database

A plugin owns its tables. You define them once in TypeScript, the CLI writes migrations for all three databases Termix supports, and you query them with [Drizzle](https://orm.drizzle.team/).

Needs the `db:own` capability.

## Define a table

```ts
// src/backend/tables.ts
import {
  defineTable,
  id,
  refUser,
  text,
  timestamp,
} from "@termix-ssh/plugin-sdk/db";

export const notes = defineTable(
  "notes",
  {
    id: id(),
    userId: refUser(),
    text: text().notNull(),
    createdAt: timestamp().notNull().defaultNow(),
  },
  { indexes: [{ name: "idx_p_hello_notes_user_id", columns: ["userId"] }] },
);

export const tables = [notes];
```

The table is stored as `p_<your id>_notes`, with dashes in the id turned into underscores. The prefix is added for you.

### Columns

| Builder                                        | Type                                                 |
| ---------------------------------------------- | ---------------------------------------------------- |
| `id()`                                         | Auto increment key.                                  |
| `text()`                                       | A string of any length. Can't be indexed.            |
| `varchar(n)`                                   | A string up to `n` (255 by default). Can be indexed. |
| `integer()`, `bigint()`, `real()`, `boolean()` | Numbers and true or false.                           |
| `timestamp()`                                  | A time, stored as text everywhere.                   |
| `json()`                                       | JSON, stored as text. Can't be indexed.              |
| `encryptedText()`                              | Text encrypted with the owning user's key.           |
| `refUser()`                                    | A user id. The row is deleted with the user.         |
| `refHost()`                                    | A host id. The row is deleted with the host.         |

Each takes `.notNull()`, `.unique()`, `.primaryKey()`, `.default(value)` and `.defaultNow()`.

Use `refUser()` on rows that belong to a person. Termix then includes them in that user's data export and deletes them with the account.

## Write migrations

```bash
npm run migrations
```

This compares `tables.ts` with `migrations/snapshot.json` and writes one SQL file per database:

```
migrations/sqlite/0002_add_pinned.sql
migrations/postgres/0002_add_pinned.sql
migrations/mysql/0002_add_pinned.sql
```

Read them before you commit. A rename or a type change is refused rather than guessed, since that decides what happens to data. Write those by hand.

Termix applies migrations before `activate` runs, and records each one with a checksum. **Never edit a migration that has shipped.** Termix would refuse to start your plugin. Add a new one.

A migration may only touch your own tables.

## Query

```ts
import { desc, eq } from "drizzle-orm";

export async function activate(ctx: PluginContext) {
  const notesTable = await ctx.db.define(notes);

  async function listNotes(userId: string) {
    const db = await ctx.db.client();
    return db
      .select()
      .from(notesTable)
      .where(eq(notesTable.userId, userId))
      .orderBy(desc(notesTable.id));
  }

  async function addNote(userId: string, text: string) {
    const db = await ctx.db.client();
    await db.insert(notesTable).values({ userId, text });
    await ctx.db.persist();
  }
}
```

Two rules for code that works on every database:

- **Call `ctx.db.persist()` after you write.** With SQLite the database lives in memory and only reaches disk when something asks. A write without it can be lost on restart. For frequent low value writes, `persist({ lazy: true })` lets the next save pick it up.
- **Don't use `.returning()`.** MySQL doesn't have it. Read a new row back by a key you chose.

`ctx.db.dialect` tells you which database is running, if you ever need it.

## Other storage

| What                       | Use                                   |
| -------------------------- | ------------------------------------- |
| A few small values         | `ctx.kv` (`kv:own`)                   |
| Your settings              | [`ctx.settings`](/develop/settings)   |
| Secrets for a user         | `ctx.secrets.get/set` (`secrets:own`) |
| A secret in your own table | `ctx.secrets.seal/unseal`             |
| Files                      | `ctx.files.dataDir()` (`files:own`)   |

## Sync to the desktop app

To sync a table to a linked desktop app, register it with `ctx.sync.registerEntity` and list its name under `contributes.syncEntities`. Rows match on a sync id column you add, deletes are found on their own, and you can map ids that point at other rows (like a host id) and mark encrypted fields. Read [Plugin-Workspaces](https://github.com/Termix-SSH/Plugin-Workspaces) for a full example.

The entity name is part of the sync protocol. Never rename it.
