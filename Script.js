// Requirement 2: Work with Multiple Records (Array to store expenses)
let expenses = [];

// Select DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');
const budgetStatusDisplay = document.getElementById('budget-status');

// Requirement 5: Handle User Interactions (Event Listener for Form Submission)
expenseForm.addEventListener('submit', function (event) {
    // Prevent page reload
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    // Create a new expense record object
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount
    };

    // Add record to the array
    expenses.push(newExpense);

    // Reset form inputs
    expenseNameInput.value = '';
    expenseAmountInput.value = '';

    // Update the dashboard display
    updateDashboard();
});

// Function to handle deleting an expense
function deleteExpense(id) {
    // Filter out the deleted expense from the array
    expenses = expenses.filter(expense => expense.id !== id);
    updateDashboard();
}

// Main function to update UI and process data
function updateDashboard() {
    // Clear current list in the DOM to prepare for fresh loop rendering
    expenseList.innerHTML = '';

    let totalExpenses = 0;

    // Requirement 3: Process Data with Loops
    // Loop through the array to process records, calculate totals, and build DOM nodes
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        
        // Accumulate total amount
        totalExpenses += expense.amount;

        // Requirement 4: Update the Dashboard Dynamically (DOM Manipulation)
        const listItem = document.createElement('li');
        listItem.className = 'expense-item';

        listItem.innerHTML = `
            <div class="expense-info">
                <span class="expense-title">${expense.name}</span>
                <span class="expense-cost">$${expense.amount.toFixed(2)}</span>
            </div>
            <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
        `;

        expenseList.appendChild(listItem);
    }

    // Display total amount dynamically
    totalAmountDisplay.textContent = `$${totalExpenses.toFixed(2)}`;

    // Requirement 1: Implement Decision Making (Conditional evaluation of budget)
    evaluateBudget(totalExpenses);
}

// Conditional logic for budget evaluation feedback
function evaluateBudget(total) {
    if (total === 0) {
        budgetStatusDisplay.textContent = "No expenses logged.";
        budgetStatusDisplay.className = "status-normal";
    } else if (total < 100) {
        budgetStatusDisplay.textContent = "Budget looks healthy! 👍";
        budgetStatusDisplay.className = "status-normal";
    } else if (total >= 100 && total <= 300) {
        budgetStatusDisplay.textContent = "Moderate spending level. ⚠️";
        budgetStatusDisplay.className = "status-warning";
    } else {
        budgetStatusDisplay.textContent = "High spending alert! 🚨";
        budgetStatusDisplay.className = "status-danger";
    }
}
