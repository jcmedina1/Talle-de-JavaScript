var salary = prompt(" What is the employee's salary? ");
var rf = prompt(" What is the percentage of retention in the source? ");
var desc = ((salary * rf / 100));
var newsalary = salary - desc;
console.log("Your discount for source withholding is equal to $ " + desc);
console.log("The total payable from your salary is equal to $ " + newsalary);