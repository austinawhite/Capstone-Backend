import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
dotenv.config();

const db = new Pool({
  user: "postgres",
  password: "abc123",
  host: "localhost",
  port: 5432,
  database: "Capstone",
  ssl: false,
});

export default db;
