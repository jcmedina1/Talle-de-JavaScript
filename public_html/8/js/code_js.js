var number1 = Number(prompt("Enter the first number for the operation: "));
var number2 = Number(prompt("Enter the second number for the operation: "));
var result;

console.log("With the numbers you enter, the following operations were performed:");

result = number1 + number2;
console.log(number1 + " + " + number2 + " Is iqual to: " + result + " operation sum");

result = number1 - number2;
console.log(number1 + " - " + number2 + " Is iqual to: " + result + " operation subtraction");

result = number1 * number2;
console.log(number1 + " x " + number2 + " Is iqual to: " + result + " operation multiplication");

result = number1 / number2;
console.log(number1 + " ÷ " + number2 + " Is iqual to: " + result + " operation division");