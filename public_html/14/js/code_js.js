var tot = 258320000;
var employe = Number(prompt("How many employees do you want to distribute for the bonus?"));
var rep = tot / employe;
console.log("Each employee has a bonus of $ " + rep + " of Pesos");

var vlrhour = 45000;
var pay = 20000;
var win;
var workday = prompt("How many hours do I work in the day?");
win = workday * vlrhour - pay;
console.log("The electrician earned in the day a total of $ " + win);

var feet = 5280;
var inches = 12;
var centimeters = 2.54;
var convert;
convert = feet * inches * centimeters;
console.log("In a mile there are .... " + convert + " Centimeters ");
