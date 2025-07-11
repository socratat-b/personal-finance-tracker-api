// Ensure this file is located at: frontend/scripts/app.js

const API_URL = "/api/expenses";

async function loadExpenses() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`Network error: ${res.status}`);
    }

    const data = await res.json(); // Parse JSON response
    console.log("Fetched data:", data); // Debug log

    renderExpenses(data);
  } catch (err) {
    console.error("Error loading expenses:", err);
    document.getElementById(
      "expenses-container"
    ).innerHTML = `<p class="error">Could not load expenses. See console for details.</p>`;
  }
}

function renderExpenses(expenses) {
  const container = document.getElementById("expenses-container");
  container.innerHTML = ""; // Clear previous content

  if (!expenses.length) {
    container.textContent = "No expenses to show.";
    return;
  }

  const frag = document.createDocumentFragment();
  expenses.forEach((exp) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h1>List of Expenses</h1>
      <h3>${exp.description || "(No description)"}</h3>
      <p><strong>Amount:</strong> $${parseFloat(exp.amount).toFixed(2)}</p>
      <p><strong>Category:</strong> ${exp.category}</p>
      <p><strong>Date:</strong> ${new Date(exp.date).toLocaleDateString()}</p>
    `;
    frag.appendChild(card);
  });

  container.appendChild(frag);
}

document.addEventListener("DOMContentLoaded", loadExpenses);
