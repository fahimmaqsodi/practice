//html was used for structure
// css was used for styling
// javascript was used for interactivity and functionality
// it was created in 10 days by brendan eich, john, and josh
// java and javascript are not the same thing, java is a programming language, javascript is a scripting language
// and javascript was named because 
// javascript have frameworks and libraries known as jquery, angular, and react
// strings are used to store text, strings are surrounded by quotes, strings can be single or double quotes, 
//strings can also be stored in variables, strings can also be stored in arrays, and strings can be stored in objects
//strings can also be stored in functions, strings can also be stored in classes, strings can also be stored in interfaces,
// strings can also be stored in enums, strings can also be stored in dictionaries, strings can also be stored in objects
// strings can also be stored in structs, strings can also be stored in unions, strings=sequence of alphabets and numbers
// var means that the variable can be reassigned



console.log('hello world');
a=2;
b=a+2;

console.log(b);

console.log("hello Afghanistan");
// variables

var a=2;
var b=a+2;

console.log(b);
 
fahim=35;
var fahim=35;
var firstNAme="fahim";
// var is a function scope
// let is a block scope
// 

console.log(fahim);
firstNAme=20;

{let age=35;}
let age=30;

console.log(age);

const pi=3.14;

console.log(pi);

// java is a function scope with parameters 
// javascript is 


// functions 
// 
function add(a,b){
 console.log(a+b);
    return a+b;
}
add(2,3);
// functions can also be stored in variables
// function parameters 

function great(){
    console.log("hello world22");
}
great();
// 
function great1(firstName) { 
    console.log("hello "+firstName);
    return "hello "+firstName;
}   
 great2("fahim");

 function great2(light) { 
    console.log("light is "+light);
}   
 great2("green");
 great2("red");
 great2("yellow");
 //
 function great4(firstName, lastname) { 
    console.log("hello "+firstName, lastname);
    return "hello "+firstName, lastname;
}   
 great4("fahim", "khan");

//
 function great5(firstName ,lastname) { 
    console.log("firstname:  " +firstName,"lastname:  " +lastname);
    return "firstname:  " +firstName,"lastname:  " +lastname;
}    
 great5("fahim  ", "sadat");
great5 ("fahim  ", "maq");
great5 ("fahim  ", "ahmad");
//
let name = ["ahmad", "fahim", "sadat"];
console.log("name: " + name);
//
let name1 = ["ahmad", "fahim", "sadat"];
console.log("name: " + name1[2], name1[1], name1[0]);

//
var person = ["fahim", 32, 5.7]
console.log(person);
console.log( person[0], person[1], person[2]);
console.log(person.length)

//
let name5 = ["ahmad", "fahim", "sadat", "plural", "red", "green", "blue", "yellow", "white", "pink",];
console.log("name: " + name5[4]);
for (let i = 0; i < name5.length; i++) 
 console.log(name5);
//console.log(name5.reverse());

//name5.push(123)
name5.push("ali")
name5[3] = "xyz"
 //name5.pop()
//name5.shift()
console.log(name5);

name5.splice(1, 0, "herat")
console.log(name5);
 //
 //let name6 = ["ahmad", "fahim", "sadat", "plural", "red", "green", "blue", "yellow", "white", "pink",];
// console.log("name: " + name6[4]);
  //console.log(name6);
  //console.break(name6)

// if else
age = 17;
if (age > 18) {
    console.log("you are eligible to vote");

} else if (age == 18) {
     console.log("you are also eligible to vote");
}
else { 
    console.log("you are not eligible to vote");
}
//

signal = "green";

if (signal == "red") {
    console.log("stop");
} else if (signal == "yellow") {
    console.log("slow down");
} else if (signal == "green") {
    console.log("move forward");
} else {
    console.log("invalid signal");
}
//
//let wath = prompt(" what is the weather? ")
 
// console.log(wath + weather);

weather = "rainy";

if (weather == "sunny") {
    console.log("take sunglasses");
}
else if (weather == "rainy") {
    console.log("take an umbrella");}

else if (weather == "snow") {
    console.log("wear a jacket");
}
else if (weather == "windy") {
    console.log("wear a hat");
}
 else if (weather == "cloudy") {
    console.log("take umbrella and sunglasses");
} else {
    console.log("stay inside");
}

//

//a = 40;
//b = 20;
/*function add(a, b) {
   return a + b;
}
function sub(a, b) {
    return a - b;
}
    */
 const adding = (a , b) => a +b;
  const subing = (a, b) => a - b;
 console.log(adding(2,3));
 console.log(subing(5, 7)); 

//


 
let person1 = {
    firstName : "fahim",
    lastName : "sadat",
    age : 100,
          
    
    }
console.log(person1);            
 

//
let name77 = ["ahmad", "fahim", "sadat", "plural", "red", "green", "blue",];
console.log("name: " + name77);
for (let i = 0; i < name77.length; i++) 
 console.log(name77);