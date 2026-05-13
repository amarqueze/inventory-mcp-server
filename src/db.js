const { Pool } = require('pg');

// Create a new pool instance. Connection details can be specified via environment variables
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'inventory_db',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};