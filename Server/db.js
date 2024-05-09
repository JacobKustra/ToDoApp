const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1206221",
  host: "localhost",
  port: 5432,
  database:"todoapp"
})

module.exports = pool;