const env = process.env;

const Pool = require("pg").Pool;
const pool = new Pool({
  user: env.POSTGRES_USER,
  host: env.POSTGRES_HOST,
  database: env.POSTGRES_DATABASE,
  password: env.POSTGRES_PASSWORD,
  port: env.POSTGRES_PORT,
});

module.exports = { pool };
