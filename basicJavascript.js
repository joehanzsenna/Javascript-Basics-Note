// JavaScript is the world's most popular programming language.
// JavaScript is the programming language of the Web.
// JavaScript is easy to learn.

// What Is JavaScript? JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.

// *Javacript Variables
// Variables are Containers for storing Data

// Automatically
// Using var
// Using let
// Using const

// Declaring a variable Automatically
// In this first example, x, y, and z are undeclared variables.
// They are automatically declared when first used:
// x = 15 ;
// x = 13;
// y = 10 ;
// z = x + y ;
// console.log(z);

// Declaring a variable using Var
// Note
// It is considered good programming practice to always declare variables before use.
// variable declare with var, can be re-declared and reassigned
// var x = 15;
// var x = 12;
// var y = 20;
// var z = x + y;
// console.log(z);

// Using let
// you can reasign using let, but you can't redeclare
// equation
// let x = 12;
// x = 9;
// x = 4;
// let y = 15;
// let z = x + y;
// console.log(z);

// Using const
// using const you can't reasign or redeclare a variable
// equation

// const a = 20;
// const b = 13;
// const c = a + b;
// console.log(c);

// When to Use var, let, or const?
// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

// JavaScript Identifiers
// All JavaScript variables must be identified with unique names.
// These unique names are called identifiers.
// Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
// The general rules for constructing names for variables (unique identifiers) are:
// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

// **JavaScript Data Types
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Object
// 8. Array

// 1. String
// string can have either double quotes or single quotes
// equation

// let X = "volvo";
// let Y = "Hello World";
// console.log(typeof X, X);
// console.log(typeof Y, Y);

// 2. Number
// equation

// let A = 34;
// console.log(typeof A, A);

// 3. Bigint
// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
// equation

// let bigNo = 1234567890123456789012345n;
// let bigNo2 = 1234567890123456789012345n;
// let bigNoResult = bigNo + bigNo2;
// console.log(bigNoResult);
// console.log(typeof bigNo, bigNo);

// 4. Boolean
// Booleans can only have two values: true or false.
// equation

// let boo = 5 == 6;
// let boo2 = 5 == 5;
// console.log(typeof boo, boo);
// console.log(typeof boo2, boo2);

// 5. Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
// equation

// let car;
// car = undefined;
// console.log(car);

// An empty value has nothing to do with undefined.
// An empty string has both a legal value and a type.
// equation

// let newcar2 = "";
// console.log(typeof newcar2);

// 6. Null
// The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
// equation

// let nothing = null;
// // let joe = 'Joe';
// // let nothing = joe
// console.log(nothing);
// console.log(typeof nothing);

// 7. Object
// Real Life Objects, Properties, and Methods
// In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop:
// All cars have the same properties, but the property values differ from car to car.
// All cars have the same methods, but the methods are performed at different times.

// const newCar = { type: "Toyota", model: "Camry", color: "Blue" };
// console.log(typeof newCar, newCar);

// we can also have spaces in our objects
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// Accessing Object Properties
// You can access object properties in two ways:
// objectName.propertyName;
// objectName["propertyName"];
// equation

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// const personsFirstname = person.firstName;
// console.log(personsFirstname);
// const personsLastName = person["lastName"];
// console.log(personsLastName);

// class-work

//1. write an object of two players properties in a football team of your choice, including their firstname, lastname, team, age, eyecolor, birthdate.

//2. then access the first players firstname, lastname, team and birthdate, and log it to the console using the objectName.propertyName
//3. do the same thing for the second player but access it's value using the square bracket

// Arrays
// An array is a special variable, which can hold more than one value:
// It is a common practice to declare arrays with the const keyword.
// Spaces and line breaks are not important. A declaration can span multiple lines:
// equation start

// const car1 = "Saab";
// const car2 = "Volvo";
// const car3 = "BMW";

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(typeof cars);

// const newCars = [];
// newCars[0] = "Mercedes Benz";
// newCars[1] = "Lexus";
// newCars[2] = "Porshe";
// newCars[3] = "Lamboghini";
// console.log(newCars);

// const carsLength = newCars.length;
// console.log(carsLength);

// const newArr = [
//   "Chelsea",
//   "Crystal-palace",
//   "Real-Madrid",
//   "Arsenal",
//   "EyimbaFc",
//   "Barcelona",
// ];

// console.log(newArr);
// const team2 = newArr[1];
// console.log(team2);
// const team1 = newArr[0];
// console.log(team1);

// equation end

// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const newArrToString = newArr.toString();
console.log(typeof newArrToString, newArrToString);

// difference between arrays and objects
// Arrays use numbers to access its "elements". In this example, newArray[0] returns firstIndex:
// equation start

// const newArray = ["firstIndex", "secondIndex", "thirdIndex"];
// let numberAccess = newArray[2];
// console.log(numberAccess);

// equation end
//  Objects use names to access its "members". In this example, person.firstName returns John:
// equation start

// const randomPerson = { firstName: "John", lastName: "Doe", age: 46 };
// let personAccess = randomPerson.firstName;
// let personAccess2 = randomPerson["lastName"];
// console.log(personAccess);
// console.log(personAccess2);

// equation end

// Accessing the First Array Element
// equation start
const anotherArray = ["firstIndex", "secondIndex", "thirdIndex"];
let firstArray = anotherArray[0];
console.log(firstArray);

// Accessing the Last Array Element
// equation start

let lastArray = anotherArray[anotherArray.length - 1];
console.log(lastArray);

//1, write an array of 8 different types of countries, then access each array using the index
// 2, replace the second and fourth items in the array with two new countries
// 3, log to the console the cuurent content we have in the array, and also the length of the array
// 4, access the first and the last array and then log it to the console

const countries = [
  "Nigeria",
  "Togo",
  "Ghana",
  "Niger",
  "France",
  "Russia",
  "America",
  "Korea",
];
// first task
console.log(countries);
const firstCountry = countries[0];
console.log(firstCountry);
const secondCountry = countries[1];
console.log(secondCountry);
const thirdCountry = countries[2];
console.log(thirdCountry);
const fourthCountry = countries[3];
console.log(fourthCountry);
const fifthCountry = countries[4];
console.log(fifthCountry);
const sixthCountry = countries[5];
console.log(sixthCountry);
const seventhCountry = countries[6];
console.log(seventhCountry);
const eightCountry = countries[7];
console.log(eightCountry);

// second task
countries[1] = "Canada";
countries[3] = "Japan";
console.log(countries);

// third task
console.log(countries);
const countriesLength = countries.length;
console.log(countriesLength);

// fourth task
const theFirstCountry = countries[0];
const theLastCountry = countries[countries.length - 1];
console.log(theFirstCountry);
console.log(theLastCountry);

// Useful Javascript array methods

// pop and push
// shift and unshift
// index of
// concat
// spread operators

// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.
// Popping items out of an array, or pushing items into an array.

// JavaScript Array pop()
// The pop() method removes the last element from an array:

const newFruits = ["Banana", "Orange", "Apple", "Mango"];
let poppedOutFruit = newFruits.pop();
console.log(poppedOutFruit);
console.log(newFruits);

poppedOutFruit = newFruits.pop();
console.log(poppedOutFruit);
console.log(newFruits);

// JavaScript Array push()
// The push() method adds a new element to an array (at the end):

const thisfruits = ["Banana", "Orange", "Apple", "Mango"];
let pushedInFruits = thisfruits.push("Kiwi");
console.log(pushedInFruits);
console.log(thisfruits);
pushedInFruits = thisfruits.push("Pineapple");
console.log(thisfruits);

// shift and unshift
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruitees = ["Banana", "Orange", "Apple", "Mango"];
fruitees.shift();
console.log(fruitees);
fruitees.shift();
console.log(fruitees);

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

const fruited = ["Banana", "Orange", "Apple", "Mango"];
fruited.unshift("Lemon");
console.log(fruited);
fruited.unshift("PineApple");
console.log(fruited);

// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments:

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myNewChildren = arr1.concat(arr2, arr3);
console.log(myNewChildren);

// The concat() method can also take strings as arguments: but it adds it just like your push, to the end of the array

const arry1 = ["Emil", "Tobias", "Linus"];
let myArry1Children = arry1.concat("Peter", "daniel");
console.log(myArry1Children);

// The Spread Operator
// The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
// This allows us to quickly copy all or parts of an existing array into another array:

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);

// The spread operator is often used to extract only what's needed from an array:
// The spread operator is often used in combination with destructuring.

const proteins = ["fishing", "meat", "egg", "chiken", "turkey", "beans"];

const [fish, meat, ...rest2] = proteins;

const addProteins = fish + " " + meat;
console.log(fish, meat);
console.log(addProteins);
console.log(rest2);

// We can use the spread operator with objects too:

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "blue",
};

const updateMyVehicle = {
  type: "car",
  model: "Explorer",
  year: 2021,
  color: "Black",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);

//Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyPhone. The resulting color is now Black.

// javascript string methods
// the length method
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let textLength = text.length;
console.log(textLength);

//javascript String Slice

let fruitText = "Apple, Banana, Kiwi";
let part = fruitText.slice(7, 13);
console.log(part);
part = fruitText.slice(7);
console.log(part);

part = fruitText.slice(-4);
console.log(part);

// let newText = `I would like to eat that ${part}`
// console.log(newText);

// JavaScript String toUpperCase()
let text1 = "hello world";
let text2 = text1.toUpperCase();
console.log(text2);

// JavaScript String toLowerCase()
text2 = text1.toLowerCase();
console.log(text2);

// JavaScript String indexOf
let text4 = "Hello world, welcome to the universe.";
let text4Result = text4.indexOf("universe");
console.log(text4Result);

// we can incoporate the indexof method with the slice to know where a particular number starts from

let text4Slice = text4.slice(28, 36);
console.log(text4Slice);

// ---JavaScript String concat()
// javascript concatenation is joining two strings together
// Overview. String Concatenation in JavaScript simply means appending one or more strings to the end of another string.

let textA = "Sea";
let textB = "Food";
// textA += textB;
// console.log(textA);
// console.log(textB);

// let textC = textA + textB
// console.log(textC);
// console.log(textA);

// the string concat method
let textC = textA.concat(" ", textB);
console.log(textC);

// Join three strings:

let txt1 = "Hello";
let txt2 = "world!";
let txt3 = "Have a nice day!";

let txtResult = txt1.concat(" ", txt2, " ", txt3);
console.log(txtResult);

// class or assignment
// class-work

// 1, create a string "Have you smiled today?" and assign it to a variable
// 2, create another string "Do that and release some stress" and assign it to a variable
// 3, concatenate the first string with the second string, and log it to the console.
// 4, create a new string, " be happy and infect others with your positive energy.", then join this new string to the previous two so we can have a full sentense...
// 5, using the indexOf, search for 'smiled' and 'Energy' in the whole string, then make it uppercase, then searche for 'infect' and make it lowercase... log to the console the total string...

// Javascript Math Operators
// Adding Numbers and Strings
// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.
let x = 10;
let y = 20;
let z = x + y;
console.log(z);

// If you add two strings, the result will be a string concatenation:
let xx = "10";
let yy = "20";
let zz = xx + yy;
console.log(zz);

let nx = 10;
let ny = 20;
let nz = "30";
let result = nx + ny + nz;
console.log(typeof result, result);

// Numeric Strings
// JavaScript strings can have numeric content:
let ix = 100; // x is a number
let iy = "100"; // y is a string

// JavaScript will try to convert strings to numbers in all numeric operations:

let px = "100";
let py = "10";
let pz = px / py;
console.log(typeof pz);

// multiplication
pz = px * py;
console.log(typeof pz, pz);

// subtraction
pz = px - py;
console.log(typeof pz, pz);

// division
pz = px / py;
console.log(typeof pz, pz);

// ---JavaScript Template Literals
// Back-Tics Syntax
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

let pText1 = `Hello World!`;
let pText2 = `He's often called "Johnny"`;
let pTxt = pText1 + " " + pText2;
console.log(pTxt);

// Multiline Strings
// Template literals allows multiline strings:
let pText3 = `The quick
brown fox
jumps over
the lazy dog`;

// we can't do this with our normal quotes

// Interpolation
// Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.
// ${...}

// Variable Substitutions
// Template literals allow variables in strings:

let firstName0 = "John";
let lastName0 = "Doe";
let welcomeText = "welcome";
let text5 = `${welcomeText} ${firstName0}, ${lastName0}!`;
console.log(text5);

// Expression Substitution
// Template literals allow expressions in strings:

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(1)}`;
console.log(total);

// JavaScript Arithmetic/Math Operators
// Arithmetic operators perform arithmetic on numbers (literals or variables).

// Addition +
// Substraction -
// Multiplication *
// Division /
// incremental ++
//  Decremental --
// Exponential **
// modulus(Remainder) %

const aa = 5;
const ab = 8;
// Addition +
let ac = aa + ab;
console.log(ac);

// Substraction -
ac = aa - ab;
console.log(ac);

// Multiplication *
ac = aa * ab;
console.log(ac);

// Division /
ac = ab / aa;
console.log(ac);

// incremental ++
let ad = 8;
ad++;
ad++;
ad++;
ad++;
ad++;
console.log(ad);

ad--;
ad--;
// ad --
console.log(ad);

// Exponentiation
// The exponentiation operator (**) raises the first operand to the power of the second operand.

let js = 10;
let jy = 3;
let jx = js ** 3;
console.log(jx);

// js ** jx produces the same result as Math.pow(x,y):

// modulus gives a remainder answer
jx = js % jy;
console.log(jx);

// Comparision Operators
// Greater than >
// Lesser than <
// Equal to ==
// Equal value and equal type ===
// !=	not equal
// !==	not equal value or not equal type
// >=	greater than or equal to
// <=	less than or equal to

const james = 19;
const daniel = 20;
// Lesser than <
let comResult = james < daniel;
console.log(comResult);

// Greater than >
comResult = james > daniel;
console.log(comResult);

// Equal to ==
comResult = james == daniel;
console.log(typeof comResult, comResult);

// Equal value and equal type ===
comResult = james === daniel;
console.log(comResult);

// !=	not equal
comResult = james != daniel;
console.log(comResult);

// !==	not equal value or not equal type
comResult = james !== daniel;
console.log(comResult);

// >=	greater than or equal to
comResult = james >= daniel;
console.log(comResult);

// <=	less than or equal to
comResult = james <= daniel;
console.log(comResult);

// Logical operators
// Logical and &&
// Logical or ||
// Logical not !

const rA = 5;
const rB = 9;
const rC = 2;
const rD = 14;

// Logical and &&
let rF = rA < 10 && rB > 10;
console.log(rF);

// Logical or ||
// note if one is correct using the logical or, the boolean will be true
rF = rA == rB || rA !== rC;
console.log(rF);

// Logical not !
rF = rA == rB;
console.log(rF);

// ------------------------------------------------------------------

// Conditional Statements
// Very often when you write code, you want to perform different actions for different decisions.
// You can use conditional statements in your code to do this.

// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
let hour = 18;

if (hour < 19) {
  greeting = "Good day";
  console.log(greeting);
}

// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.
if (hour > 19) {
  greeting = "Good day";
  console.log(greeting);
} else {
  greeting = "Good Night";
  console.log(greeting);
}

// The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.

if (hour > 19) {
  greeting = "Good day";
  console.log(greeting);
} else if (hour > 20) {
  greeting = "Good Night";
  console.log(greeting);
} else {
  greeting = "Good Bye";
  console.log(greeting);
}

// If else Ternary Operator
// simple if else using tenary

const aging = 26;
const beverage = aging >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

// Conditional chains
// The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if … else chain:

function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}

// JavaScript Switch Statement
// The switch statement is used to perform different actions based on different conditions.
// This is how it works:
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(day);
    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
    day = "Tuesday";
    console.log(day);
    break;
  case 3:
    day = "Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thursday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
}

// The break Keyword
// When JavaScript reaches a break keyword, it breaks out of the switch block.
// Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

// The default Keyword
// The default keyword specifies the code to run if there is no case match:
// The default case does not have to be the last case in a switch block:
let mx = 1;
switch (mx) {
  case 0:
    mxOutput = "Off";
    console.log(mxOutput);
    break;
  case 1:
    mxOutput = "On";
    console.log(mxOutput);
    break;
  default:
    mxOutput = "No value found";
    console.log(mxOutput);
}

// If default is not the last case in the switch block, remember to end the default case with a break.
let thisday = 0;
switch (thisday) {
  default:
    text = "Looking forward to the Weekend";
    console.log(text);
    break;
  case 6:
    text = "Today is Saturday";
    console.log(text);
    break;
  case 0:
    text = "Today is Sunday";
    console.log(text);
}

// Common Code Blocks
// Sometimes you will want different switch cases to use the same code.
// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:
let todaysDate = 6;
switch (todaysDate) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    console.log(text);
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    console.log(text);
    break;
  default:
    text = "Looking forward to the Weekend";
    console.log(text);
}

// class work
// 1 Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".

// 2, Write a switch statement to check students’ grades.  Your statements should fulfill the following conditions:
// 1. Grade A – Outstanding
// 2. Grade B – Excellent
// 3. Grade C – Very Good
// 4. Grade D – Good
// 5. Grade E – Satisfactory
// 6. others – Unrecognized

switch ("Banana") {
  case "Banana":
    msg = "Hello";
    console.log(msg);
    break;

  case "Apple":
    msg = "Welcome";
    console.log(msg);
    break;
}

// Loops
// Loops can execute a block of code a number of times.
// Loops are handy, if you want to run the same code over and over again, each time with a different value.
// Often this is the case when working with arrays:

let someCars = ["Honda", "Mercedes", "Toyota", "Mazda", "Mitsubishi", "Ford"];

let showScreen = document.getElementById("h1");
let text7 = "";
for (let i = 0; i < someCars.length; i++) {
  text7 += `<a> ${someCars[i]} </a>`;
  console.log(text7);
}
showScreen.innerHTML = text7;

// basic for loop

for (let i = 1; i < 10; i++) {
  console.log(i);
}

// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }
// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.

let newLoop = "";
for (let i = 0; i < 5; i++) {
  newLoop += "The number is now " + i + "<a>";
  console.log(newLoop);
}

// From the example above, you can read:
// Expression 1 sets a variable before the loop starts (let i = 0).
// Expression 2 defines the condition for the loop to run (i must be less than 5).
// Expression 3 increases a value (i++) each time the code block in the loop has been executed.

let someArr = [
  "zeroIndex",
  "firstIndex",
  "SecondIndex",
  "thirdIndex",
  "fourthIndex",
  "fifthIndex",
];
// let someArrText = '';
for (let i = 0, len = someArr.length, someArrText = ""; i < len; i++) {
  someArrText += someArr[i] + " <br> ";
  console.log(someArrText);
}

// Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).
// This is not always the case. JavaScript doesn't care. Expression 1 is optional.
// You can initiate many values in expression 1 (separated by comma)

// And you can omit expression 1 (like when your values are set before the loop starts):
let i = 2;
let len = someArr.length;
let text8 = "";
for (; i < len; i++) {
  text8 += someArr[i] + " <a> ";
  console.log(text8);
}

// Loop Scope
// another thing to look at on the loop scope

let j = 5; //global scope
for (let j = 0; j < 10; j++) {
  console.log(j); //local scope
}
console.log(j); //global scope

// JavaScript While Loop
// Loops can execute a block of code as long as a specified condition is true.
// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

// while (condition) {
//   // code block to be executed
// }
let text9 = "";
let m = 0;
while (m < 10 + 1) {
  text9 += " loop " + m;
  m++;
  console.log(text9);
}
console.log(text9);

// The Do While Loop
// do {
//   // code block to be executed
// } while (condition);
let doText = "";
p = 0;
do {
  doText += " The num " + p;
  p++;
  // console.log(doText);
} while (p < 10);
console.log(doText);

// Comparing For and While
// If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted.
// The loop in this example uses a for loop to collect the car names from the cars array:

let disCars1 = ["BMW", "Volvo", "Saab", "Ford"];
let q = 0;
let disText1 = " ";

for (; disCars1[q]; ) {
  disText1 += disCars1[q];
  q++;
}
console.log(disText1);

// The loop in this example uses a while loop to collect the car names from the cars array:

let disCars2 = ["BMW", "Volvo", "Saab", "Ford"];
let q2 = 0;
let disText2 = " ";

while (disCars2[q2]) {
  disText2 += disCars2[q2];
  q2++;
}
console.log(disText2);

// JavaScript Break and Continue

// The break statement "jumps out" of a loop.
// The continue statement "jumps over" one iteration in the loop.

// The Break Statement
// You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.
// The break statement can also be used to jump out of a loop:

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}

// The Continue Statement
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
// This example skips the value of 3:

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}

// ------------------------------------------------------------
// objects / functions / More Array Methods

// Objects
// Accessing Object Properties
// You can access object properties in two ways:

// objectName.propertyName;
// objectName["propertyName"];

// objects literal notation
// person.firstname + " is " + person.age + " years old.";

const personProp = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Adding New Properties
// You can add new properties to an existing object by simply giving it a value.

const personProp2 = {
  name: "John Doe",
  age: 30,
  address: "123 Main Street",
};

personProp2.nationality = "Nigerian";
console.log(personProp2);

// Deleting Properties
// The delete keyword deletes a property from an object:

delete personProp2.age;
// or
// delete personProp2["age"];
console.log(personProp2);

// The delete keyword deletes both the value of the property and the property itself.
// The delete operator is designed to be used on object properties. It has no effect on variables or functions.

// Nested Objects
// Values in an object can be another object:

myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

// You can access nested objects using the dot notation or the bracket notation:
myObj.cars.car2;
// or
myObj.cars["car2"];
myObj["cars"]["car2"];

// JavaScript Object Methods "this"
// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// In an object method, this refers to the object.

const somePerson = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// a simple this keyword method to return full name in an object

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.

// How to Use Object Destructuring in JavaScript
// Imagine you'd like to extract some properties of an object. In a pre-ES2015 environment, you'd need to write the following code:

var hero1 = {
  name: "Batman",
  realName: "Bruce Wayne",
};

var name1 = hero1.name;
var realName1 = hero1.realName;

console.log(name1); // => 'Batman',
console.log(realName1); // => 'Bruce Wayne'

// Extracting a property
// The syntax of object destructuring is pretty simple:

// const { identifier } = expression;
// const identifier = expression.identifier;

const hero3 = {
  namee: "Batman",
  realName: "Bruce Wayne",
};

const { namee } = hero3;

console.log(namee); // => 'Batman'

const hero2 = {
  name2: "Batman",
  realName2: "Bruce Wayne",
};

const { name2, realName2 } = hero2;

console.log(name2); // => 'Batman',
console.log(realName2); // => 'Bruce Wayne'

// Extracting multiple properties

const randomObject = {
  firstName: "Marcus",
  lastName: "Rashford",
  age: 26,
  city: "manchester",
};
const { city, age, lastName } = randomObject;
console.log(city, age, lastName);

// it's visible that object destructuring is handier because neither the property names nor the object variable is duplicated.

// Functions

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// Why Functions?
// With functions you can reuse code
// You can write code that can be used many times.
// You can use the same code with different arguments, to produce different results.

// Function to compute the product of p1 and p2...parameter 1, parameter 2
function myFunction(p1, p2) {
  return p1 * p2;
}

// Local Variables
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

// The () Operator
// The () operator invokes (calls) the function:

// convert pixels to rem
function pxToRem(px) {
  return px / 16;
}

let myPx = pxToRem(32);
console.log(myPx);

// Convert Fahrenheit to Celsius:

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);

// Types of functions
// Function Declaration
// Function Expression
// Arrow Function

// Function Declaration
// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

function myFunction(a, b) {
  return a * b;
}

// Function Expressions
// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable:

const xm = function (a, b) {
  return a * b;
};

// After a function expression has been stored in a variable, the variable can be used as a function:

const bx = function (a, b) {
  return a * b;
};
let bz = bx(4, 3);

// JavaScript functions can be used in expressions:

function myFunction(a, b) {
  return a * b;
}

let xi = myFunction(4, 3) * 2;

// Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.

// ES5
var xn = function (x, y) {
  return x * y;
};

// ES6
const xo = (x, y) => x * y;

const xp = (x, y) => {
  return x * y;
};

// Using const is safer than using var, because a function expression is always constant value.

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

// JavaScript Callbacks
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// Function Sequence
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

// This example will end up displaying "Goodbye":
function myFirst1() {
  console.log("Hello");
}

function mySecond1() {
  console.log("Goodbye");
}

myFirst1();
mySecond1();

//if you the myFirst function comes last then The above example will end up displaying "Hello":

// Sequence Control
// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.
// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

function myDisplayer1(some) {
  // document.getElementById("demo1").innerHTML = some;
}

function myCalculator1(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let sresult = myCalculator1(1, 5);
myDisplayer1(sresult);

// JavaScript Callbacks
// A callback is a function passed as an argument to another function.
// Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:

function myDisplayer(some) {
  // document.getElementById("demo2").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

const myCalcFunc = myCalculator(5, 7, myDisplayer);
console.log(myCalcFunc);

// In the example above, myDisplayer is a called a callback function.
// It is passed to myCalculator() as an argument.

// -----------------------------------------------------
// More Array Methods

// JavaScript Array map()

const numbers1 = [4, 9, 16, 25];
const newArr1 = numbers1.map(() => numbers1);
console.log(newArr1);

// JavaScript Array filter()

// Return an array of all values in ages[] that are 18 or over:

const ages = [32, 33, 16, 40];
const agesResult = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not change the original array.

// JavaScript Array includes()
const newfruits1 = ["Banana", "Orange", "Apple", "Mango"];
newfruits1.includes("Mango");

// Start the search at position:

const newfruits2 = ["Banana", "Orange", "Apple", "Mango"];
newfruits2.includes("Banana", 3);

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

// JavaScript Array find()
// Find the value of the first element with a value over 18:

const newAges = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}
function myFunction0() {
  document.getElementById("demo").innerHTML = newAges.find(checkAge);
  // console.log(newAges.find(checkAge))
}

// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

// JavaScript Array reduce()

// Subtract all numbers in an array:

const redNumbers = [200, 50, 25];

let redResult = redNumbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(redResult);

// Round all the numbers and display the sum:

const roundNumbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// ---------------------------------------------------->>>>>>>>>>>
