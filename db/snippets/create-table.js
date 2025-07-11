import { query } from "../index.js";

async function createTables() {
  try {
    console.log("🚀 Creating tables step by step...\n");

    console.log("📝 Creating categories table...");
    await query(`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL UNIQUE,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Categories table created!");

    console.log("📝 Creating expenses table...");
    await query(`
      CREATE TABLE IF NOT EXISTS expenses (
        id SERIAL PRIMARY KEY,
        amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
        description VARCHAR(255) NOT NULL CHECK (length(description) >= 3),
        category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
        expense_date DATE NOT NULL DEFAULT CURRENT_DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Expenses table created!");

    console.log("📝 Adding categories...");
    const categories = [
      ["food", "Food and dining expenses"],
      ["transport", "Transportation and travel costs"],
      ["entertainment", "Entertainment and leisure activities"],
      ["bills", "Utilities and recurring bills"],
      ["shopping", "Shopping and retail purchases"],
      ["health", "Healthcare and medical expenses"],
      ["other", "Miscellaneous expenses"],
    ];

    for (const [name, description] of categories) {
      await query(
        `
        INSERT INTO categories (name, description)
        VALUES ($1, $2)
        ON CONFLICT (name) DO NOTHING
      `,
        [name, description]
      );
    }
    console.log("✅ Categories added!");

    // Verify
    const result = await query("SELECT COUNT(*) as count FROM categories");
    console.log(`📊 Total categories: ${result.rows[0].count}`);

    console.log("\n🎉 Database setup complete!");
  } catch (error) {
    console.error("💥 Error:", error.message);
    console.error("Full error:", error);
  }
}

createTables();
