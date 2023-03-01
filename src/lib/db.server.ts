import sqlite from 'sqlite3';

export const db = new sqlite.Database('db/links.db', (err: any) => {
  if (err) console.error(err);
});

db.run(
  'CREATE TABLE IF NOT EXISTS links (id STRING NOT NULL UNIQUE, url TEXT NOT NULL)',
  [],
  err => {
    if (err) console.error(err);
  }
);
