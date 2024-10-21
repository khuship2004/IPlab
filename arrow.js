// Importing 'readline' to get user input from the terminal
const readline = require('readline');

// Creating an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arrow function to calculate factorial
const factorial = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// Arrow function to calculate Fibonacci
const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Asking for input for factorial
rl.question("Enter a number for factorial calculation: ", (num1) => {
    num1 = parseInt(num1);
    console.log(`Factorial of ${num1}: `, factorial(num1));

    // Asking for input for Fibonacci after factorial is done
    rl.question("Enter a number for fibonacci calculation: ", (num2) => {
        num2 = parseInt(num2);
        console.log(`Fibonacci of ${num2}: `, fibonacci(num2));
        rl.close();  // Closing the readline interface
    });
});


/*
// Importing 'readline' to get user input from the terminal
const readline = require('readline');

// Creating an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arrow functions for basic operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Division by zero is not allowed");

// Function to get user inputs and perform the calculation
rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
        rl.question("Enter operation (+, -, *, /): ", (operation) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;

            // Using switch case to perform the operation
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

            // Displaying the result
            console.log(`Result: ${result}`);
            rl.close();  // Closing the readline interface
        });
    });
});
*/