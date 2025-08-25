let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car)

let fruit = ['apple', 'banana', 'orange']

console.log(fruit)

// operators - symbols
//1. Arithmetic operators
console.log(10 + 20) //addition
console.log(10-30) //subtraction
console.log(10*30) //multiplicvation
console.log(10/30) //division
console.log(10%3) //modulus

//2. Comparison operators > < >= <=
console.log(5 == "5") //true (loose equality - value)
console.log(5 === "5") //false (strict - value & data type)
console.log(5 != "5") //false (loose)
console.log(5 !== "5") //true (strict)

//Functions
/*
1. function declaration

function functionName(){
   statements
}

*/

function greet(){
    console.log('Hello, this is a message from a function declaration.');
}

greet();

/*
2. function expression
- store a function inside a variable

let variableName = function(){ statements }

*/

let hello = function(){ console.log("Hi again, this is a message from a function expression.") }
hello()

/*
3. arrow function

const variableName = () => { statements }

*/

const salutations = () => {
    //alert("Welcome back, Instructor Eddy.");
}

salutations();

//Parameters and Return Values
// parameters - input
// return -  output

function greetUser(name){
    console.log("Greetings, " + name + ". Welcome to the afternoon session.");
}

greetUser("John Doe");
greetUser("Jane Doe");
greetUser("Tom");
greetUser("Derrick");
greetUser("Diana");


const square = function(num) {
  return num * num;
};

console.log(square(100));

const PI = 3.14152;
let circumference = (radius) => {
    return 2 * PI * radius;
}

console.log(circumference(10));
console.log(circumference(11));
console.log(circumference(12));
console.log(circumference(13));

/*
DOM - Document Object Model
1. Selecting elements
getElementById()
*/

function manipulate(){
    //select items
    let body = document.getElementById('body');
    let intro = document.getElementById('intro');
    let ptext = document.getElementById('ptext');
    let btn = document.getElementById('btn');

    //begin manipulation
    body.style.backgroundColor = "blue";
    intro.textContent = "Heading has been altered."
    intro.style.color = "white"
    ptext.style.textDecoration = "underline"
    ptext.style.fontSize = "20px"
    let goodbye = document.createElement("p")
    goodbye.textContent = "This marks the end of our session. Thank you!"
    document.body.appendChild(goodbye);
    btn.remove();
}
