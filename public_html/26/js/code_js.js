var flag = 0;
do{
function menu (){
var number = prompt (
"1.To make a sum \n\
2.Perform a subtraction \n\
3.Perform a multiplication \n\
4.Make a division \n\
0.exit the program");
return parseInt(number);
} ;
var result = menu();

function sum(){
    var number1 = prompt('Enter a number');
    var number2 = prompt('Enter another number');
    var r = parseInt(number1)+parseInt(number2);
    console.log("the answer is "+r);
} 
function res(){
    var number1 = prompt('Enter a number');
    var number2 = prompt('Enter another number');
    var r = parseInt(number1)-parseInt(number2);
    console.log("the answer is "+r);
}
function mul(){
    var number1 = prompt('Enter by multiplying');
    var number2 = prompt('Enter multiplier');
    var r = parseInt(number1)*parseInt(number2);
    console.log("the answer is "+r);
}
function div(){
    var number1 = prompt('Enter dividend');
    var number2 = prompt('Enter divider');
    var r = parseInt(number1)/parseInt(number2);
    console.log("the answer is "+r);
}
function exit(){
    flag = 1;
}
switch (result) {
    case 1:
        sum();
        break;
        case 2:
        res();
        break;
        case 3:
        mul();
        break;
        case 4:
        div();
        break;
        case 0:
        exit();
        break;
    default:   
        break;
} 
}while(flag === 0)
