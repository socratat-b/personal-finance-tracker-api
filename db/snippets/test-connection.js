import { query } from "../index.js";

async function testConnection() {
  try {
    const result = await query(
      "SELECT NOW() as current_time, version() as postgres_version"
    );
    console.log("🎉 Database connected!");
    console.log("Time:", result.rows[0].current_time);
    process.exit(0);
  } catch (error) {
    console.error("💥 Connection failed:", error.message);
    process.exit(1);
  }
}

testConnection();
