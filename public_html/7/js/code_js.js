var variable1 = prompt("Enter the first value");
var variable2 = prompt("Enter the second value");
var result;

result = variable1 ** variable2;
console.log(variable1 + " Raised to " + variable2 + " is iqual to: " + result);

result = variable2 ** variable1;
console.log(variable2 + " Raised to " + variable1 + " is iqual to: " + result);

result = variable1 * variable2;
console.log("The multiplication between: " + variable1 + " and " + variable2 + " is iqual to: " + result);

result = variable1 / variable2;
console.log("The division between: " + variable1 + " and " + variable2 + " is iqual to: " + result);

result = variable2 / variable1;
console.log("The division between: " + variable2 + " and " + variable1 + " is iqual to: " + result);

result = variable1 % variable2;
console.log("The module of division between: " + variable1 + " and " + variable2 + " is iqual to: " + result);