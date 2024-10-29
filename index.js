// index.js
const fs = require('fs');

console.log("Hello World!");

const num1 = 10;
const num2 = 5;

function addTwoNumbers(a, b) {
    return a + b;
}

function subtractTwoNumbers(a, b) {
    return a - b;
}

function multiplyTwoNumbers(a, b) {
    return a * b;
}

function divideTwoNumbers(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Cannot divide by zero");
        return null;
    }
}

const result = addTwoNumbers(num1, num2);
const subtractionResult = subtractTwoNumbers(num1, num2);
const multiplicationResult = multiplyTwoNumbers(num1, num2);
const divisionResult = divideTwoNumbers(num1, num2);

console.log("The sum is:", result);
console.log("The difference is:", subtractionResult);
console.log("The product is:", multiplicationResult);
console.log("The quotient is:", divisionResult);

const output = `
The sum is: ${result}
The difference is: ${subtractionResult}
The product is: ${multiplicationResult}
The quotient is: ${divisionResult}
`;

fs.writeFile('output.txt', output, (err) => {
    if (err) throw err;
    console.log('The results have been saved to output.txt');
});