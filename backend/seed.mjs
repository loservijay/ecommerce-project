import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'ecomdb',
  password: 'password',
  port: 5432
});
async function seed() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        price NUMERIC,
        image TEXT
      );
    `);
    await pool.query(`
      INSERT INTO products (name, description, price, image)
      VALUES
        ('Laptop', 'High performance laptop', 1200, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80'),
        ('Headphones', 'Noise-cancelling headphones', 300, 'https://images.unsplash.com/photo-1585386959984-a415581b0563?auto=format&fit=crop&w=500&q=80'),
        ('Mouse', 'Wireless mouse', 50, 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80');
    `);
    console.log("✅ Seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding DB:", err);
  } finally {
    await pool.end();
  }
}
seed();
