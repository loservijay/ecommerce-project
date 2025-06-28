import express from "express";
import cors from "cors";
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'db',  // docker-compose service name
  database: 'ecomdb',
  password: 'password',
  port: 5432
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 9000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

