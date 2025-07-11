import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  max: 10,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
});

export const query = async (text, params) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("✅ SQL executed:", {
      duration: `${duration}ms`,
      rows: res.rowCount,
    });
    console.log("📝 Query:", text);
    return res;
  } catch (error) {
    console.error("❌ SQL failed:", { text, error: error.message });
    throw error;
  }
};

export const getClient = () => pool.connect();

export default pool;
