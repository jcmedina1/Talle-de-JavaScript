var salary = Number(prompt("What is the basic legal minimum wage? "));
console.log("The value basic legal minimum wage $ " + salary);
var transp = Number(prompt("What is the regulatory transport subsidy?"));
console.log("The value of transport subsidy is equal to $ " + transp);
var porc = Number(prompt("What is the % retention to the regulatory source?"));
console.log("The value of your retention day is equal to % " + porc);
var daywork = Number(prompt("How many days do you work in the month?"));
while ((daywork > 30 || daywork < 0)) {
  console.log("Remember, The days can only be between 0 and 30");
  daywork = Number(prompt("How many days do you work in the month?"));
}
var salaryEmployee = Number(prompt("What is the employee's salary?"));
vlr_day = salaryEmployee / daywork;
console.log("The value of your working day is equal to $ " + vlr_day);
var newsalary = vlr_day * daywork;
console.log("The value of your salary without administration is $ " + newsalary);
if (newsalary <= (salary * 2)) {
  newsalary = newsalary + transp;
  console.log("Your salary for this month is $ " + newsalary);
} else if
		(newsalary >= salary * 4)
{
  newsalary = (newsalary - (newsalary * porc / 100));
  console.log("Your salary for this month is $ " + newsalary);
} else if ((newsalary > salary * 2) || (newsalary < salary * 4))
{
  console.log("Your salary for this month is $ " + newsalary);
}