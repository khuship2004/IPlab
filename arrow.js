const factorial = (n) => {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  
  // Fibonacci using arrow function (without ternary)
  const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };
const num1 = parseInt(prompt("Enter a number for factorial calculation: "));
console.log(`Factorial of ${num1}: `, factorial(num1));

const num2 = parseInt(prompt("Enter a number for fibonacci calculation: "));
console.log(`Fibonacci of ${num2}: `, fibonacci(num2));

// Basic calculator using arrow functions and switch case
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Division by zero is not allowed");

// Get user input for the operation and numbers
const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const operation = prompt("Enter operation (+, -, *, /): ");

// Using switch case to perform the operation
let result;
switch (operation) {
  case '+':
    result = add(num1, num2);
    break;
  case '-':
    result = subtract(num1, num2);
    break;
  case '*':
    result = multiply(num1, num2);
    break;
  case '/':
    result = divide(num1, num2);
    break;
  default:
    result = "Invalid operation!";
}

// Display the result
console.log(`Result: ${result}`);
