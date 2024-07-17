let currentInput = ''; // Stores the current input value on the display

// Function to append a character (number or operator) to the display
function appendToDisplay(char) {
    currentInput += char; // Append the character to the current input
    updateDisplay(); // Update the display
}

// Function to clear the display
function clearDisplay() {
    currentInput = ''; // Reset current input to empty string
    updateDisplay(); // Update the display
}

// Function to evaluate and calculate the result
function calculate() {
    let result = eval(currentInput); // Use eval() to evaluate the expression
    document.getElementById('display').textContent = result; // Display the calculated result
    document.getElementById('equals').textContent = '='; // Display '=' sign after calculation
    currentInput = result.toString(); // Store the result as current input for further operations
}

// Function to update the display with current input
function updateDisplay() {
    document.getElementById('display').textContent = currentInput; // Update the display with current input
    document.getElementById('equals').textContent = ''; // Clear '=' sign when updating input
}
