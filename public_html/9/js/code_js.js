var number = Number(prompt("Enter the number to evaluate"));
var i;
var cont = 0;
for (i = 1; i <= number; i++) {
  if (number % i === 0) {
	cont++;
  }
}
if (cont <= 2) {
  console.log("The number is prime");
} else {
  console.log("The number is not prime");
}
