const sqliite3 = require('sqlite3').verbose();

/** DB ファイルを生成 or 取得する */
const db = new sqliite3.Database('./app/db/sqlite3-database.db');

/** DB の初期化処理 */
const init = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS user (
      uid     INTEGER  PRIMARY KEY,
      name   TEXT,
      wallet INTEGER
    );
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS item (
      jan    INTEGER  PRIMARY KEY,
      name   TEXT,
      price  INTEGER,
      amount INTEGER,
      img    TEXT
    );
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS hist (
      id    INTEGER  PRIMARY KEY  AUTOINCREMENT,
      jan   INTEGER,
      uid   INTEGER,
      date  TEXT
    );
  `);
};

module.exports = {
  db: db,
  init: init
};
