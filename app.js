let num1 = 4;
let num2 = 4;
let operator = '-';


function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Test the operate function
console.log(operate(operator, num1, num2)); // Output: 8

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    // Check if denominator is not zero to avoid division by zero error
    if (b === 0) {
        return "Error: Division by zero!";
    } else {
        return a / b;
    }
}

// Test the functions
console.log("Addition:", add(5, 3)); 
console.log("Subtraction:", subtract(5, 3)); 
console.log("Multiplication:", multiply(5, 3)); 
console.log("Division:", divide(5, 3)); 
console.log("Division by zero:", divide(5,5 ));