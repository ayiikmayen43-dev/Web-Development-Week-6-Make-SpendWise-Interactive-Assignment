# SpendWise 💰

SpendWise is a dynamic web application designed to help users track and manage their daily expenses efficiently. Built using HTML, CSS, and vanilla JavaScript, this project demonstrates core programming and frontend development concepts including DOM manipulation, event handling, array data structures, and conditional logic.

---

## 🚀 Weekly Improvements
During this iteration, several key enhancements were made to SpendWise:
* **Dynamic Expense Tracking:** Upgraded the application from static text to a fully interactive expense logger powered by JavaScript arrays.
* **UI/UX Polish:** Refined the layout and styling using modern CSS (`style.css`), ensuring clean forms, readable lists, and a responsive design.
* **Interactive Controls:** Added event listeners to seamlessly handle user input, form submissions, and deletion actions.

---

## 🧠 Core Technical Implementation

### 1. How Conditionals are Used
Conditional statements (`if`, `else if`, `else`) are implemented throughout the application to ensure data integrity and user feedback. For example:
* **Input Validation:** Checking whether the user has left input fields blank before adding an expense, preventing empty items from being logged.
* **Budget Status Alerts:** Evaluating the total expense amount to conditionally display warning messages if spending exceeds a specific threshold.

### 2. How Arrays are Used to Store Data
Arrays act as the primary data store for managing expenses in memory:
* An `expenses` array is initialized to hold multiple expense items (often represented as objects containing properties like description, amount, and category).
* Array methods such as `.push()` and `.filter()` are used dynamically to add new expenses or remove deleted items from the state.

### 3. How the DOM is Updated
JavaScript interacts directly with the Document Object Model (DOM) to keep the user interface synchronized with the data:
* **Element Selection:** Methods like `document.getElementById()` and `document.querySelector()` are used to target specific HTML elements.
* **Dynamic Rendering:** When an expense is added or removed, JavaScript clears the previous list container and loops through the array to generate and append updated HTML elements using `textContent` and inner templates, ensuring the screen always reflects the current data state.

### 4. How User Interactions are Handled Through Events
The application listens and responds to user actions using event handling:
* The `addEventListener()` method is attached to form submission and button click events.
* For form submissions, `e.preventDefault()` is used to stop the page from automatically reloading, allowing JavaScript to capture the input data smoothly.

---

## 🛠️ Challenges Encountered & Resolutions
* **Challenge:** Preventing users from submitting blank forms or invalid negative numbers, which broke the total calculations.
  * **Resolution:** Implemented conditional validation checks inside the submit event listener to intercept invalid input and alert the user.
* **Challenge:** Keeping the DOM synchronized with the array data when items were deleted.
  * **Resolution:** Created a dedicated render function that completely clears and rebuilds the list UI based on the updated array after any mutation.

---

## 📁 Repository Structure
* `index.html` — The main structure of the web app.
* `style.css` — The styling, layout, and visual design rules.
* `script.js` — The core JavaScript logic managing state, DOM manipulation, and events.
* `README.md` — Documentation for the project.
