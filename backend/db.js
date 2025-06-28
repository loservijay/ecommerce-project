const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI || "postgres://postgres:password@db:5433/ecomdb",
});

module.exports = pool;

