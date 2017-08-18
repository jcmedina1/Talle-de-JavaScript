/* variables globales */
var professionalprofile = {
    profile: ""
};

var datepersonal = {
    name: "", lastname: "", born: "", age: "", gender: "", email: "", phone: ""
};

var familyreference = {
    name: "", lastname: "", phone: ""
};

var workreference = {
    name: "", lastname: "", position: ""
};

var flag = true;

/* funciones */
function menu() {
    var opt = parseInt(prompt(
            "1.Personal information \n\
2.Family Reference \n\
3.Work reference \n\
4.Profession profile description \n\
5.Print resume \n\
0.exit the program"));
    return parseInt(opt);
}

function dp() {
    datepersonal.name = prompt("What's your name?");
    datepersonal.lastname = prompt("What is your last name?");
    datepersonal.born = prompt("Where were you born?");
    datepersonal.age = prompt("How old are you?");
    datepersonal.gender = prompt("What is your gender?");
    datepersonal.email = prompt("What is your e-mail?");
    datepersonal.phone = prompt("What is your phone?");
    evaluate();
}

function rf() {
    familyreference.name = prompt("Name of your family member");
    familyreference.lastname = prompt("last name of your family member");
    familyreference.phone = prompt("What is your family's telephone number");
    evaluate();
}

function rl() {
    workreference.name = prompt("Name of your referrer");
    workreference.lastname = prompt("last name of your referrer");
    workreference.position = prompt("Position of your job reference");
}


function pp() {
    professionalprofile.profile = prompt("Professional profile");
}

function print() {
    console.log("PERSONAL INFORMATION ");
    console.log(" ");
    console.log("name " + datepersonal.name);
    console.log("last name " + datepersonal.lastname);
    console.log("born " + datepersonal.born);
    console.log("age " + datepersonal.age);
    console.log("gender " + datepersonal.gender);
    console.log("email " + datepersonal.email);
    console.log("phone " + datepersonal.phone);
    console.log(" ");
    console.log("FAMILY REFERENCE");
    console.log(" ");
    console.log("name " + familyreference.name);
    console.log("last name " + familyreference.lastname);
    console.log("phone " + familyreference.phone);
    console.log(" ");
    console.log("WORK REFERENCE");
    console.log(" ");
    console.log("name " + workreference.name);
    console.log("last name " + workreference.lastname);
    console.log("position " + workreference.position);
    console.log(" ");
    console.log("PROFESSIONAL PROFILE");
    console.log(" ");
    console.log("profile " + professionalprofile.profile);
    console.log(" ");
}

function  evaluate() {
    var opt = menu();
    switch (opt) {
        case 1:
            dp();
            break;
        case 2:
            rf();
            break;
        case 3:
            rl();
            break;
        case 4:
            pp();
            break;
        case 5:
            print();
            break;
        default:
            flag = false;
            console.log("thank you for to use my aplication");
            break;
    }
}

/* programa */

while (flag === true) {
    evaluate();
}