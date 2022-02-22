const sqlite3 = require('sqlite3');
const database = new sqlite3.Database('./xo_ultimate.db',sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);